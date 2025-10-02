<?php

namespace App;

use App\Models\Application;

class ApplicationService {
    /**
     * Create a new class instance.
     */
    public function __construct() {
        //
    }

    public function groupApplicationsByStatus(array $applications) {
        $groupedApplications = collect($applications)
            ->groupBy(fn($application) => $application['status'])
            ->toArray();

        return $groupedApplications;
    }
}
