<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CandidateExperience extends Model {
    //
    protected $guarded = [];

    //-- Relations
    public function candidate(): BelongsTo {
        return $this->belongsTo(Candidate::class);
    }

    public function country(): BelongsTo {
        return $this->belongsTo(Country::class);
    }

    public function state(): BelongsTo {
        return $this->belongsTo(State::class);
    }

    public function city(): BelongsTo {
        return $this->belongsTo(City::class);
    }
}
