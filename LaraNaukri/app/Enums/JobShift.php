<?php

namespace App\Enums;

enum JobShift: string {
    //
    case FIRSTSHIFT = 'first shift';
    case SECONDSHIFT = 'second shift';
    case THIRDSHIFT = 'third shift';
    case ROTATING = 'rotating';

    public function label() {
        return match ($this) {
            self::FIRSTSHIFT => "First Shift (Morning)",
            self::SECONDSHIFT => "Second Shift (Afternoon)",
            self::THIRDSHIFT => "Third Shift (Evening)",
            self::ROTATING => "Rotating",
        };
    }
}
