<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Project extends Model {
    //

    protected $guarded = [];

    public function candidate(): BelongsTo {
        return $this->belongsTo(Candidate::class);
    }

    protected function casts(): array {
        return [
            'ongoing' => 'boolean',
        ];
    }

}
