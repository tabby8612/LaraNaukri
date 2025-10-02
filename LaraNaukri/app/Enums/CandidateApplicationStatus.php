<?php

namespace App\Enums;

enum CandidateApplicationStatus: string {
    //
    case APPLIED = 'applied';
    case REJECTED = 'rejected';
    case SHORTLISTED = 'shortlisted';
    case HIRED = 'hired';

    public function label() {
        return match ($this) {
            self::APPLIED => "Applied",
            self::REJECTED => "Rejected",
            self::SHORTLISTED => "Shortlisted",
            self::HIRED => "Hired",
        };
    }
}
