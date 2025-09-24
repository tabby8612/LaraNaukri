<?php

namespace App\Http\Controllers;

use App\Http\Requests\LanguageRequest;
use App\Models\Candidate;
use App\Service\CandidateService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CandidateLanguageController extends Controller {
    //

    public function __construct(protected CandidateService $candidateService) {
    }

    public function languageAttach(LanguageRequest $languageRequest) {

        $validated = $languageRequest->validated();

        $candidate = Candidate::findOrFail(Auth::user()->candidate->id);

        $candidate->languages()->attach($validated['language_id'], [
            "language_level" => $validated['language_level']
        ]);

        return;
    }

    public function candidateLanguages() {

        $userID = Auth::id();

        $candidate = $this->candidateService->fetchCandidate($userID, ["languages:id,name"]);

        return response()->json($candidate["languages"]);
    }

    public function languageUpdate(LanguageRequest $languageRequest, string $id) {

        $validated = $languageRequest->validated();

        DB::table("candidate_language")
            ->where("id", "=", $id)
            ->where("candidate_id", "=", Auth::user()->candidate->id)
            ->update($validated);

        return;

    }

    public function languageDelete(Request $request, string $id) {
        DB::table("candidate_language")
            ->where("id", "=", $id)
            ->where("candidate_id", "=", Auth::user()->candidate->id)
            ->delete();

        return;

    }
}
