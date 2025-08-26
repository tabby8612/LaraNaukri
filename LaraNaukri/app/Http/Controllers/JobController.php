<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;
use Storage;

class JobController extends Controller
{
    //

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
}
