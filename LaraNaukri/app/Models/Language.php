<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Language extends Model {
    //-- Relation
    public function candidates(): BelongsToMany {
        return $this->BelongsToMany(Candidate::class)->withPivot(["language_level"]);
    }
}
