<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PaymentHistory extends Model {
    //

    protected $guarded = [];


    //--- Relations
    public function candidate(): BelongsTo {
        return $this->belongsTo(Candidate::class);
    }

    public function package(): BelongsTo {
        return $this->belongsTo(Package::class);
    }


    //--- Casting
    public function method(): Attribute {
        return Attribute::make(get: fn($value) => ucfirst($value));
    }
}
