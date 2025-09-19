<?php

namespace App\Http\Controllers;

use App\Models\Application;
use App\Models\Candidate;
use App\Models\Category;
use App\Models\Country;
use App\Models\Job;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Storage;
use Termwind\Components\Raw;

class JobController extends Controller {
    // ------------------ <API CALLS> -----------------------

    public function findJobs(Request $request) {

        $jobs = Job::where("title", "like", "%{$request->text}%")->get(["title", "id"]);

        return response()->json([
            "results" => $jobs
        ], 200);
    }

    public function latestJobs(Request $request) {
        // $latestJobs = Job::latest()->get();
        $latestJobs = Job::with("companies")
            ->where("is_open", "=", 1)
            ->latest()
            ->get();



        return response()->json([
            "results" => $latestJobs
        ], 200);
    }

    public function searchJobs(Request $request) {

        $filters = $request->only(["title", "category", "industry_id", "is_featured", "city_id", "country_id", "company_id"]);

        $query = Job::with(["city", "companies:id,name,image_path,slug"]);


        if ($request->title) {
            $query->where("title", "like", "%$request->title%");
        }

        if ($request->category) {
            $categoryID = Category::where("name", "=", $request->category)->firstOrFail()->id;
            $query->where("category_id", "=", $categoryID);
        }

        if ($request->industry_id) {
            $query->join("companies", "jobs_listings.company_id", "=", "companies.id")
                ->join("industries", "companies.industry_id", "=", "industries.id")
                ->where("industries.id", "=", $request->industry_id);
        }

        if ($request->is_featured) {
            $query->where("is_featured", "=", $request->is_featured);
        }

        if ($request->city_id) {
            $query->where("city_id", "=", $request->city_id);
        }

        if ($request->country_id) {
            $query->join("cities", "cities.id", "=", "jobs_listings.city_id")
                ->join("countries", "countries.id", "=", "cities.country_id")
                ->where("country_id", "=", $request->country_id);
        }

        if ($request->company_id) {
            $query->where("company_id", "=", $request->company_id);
        }


        $data = $query->get()->toArray();

        return Inertia::render(
            "search-jobs",
            [
                "filteredJobs" => count($data) ? $data : []
            ]
        );
    }

    public function all() {
        $jobs = Job::with(["companies", "category", "city"])
            ->get()
            ->mapWithKeys(function ($job, $index) {
                return [
                    $index => [
                        "title" => $job->title,
                        "type" => $job->type,
                        "shift" => $job->shift,
                        "career_level" => $job->career_level,
                        "gender" => $job->gender,
                        "degree" => $job->degree,
                        "company" => $job->companies->name,
                        "category" => $job->category->name,
                        "city" => $job->city->name,
                        "country" => $job->city->country->name,
                    ]
                ];
            });

        return response()->json($jobs);
    }

    public function filterJobs(Request $request) {
        $filters = $request->all();
        $query = Job::with(["city", "companies:id,name,image_path"]);

        foreach ($filters as $key => $value) {
            switch ($key) {
                case 'country':
                    $query->join("cities", "cities.id", "=", "jobs_listings.city_id")
                        ->join("countries", 'countries.id', '=', 'cities.country_id')
                        ->where('countries.name', "=", $value);
                    break;
                case 'city':
                    $query->join("cities", "cities.id", "=", "jobs_listings.city_id")
                        ->where('cities.name', "=", $value);
                    break;
                case 'category':
                    $query->join("categories", "categories.id", "=", "jobs_listings.category_id")
                        ->where('categories.name', "=", $value);
                    break;
                case 'company':
                    $query->join("companies", "companies.id", "=", "jobs_listings.company_id")
                        ->where('companies.name', "=", $value);
                    break;
                default:
                    $query->where($key, "=", $value);
                    break;
            }

        }

        $data = $query->get()->toArray();


        return Inertia::render(
            "search-jobs",
            [
                "filteredJobs" => count($data) ? $data : []
            ]
        );

    }

    public function relatedJobs(Request $request) {

        $relatedJobs = Job::with("city", "companies:name,id,image_path,slug")
            ->where("category_id", "=", $request->categoryID)->get()->toArray();


        return response()->json([
            "results" => count($relatedJobs) ? $relatedJobs : []
        ], 200);


    }

    // ------------------ </API CALLS> -----------------------


    // ------------------ <WEB CALLS> -----------------------

    public function show(Request $request) {

        $job = Job::with("category", "companies:id,name,image_path,slug", "city")
            ->where("slug", "=", $request->slug)
            ->firstOrFail()
            ->toArray();

        $candidate = null;
        $alreadyApplied = false;
        $isFavorite = false;

        if (Auth::user()) {
            $candidate = Candidate::where('id', '=', Auth::user()->candidate->id)
                ->with('user')
                ->first();

            $alreadyApplied = Application::where('candidate_id', '=', $candidate->id)
                ->where('job_id', '=', $job['id'])
                ->exists();

            $isFavorite = DB::table("candidate_job_favorite")
                ->where("candidate_id", $candidate->id)
                ->where('job_id', $job['id'])
                ->exists();
        }


        return Inertia::render("job-view", [
            "selectedJob" => $job,
            "candidate" => $candidate,
            "alreadyApplied" => $alreadyApplied,
            "isFavorite" => $isFavorite
        ]);


    }


    // ------------------ </WEB CALLS> -----------------------

}
