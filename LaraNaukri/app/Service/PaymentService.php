<?php

namespace App\Service;

use App\Models\Package;
use App\Models\User;
use Stripe\Stripe;
use Stripe\Checkout\Session as CheckoutSession;
use Srmklive\PayPal\Services\PayPal as PayPalClient;

class PaymentService {
    /**
     * Create a new class instance.
     */
    public function __construct() {
        //
    }

    public function getStripeCheckoutSession(Package $package, User $user, string $successRoute, string $failRoute) {
        Stripe::setApiKey(env('STRIPE_SECRET_KEY'));

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
            'success_url' => $successRoute,
            'cancel_url' => $failRoute,
            'customer_email' => $user->email,
            'metadata' => [
                'user_id' => $user->id,
                'package_id' => $package->id,
                'method' => "stripe"
            ],
        ]);

        return $checkout_session;
    }

    public function getPaypalCheckoutURL(Package $package, string $successRoute, string $failRoute) {
        $provider = new PayPalClient;
        $provider->getAccessToken();
        $provider->setApiCredentials(config('paypal'));

        $data = [
            "intent" => 'CAPTURE',
            'application_context' => [
                'return_url' => $successRoute,
                'cancel_url' => $failRoute,
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

        return $url;
    }
}
