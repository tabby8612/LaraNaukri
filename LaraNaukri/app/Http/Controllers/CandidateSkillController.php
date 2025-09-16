<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\CandidateSkill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CandidateSkillController extends Controller {
    //

    /**
     * Display a listing of the resource.
     */
    public function index() {
        //
        $candidates = CandidateSkill::where("candidate_id", "=", Auth::user()->candidate->id)
            ->with(["skill:id,name", "experience:id,name", "candidate"])
            ->get()
            ->toArray();

        return response()->json($candidates);
    }



    public function store(Request $request) {
        //
        $request->validate([
            "skill_id" => ["required"],
            "experience_id" => ["required"]
        ]);

        $candidateID = Auth::user()->candidate->id;

        CandidateSkill::create([
            "skill_id" => $request->skill_id,
            "experience_id" => $request->experience_id,
            "candidate_id" => $candidateID
        ]);

        return;
    }

    public function update(Request $request, CandidateSkill $candidateSkill) {
        //
        $request->validate([
            "skill_id" => ["required"],
            "experience_id" => ["required"]
        ]);

        $candidateSkill->skill_id = $request->skill_id;
        $candidateSkill->experience_id = $request->experience_id;
        $candidateSkill->save();

        return;
    }

    public function delete(CandidateSkill $candidateSkill) {
        $candidateSkill->delete();

    }

}
