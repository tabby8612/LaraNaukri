<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\Category;
use App\Models\City;
use App\Models\Country;
use App\Models\Industry;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class CandidateController extends Controller {
    //

    /**
     * fetches featured candidates from database
     * @return JsonResponse
     */

    public function featuredCandidate() {

        $featuredCandidates = Candidate::with("city")
            ->where("is_featured", "=", 1)
            ->get()
            ->mapWithKeys(function ($candidate, $index) {
                return [
                    $index => [
                        "id" => $candidate->id,
                        "name" => $candidate->name,
                        "image_path" => $candidate->image_path,
                        "profession" => $candidate->profession,
                        "city" => $candidate->city->name,
                        "career_level" => $candidate->career_level,
                        "is_featured" => $candidate->is_featured,
                    ]
                ];
            });

        return response()->json($featuredCandidates, 200);


    }

    public function dashboard() {
        $user_id = Auth::id();

        $candidate = Candidate::where("user_id", "=", $user_id)
            ->with("user:id,email")
            ->first()
            ->toArray();

        return Inertia::render("candidate-dashboard", [
            "candidate" => $candidate
        ]);
    }

    public function show() {
        $user_id = Auth::id();

        $candidate = Candidate::where("user_id", "=", $user_id)
            ->with("user:id,email")
            ->first()
            ->toArray();

        $countries = Cache::get("countries", fn() => Country::all());
        $cities = Cache::get("cities", fn() => City::all());
        $industries = Cache::get("industries", fn() => Industry::all());
        $categories = Cache::get("categories", fn() => Category::all());


        return Inertia::render("candidate/edit-profile", [
            "candidate" => $candidate,
            "genderValues" => ["Male", "Female"],
            "martialStatusValues" => ['Divorced', 'Married', 'Seperated', 'Single', 'Window/er'],
            "countriesValues" => $countries->pluck("name")->toArray(),
            "citiesValues" => $cities->pluck("name")->toArray(),
            "industriesValues" => $industries->pluck("name")->toArray(),
            "nationalityValues" => ["American", "Pakistani", "Indian"],
            "experienceValues" => ["Fresh", "Less Than 1 Year", "1 Year", "2 Year"],
            "careerLevelValues" => ["experienced professional", "entry level", 'department head'],
            "categoriesValues" => $categories->pluck("name")->toArray(),



        ]);

    }
}
