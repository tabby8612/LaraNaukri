<?php

namespace App\Http\Controllers;

use App\Jobs\GenerateResume;
use App\Models\Application;
use App\Models\Candidate;
use App\Models\Category;
use App\Models\City;
use App\Models\Country;
use App\Models\Industry;
use App\Models\Job;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\View\View;
use Inertia\Inertia;
use PhpParser\Node\Scalar\Float_;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Storage;
use Spatie\Browsershot\Browsershot;

class CandidateController extends Controller {
    //

    /**
     * fetches featured candidates from database
     * @return JsonResponse
     */

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

        $candidate = Candidate::where('id', '=', $user->candidate->id)->with('user')->first()->toArray();

        return response()->json($candidate);
    }

    public function dashboard() {
        $user_id = Auth::id();

        $candidate = Candidate::where("user_id", "=", $user_id)
            ->with("user:id,email")
            ->first()
            ->toArray();

        return Inertia::render("candidate-dashboard", [
            "candidate" => $candidate
        ]);
    }

    public function show() {
        $user_id = Auth::id();

        $candidate = Candidate::where("user_id", "=", $user_id)
            ->with(["user:id,email", "gender:id,name"])
            ->first()
            ->toArray();

        return Inertia::render("candidate/edit-profile", [
            "candidate" => $candidate,
        ]);
    }

    public function update(Request $request) {
        // dd($request->all());

        $candidateID = Auth::id();

        DB::transaction(function () use ($request, $candidateID) {
            $candidate = Candidate::where("user_id", "=", $candidateID);

            foreach ($request->all() as $key => $value) {
                if ($key == "email" && isset($value)) {
                    DB::table("users")->where("id", $candidateID)->update(["email" => $value]);
                }

                if ($key == "password" && isset($value)) {
                    when(isset($value), function () use ($value) {
                        DB::table("users")->where("id", Auth::id())->update([
                            "password" => Hash::make($value)
                        ]);
                    });
                }

                if ($key == "image_path" && $request->hasFile("image_path")) {
                    $image_path = $request->file("image_path")->store("candidates", "public");
                    $candidate->update([
                        $key => $image_path
                    ]);
                }
                if ($key == "cover_image_path" && $request->hasFile("cover_image_path")) {
                    $cover_image_path = $request->file("cover_image_path")->store("candidates", "public");
                    $candidate->update([
                        $key => $cover_image_path
                    ]);
                }

                if ($key != "email" && $key != "password" && $key != "image_path" && $key != "cover_image_path") {
                    $candidate->update([
                        $key => $value
                    ]);
                }
            }
        });

        Session::put("message", "User Updated Successfully");

        return to_route("candidate.editProfile");
    }

    public function languageAttach(Request $request) {
        $request->validate([
            "language_id" => ["required"],
            "language_level" => ["required", "in:Expert,Beginner,Intermediate"]
        ]);

        $candidate = Candidate::findOrFail(Auth::user()->candidate->id);

        $candidate->languages()->attach($request->language_id, [
            "language_level" => $request->language_level
        ]);

        return;






    }

    public function candidateLanguages() {

        $candidateID = Auth::user()->candidate->id;
        $CandidateLanguages = Candidate::where("candidates.id", "=", $candidateID)
            ->with(["languages:id,name"])
            ->first(["id", "first_name", "last_name"])
            ->toArray();



        return response()->json($CandidateLanguages["languages"]);
    }

    public function languageUpdate(Request $request, string $id) {


        $validated = $request->validate([
            "language_id" => ["required"],
            "language_level" => ["required", "in:Expert,Beginner,Intermediate"]
        ]);

        DB::table("candidate_language")
            ->where("id", "=", $id)
            ->where("candidate_id", "=", Auth::user()->candidate->id)
            ->update($validated);


        return;

    }

    public function languageDelete(Request $request, string $id) {
        DB::table("candidate_language")
            ->where("id", "=", $id)
            ->where("candidate_id", "=", Auth::user()->candidate->id)
            ->delete();

        return;

    }

    public function downloadResume() {

        $candidateID = Auth::user()->candidate->id;


        $candidate = Candidate::where("id", "=", $candidateID)
            ->with(["city:id,name", "state:id,name", "country:id,name", "user:id,email", "experiences"])
            ->with(["gender:id,name", "maritalStatus", "category:name,id", "industry:name,id", "careerLevel:name,id"])
            ->with(["nationality:id,name", "skills.skill:id,name", "experiences.country", "experiences.city"])
            ->with(["educations.country", "educations.city", "languages"])
            ->first()
            ->toArray();

        //-- Calculating Number of Experience Years
        $totalExperienceYears = 0.0;

        foreach ($candidate["experiences"] as $experience) {
            $startdate = Carbon::parse($experience["start_date"]);
            $enddate = Carbon::parse($experience["end_date"]);

            $differenceInDays = $startdate->diffInYears($enddate);

            $totalExperienceYears += $differenceInDays;
        }

        $candidate["total_experience"] = $totalExperienceYears;

        //-- Calculating Age
        $dateOfBirth = Carbon::parse($candidate["date_of_birth"]);
        $age = $dateOfBirth->diffInYears(now());
        $candidate["age"] = $age;

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

        $candidate = Candidate::where("id", "=", Auth::user()->candidate->id)
            ->get(['id', 'resume_path'])
            ->first()
            ->toArray();

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

        $candidate = $user->candidate;

        $candidate = Candidate::where("id", "=", $candidate->id)
            ->with(["city:id,name", "state:id,name", "country:id,name", "user:id,email", "experiences"])
            ->with(["gender:id,name", "maritalStatus", "category:name,id", "industry:name,id", "careerLevel:name,id"])
            ->with(["nationality:id,name", "skills.skill:id,name", "skills.experience:id,name", "experiences.country", "experiences.city"])
            ->with(["educations.country", "educations.city", "languages", "projects"])
            ->first()
            ->toArray();

        //-- Calculating Number of Experience Years
        $totalExperienceYears = 0.0;

        foreach ($candidate["experiences"] as $experience) {
            $startdate = Carbon::parse($experience["start_date"]);
            $enddate = Carbon::parse($experience["end_date"]);

            $differenceInDays = $startdate->diffInYears($enddate);

            $totalExperienceYears += $differenceInDays;
        }

        $candidate["total_experience"] = round($totalExperienceYears);

        //-- Calculating Age
        $dateOfBirth = Carbon::parse($candidate["date_of_birth"]);
        $age = $dateOfBirth->diffInYears(now());
        $candidate["age"] = round($age);


        return Inertia::render('candidate/view-public-profile', compact('candidate'));
    }

    public function jobApplications() {

        $applications = Application::where("candidate_id", "=", Auth::user()->candidate->id)
            ->with(["job.companies"])
            ->get()
            ->toArray();



        return Inertia::render("candidate/job-applications", compact('applications'));
    }

    public function toggleFavoriteJob(Job $job) {

        $candidate = Candidate::findOrFail(Auth::user()->candidate->id);

        $isAttach = $candidate->favoriteJobs()->where("job_id", $job->id)->exists();

        if ($isAttach) {
            $candidate->favoriteJobs()->detach($job->id);
            return back()->with("message", "Job removed from your favorite list");
        } else {
            $candidate->favoriteJobs()->attach($job->id);
            return back()->with("message", "Job added to your favorite list");
        }

    }

    public function showFavoriteJobs() {

        $candidate = Candidate::where("id", Auth::user()->candidate->id)
            ->with(['favoriteJobs', 'favoriteJobs.companies'])
            ->first()
            ->toArray();

        $favoriteJobs = $candidate['favorite_jobs'];



        return Inertia::render('candidate/favorite-jobs', compact('favoriteJobs'));
    }
}
