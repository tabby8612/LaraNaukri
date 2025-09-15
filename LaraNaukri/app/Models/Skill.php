<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Skill extends Model {
    //

    public function jobs(): BelongsTo {
        return $this->belongsTo(Job::class);
    }

    public function candidates(): BelongsToMany {
        return $this->belongsToMany(Candidate::class);
    }
}
