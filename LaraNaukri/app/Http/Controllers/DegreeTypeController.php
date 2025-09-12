<?php

namespace App\Http\Controllers;

use App\Models\DegreeType;
use Illuminate\Http\Request;

class DegreeTypeController extends Controller {
    //
    public function relatedDegreeTypes(string $id) {
        $degreeTypes = DegreeType::where("degree_level_id", $id)->get()->toArray();

        return response()->json($degreeTypes);
    }
}
