<?php

namespace App\Http\Controllers;

use App\Http\Requests\EducationRequest;
use App\Models\Candidate;
use App\Models\Education;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;

use function Pest\Laravel\json;

class EducationController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index() {
        //
        $educations = Education::with("country:name,id", "state:name,id", "city:name,id", "subjects:name,id")
            ->where("candidate_id", Auth::user()->candidate->id)
            ->get()
            ->toArray();



        return response()->json($educations);
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
    public function store(EducationRequest $request) {
        //
        $validated = $request->validated();
        $validated["candidate_id"] = Auth::user()->candidate->id;

        //-- Attaching subject ids into pivot table
        $subjects = Arr::pull($validated, "subjects");
        $newEducation = Education::create($validated);


        $subjectIds = collect($subjects)->pluck("id");
        $newEducation->subjects()->attach($subjectIds);


        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Education $education) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Education $education) {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EducationRequest $request, Education $education) {
        //

        $validated = $request->validated();

        // subject is not a column in educations table so we need to pull it out 
        // after pulling out subjects we add/remove ids in pivot table using sync method.
        $subjects = Arr::pull($validated, "subjects");
        $subjectsIDs = collect($subjects)->pluck("id");
        $education->subjects()->sync($subjectsIDs);

        $education->update($validated);

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Education $education) {
        //
        $subjectIds = $education->subjects->pluck("id");
        $education->subjects()->detach($subjectIds);

        $education->delete();
    }
}
