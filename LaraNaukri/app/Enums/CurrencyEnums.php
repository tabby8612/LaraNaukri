<?php

namespace App\Enums;

enum CurrencyEnums: string {
    //
    case POUND = '£';
    case DOLLAR = '$';
    case EURO = '€';
    case DIHRAM = 'د.إ';
    case YEN = '¥';

    public function label(): string {
        return match ($this) {
            self::POUND => "Pound (£)",
            self::DOLLAR => "USD ($)",
            self::EURO => "EURO (€)",
            self::DIHRAM => "AED (د.إ)",
            self::YEN => "JPY (¥)",
        };
    }

    public function getLabel() {
        return $this->value;
    }
}
