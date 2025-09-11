<?php

use App\Http\Controllers\CandidateController;
use App\Http\Controllers\CandidateExperienceController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ResumeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix("candidate")->name("candidate.")->middleware("IsCandidate")->group(function () {
    Route::get("dashboard", [CandidateController::class, "dashboard"])->name("dashboard");
    Route::get("edit-profile", [CandidateController::class, "show"])->name("editProfile");
    Route::post("update-profile", [CandidateController::class, "update"])->name("updateProfile");


    //-- Resume Calls
    Route::get("build-resume", [ResumeController::class, "index"])->name("buildResume"); //shows listings of resumes
    Route::post("create-resume", [ResumeController::class, "store"])->name("storeResume");
    Route::delete("delete-resume/{id}", [ResumeController::class, "destroy"])->name("destroyResume");
    Route::post("update-resume/{id}", [ResumeController::class, "update"])->name("updateResume");

    //-- Project Calls
    Route::get("projects", [ProjectController::class, "index"])->name("projects"); //shows listings of projects
    Route::post("project-add", [ProjectController::class, "store"])->name("projectAdd");
    Route::put("project-update/{project}", [ProjectController::class, "update"])->name("projectUpdate");
    Route::delete("project-delete/{project}", [ProjectController::class, "destroy"])->name("projectDelete");

    //-- Experience Calls
    Route::get("experiences", [CandidateExperienceController::class, "index"])->name("experiences"); //returns json of candidate experiences
    Route::post("experience-add", [CandidateExperienceController::class, "store"])->name("experienceAdd");
    Route::put("experience-update/{candidateExperience}", [CandidateExperienceController::class, "update"])->name("experienceUpdate");
    Route::delete("experience-delete/{candidateExperience}", [CandidateExperienceController::class, "destroy"])->name("experienceDelete");


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


