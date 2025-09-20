<?php

use App\Http\Controllers\AlertController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\CandidateController;
use App\Http\Controllers\CandidateExperienceController;
use App\Http\Controllers\CandidateSkillController;
use App\Http\Controllers\DegreeTypeController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ResumeController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\SubjectController;
use App\Models\Candidate;
use App\Models\CandidateSkill;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use function Pest\Laravel\withoutMiddleware;

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

    //-- Education Calls
    Route::get("degreeTypes/{degreeLevelID}", [DegreeTypeController::class, "relatedDegreeTypes"])->name("degreeTypes");
    Route::get("subjects", [SubjectController::class, 'index'])->name("subjects");
    Route::get("educations", [EducationController::class, "index"])->name("educations");
    Route::post("education-add", [EducationController::class, "store"])->name("educationAdd");
    Route::put("education-update/{education}", [EducationController::class, "update"])->name("educationUpdate");
    Route::delete("education-delete/{education}", [EducationController::class, 'destroy'])->name("educationDelete");

    //-- Skills Calls
    Route::get("candidateSkills", [CandidateSkillController::class, "index"])->name("skills");
    Route::post("skills-add", [CandidateSkillController::class, "store"])->name("skillAdd");
    Route::put("skills-update/{candidateSkill}", [CandidateSkillController::class, "update"])->name("skillUpdate");
    Route::delete("skills-delete/{candidateSkill}", [CandidateSkillController::class, "delete"])->name("skillDelete");

    //-- Languages Calls
    Route::get("candidateLanguages", [CandidateController::class, "candidateLanguages"])->name("languages");
    Route::post("languages-add", [CandidateController::class, "languageAttach"])->name("languageAdd");
    Route::put("languages-update/{candidateLanguage}", [CandidateController::class, "languageUpdate"])->name("languageUpdate");
    Route::delete("languages-delete/{candidateLanguage}", [CandidateController::class, "languagedelete"])->name("languageDelete");


    //-- Resume Show
    Route::get("download-resume", [CandidateController::class, "downloadResume"])->name("downloadResume");
    Route::get("view-resume", [CandidateController::class, "viewResume"])->name("viewResume");


    //-- Public Profile
    Route::get("view-public-profile/{user}", [CandidateController::class, "viewPublicProfile"])->name("viewPublicProfile")->withoutMiddleware('IsCandidate');


    //-- Applications
    Route::get("my-job-application", [CandidateController::class, "jobApplications"])->name("jobApplications");
    Route::post("application-store", [ApplicationController::class, 'store'])->name('applicationStore');

    // -- Favorite Jobs
    Route::get("favorite-jobs", [CandidateController::class, 'showFavoriteJobs'])->name("favoriteJobs");
    Route::post("toggle-favorite-jobs/{job}", [CandidateController::class, "toggleFavoriteJob"])->name("toggleFavoriteJob");

    // -- Job Alerts
    Route::get("jobs-alert", [AlertController::class, 'index'])->name("jobsAlert");
    Route::post("set-alert", [AlertController::class, 'store'])->name("setAlert");
    Route::delete("remove-alert/{alert}", [AlertController::class, 'delete'])->name("removeAlert");

    //-- Payments
    Route::get("payment-history", [PaymentController::class, 'index'])->name("PaymentHistory");

    // -- Candidate-Company Relation
    Route::get("my-followings", [CandidateController::class, 'followingCompanies'])->name("followings");
    Route::post("company-follow/{company}", [CandidateController::class, 'followCompany'])->name("followCompany");

    //--- Logout
    Route::get("logout", [CandidateController::class, 'logout'])->name("logout");

    Route::get("my-messages", fn() => Inertia::render("candidate/my-messages"))->name("messages");

});


