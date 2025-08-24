<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
     /**
     * returns all categories.
     */
    public function all(Request $request)
    {
        //
        
        $categories = Category::all("name");
        dd($categories);

        return json_encode($categories);
    }
}
