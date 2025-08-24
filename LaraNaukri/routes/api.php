<?php

use App\Http\Controllers\CategoryController;
use App\Models\Category;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get("/api/all-categories", [CategoryController::class, "all"])->name("get-categories");