<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix("candidate")->group(function () {
    Route::get("dashboard", fn() => Inertia::render("candidate-dashboard"))->name("candidate.dashboard");
    Route::get("edit-profile", fn() => Inertia::render("candidate/edit-profile"))->name("candidate.editProfile");
});


