<?php

use App\Http\Controllers\CompanyController;
use App\Http\Controllers\JobController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix("employer")->name("employer.")->middleware("IsEmployer")->group(function () {

    Route::get("dashboard", [CompanyController::class, 'dashboard'])->name('dashboard');
    Route::get("edit-profile", [CompanyController::class, 'showEditPage'])->name('editProfile');
    Route::post("edit-profile", [CompanyController::class, 'store'])->name('store');


    Route::get("post-job", [JobController::class, 'create'])->name('postJob');
    Route::post("post-job", [JobController::class, 'store'])->name('postJob');


    Route::get("manage-jobs", [CompanyController::class, 'manageJobs'])->name('manageJobs');
    Route::get("list-applied-users/{id}", fn() => Inertia::render("employer/listAppliedUsers"))->name('listAppliedUsers');
    Route::get("edit-job/{id}", fn() => Inertia::render("employer/postJob"))->name('editJob');
    Route::get("delete-job/{id}", fn() => Inertia::render("employer/postJob"))->name('deleteJob');
    Route::get("company-packages", fn() => Inertia::render("employer/companyPackages"))->name('packages');
    Route::get("payment-history", fn() => Inertia::render("employer/paymentHistory"))->name('paymentHistory');
    Route::get("unlocked-users", fn() => Inertia::render("employer/unlockedUsers"))->name('unlockedUsers');
    Route::get("messages", fn() => Inertia::render("employer/messages"))->name('messages');
    Route::get("followings", fn() => Inertia::render("employer/followings"))->name('followings');

    Route::get("logout", fn() => Inertia::render("employer/dashboard"))->name('logout');


});


