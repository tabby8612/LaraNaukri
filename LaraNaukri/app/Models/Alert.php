<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Alert extends Model {
    //
    protected $guarded = [];

    //-- Relations
    public function country(): BelongsTo {
        return $this->belongsTo(Country::class);
    }
    public function city(): BelongsTo {
        return $this->belongsTo(City::class);
    }
    public function state(): BelongsTo {
        return $this->belongsTo(State::class);
    }

    //-- Accessors
    protected function createdAt(): Attribute {
        return Attribute::get(fn($data) => Carbon::parse($data)->format('dS \of F, o'));
    }

}
