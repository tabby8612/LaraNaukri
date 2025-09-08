<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Candidate extends Model {
    //
    protected $fillable = [
        "user_id", "name"
    ];

    //--- Relationships

    public function city(): BelongsTo {
        return $this->belongsTo(City::class);
    }

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }

    public function country(): BelongsTo {
        return $this->belongsTo(Country::class);
    }

    public function state(): BelongsTo {
        return $this->belongsTo(State::class);
    }

    public function careerLevel(): BelongsTo {
        return $this->belongsTo(CareerLevel::class);
    }

    public function gender(): BelongsTo {
        return $this->belongsTo(Gender::class);
    }

    public function martialStatus(): BelongsTo {
        return $this->belongsTo(MaritalStatus::class);
    }

    public function nationality(): BelongsTo {
        return $this->belongsTo(Nationality::class);
    }

    public function industry(): BelongsTo {
        return $this->belongsTo(Industry::class);
    }

    public function category(): BelongsTo {
        return $this->belongsTo(Category::class);
    }










    //--- Getters
    protected function dateOfBirth(): Attribute {
        return Attribute::make(
            get: fn($value) => Carbon::parse($value)->format("Y-m-d")
        );
    }

    protected function createdAt() {

        return Attribute::make(function ($value) {
            $dt = Carbon::parse($value);
            return "$dt->day-$dt->month-$dt->year";
        });
    }
}
