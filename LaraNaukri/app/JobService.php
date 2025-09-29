<?php

namespace App;

use App\Models\Job;

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
}
