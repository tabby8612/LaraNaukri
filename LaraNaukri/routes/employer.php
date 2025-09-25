<?php

use App\Http\Controllers\CompanyController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix("employer")->name("employer.")->middleware("IsEmployer")->group(function () {

    Route::get("dashboard", fn() => Inertia::render("employer/dashboard"))->name('dashboard');
    Route::get("editProfile", fn() => Inertia::render("employer/editProfile"))->name('editProfile');
    Route::get("viewPublicProfile/{id}", fn() => Inertia::render("employer/dashboard"))->name('viewPublicProfile');
    Route::get("postJob", fn() => Inertia::render("employer/dashboard"))->name('postJob');
    Route::get("manageJobs", fn() => Inertia::render("employer/dashboard"))->name('manageJobs');
    Route::get("packages", fn() => Inertia::render("employer/dashboard"))->name('packages');
    Route::get("paymentHistory", fn() => Inertia::render("employer/dashboard"))->name('paymentHistory');
    Route::get("unlockedUsers", fn() => Inertia::render("employer/unlockedUsers"))->name('unlockedUsers');
    Route::get("messages", fn() => Inertia::render("employer/messages"))->name('messages');
    Route::get("followings", fn() => Inertia::render("employer/followings"))->name('followings');
    Route::get("logout", fn() => Inertia::render("employer/dashboard"))->name('logout');


});


