<?php

namespace App\Http\Controllers;

use App\Models\Country;
use App\Models\Job;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Storage;
use Termwind\Components\Raw;

class JobController extends Controller
{
    //

    public function findJobs(Request $request)
    {

        $jobs = Job::where("title", "like", "%{$request->text}%")->get(["title", "id"]);

        return response()->json([
            "results" => $jobs
        ], 200);
    }

    public function latestJobs(Request $request)
    {
        // $latestJobs = Job::latest()->get();
        $latestJobs = Job::with("companies")
            ->where("is_open", "=", 1)
            ->latest()
            ->get()
            ->mapWithKeys(function ($job, $index) {
                $dt = $job->created_at;
                return [
                    $index => [
                        "JobID" => $job->id,
                        "title" => $job->title,
                        "type" => $job->type,
                        "location" => $job->location,
                        "postedDate" => "{$dt->day}/{$dt->month}/{$dt->year}",
                        "companyName" => $job->companies->name,
                        "companyID" => $job->companies->id,
                        "companyImageURL" => $job->companies->image_path,
                        "salaryFrom" => $job->salary_from,
                        "salaryTo" => $job->salary_to,
                        "featured" => $job->is_featured,
                    ]
                ];
            });

        return response()->json([
            "results" => $latestJobs
        ], 200);
    }

    public function searchJobs(Request $request)
    {
        $filters = $request->only(["title", "category_id"]);

        $query = Job::with(["city", "companies:id,name,image_path"]);

        foreach ($filters as $key => $value) {
            switch ($key) {
                case 'title':
                    $query->where($key, "like", "%$value%");
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

    public function all()
    {
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

    public function filterJobs(Request $request)
    {
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


    public function show(Request $request)
    {

        $job = Job::with("category", "companies:id,name,image_path", "city")
            ->where("slug", "=", $request->slug)
            ->firstOrFail()
            ->toArray();

        return Inertia::render("job-view", [
            "selectedJob" => $job
        ]);


    }


}
