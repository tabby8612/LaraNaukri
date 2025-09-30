<?php

namespace App\Enums;

enum SalaryPeriod: int {
    //
    case WEEKLY = 1;
    case MONTHLY = 2;
    case YEARLY = 3;

    public function label() {
        return match ($this) {
            self::WEEKLY => "Weekly",
            self::MONTHLY => "Monthly",
            self::YEARLY => "Yearly",
        };
    }
}
