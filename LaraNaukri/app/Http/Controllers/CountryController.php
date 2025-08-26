<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use function Pest\Laravel\json;

class CountryController extends Controller
{
    //

    public function topCountries()
    {

        $topCountries = DB::table("jobs_listings")
            ->select("countries.id", "countries.name", DB::raw("COUNT(*) AS jobs_count"))
            ->join("cities", "cities.id", "=", "jobs_listings.city_id")
            ->join("countries", "countries.id", "=", "cities.country_id")
            ->groupBy("countries.id", "countries.name")
            ->orderByDesc("jobs_count")
            ->get();



        return response()->json($topCountries, 200);
    }
}
