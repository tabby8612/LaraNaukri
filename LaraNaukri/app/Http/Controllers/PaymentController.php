<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PaymentController extends Controller {
    //
    public function index() {

        $candidateID = Auth::user()->candidate->id;

        $payments = Payment::where('candidate_id', '=', $candidateID)
            ->get()
            ->toArray();

        return Inertia::render("candidate/candidate-payment-history", compact('payments'));
    }
}
