<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    //

    public function findJobs(Request $request) {
        

        $jobs = Job::where("title", "like", "%{$request->text}%")->get(["title", "id"]);
        

        return response()->json([
            "results" => $jobs
        ], 200);
    }
}
