<?php

namespace App\Http\Controllers;

use App\ApplicationService;
use App\Enums\CurrencyEnums;
use App\Enums\JobShift;
use App\Enums\JobType;
use App\Enums\SalaryPeriod;
use App\Http\Requests\JobRequest;
use App\JobService;
use App\Models\Application;
use App\Models\Job;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;
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

        return Inertia::render("employer/listAppliedUsers", compact("groupApplications", "selectedJob"));
    }

    public function updateApplicationStatus(Application $application, Request $request) {
        $newStatus = $request->only('newstatus');

        $this->applicationService->updateApplicationStatus($application->id, $newStatus['newstatus']);
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
    public function edit(Job $job) {

        $job = $this->jobService->getJob($job?->id, ["skills"]);
        $currencies = $this->jobService->getEnumValues(CurrencyEnums::class);
        $salaryPeriods = $this->jobService->getEnumValues(SalaryPeriod::class);
        $jobTypes = $this->jobService->getEnumValues(JobType::class);
        $jobShifts = $this->jobService->getEnumValues(JobShift::class);

        return Inertia::render("employer/postJob", [
            "currencies" => $currencies,
            "salaryPeriods" => $salaryPeriods,
            "jobTypes" => $jobTypes,
            "jobShifts" => $jobShifts,
            "job" => $job,
            "type" => "edit"
        ]);


    }

    /**
     * Update the specified resource in storage.
     */
    public function update(JobRequest $jobRequest, string $id) {

        $validated = $jobRequest->validated();

        $this->jobService->updateJob($id, $validated);

        return back()->with("message", "Updated Successfully");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id) {
        //
    }
}
