<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Service\CandidateService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CandidateSearchController extends Controller {
    //

    public function __construct(public CandidateService $candidateService) {
    }

    public function index() {

        $relations = ["country", "state", "city"];

        $allCandidates = $this->candidateService->fetchCandidates($relations);

        $relationTable = "states";
        $relatedColumn = "state_id";

        $groupByCountry = $this->candidateService->groupCandidates("countries", "country_id");
        $groupByState = $this->candidateService->groupCandidates("states", "state_id");
        $groupByCity = $this->candidateService->groupCandidates("cities", "city_id");
        $groupByExperience = $this->candidateService->groupCandidates("experiences", "experience_id");
        $groupByCareerLevels = $this->candidateService->groupCandidates("career_levels", "career_level_id");
        $groupByGender = $this->candidateService->groupCandidates("genders", "gender_id");



        return Inertia::render("searchTalent", compact([
            "allCandidates", "groupByCountry", "groupByState", "groupByCity",
            "groupByExperience", "groupByCareerLevels", "groupByGender"
        ]));
    }

    public function searchTalent(Request $request) {

        $validated = $request->validate([
            "name" => ["nullable", "min:3"],
            "category_id" => ["nullable", "max:3"]
        ]);

        if (!isset($validated['name']) && !isset($validated['category_id'])) return back();

        $condition1 = ["first_name", "like", $validated['name'] ?? ''];
        $condition2 = ["last_name", "like", $validated['name'] ?? ''];
        $condition3 = ["category_id", "=", $validated['category_id'] ?? ''];

        $conditions = compact("condition1", "condition2", "condition3");
        $relations = ["country", "state", "city"];

        $searchedCandidates = $this->candidateService
            ->searchCandidates($conditions, $relations);

        $allCandidates = $this->candidateService->fetchCandidates();

        return Inertia::render("searchTalent", compact("allCandidates", "searchedCandidates"));
    }

    public function filterTalent(Request $request) {
        $filters = $request->only(["country_id", "state_id", "city_id", "experience_id", "career_level_id", "gender_id"]);
        $relations = ["country", "state", "city"];

        $conditions = [];

        foreach ($filters as $column => $filter) {
            $conditions[] = [$column, "=", $filter];
        }

        $searchedCandidates = $this->candidateService->filterCandidates($conditions, $relations);

        return back()->with([
            "searchedCandidates" => $searchedCandidates
        ]);

    }
}
