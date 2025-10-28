<?php

use App\Http\Controllers\AIController;
use App\Http\Controllers\Auth\SocialLoginController;
use App\Http\Controllers\BlogCategoriesController;
use App\Http\Controllers\BlogpostController;
use App\Http\Controllers\CandidateSearchController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, "index"])->name('home');


// ----------- Jobs Routes

Route::get("search-jobs", [JobController::class, "searchJobs"])->name("search.jobs");
Route::post("search-jobs", [JobController::class, "filterJobs"])->name("filter.jobs");


Route::get("/job/{slug}", [JobController::class, "show"])->name("job.view");


// ----------- Candidate Routes
Route::get("/search-talent", [CandidateSearchController::class, 'index'])->name("search.talent");
Route::post("/search-talent", [CandidateSearchController::class, 'searchTalent'])->name("get.search.talent");
Route::get("/filter-talent", [CandidateSearchController::class, 'filterTalent'])->name("filter.talent");

Route::get("/job-seekers", [CandidateSearchController::class, 'index'])->name("job.seekers");

// ----------- Category/Functional-Area Routes

Route::get("/all-categories", [CategoryController::class, "index"])->name("all.categories");


// ----------- Companies Routes

Route::get("/companies", [CompanyController::class, "index"])->name("companies");

Route::get("/company/{slug}", [CompanyController::class, "show"])->name("company.view");


Route::get("/featured-companies", function () {
    return Inertia::render("featured-companies");
})->name("featured.companies");



// ----------- Blog Routes

Route::get("/blog", [BlogpostController::class, "index"])->name("blog");

Route::get("/blog/{slug}", [BlogpostController::class, "show"])->name("blog.view");

Route::get("/blog/category/{id}", [BlogCategoriesController::class, "show"])->name("blog.category.view");



// ----------- Login/Register Routes

Route::get("/candidate-login", fn() => Inertia::render("candidate-login"))->name("candidate.login");
Route::get("/candidate-register", fn() => Inertia::render("candidate-register"))->name("candidate.register");
Route::post("/candidate-verify", [UserController::class, "verify"])->name("candidate.verify");
Route::post("/candidate-register", [UserController::class, "storeCandidate"])->name("candidate.store");

Route::get("/company-login", fn() => Inertia::render("employer/company-login"))->name("company.login");
Route::get("/company-register", fn() => Inertia::render("employer/company-register"))->name("company.register");
Route::post("/company-register", [UserController::class, "storeEmployer"])->name("employer.register");
Route::post("/company-login", [UserController::class, "verifyEmployer"])->name("employer.login");



//------------- Payment Routes
Route::post('/stripe/webhook', [PaymentController::class, 'webhook'])->name('stripe.webhook');


// ----------- Other Pages Routes

Route::get("/contact", function () {
    return Inertia::render("contact");
})->name("contact");

Route::get("/email-to-friend/{slug}", function () {
    return Inertia::render("email-to-friend");
})->name("email.friend");

Route::get("/report-abuse/{slug}", function () {
    return Inertia::render("report-abuse");
})->name("report.abuse");

Route::get('get-logo-favicon', [HomeController::class, 'getLogoFavicon'])->name('get.logo.favicon');


//-- Broadcast Routes
Broadcast::routes();


//--- Social Login Routes
Route::get("{role}/auth/{driver}", [SocialLoginController::class, 'redirectToSocial'])->name('redirect.social');
Route::get('auth/google/callback', [SocialLoginController::class, 'handleGoogleCallback']);
Route::get('auth/github/callback', [SocialLoginController::class, 'handleGithubCallback']);


//--- AI Routes
Route::get('/generate-job-description', [AIController::class, 'generateJobDescription'])->name('AI.Job.Description');





Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});




// Route::get('/auth/redirect', fn() => Socialite::driver('google')->redirect())->name('google.register');
// Route::get('/auth/callback', function () {
//     $user = Socialite::driver('google')->user();
//     dd($user);
// });

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
require __DIR__ . '/candidate.php';
require __DIR__ . '/employer.php';
