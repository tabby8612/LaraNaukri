<?php

namespace App\Http\Controllers;

use App\Models\PaymentHistory;
use App\Service\PackageServices;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CompanyPackageController extends Controller {
    //
    public function __construct(protected PackageServices $packageServices) {
    }

    public function cvPackage() {
        $cvPackage = $this->packageServices->getPackage("cv_search");

        $activePackage = PaymentHistory::with(['user', 'package'])
            ->where("package_id", $cvPackage->id)
            ->where("user_id", Auth::id())
            ->first()?->toArray();

        return Inertia::render("employer/companyPackages", compact("cvPackage", "activePackage"));
    }

    public function jobPackages() {

        $userPackages = Auth::user()?->payments;

        $purchaseJobPackages = [];

        if (isset($userPackages)) {
            $purchaseJobPackages = collect($userPackages)
                ->filter(fn(PaymentHistory $paymentHistory) => $paymentHistory->package->for == 'employer')
                ->values();
        }

        return Inertia::render("employer/paymentHistory", compact("purchaseJobPackages"));
    }
}
