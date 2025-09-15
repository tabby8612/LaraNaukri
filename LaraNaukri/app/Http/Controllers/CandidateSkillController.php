<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\CandidateSkill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CandidateSkillController extends Controller {
    //
    public function store(Request $request) {
        //

        $request->validate([
            "skills_id" => ["required"],
            "years_id" => ["required"]
        ]);

        $candidateID = Auth::user()->candidate->id;






        return;
    }

}
