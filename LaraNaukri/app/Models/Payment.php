<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model {
    //

    // --- Getters
    public function startDate(): Attribute {
        return Attribute::make(
            get: fn(string $value) => Carbon::parse($value)->format('d-m-o')
        );
    }

    public function endDate(): Attribute {
        return Attribute::get(fn($data) => Carbon::parse($data)->format('d-m-o'));
    }
}
