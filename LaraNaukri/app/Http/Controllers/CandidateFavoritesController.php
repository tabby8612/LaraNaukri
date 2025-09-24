<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\Company;
use App\Models\Job;
use App\Service\CandidateService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CandidateFavoritesController extends Controller {
    //
    public function __construct(protected CandidateService $candidateService) {
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

    public function favoriteJobs() {

        $candidate = $this->candidateService->fetchCandidate(Auth::id(), ['favoriteJobs', 'favoriteJobs.companies']);

        $favoriteJobs = $candidate['favorite_jobs'];

        return Inertia::render('candidate/favorite-jobs', compact('favoriteJobs'));
    }

    public function favoriteCompanies() {

        $candidate = $this->candidateService->fetchCandidate(Auth::id(), ['companies', 'companies.industry', 'companies.jobs']);

        return Inertia::render("candidate/my-followings", [
            "companies" => $candidate['companies']
        ]);
    }

    public function togglefavoriteCompany(Company $company) {

        /**
         * @var Candidate $candidate
         */
        $candidate = Auth::user()->candidate;

        $candidate->companies()->toggle($company->id);

        return back();
    }
}
