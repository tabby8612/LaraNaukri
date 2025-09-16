<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class CandidateSkill extends Model {
    //
    protected $guarded = [];

    protected $table = "candidate_skill";

    // -- Relationships
    public function candidate(): BelongsTo {
        return $this->belongsTo(Candidate::class);
    }

    public function skill(): BelongsTo {
        return $this->belongsTo(Skill::class);
    }

    public function experience(): BelongsTo {
        return $this->belongsTo(Experience::class);
    }
}
