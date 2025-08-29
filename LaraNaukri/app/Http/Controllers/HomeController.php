<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    // 
    public function index()
    {
        $jobs = Job::with(["category", "companies", "city"])->latest()->get()->toArray();

        return Inertia::render("welcome", [
            "jobs" => $jobs
        ]);
    }
}
