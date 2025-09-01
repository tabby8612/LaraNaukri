<?php

use App\Http\Controllers\BlogCategoriesController;
use App\Http\Controllers\BlogpostController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\JobController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, "index"])->name('home');


// ----------- Jobs Routes

Route::get("/search-jobs", [JobController::class, "searchJobs"])->name("search.jobs");

Route::get("/job/{slug}", [JobController::class, "show"])->name("job.view");



// ----------- Category/Functional-Area Routes

Route::get("/all-categories", [CategoryController::class, "index"])->name("all.categories");


// ----------- Companies Routes

Route::get("/companies", [CompanyController::class, "index"])->name("companies");

Route::get("/company-login", function () {
    return Inertia::render("company-login");
})->name("company.login");

Route::get("/company-register", function () {
    return Inertia::render("company-register");
})->name("company.register");

Route::get("/company/{slug}", [CompanyController::class, "show"])->name("company.view");

Route::get("/featured-companies", function () {
    return Inertia::render("featured-companies");
})->name("featured.companies");



// ----------- Blog Routes

Route::get("/blog", [BlogpostController::class, "index"])->name("blog");

Route::get("/blog/{slug}", [BlogpostController::class, "show"])->name("blog.view");

Route::get("/blog/category/{id}", [BlogCategoriesController::class, "show"])->name("blog.category.view");



// ----------- Login/Register Routes

Route::get("/candidate-login", function () {
    return Inertia::render("candidate-login");
})->name("candidate.login");

Route::get("/candidate-register", function () {
    return Inertia::render("candidate-register");
})->name("candidate.register");


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




Route::get("/job-seekers", function () {
    return Inertia::render("job-seekers");
})->name("job.seekers");




Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
require __DIR__ . '/candidate.php';
