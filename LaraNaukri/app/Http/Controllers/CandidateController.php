<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use Illuminate\Http\Request;

class CandidateController extends Controller
{
    //

    /**
     * fetches featured candidates from database
     * 
     */

    public function featuredCandidate()
    {

        $featuredCandidates = Candidate::with("city")
            ->where("is_featured", "=", 1)
            ->get()
            ->mapWithKeys(function ($candidate, $index) {
                return [
                    $index => [
                        "id" => $candidate->id,
                        "name" => $candidate->name,
                        "image_path" => $candidate->image_path,
                        "profession" => $candidate->profession,
                        "city" => $candidate->city->name,
                        "career_level" => $candidate->career_level,
                        "is_featured" => $candidate->is_featured,
                    ]
                ];
            });

        return response()->json($featuredCandidates, 200);


    }
}
