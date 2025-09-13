<?php

namespace App\Http\Controllers;

use App\Http\Requests\EducationRequest;
use App\Models\Education;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use function Pest\Laravel\json;

class EducationController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index() {
        //
        $educations = Education::with("country:name,id", "state:name,id", "city:name,id")
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

        Education::create($validated);

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

        $education->update($validated);

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Education $education) {
        //
        $education->delete();
    }
}
