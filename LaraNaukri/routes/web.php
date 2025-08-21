<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get("/search-jobs", function () {
    return Inertia::render("search-jobs");
})->name("search.jobs");

Route::get("/companies", function () {
    return Inertia::render("companies");
})->name("companies");

Route::get("/blog", function () {
    return Inertia::render("blog");
})->name("blog");

Route::get("/contact", function () {
    return Inertia::render("contact");
})->name("contact");

Route::get("/candidate-login", function () {
    return Inertia::render("candidate-login");
})->name("candidate.login");

Route::get("/candidate-register", function () {
    return Inertia::render("candidate-register");
})->name("candidate.register");

Route::get("/company-login", function () {
    return Inertia::render("company-login");
})->name("company.login");

Route::get("/company-register", function () {
    return Inertia::render("company-register");
})->name("company.register");

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
