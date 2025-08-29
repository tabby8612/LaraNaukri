<?php

use App\Http\Controllers\BlogpostController;
use App\Http\Controllers\CandidateController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\IndustryController;
use App\Http\Controllers\JobController;
use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get("/all-categories", [CategoryController::class, "all"])->name("all.categories.api");

Route::get("/all-jobs", [JobController::class, "all"])->name("all.jobs.api");

Route::get("/find-jobs/{text}", [JobController::class, "findJobs"])->name("find.jobs.api");

Route::get("top-companies", [CompanyController::class, "topCompanies"])->name("top.companies");

Route::get("top-industries", [IndustryController::class, "topIndustries"])->name("top.industries");

Route::get("latest-jobs", [JobController::class, "latestJobs"])->name("latest.jobs");

Route::get("top-categories", [CategoryController::class, "topCategories"])->name("top.categories");

Route::get("top-cities", [CityController::class, "topCities"])->name("top.cities");

Route::get("top-countries", [CountryController::class, "topCountries"])->name("top.countries");

Route::get("featured-candidates", [CandidateController::class, "featuredCandidate"])->name("featured.candidates");

Route::get("latest-blogposts", [BlogpostController::class, "latestBlogPosts"])->name("latest.blogposts");

Route::post("filter-jobs", [JobController::class, "filterJobs"])->name("filter.jobs");

Route::get("related-jobs", [JobController::class, "relatedJobs"])->name("related.jobs.api");