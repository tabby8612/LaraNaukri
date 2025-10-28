<?php

namespace App\Service;

use App\Jobs\GenerateResume;
use App\Models\Candidate;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class ResumeGenerationService {
    /**
     * Create a new class instance.
     */
    public function __construct(protected CandidateService $candidateService) {
        //
    }

    public function generateResumePDF() {
        $userID = Auth::id();

        $relations = [
            "city:id,name", "state:id,name", "country:id,name", "user:id,email", "experiences",
            "gender:id,name", "maritalStatus", "category:name,id", "industry:name,id", "careerLevel:name,id",
            "nationality:id,name", "skills.skill:id,name", "experiences.country", "experiences.city",
            "educations.country", "educations.city", "languages"
        ];

        $candidate = Candidate::query()->where('user_id', $userID)->with($relations)->first()->toArray();


        //-- Calculating Number of Experience Years
        $candidate["total_experience"] = $this->candidateService->getTotalYearsOfExperience($candidate['experiences']);

        //-- Calculating Age
        $candidate["age"] = round(Carbon::parse($candidate["date_of_birth"])->diffInYears(now()), 1);

        if (isset($candidate["phone"]) && isset($candidate["mobile"]) && isset($candidate["address"]) && isset($candidate["summary"])) {
            $html = view("resume", compact("candidate"))->render();

            GenerateResume::dispatch($html, $candidate['id']);

        }
    }
}
