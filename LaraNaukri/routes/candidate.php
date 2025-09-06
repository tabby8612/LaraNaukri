<?php

use App\Http\Controllers\CandidateController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix("candidate")->name("candidate.")->middleware("IsCandidate")->group(function () {
    Route::get("dashboard", [CandidateController::class, "dashboard"])->name("dashboard");
    Route::get("edit-profile", [CandidateController::class, "show"])->name("editProfile");
    Route::get("build-resume", fn() => Inertia::render("candidate/build-resume"))->name("buildResume");
    Route::get("download-resume", fn() => Inertia::render("candidate/download-resume"))->name("downloadResume");
    Route::get("view-public-profile/{id}", fn() => Inertia::render("candidate/view-public-profile"))->name("viewPublicProfile");
    Route::get("my-job-application", fn() => Inertia::render("candidate/job-applications"))->name("jobApplications");
    Route::get("favorite-jobs", fn() => Inertia::render("candidate/favorite-jobs"))->name("favoriteJobs");
    Route::get("jobs-alert", fn() => Inertia::render("candidate/jobs-alert"))->name("jobsAlert");
    Route::get("payment-history", action: fn() => Inertia::render("candidate/candidate-payment-history"))->name("PaymentHistory");
    Route::get("my-messages", fn() => Inertia::render("candidate/my-messages"))->name("messages");
    Route::get("my-followings", fn() => Inertia::render("candidate/my-followings"))->name("followings");
    Route::get("logout", fn() => Inertia::render("candidate-dashboard"))->name("logout");

});


