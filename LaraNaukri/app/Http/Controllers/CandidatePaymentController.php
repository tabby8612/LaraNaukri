<?php

namespace App\Http\Controllers;

use App\Models\Package;
use App\Models\PaymentHistory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Stripe\Stripe;
use Stripe\Checkout\Session as CheckoutSession;
use Srmklive\PayPal\Services\PayPal as PayPalClient;

class CandidatePaymentController extends Controller {
    //
    public function stripeCheckout(Request $request) {
        $candidateID = Auth::user()->candidate->id;
        $package = Package::where('name', 'like', '%featured%')->first();

        // dd($package);

        Stripe::setApiKey(env('STRIPE_SECRET_KEY'));

        $YOUR_DOMAIN = $request->server->get('HTTP_REFERER');
        $successURL = "{$YOUR_DOMAIN}?payment=success";
        $cancelURL = "{$YOUR_DOMAIN}?payment=cancel";

        $checkout_session = CheckoutSession::create([
            'line_items' => [[
                'price_data' => [
                    'currency' => 'usd',
                    'product_data' => [
                        'name' => $package->name
                    ],
                    'unit_amount' => $package->price * 100
                ],
                'quantity' => 1

            ]],
            'mode' => 'payment',
            'success_url' => $successURL,
            'cancel_url' => $cancelURL,
            'customer_email' => Auth::user()?->email,
            'metadata' => [
                'candidate_id' => $candidateID,
                'package_id' => $package->id,
                'method' => "stripe"

            ],

        ]);

        return Inertia::location($checkout_session->url);
    }

    public function paypalCheckout(Request $request) {
        // dd($request->all());
        $package = Package::where('name', 'like', '%featured%')->first();

        $provider = new PayPalClient;
        $provider->getAccessToken();
        $provider->setApiCredentials(config('paypal'));

        $data = [
            "intent" => 'CAPTURE',
            'application_context' => [
                'return_url' => route('candidate.paypal.success'),
                'cancel_url' => route('candidate.paypal.cancel'),
            ],
            "purchase_units" => [
                [
                    'amount' => [
                        "currency_code" => "USD",
                        "value" => $package->price
                    ]
                ]
            ]
        ];

        $order = $provider->createOrder($data);
        $url = collect($order['links'])->where('rel', '=', 'approve')->first()['href'];

        return Inertia::location($url);

    }

    public function paypalSuccess(Request $request) {
        // dd($request->query('token'));
        // dd($request->query('PayerID'));

        $token = $request->token;

        $provider = new PayPalClient;
        $provider->getAccessToken();
        $provider->setApiCredentials(config('paypal'));

        $order = $provider->capturePaymentOrder($token);

        $candidateID = Auth::user()->candidate->id;
        $package = Package::where('name', 'like', '%featured%')->first();

        if (isset($order) && $order['status'] == 'COMPLETED') {

            PaymentHistory::create([
                'candidate_id' => $candidateID,
                'package_id' => $package->id,
                'method' => 'Paypal',
            ]);

            return to_route("candidate.dashboard")->with('message', "Purchase Successful");
        }


    }
}
