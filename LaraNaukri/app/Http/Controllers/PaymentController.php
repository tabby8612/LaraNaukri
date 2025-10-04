<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\PaymentHistory;
use App\Service\PackageServices;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Stripe\Exception\SignatureVerificationException;
use Stripe\StripeClient;


class PaymentController extends Controller {
    //
    public function __construct(protected PackageServices $packageServices) {
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

                $userID = $checkoutSession->metadata->user_id;
                $packageID = $checkoutSession->metadata->package_id;
                $method = $checkoutSession->metadata->method;

                $package = $this->packageServices->getPackageWithID($packageID);

                PaymentHistory::create([
                    'user_id' => $userID,
                    'package_id' => $package->id,
                    'quota_used' => 0,
                    'expiry_date' => Carbon::now()->addDays((int) $package->num_days),
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
