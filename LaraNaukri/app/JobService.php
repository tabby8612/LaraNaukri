<?php

namespace App;

use App\Enums\CurrencyEnums;
use App\Enums\SalaryPeriod;
use App\Models\Job;
use BackedEnum;

class JobService {
    /**
     * Create a new class instance.
     */
    public function __construct() {
        //
    }

    public function companyOpenJobs(string $companyID, array $relations = []) {
        $companyOpenJobs = Job::with($relations)
            ->where("company_id", "=", $companyID)
            ->where("is_open", "=", 1)
            ->get()
            ->toArray();

        return $companyOpenJobs;
    }

    public function getEnumValues(string $backedEnum) {
        $currencies = collect($backedEnum::cases())
            ->map(fn($enum) => ["id" => $enum->value, "name" => $enum->label()])->toArray();

        return $currencies;
    }

    public function getJob(string $jobID, string|array $relations = []) {
        $job = Job::where("id", '=', $jobID)
            ->with($relations)
            ->first()
            ->toArray();

        return $job;
    }


}
