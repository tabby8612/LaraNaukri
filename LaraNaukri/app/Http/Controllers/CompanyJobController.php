<?php

namespace App\Http\Controllers;

use App\ApplicationService;
use App\JobService;
use App\Models\Job;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompanyJobController extends Controller {

    public function __construct(protected JobService $jobService, protected ApplicationService $applicationService) {
    }

    public function kanbanBoard(Job $job) {
        $relations = ["applications", "applications.candidate", "applications.candidate.country"];

        $selectedJob = $this->jobService->getJob($job->id, $relations);

        // dd($selectedJob);

        $groupApplications = isset($selectedJob['applications'])
            ? $this->applicationService->groupApplicationsByStatus($selectedJob['applications'])
            : [];

        return Inertia::render("employer/listAppliedUsers", compact("groupApplications"));
    }
    /**
     * Display a listing of the resource.
     */
    public function index() {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id) {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id) {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id) {
        //
    }
}
