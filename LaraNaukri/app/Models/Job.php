<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Job extends Model
{
    /** @use HasFactory<\Database\Factories\JobFactory> */
    use HasFactory;

    protected $table = "jobs_listings";

    public function companies():BelongsTo {
        return $this->belongsTo(Company::class);
    }

    public function skills(): HasMany {
        return $this->hasMany(Skill::class);
    }
}
