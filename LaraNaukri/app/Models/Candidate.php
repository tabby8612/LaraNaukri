<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Candidate extends Model {
    //
    protected $fillable = [
        "user_id", "name"
    ];

    public function city(): BelongsTo {
        return $this->belongsTo(City::class);
    }
}
