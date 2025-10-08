<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ChatMessage extends Model {
    //
    protected $guarded = [];

    //--- Relationships
    public function candidate(): BelongsTo {
        return $this->belongsTo(Candidate::class);
    }

    public function company(): BelongsTo {
        return $this->belongsTo(Company::class);
    }

}
