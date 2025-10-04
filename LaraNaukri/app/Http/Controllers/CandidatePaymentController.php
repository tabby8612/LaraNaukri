<?php

namespace App\Http\Controllers;

use App\Models\Package;
use App\Models\PaymentHistory;
use App\Service\PackageServices;
use App\Service\PaymentService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Stripe\Stripe;
use Stripe\Checkout\Session as CheckoutSession;
use Srmklive\PayPal\Services\PayPal as PayPalClient;

class CandidatePaymentController extends Controller {
    //
    public function __construct(protected PaymentService $paymentService, protected PackageServices $packageServices) {
    }

    public function stripeCheckout(Request $request) {
        $user = Auth::user();
        $package = $this->packageServices->getPackage('make_featured');

        $YOUR_DOMAIN = $request->server->get('HTTP_REFERER');
        $successURL = "{$YOUR_DOMAIN}?payment=success";
        $cancelURL = "{$YOUR_DOMAIN}?payment=cancel";

        $checkout_session = $this->paymentService
            ->getStripeCheckoutSession($package, $user, $successURL, $cancelURL);

        return Inertia::location($checkout_session->url);
    }

    public function paypalCheckout(Request $request) {

        $package = Package::where('name', 'like', '%featured%')->first();
        $successURL = route('candidate.paypal.success');
        $failURL = route('candidate.paypal.cancel');

        $url = $this->paymentService->getPaypalCheckoutURL($package, $successURL, $failURL);

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


        if (isset($order) && $order['status'] == 'COMPLETED') {

            $userID = Auth::id();
            $package = $this->packageServices->getPackage('make_featured');

            PaymentHistory::create([
                'user_id' => $userID,
                'package_id' => $package->id,
                'quota_used' => 0,
                'expiry_date' => Carbon::now()->addDays((int) $package->num_days),
                'method' => 'paypal',
            ]);

            return to_route("candidate.dashboard")->with('message', "Purchase Successful");
        }


    }
}
