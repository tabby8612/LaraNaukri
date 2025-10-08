<?php

namespace App;

use App\Models\Application;
use Illuminate\Support\Facades\DB;

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

    public function updateApplicationStatus(string $ApplicationID, string $newStatus) {
        return DB::table('applications')
            ->where('id', $ApplicationID)
            ->update(['status' => $newStatus]);
    }
}
