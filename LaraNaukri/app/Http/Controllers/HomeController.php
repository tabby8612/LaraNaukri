<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HomeController extends Controller {
    // 
    public function index() {
        $jobs = Job::with(["category", "companies", "city"])->latest()->get()->toArray();

        return Inertia::render("welcome", [
            "jobs" => $jobs
        ]);
    }

    public function fetch(Request $request) {
        $items = Cache::get($request->column, fn() => DB::table($request->column)->get(["id", "name"]));

        return response()->json($items->toArray());
    }
}
