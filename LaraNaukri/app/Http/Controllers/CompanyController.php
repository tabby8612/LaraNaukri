<?php

namespace App\Http\Controllers;

use App\Models\Job;
use DB;
use Barryvdh\Debugbar\Facades\Debugbar;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB as FacadesDB;
use Storage;

class CompanyController extends Controller
{
    //

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
            ->with('companies:id,name,image_path,location') // this is valid here ✅
            ->get()
            ->mapWithKeys(function ($job, $index) {
                return [
                    $index => [
                        "name" => $job->companies->name,
                        "id" => $job->companies->id,
                        "open_jobs" => $job->open_jobs,
                        "image_path" => $job->companies->image_path,
                        "location" => $job->companies->location
                    ]
                ];
            });

        return response()->json([
            'data' => $topCompanies,
        ]);

    }

}
