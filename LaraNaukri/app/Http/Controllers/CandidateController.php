<?php

namespace App\Http\Controllers;

use App\Http\Requests\CandidateProfileRequest;
use App\Jobs\GenerateResume;
use App\Models\Application;
use App\Models\Candidate;
use App\Models\User;
use App\Service\CandidateService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class CandidateController extends Controller {
    //

    public function __construct(protected CandidateService $candidateService) {
    }

    public function featuredCandidate() {

        $featuredCandidates = Candidate::with("city")
            ->where("is_featured", "=", 1)
            ->get()
            ->mapWithKeys(function ($candidate, $index) {
                return [
                    $index => [
                        "id" => $candidate->id,
                        "name" => $candidate->name,
                        "image_path" => $candidate->image_path,
                        "profession" => $candidate->profession,
                        "city" => $candidate->city->name,
                        "career_level" => $candidate->career_level,
                        "is_featured" => $candidate->is_featured,
                    ]
                ];
            });

        return response()->json($featuredCandidates, 200);


    }

    public function fetchCandidate(User $user) {

        $candidate = $this->candidateService->fetchCandidate($user->id, ['user']);

        return response()->json($candidate);
    }

    public function dashboard() {

        $user_id = Auth::id();
        $relations = ["user:id,email", "applications", "applications.job.companies", "payments.package"];
        $relationsCount = ["companies", "resumes"];

        $candidate = $this->candidateService->fetchCandidate($user_id, $relations, $relationsCount);

        $candidate['active_package'] = $this->candidateService->getActivePackage($user_id, $candidate['payments']);

        return Inertia::render("candidate/dashboard", [
            "candidate" => $candidate
        ]);
    }

    public function getStatus() {
        $candidate = Auth::user()?->candidate;

        $status = Cache::remember("CandidateWorkStatus-{$candidate->id}", 60 * 60 * 24, function () use ($candidate) {

            return $candidate->open_to_work;
        });

        return response()->json(compact('status'));
    }

    public function updateStatus(Request $request) {
        $candidateID = Auth::user()?->candidate->id;
        $status = $request->status;

        DB::table("candidates")
            ->where("id", "=", $candidateID)
            ->update([
                "open_to_work" => $status
            ]);

        Cache::forget("CandidateWorkStatus-{$candidateID}");
    }

    public function show() {
        $user_id = Auth::id();

        $relations = ["user:id,email", "gender:id,name"];

        $candidate = $this->candidateService->fetchCandidate($user_id, $relations);

        return Inertia::render("candidate/edit-profile", [
            "candidate" => $candidate,
        ]);
    }

    public function update(CandidateProfileRequest $candidateProfileRequest) {
        $validated = $candidateProfileRequest->validated();

        $userID = Auth::id();

        $this->candidateService->updateCandidate($userID, $validated);

        return to_route("candidate.editProfile");
    }

    public function updateSummary(Request $request) {

        $validated = $request->validate([
            "summary" => ["required", "min:5"]
        ]);

        $this->candidateService->updateCandidate(Auth::id(), $validated);

        return to_route("candidate.editProfile");

    }

    public function downloadResume() {

        $userID = Auth::id();

        $relations = [
            "city:id,name", "state:id,name", "country:id,name", "user:id,email", "experiences",
            "gender:id,name", "maritalStatus", "category:name,id", "industry:name,id", "careerLevel:name,id",
            "nationality:id,name", "skills.skill:id,name", "experiences.country", "experiences.city",
            "educations.country", "educations.city", "languages"
        ];

        $candidate = $this->candidateService->fetchCandidate($userID, $relations);

        //-- Calculating Number of Experience Years
        $candidate["total_experience"] = $this->candidateService->getTotalYearsOfExperience($candidate['experiences']);

        //-- Calculating Age
        $candidate["age"] = round(Carbon::parse($candidate["date_of_birth"])->diffInYears(now()), 1);

        //-- Generating PDF through Browsershot Using Queue
        $html = view("resume", compact("candidate"))->render();

        Candidate::where("id", "=", $candidate['id'])->update([
            "resume_path" => null
        ]);

        GenerateResume::dispatch($html, $candidate['id']);

        return Inertia::render("candidate/download-resume", [
            "candidate" => $candidate
        ]);
    }

    public function viewResume() {

        $candidate = $this->candidateService->fetchCandidate(Auth::id(), get: ['id', 'resume_path']);

        if (isset($candidate['resume_path'])) {
            return response()->json([
                "status" => 'done',
                "resumePath" => $candidate['resume_path']
            ]);
        } else {
            return response()->json([
                "status" => "pending",
                "resumePath" => null
            ]);
        }
    }

    public function viewPublicProfile(User $user) {

        $relations = [
            "city:id,name", "state:id,name", "country:id,name", "user:id,email", "experiences",
            "gender:id,name", "maritalStatus", "category:name,id", "industry:name,id", "careerLevel:name,id",
            "nationality:id,name", "skills.skill:id,name", "skills.experience:id,name", "experiences.country", "experiences.city",
            "educations.country", "educations.city", "languages", "projects"
        ];

        $candidate = $this->candidateService->fetchCandidate($user->id, $relations);

        //-- Calculating Number of Experience Years
        $candidate["total_experience"] = $this->candidateService->getTotalYearsOfExperience($candidate['experiences']);

        //-- Calculating Age
        $candidate["age"] = round(Carbon::parse($candidate["date_of_birth"])->diffInYears(now()), 0);

        return Inertia::render('candidate/view-public-profile', compact('candidate'));
    }

    public function jobApplications() {
        $applications = Application::where("candidate_id", "=", Auth::user()->candidate->id)
            ->with(["job.companies"])
            ->get()
            ->toArray();

        return Inertia::render("candidate/job-applications", compact('applications'));
    }

    public function logout() {

        Auth::logout();

        Session::regenerateToken();

        return back();
    }

}
