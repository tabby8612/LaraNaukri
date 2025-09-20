<?php

namespace App\Http\Controllers;

use App\Http\Requests\AlertRequest;
use App\Models\Alert;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AlertController extends Controller {
    //
    public function index() {

        $candidateID = Auth::user()->candidate->id;

        $alerts = Alert::where('candidate_id', '=', $candidateID)
            ->with(['country:id,name', 'state', 'city'])
            ->get()
            ->toArray();

        // dd($alerts);

        return Inertia::render('candidate/jobs-alert', compact('alerts'));
    }

    public function store(AlertRequest $alertRequest) {

        $validated = $alertRequest->validated();

        $validated['candidate_id'] = Auth::user()?->candidate?->id;

        Alert::create($validated);

        return back()->with("message", "Alert Has Been Created");

    }

    public function delete(Alert $alert) {

        $alert->delete();

        return back();

    }
}
