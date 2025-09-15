<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Subject extends Model {
    //

    //-- Relations
    public function educations(): BelongsToMany {
        return $this->belongsToMany(Education::class);
    }

}
