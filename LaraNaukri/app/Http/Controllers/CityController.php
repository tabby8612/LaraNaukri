<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CityController extends Controller
{
    //



    public function topCities()
    {
        $topCities = Job::select("city_id", DB::raw("COUNT(*) AS jobs_count"))
            ->with('city')
            ->groupBy("city_id")
            ->orderByDesc("jobs_count")
            ->get()
            ->mapWithKeys(function ($job, $index) {
                return [
                    $index => [
                        "id" => $job->city->id,
                        "name" => $job->city->name,
                        "image_path" => $job->city->image_path,
                        "jobs_count" => $job->jobs_count
                    ]
                ];
            });

        return response()->json($topCities, 200);
    }
}
