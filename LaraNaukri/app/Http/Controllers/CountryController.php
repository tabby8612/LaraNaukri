<?php

namespace App\Http\Controllers;

use App\Models\Country;
use App\Models\Job;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

use function Pest\Laravel\json;

class CountryController extends Controller {
    //

    public function topCountries() {

        $topCountries = DB::table("jobs_listings")
            ->select("countries.id", "countries.name", DB::raw("COUNT(*) AS jobs_count"))
            ->join("cities", "cities.id", "=", "jobs_listings.city_id")
            ->join("countries", "countries.id", "=", "cities.country_id")
            ->groupBy("countries.id", "countries.name")
            ->orderByDesc("jobs_count")
            ->get();

        return response()->json($topCountries, 200);
    }

    /** uses Cache to get countries if it is not present.
     * @return JsonResponse
     */

    public function allCountries() {

        $countries = Cache::has("allCountries")
            ? Cache::get("allCountries")
            : Cache::remember("allCountries", 60 * 60 * 24, fn() => Country::all()->toArray());

        return response()->json($countries, 200);
    }
}
