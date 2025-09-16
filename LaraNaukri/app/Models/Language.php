<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Language extends Model {
    //-- Relation
    public function candidates(): HasMany {
        return $this->hasMany(Candidate::class);
    }
}
