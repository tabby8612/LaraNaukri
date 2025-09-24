<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\PaymentHistory;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PaymentHistoryController extends Controller {
    //

    public function candidatePaymentHistory() {

        $paymentHistories = PaymentHistory::where("candidate_id", Auth::user()->candidate->id)
            ->with(["candidate", "package"])
            ->get()
            ->toArray();


        foreach ($paymentHistories as $index => $paymentHistory) {
            $startDate = $paymentHistory["created_at"];
            $num_days = $paymentHistory['package']['num_days'];

            $paymentHistories[$index]["start_date"] = Carbon::parse($startDate)->format("d-m-o");
            $paymentHistories[$index]["end_date"] = Carbon::parse($startDate)->addDays((int) $num_days ?? 9999)->format("d-m-o");
        }

        return Inertia::render("candidate/payment-history", compact("paymentHistories"));


    }
}
