<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Resume extends Model {
    //
    protected $table = "cvs";
    protected $fillable = ["candidate_id", "title", "cv_path", "default"];

    // --- Relations
    public function candidate(): BelongsTo {
        return $this->belongsTo(Candidate::class);
    }



    // ---- Getters and Mutators
    protected function createdAt(): Attribute {
        return Attribute::make(get: function ($data) {
            $dt = Carbon::parse($data);
            return "{$dt->format('d/m/Y H:i:s')}";
        });
    }
    protected function updatedAt(): Attribute {
        return Attribute::make(get: function ($data) {
            $dt = Carbon::parse($data);
            return "{$dt->format('d/m/Y H:i:s')}";
        });
    }
}
