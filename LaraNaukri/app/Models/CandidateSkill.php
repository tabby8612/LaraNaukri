<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class CandidateSkill extends Model {
    //

    // -- Relationships
    public function candidates(): BelongsToMany {
        return $this->belongsToMany(Candidate::class);
    }

    public function skills(): BelongsToMany {
        return $this->belongsToMany(Skill::class);
    }

    public function experience(): BelongsToMany {
        return $this->belongsToMany(Experience::class);
    }
}
