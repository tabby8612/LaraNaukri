<?php

namespace App\Service;

use App\Models\Candidate;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class CandidateService {
    /**
     * Create a new class instance.
     */
    public function __construct() {
        //
    }

    public function test() {
        return "yes working";
    }

    public function fetchCandidate(string $userID, array $relations = [], array $relationsCount = [], array $get = ['*']) {

        $candidate = Candidate::where("user_id", "=", $userID);

        if ($relations) $candidate = $candidate->with($relations);
        if ($relationsCount) $candidate = $candidate->withCount($relationsCount);

        $candidate = $candidate->first($get)->toArray();

        return $candidate;
    }

    public function updateCandidate(string $userID, array $validated) {

        DB::transaction(function () use ($validated, $userID) {
            $candidate = Candidate::where("user_id", "=", $userID);

            foreach ($validated as $key => $value) {
                if ($key == "email" && isset($value)) {
                    DB::table("users")->where("id", $userID)->update(["email" => $value]);
                }

                if ($key == "password" && isset($value)) {
                    when(isset($value), function () use ($value, $userID) {
                        DB::table("users")->where("id", $userID)->update([
                            "password" => Hash::make($value)
                        ]);
                    });
                }

                if ($key == "image_path" && is_file($validated['image_path'])) {
                    $image_path = Storage::disk('public')->putFile("candidates", $validated['image_path']);
                    $candidate->update([
                        $key => $image_path
                    ]);
                }
                if ($key == "cover_image_path" && is_file($validated['cover_image_path'])) {
                    $cover_image_path = Storage::disk('public')->putFile("candidates", $validated['cover_image_path']);
                    $candidate->update([
                        $key => $cover_image_path
                    ]);
                }

                if ($key != "email" && $key != "password" && $key != "image_path" && $key != "cover_image_path") {
                    $candidate->update([
                        $key => $value
                    ]);
                }
            }
        });
    }

    public function getTotalYearsOfExperience(array $candidateExperiences) {
        $totalExperienceYears = 0.0;

        foreach ($candidateExperiences as $experience) {
            $startdate = Carbon::parse($experience["start_date"]);
            $enddate = Carbon::parse($experience["end_date"]);

            $differenceInDays = $startdate->diffInYears($enddate);

            $totalExperienceYears += $differenceInDays;
        }

        return round($totalExperienceYears, 1);
    }

    public function getActivePackage(string $userID, array $payments) {
        $activePackage = null;
        $isFeatured = 0;

        if (isset($payments)) {
            foreach ($payments as $index => $payment) {
                $startDate = Carbon::parse($payment['created_at']);
                $endDate = Carbon::parse($payment['created_at'])->addDays((int) $payment['package']['num_days'] ?? 9999);

                $today = Carbon::now();

                if ($today->isBetween($startDate, $endDate)) {
                    $isFeatured = 1;
                    $activePackage = $payment;
                    $activePackage['start_date'] = $startDate->format('d-m-o');
                    $activePackage['end_date'] = $endDate->format('d-m-o');
                    break;
                }
            }
            $this->updateCandidate($userID, ["is_featured" => $isFeatured]);

            return $activePackage;
        }
    }
}
