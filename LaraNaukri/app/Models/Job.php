<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Job extends Model
{
    /** @use HasFactory<\Database\Factories\JobFactory> */
    use HasFactory;

    protected $table = "jobs_listings";

    public function companies(): BelongsTo
    {
        return $this->belongsTo(Company::class, "company_id");
    }

    public function skills(): HasMany
    {
        return $this->hasMany(Skill::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function city(): BelongsTo
    {
        return $this->belongsTo(City::class);
    }


    protected function createdAt(): Attribute
    {
        return Attribute::make(function ($value) {
            $dt = Carbon::parse($value);
            return "$dt->day/$dt->month/$dt->year";
        });
    }
}
