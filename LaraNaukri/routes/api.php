<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\IndustryController;
use App\Http\Controllers\JobController;
use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get("/all-categories", [CategoryController::class, "all"])->name("all.categories.api");

Route::get("/find-jobs/{text}", [JobController::class, "findJobs"])->name("find.jobs.api");

Route::get("top-companies", [CompanyController::class, "topCompanies"])->name("top.companies");

Route::get("top-industries", [IndustryController::class, "topIndustries"])->name("top.industries");