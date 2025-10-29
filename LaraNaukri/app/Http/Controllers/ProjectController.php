<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Service\ResumeGenerationService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ProjectController extends Controller {

    public function __construct(protected ResumeGenerationService $resumeGenerationService) {
    }
    /**
     * Display a listing of the resource.
     */
    public function index() {
        //
        $candidatesID = Auth::user()->candidate->id;

        $projects = Project::where("candidate_id", $candidatesID)->get()->toArray();

        return response()->json($projects);

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

        $request->validate([
            "name" => ["required", "min:5"],
            "url" => ["required", "min:5"],
            "start_date" => ["required", "min:5"],
            "end_date" => ["required", "min:5"],
            "description" => ["required", "min:5"],
            "ongoing" => ["required", Rule::in(["0", "1"])],
            "image_path" => ["required", "image", "max:5000"]
        ]);

        $candidateID = Auth::user()->candidate->id;
        $imagePath = $request->file("image_path")->store("project_images", "public");

        $project = new Project();
        $project->candidate_id = $candidateID;
        $project->name = $request->name;
        $project->url = $request->url;
        $project->ongoing = $request->ongoing;
        $project->start_date = $request->start_date;
        $project->end_date = $request->end_date;
        $project->description = $request->description;
        $project->image_path = $imagePath;
        $project->save();

        //-- Generating PDF through Browsershot Using Queue
        $this->resumeGenerationService->generateResumePDF();

        return;



    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project) {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project) {
        //

        // validate
        $request->validate([
            "name" => ["required", "min:5"],
            "url" => ["required", "min:5"],
            "start_date" => ["required", "min:5"],
            "end_date" => ["required", "min:5"],
            "description" => ["required", "min:5"],
            "ongoing" => ["required", Rule::in(["0", "1"])],
            "image_path" => ["required", "image", "max:5000"]
        ]);

        // delete old image from disk
        Storage::disk("public")->delete($project->image_path);

        // Store new image
        $imagePath = $request->file("image_path")->store("project_images", "public");

        $project->name = $request->name;
        $project->url = $request->url;
        $project->ongoing = $request->ongoing;
        $project->start_date = $request->start_date;
        $project->end_date = $request->end_date;
        $project->description = $request->description;
        $project->image_path = $imagePath;
        $project->save();

        //-- Generating PDF through Browsershot Using Queue
        $this->resumeGenerationService->generateResumePDF();

        return to_route("candidate.buildResume");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project) {
        //
        // dd($project);

        Storage::disk("public")->delete($project->image_path);
        $project->delete();

        //-- Generating PDF through Browsershot Using Queue
        $this->resumeGenerationService->generateResumePDF();

        return;

    }
}
