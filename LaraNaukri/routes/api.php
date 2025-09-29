<?php

use App\Http\Controllers\BlogCategoriesController;
use App\Http\Controllers\BlogpostController;
use App\Http\Controllers\CandidateController;
use App\Http\Controllers\CandidateSearchController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\IndustryController;
use App\Http\Controllers\JobController;
use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// ------------- Job Routes
Route::get("/all-jobs", [JobController::class, "all"])->name("all.jobs.api");
Route::get("/find-jobs/{text}", [JobController::class, "findJobs"])->name("find.jobs.api");
Route::get("latest-jobs", [JobController::class, "latestJobs"])->name("latest.jobs");

Route::get("related-jobs", [JobController::class, "relatedJobs"])->name("related.jobs.api");


// ------------- Companies API Routes
Route::get("top-companies", [CompanyController::class, "topCompanies"])->name("top.companies");
Route::get("top-industries", [IndustryController::class, "topIndustries"])->name("top.industries");
Route::get("filtered-companies", [CompanyController::class, "filterCompanies"])->name("filter.companies.api");

// ------------- Category/Functional Area API Routes
Route::get("/all-categories", [CategoryController::class, "all"])->name("all.categories.api");
Route::get("top-categories", [CategoryController::class, "topCategories"])->name("top.categories");

// ------------- Cities/States/Countries API Routes
Route::get("top-cities", [CityController::class, "topCities"])->name("top.cities");
Route::get("top-countries", [CountryController::class, "topCountries"])->name("top.countries");
Route::get("all-countries", [CountryController::class, "allCountries"])->name("all.countries.api");
// Route::get("related-cities", [CityController::class, "relatedCities"])->name("related.cities");
Route::get("related-states/{countryID}", [HomeController::class, "relatedStates"])->name("related.states");
Route::get("related-cities/{stateID}", [HomeController::class, "relatedCities"])->name("related.cities");


// ------------ Blog Posts/Blog Categories API Routes
Route::get("latest-blogposts", [BlogpostController::class, "latestBlogPosts"])->name("latest.blogposts");
Route::get("all-blogcategories", [BlogCategoriesController::class, "allBlogCategories"])->name("all.blogcategories.api");

// --------------- Candidates
Route::get("candidate/fetch/{user}", [CandidateController::class, "fetchCandidate"])->name('fetch.candidate');
Route::get("featured-candidates", [CandidateController::class, "featuredCandidate"])->name("featured.candidates");


// ------------ Others
Route::get("fetch/{column}", [HomeController::class, "fetch"])->name("fetch");




