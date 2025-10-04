<?php

namespace App\Service;

use App\Models\Package;
use Illuminate\Support\Facades\Cache;

class PackageServices {
    /**
     * Create a new class instance.
     */
    public function __construct() {
        //
    }

    public function getPackage(string $for) {
        $package = Cache::remember("package-{$for}", now()->addDay(), fn() => Package::where('for', $for)->first());
        return $package;
    }

    public function getPackages(string $for) {
        $package = Cache::remember("packages-{$for}", now()->addDay(), fn() => Package::where('for', $for)->get());
        return $package;
    }

    public function getPackageWithID(int $id) {
        $package = Cache::remember("packageID-{$id}", now()->addDay(), fn() => Package::where('id', $id)->first());
        return $package;
    }
}
