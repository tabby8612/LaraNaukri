<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Job;
use DB;
use Barryvdh\Debugbar\Facades\Debugbar;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB as FacadesDB;
use Inertia\Inertia;
use Storage;

class CompanyController extends Controller
{
    //

    //---- API CALLS

    /**
     * 
     * api calls to retrieve top companies
     * @return \Illuminate\Http\JsonResponse
     */
    public function topCompanies()
    {
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


    public function show(Request $request)
    {
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

        return Inertia::render("company-view", [
            "companyData" => $company,
            "openJobs" => $openJobs
        ]);

    }

    //---- / API CALLS

    //---- WEB VIEW CALLS
    public function view()
    {


    }

}
