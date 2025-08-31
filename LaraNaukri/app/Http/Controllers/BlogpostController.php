<?php

namespace App\Http\Controllers;

use App\Models\Blogpost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class BlogpostController extends Controller {

    // ------------- API CALLS
    public function latestBlogPosts() {
        $blogPosts = Blogpost::latest()
            ->with("blogcategory")
            ->get()
            ->mapWithKeys(function ($blogpost, $index) {
                $dt = $blogpost->created_at;

                return [
                    $index => [
                        "id" => $blogpost->id,
                        "title" => $blogpost->title,
                        "slug" => $blogpost->slug,
                        "featured_image_path" => $blogpost->featured_image_path,
                        "description" => $blogpost->description,
                        "category" => $blogpost->blogcategory->name,
                        "posted_at" => "{$dt->day}/{$dt->month}/{$dt->year}",
                    ]
                ];
            });

        return response()->json($blogPosts, 200);

    }

    public function index() {

        $blogs = Blogpost::with("blogcategory")->get()->toArray();

        return Inertia::render("blog", [
            "blogposts" => $blogs
        ]);

    }

    public function show(Request $request) {

        $blogPost = Blogpost::with("blogcategory")
            ->where("slug", "=", $request->slug)
            ->firstOrFail()
            ->toArray();

        return Inertia::render("blog-view", [
            "blogPost" => $blogPost
        ]);
    }
}

