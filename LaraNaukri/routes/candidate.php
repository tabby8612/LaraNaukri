<?php

use App\Http\Controllers\AIController;
use App\Http\Controllers\AlertController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\CandidateController;
use App\Http\Controllers\CandidateExperienceController;
use App\Http\Controllers\CandidateFavoritesController;
use App\Http\Controllers\CandidateLanguageController;
use App\Http\Controllers\CandidateMessageController;
use App\Http\Controllers\CandidatePaymentController;
use App\Http\Controllers\CandidateSkillController;
use App\Http\Controllers\DegreeTypeController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PaymentHistoryController;
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
    Route::post("update-profile-summary", [CandidateController::class, "updateSummary"])->name("updateProfileSummary");

    Route::get('status', [CandidateController::class, "getStatus"])->name("work.status");
    Route::put('update-status', [CandidateController::class, "updateStatus"])->name("update.status");


    //-- Resume Calls
    Route::get("build-resume", [ResumeController::class, "index"])->name("buildResume"); //shows listings of resumes
    Route::post("create-resume", [ResumeController::class, "store"])->name("storeResume");
    Route::delete("delete-resume/{id}", [ResumeController::class, "destroy"])->name("destroyResume");
    Route::post("update-resume/{id}", [ResumeController::class, "update"])->name("updateResume");

    //-- AI Resume Analyze
    Route::get('analyze-resume', [AIController::class, 'AIResumeAnalyzer'])->name('analyze.resume');
    Route::post('analyze-resume', [AIController::class, 'analyzeResume'])->name('analyze.resume');
    Route::get('analyze-resume-results', fn() => Inertia::render('candidate/analyze-resume-results'));

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
    Route::get("candidateLanguages", [CandidateLanguageController::class, "candidateLanguages"])->name("languages");
    Route::post("languages-add", [CandidateLanguageController::class, "languageAttach"])->name("languageAdd");
    Route::put("languages-update/{candidateLanguage}", [CandidateLanguageController::class, "languageUpdate"])->name("languageUpdate");
    Route::delete("languages-delete/{candidateLanguage}", [CandidateLanguageController::class, "languagedelete"])->name("languageDelete");


    //-- Resume Show
    Route::get("download-resume", [CandidateController::class, "downloadResume"])->name("downloadResume");
    Route::get("view-resume", [CandidateController::class, "viewResume"])->name("viewResume");


    //-- Public Profile
    Route::get("view-public-profile/{user}", [CandidateController::class, "viewPublicProfile"])->name("viewPublicProfile");

    //-- Applications
    Route::get("my-job-application", [CandidateController::class, "jobApplications"])->name("jobApplications");
    Route::post("application-store", [ApplicationController::class, 'store'])->name('applicationStore');

    // -- Favorite Jobs and Companies
    Route::get("favorite-jobs", [CandidateFavoritesController::class, 'favoriteJobs'])->name("favoriteJobs");
    Route::get("my-followings", [CandidateFavoritesController::class, 'favoriteCompanies'])->name("followings");
    Route::post("toggle-favorite-jobs/{job}", [CandidateFavoritesController::class, "toggleFavoriteJob"])->name("toggleFavoriteJob");
    Route::post("company-follow/{company}", [CandidateFavoritesController::class, 'togglefavoriteCompany'])->name("followCompany");

    // -- Job Alerts
    Route::get("jobs-alert", [AlertController::class, 'index'])->name("jobsAlert");
    Route::post("set-alert", [AlertController::class, 'store'])->name("setAlert");
    Route::delete("remove-alert/{alert}", [AlertController::class, 'delete'])->name("removeAlert");

    //-- Payments
    Route::get("candidate-payment-history", [PaymentHistoryController::class, 'candidatePaymentHistory'])->name("PaymentHistory");

    Route::post("stripe-checkout", [CandidatePaymentController::class, 'stripeCheckout'])->name("stripe.checkout");
    Route::post("paypal-checkout", [CandidatePaymentController::class, 'paypalCheckout'])->name("paypal.checkout");
    Route::get('paypal-success', [CandidatePaymentController::class, 'paypalSuccess'])->name('paypal.success');
    Route::get('paypal-cancel', [CandidatePaymentController::class, 'paypalCancel'])->name('paypal.cancel');

    //--- Logout
    Route::get("logout", [CandidateController::class, 'logout'])->name("logout");



    //--- Messages
    Route::get("my-messages", [CandidateMessageController::class, 'index'])->name("messages");
    Route::post("send-message", [CandidateMessageController::class, 'store'])->name('send.message');
    Route::get("load-messages/{candidate}", [CandidateMessageController::class, 'loadMessages'])->name('load.messages');

});


