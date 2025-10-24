<?php

namespace App\Helpers;

use App\Models\Setting;
use Illuminate\Support\Facades\Cache;

if (!function_exists('site_settings')) {
    function site_settings(string $key, $default = null) {
        return Cache::remember("site_setting_{$key}", now()->addMonth(), fn() => Setting::query()->first()->data[$key] ?? $default);
    }
}
