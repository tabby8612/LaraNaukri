<?php

namespace App\Http\Controllers;

use App\Http\Requests\ApplicationRequest;
use App\Models\Application;
use App\Models\Candidate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;


class ApplicationController extends Controller {
    //

    public function store(ApplicationRequest $application) {
        $validated = $application->validated();


        // --- handling already applied logic
        $isAlreadyApplied = Application::where("candidate_id", "=", $validated['candidate_id'])
            ->where('job_id', '=', $validated['job_id'])->first();

        if (isset($isAlreadyApplied)) {
            return back()->withErrors(["error" => "You have already applied for this job"]);
        }

        // -- handling new resume upload
        if (isset($validated['resume_path'])) {

            $path = "/candidates/{$validated['candidate_id']}/resume";

            $uploadedFile = $validated['resume_path'];

            $file = Storage::disk("public")->putFileAs($path, $validated['resume_path'], $uploadedFile->getClientOriginalName());

            $validated['resume_path'] = $file;
        } else {
            $candidate = Candidate::where('id', '=', $validated['candidate_id'])->first();

            $validated['resume_path'] = $candidate->resume_path;
        }

        // --- Handle Cover Letter

        if (isset($validated['cover_letter_path'])) {

            $path = "/candidates/{$validated['candidate_id']}/resume";

            $uploadedFile = $validated['cover_letter_path'];

            $file = Storage::disk("public")->putFileAs($path, $validated['cover_letter_path'], $uploadedFile->getClientOriginalName());

            $validated['cover_letter_path'] = $file;
        }

        Application::create($validated);

        return back();

    }


}
