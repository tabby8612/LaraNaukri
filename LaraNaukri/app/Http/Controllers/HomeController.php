<?php

namespace App\Http\Controllers;

use App\Models\CMS;
use App\Models\Country;
use App\Models\FAQ;
use App\Models\Job;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HomeController extends Controller {
    // 
    public function index() {
        $jobs = Job::with(["category", "companies", "city"])->latest()->get()->toArray();

        return Inertia::render("welcome", [
            "jobs" => $jobs
        ]);
    }

    public function getLogoFavicon() {
        $settingData = Cache::remember('settingsData', now()->addDay(), fn() => Setting::first()->data);

        $logoPath = $settingData['site_logo_path'] ?? '';
        $favPath = $settingData['site_favicon_path'] ?? '';

        return response()->json([
            'logoPath' => $logoPath,
            'favPath' => $favPath
        ]);

    }

    public function fetch(Request $request) {
        $items = Cache::get($request->column, fn() => DB::table($request->column)->get(["id", "name"]));

        return response()->json($items->toArray());
    }

    public function relatedStates(string $countryID) {
        $states = DB::table("states")->where("country_id", $countryID)->get(["name", "id"])->toArray();

        return response()->json($states);
    }

    public function relatedCities(string $stateID) {
        $cities = DB::table("cities")->where("state_id", $stateID)->get(["name", "id"])->toArray();

        return response()->json($cities);
    }

    public function termsOfUse() {
        $termsOfUse = CMS::query()
            ->where('title', 'like', '%terms%')
            ->first()
            ->toArray();

        return Inertia::render('terms-of-use', compact('termsOfUse'));
    }

    public function aboutUS() {
        $aboutUS = CMS::query()
            ->where('title', 'like', '%about%')
            ->first()
            ->toArray();

        return Inertia::render('about-us', compact('aboutUS'));
    }
    public function FAQs() {
        $faqs = FAQ::query()->get()->toArray();

        return Inertia::render('faqs', compact('faqs'));
    }


}
