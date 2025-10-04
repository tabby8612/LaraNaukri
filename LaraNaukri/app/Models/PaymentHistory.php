<?php

namespace App\Models;

use Carbon\Carbon;
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

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }

    public function package(): BelongsTo {
        return $this->belongsTo(Package::class);
    }


    //--- Mutators
    public function method(): Attribute {
        return Attribute::make(get: fn($value) => ucfirst($value));
    }

    public function createdAt(): Attribute {
        return Attribute::get(get: fn($val) => Carbon::parse($val)->format('d-m-o'));
    }

    public function expiryDate(): Attribute {
        return Attribute::get(get: fn($val) => Carbon::parse($val)->format('d-m-o'));
    }
}
