<?php

namespace App\Http\Controllers;

use App\Models\Blogpost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class BlogpostController extends Controller
{
    //

    public function latestBlogPosts()
    {
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

        /**
         * If you plan to implement cache then use below code
         */
        // $blogPosts = Cache::rememberForever("blogPosts", function () {
        //     return Blogpost::latest()
        //         ->with("blogcategory")
        //         ->get()
        //         ->mapWithKeys(function ($blogpost, $index) {
        //             $dt = $blogpost->created_at;

        //             return [
        //                 $index => [
        //                     "id" => $blogpost->id,
        //                     "title" => $blogpost->title,
        //                     "slug" => $blogpost->slug,
        //                     "featured_image_path" => $blogpost->featured_image_path,
        //                     "description" => $blogpost->description,
        //                     "category" => $blogpost->blogcategory->name,
        //                     "posted_at" => "{$dt->day}/{$dt->month}/{$dt->year}",
        //                 ]
        //             ];
        //         });
        // });

        return response()->json($blogPosts, 200);

    }
}
