<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\Resume;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ResumeController extends Controller {
    /**
     * Display a listing of the resource.
     */

    public function index() {
        //
        $candidateID = Auth::user()->candidate->id;

        $resumes = Resume::where("candidate_id", $candidateID)->get()->toArray();

        return Inertia::render("candidate/build-resume", ["resumes" => $resumes]);
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
    public function store(Request $request) {
        //        
        // dd($request->all());

        $request->validate([
            "title" => ["required", "string", "min:5"],
            "resume" => ["required", "file", "mimes:pdf"],
            "is_default" => ["required"]
        ]);

        $candidateID = Candidate::where("user_id", Auth::id())->first()->id;

        if ($request->is_default == "1") {
            $this->resetDefault($candidateID); // makes all previous CVs to non-default
        }

        $filePath = $request->file("resume")->store("resumes", "public");

        $resume = new Resume();
        $resume->candidate_id = $candidateID;
        $resume->title = $request->title;
        $resume->is_default = $request->is_default;
        $resume->cv_path = $filePath;

        return $resume->save() ? to_route("candidate.buildResume") : back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Resume $resume) {
        //
    }

    /**
     * Make All CVs Not Default
     */
    private function resetDefault(string $candidateID) {
        //
        $resumes = Resume::where("candidate_id", $candidateID)->get();

        foreach ($resumes as $key => $item) {
            $item->is_default = 0;
            $item->save();
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id) {
        //   
        // dump($request->all());
        // dd($id);

        $request->validate([
            "title" => ["required", "string", "min:5"],
            "resume" => ["required", "file", "mimes:pdf"],
            "is_default" => ["required"]
        ]);

        $resume = Resume::where("id", $id)->first();

        // Deletes Existing CV
        $storageLocation = Storage::disk("public");
        Storage::when($storageLocation->exists($resume->cv_path), fn() => Storage::disk("public")->delete($resume->cv_path));

        // Added New CV
        $newFilePath = $request->file("resume")->store("resumes", "public");

        //Makes Other CVs Non-default
        $candidateID = Candidate::where("user_id", Auth::id())->first()->id;
        if ($request->is_default == "1") $this->resetDefault($candidateID);

        // Updates New Information
        $resume->title = $request->title;
        $resume->cv_path = $newFilePath;
        $resume->is_default = $request->is_default;
        $resume->save();

        return to_route("candidate.buildResume");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request) {
        //
        $resume = Resume::findOrFail($request->id);

        $storageLocation = Storage::disk("public");
        Storage::when($storageLocation->exists($resume->cv_path), fn() => Storage::disk("public")->delete($resume->cv_path));

        return $resume->delete() ? to_route("candidate.buildResume") : back();
    }
}
