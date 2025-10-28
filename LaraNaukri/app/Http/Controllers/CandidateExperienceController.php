<?php

namespace App\Http\Controllers;

use App\Http\Requests\CandidateExperienceRequest;
use App\Models\CandidateExperience;
use App\Service\ResumeGenerationService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CandidateExperienceController extends Controller {

    public function __construct(protected ResumeGenerationService $resumeGenerationService) {

    }

    /**
     * Display a listing of the resource.
     */
    public function index() {
        //
        $candidateID = Auth::user()->candidate->id;

        $experiences = CandidateExperience::where("candidate_id", $candidateID)
            ->with(["country:name,id", "state:name,id", "city:name,id"])
            ->get()
            ->toArray();

        return response()->json($experiences);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CandidateExperienceRequest $request) {

        $validated = $request->validated(); // Validates fields as provided in CandidateExpierence Request Class

        $candidateID = Auth::user()->candidate->id;

        $candidateExperience = new CandidateExperience();
        $candidateExperience->candidate_id = $candidateID;
        $candidateExperience->title = $validated["title"];
        $candidateExperience->company = $validated["company"];
        $candidateExperience->country_id = $validated["country_id"];
        $candidateExperience->state_id = $validated["state_id"];
        $candidateExperience->city_id = $validated["city_id"];
        $candidateExperience->start_date = $validated["start_date"];
        $candidateExperience->end_date = $validated["end_date"];
        $candidateExperience->is_working = $validated["is_working"];
        $candidateExperience->description = $validated["description"];
        $candidateExperience->save();

        //-- Generating PDF through Browsershot Using Queue
        $this->resumeGenerationService->generateResumePDF();

        return;

    }

    /**
     * Display the specified resource.
     */
    public function show(CandidateExperience $candidateExperience) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CandidateExperience $candidateExperience) {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CandidateExperienceRequest $request, CandidateExperience $candidateExperience) {
        //
        $validated = $request->validated();

        $candidateID = Auth::user()->candidate->id;

        $candidateExperience->candidate_id = $candidateID;
        $candidateExperience->title = $validated["title"];
        $candidateExperience->company = $validated["company"];
        $candidateExperience->country_id = $validated["country_id"];
        $candidateExperience->state_id = $validated["state_id"];
        $candidateExperience->city_id = $validated["city_id"];
        $candidateExperience->start_date = $validated["start_date"];
        $candidateExperience->end_date = $validated["end_date"];
        $candidateExperience->is_working = $validated["is_working"];
        $candidateExperience->description = $validated["description"];
        $candidateExperience->save();

        //-- Generating PDF through Browsershot Using Queue
        $this->resumeGenerationService->generateResumePDF();

        return;

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CandidateExperience $candidateExperience) {
        //
        $candidateExperience->delete();

        //-- Generating PDF through Browsershot Using Queue
        $this->resumeGenerationService->generateResumePDF();
    }
}
