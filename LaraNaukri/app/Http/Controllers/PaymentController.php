<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\PaymentHistory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Stripe\Exception\SignatureVerificationException;
use Stripe\StripeClient;


class PaymentController extends Controller {
    //
    public function index() {

        $candidateID = Auth::user()->candidate->id;

        $payments = Payment::where('candidate_id', '=', $candidateID)
            ->get()
            ->toArray();

        return Inertia::render("candidate/candidate-payment-history", compact('payments'));
    }

    public function success() {
        dump(env('STRIPE_SECRET_KEY'));
        $stripe = new StripeClient(env('STRIPE_SECRET_KEY'));

        dump($stripe);
        dump($stripe->checkout);
        dump($stripe->checkout->sessions);

        $session = $stripe->checkout->sessions->retrieve($_GET['session_id']);
        dump($session);
        $customer = $stripe->customers->retrieve($session->customer);
        dd($customer);
    }

    public function webhook(Request $request) {
        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET_KEY'));

        $endpoint_secret = env('STRIPE_WEBHOOK_KEY');

        $payload = @file_get_contents('php://input');
        $event = null;

        try {

            $event = \Stripe\Event::constructFrom(
                json_decode($payload, true)
            );
        } catch (\UnexpectedValueException $th) {
            return response('', 400);
        } catch (SignatureVerificationException $e) {
            return response('', 400);
        }

        if ($endpoint_secret) {
            $sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];

            try {
                $event = \Stripe\Webhook::constructEvent(
                    $payload, $sig_header, $endpoint_secret
                );
            } catch (SignatureVerificationException $th) {
                echo '⚠️  Webhook error while validating signature.';

                return response('', 400);
            }
        }

        switch ($event->type) {
            case 'checkout.session.completed':
                $checkoutSession = $event->data->object;

                $candidateID = $checkoutSession->metadata->candidate_id;
                $packageID = $checkoutSession->metadata->package_id;
                $method = $checkoutSession->metadata->method;

                PaymentHistory::create([
                    'candidate_id' => $candidateID,
                    'package_id' => $packageID,
                    'method' => $method,
                ]);

                break;
            default:
                // Unexpected event type
                error_log('Received unknown event type');
        }


        return response('', 200);

    }
}
