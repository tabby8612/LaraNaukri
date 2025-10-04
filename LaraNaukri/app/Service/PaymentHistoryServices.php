<?php

namespace App\Service;

use App\Models\PaymentHistory;

class PaymentHistoryServices {
    /**
     * Create a new class instance.
     */
    public function __construct() {
        //
    }

    public function getPurchasedPackages($userID) {
        $jobPackages = [];
        $cvPackages = [];

        $purchasePackages = PaymentHistory::where("user_id", $userID)
            ->with("package")
            ->get();

        foreach ($purchasePackages as $purchasePackage) {
            if ($purchasePackage->package->for == 'employer') $jobPackages[] = $purchasePackage->toArray();
            if ($purchasePackage->package->for == 'cv_search') $cvPackages[] = $purchasePackage->toArray();
        }

        return compact("jobPackages", "cvPackages");

    }
}
