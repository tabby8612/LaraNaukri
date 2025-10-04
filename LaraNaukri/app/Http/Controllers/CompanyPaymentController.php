<?php

namespace App\Http\Controllers;

use App\Models\Package;
use App\Models\PaymentHistory;
use App\Service\PackageServices;
use App\Service\PaymentService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Srmklive\PayPal\Services\PayPal as PayPalClient;
use Stripe\Checkout\Session as CheckoutSession;
use Stripe\Stripe;

class CompanyPaymentController extends Controller {
    //
    public function __construct(protected PackageServices $packageServices, protected PaymentService $paymentService) {

    }

    public function paypalSuccess(Request $request) {

        $productID = Session::pull("productID");

        $token = $request->token;

        $provider = new PayPalClient;
        $provider->getAccessToken();
        $provider->setApiCredentials(config('paypal'));

        $order = $provider->capturePaymentOrder($token);

        if (isset($order) && $order['status'] == 'COMPLETED') {

            $userID = Auth::id();
            $package = $this->packageServices->getPackageWithID($productID);

            PaymentHistory::create([
                'user_id' => $userID,
                'package_id' => $package->id,
                'quota_used' => 0,
                'expiry_date' => Carbon::now()->addDays((int) $package->num_days),
                'method' => 'paypal',
            ]);

            return to_route("employer.dashboard")->with('message', "paymentSuccess");

        }


    }

    public function paypalFail() {
        return to_route("employer.dashboard")->with('message', "paymentFail");
    }

    public function stripeSuccess() {
        return to_route("employer.dashboard")->with("message", "paymentSuccess");
    }

    public function stripeFail() {
        return to_route("employer.dashboard")->with("message", "paymentFail");
    }

    public function PaypalPackage(Package $package) {

        $successRoute = route("employer.paypal.success");
        $failRoute = route("employer.paypal.fail");

        $url = $this->paymentService->getPaypalCheckoutURL($package, $successRoute, $failRoute);

        Session::put("productID", $package->id);

        return Inertia::location($url);
    }

    public function StripePackage(Package $package) {
        $user = Auth::user();
        $successRoute = route("employer.stripe.success");
        $failRoute = route("employer.stripe.fail");

        $checkout_session = $this->paymentService
            ->getStripeCheckoutSession($package, $user, $successRoute, $failRoute);

        return Inertia::location($checkout_session->url);
    }
}
