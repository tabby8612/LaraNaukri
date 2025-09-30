<?php

namespace App\Enums;

enum JobType: string {
    //
    case INTERNSHIP = 'internship';
    case FULLTIME = 'full time';
    case CONTRACT = 'contract';

    public function label() {
        return match ($this) {
            self::INTERNSHIP => 'Internship',
            self::FULLTIME => 'Full Time',
            self::CONTRACT => 'Contract',
        };
    }

}
