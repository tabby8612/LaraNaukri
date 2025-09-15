<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Education extends Model {
    //
    protected $table = "educations";

    protected $guarded = [];

    //-- relations
    public function country(): BelongsTo {
        return $this->belongsTo(Country::class);
    }

    public function state(): BelongsTo {
        return $this->belongsTo(State::class);
    }

    public function city(): BelongsTo {
        return $this->belongsTo(City::class);
    }

    public function subjects(): BelongsToMany {
        return $this->belongsToMany(Subject::class);
    }


}
