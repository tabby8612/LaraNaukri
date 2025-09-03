<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix("candidate")->name("candidate.")->group(function () {
    Route::get("dashboard", fn() => Inertia::render("candidate-dashboard"))->name("dashboard");
    Route::get("edit-profile", fn() => Inertia::render("candidate/edit-profile"))->name("editProfile");
    Route::get("build-resume", fn() => Inertia::render("candidate/build-resume"))->name("buildResume");

});


