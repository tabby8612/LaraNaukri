<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\Company;
use App\Models\Industry;
use App\Models\Job;
use App\Models\User;
use Barryvdh\Debugbar\Facades\Debugbar;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB as FacadesDB;
use Inertia\Inertia;
use Storage;

use function PHPUnit\Framework\arrayHasKey;

class CompanyController extends Controller {
    //

    //---- API CALLS

    /**
     * 
     * api calls to retrieve top companies
     * @return \Illuminate\Http\JsonResponse
     */
    public function topCompanies() {
        $topCompanies = Job::select('company_id', FacadesDB::raw('count(*) as open_jobs'))
            ->where('is_open', 1)
            ->groupBy('company_id')
            ->orderByDesc('open_jobs')
            ->with('companies:id,name,image_path,location,slug') // this is valid here ✅
            ->get()
            ->mapWithKeys(function ($job, $index) {
                return [
                    $index => [
                        "name" => $job->companies->name,
                        "id" => $job->companies->id,
                        "open_jobs" => $job->open_jobs,
                        "image_path" => $job->companies->image_path,
                        "location" => $job->companies->location,
                        "slug" => $job->companies->slug
                    ]
                ];
            });

        return response()->json([
            'data' => $topCompanies,
        ]);
    }


    public function show(Request $request) {
        $company = Company::with("industry")
            ->where("slug", "=", $request->slug)
            ->firstOrFail()
            ->toArray();

        $openJobs = Job::with("city", "category", "companies:id,name,image_path")
            ->where("company_id", "=", $company["id"])
            ->where("is_open", "=", 1)
            ->get()
            ->except(["companies.email", "companies.password"])
            ->toArray();

        /**
         * @var User
         */
        $user = Auth::user();
        $isFollower = false;

        if ($user?->isCandidate()) {
            /**
             * @var Candidate $candidate
             */
            $candidate = Auth::user()->candidate;

            $result = $candidate->companies()->find($company['id']);

            if (isset($result)) $isFollower = true;

        }

        return Inertia::render("company-view", [
            "companyData" => $company,
            "openJobs" => $openJobs,
            "isFollower" => $isFollower
        ]);
    }

    //---- WEB VIEW CALLS //


    public function index(Request $request) {
        $filters = $request->only(["name", "country", "city", "industries"]);

        $companiesQuery = Company::with("industry")->withCount("jobs");

        if (isset($filters['name'])) {
            $companiesQuery->where("name", "like", "%{$filters['name']}%");
        }

        if (isset($filters['country']) && isset($filters['city'])) {
            $companiesQuery->where("location", "like", "%{$filters['city']}, {$filters['country']}%");
        }

        if (isset($filters['country'])) {
            $companiesQuery->where("location", "like", "%{$filters['country']}%");
        }

        if (isset($filters['industries'])) {
            $industries = $filters['industries'];

            foreach ($industries as $key => $value) {
                $selectedIndustryID = Industry::where("name", "like", "%$value%")->first("id")->id;
                $companiesQuery->orwhere("industry_id", "=", $selectedIndustryID);
            }
        }

        $companies = $companiesQuery->get()->toArray();

        $industries = FacadesDB::table("companies")
            ->select("industries.id", "industries.name", FacadesDB::raw("COUNT(*) as companies_count"))
            ->join("industries", "industries.id", "=", "companies.industry_id")
            ->groupBy(["industries.id", "industries.name"])
            ->get()
            ->toArray();


        return Inertia::render("companies", [
            "companiesData" => count($companies) ? $companies : [],
            "industriesData" => count($industries) ? $industries : []
        ]);
    }

    public function dashboard() {
        dd("in dashboard");

        Inertia::render("employer/dashboard");
    }



}
