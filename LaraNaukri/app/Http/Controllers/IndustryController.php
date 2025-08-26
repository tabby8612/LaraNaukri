<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Job;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB as FacadesDB;

class IndustryController extends Controller
{
    //

    public function topIndustries()
    {


        $topIndustries = Job::join("companies", "jobs_listings.company_id", "=", "companies.id")
            ->join("industries", "companies.industry_id", "=", "industries.id")
            ->select("industries.id", "industries.name", FacadesDB::raw("count(*) as jobs_count"))
            ->groupBy("industries.id", "industries.name")
            ->orderByDesc("jobs_count")
            ->get()
            ->mapWithKeys(function ($item, $index) {
                return [
                    $index => [
                        "name" => $item->name,
                        "id" => $item->id,
                        "jobs_count" => $item->jobs_count
                    ]
                ];
            });

        return response()->json([
            "results" => $topIndustries
        ], 200);


    }
}
