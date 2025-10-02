<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Application extends Model {
    //

    protected $guarded = [];


    //--- Relations
    public function candidate(): BelongsTo {
        return $this->belongsTo(Candidate::class);
    }

    public function job(): BelongsTo {
        return $this->belongsTo(Job::class);
    }


}
