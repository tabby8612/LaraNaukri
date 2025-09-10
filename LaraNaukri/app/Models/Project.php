<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Project extends Model {
    //

    public function candidate(): BelongsTo {
        return $this->belongsTo(Candidate::class);
    }
}
