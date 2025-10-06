<?php

namespace App\Service;

use App\Models\PaymentHistory;
use Illuminate\Support\Facades\DB;

class PaymentHistoryServices {
    /**
     * Create a new class instance.
     */
    public function __construct(protected PackageServices $packageServices) {
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

    public function reachCVQuota(string $userID): bool {
        $cvPackage = $this->packageServices->getPackage('cv_search');

        $purchasedCVPackages = $this->getPurchasedPackages($userID);

        $quotaUsed = 0;
        $totalQuota = 0;

        foreach ($purchasedCVPackages['cvPackages'] as $purchasedPackage) {
            $totalQuota += $purchasedPackage['package']['num_listings'];
            $quotaUsed += $purchasedPackage['quota_used'];
        }

        return $quotaUsed >= $totalQuota;
    }

    public function increseCVQuota(string $userID) {
        $purchasedCVPackages = $this->getPurchasedPackages($userID)['cvPackages'];

        $validCVPackage = [];

        foreach ($purchasedCVPackages as $purchasedCVPackage) {
            if ($purchasedCVPackage['quota_used'] < $purchasedCVPackage['package']['num_listings']) {
                $validCVPackage = $purchasedCVPackage;
            }
        }

        DB::table('payment_histories')
            ->where('id', $validCVPackage['id'])
            ->update([
                'quota_used' => ++$validCVPackage['quota_used']
            ]);
    }
}
