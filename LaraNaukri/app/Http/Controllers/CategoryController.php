<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Job;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB as FacadesDB;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * returns all categories.
     */
    public function all(Request $request)
    {
        //

        $categories = Category::all("name");

        $categoriesClean = [];

        foreach ($categories->values() as $value) {
            # code...
            $categoriesClean[] = $value;
        }

        return response()->json([
            "categories" => $categoriesClean
        ]);
    }

    public function topCategories()
    {
        $topCategories = Job::select('categories.id', 'categories.name', 'categories.image_path', FacadesDB::raw('COUNT(*) as jobs_count'))
            ->join('categories', 'categories.id', '=', 'jobs_listings.category_id')
            ->groupBy('categories.id', 'categories.name', 'categories.image_path')
            ->orderByDesc('jobs_count')
            ->get();

        return response()->json($topCategories);

    }

    public function index()
    {
        $AllCategories = Category::with("jobs")
            ->get()
            ->mapWithKeys(function ($category, $index) {
                return [
                    $index => [
                        "id" => $category->id,
                        "name" => $category->name,
                        "image_path" => $category->image_path,
                        "jobs_count" => count($category->jobs)
                    ]
                ];
            });

        return Inertia::render("all-categories", [
            "categories" => $AllCategories
        ]);

    }
}
