<?php

namespace App\Http\Controllers;

use App\Models\BlogCategories;
use App\Models\Blogpost;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class BlogCategoriesController extends Controller {
    //

    public function allBlogCategories() {
        $allCategories = Cache::get("allBlogCategories", function () {
            return BlogCategories::all()->toArray();
        });

        return response()->json([
            "allBlogCategories" => $allCategories
        ]);
    }

    public function show(Request $request) {
        $blogposts = Blogpost::with("blogcategory")
            ->where("blog_categories_id", "=", $request->id)
            ->get()
            ->toArray();

        return Inertia::render("blog", [
            "blogposts" => $blogposts
        ]);
    }
}
