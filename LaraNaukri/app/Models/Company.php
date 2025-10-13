<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Company extends Model {
    /** @use HasFactory<\Database\Factories\CompanyFactory> */
    use HasFactory;

    protected $guarded = [];

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }

    public function jobs(): HasMany {
        return $this->hasMany(Job::class);
    }

    public function industry(): BelongsTo {
        return $this->belongsTo(Industry::class);
    }

    public function country(): BelongsTo {
        return $this->belongsTo(Country::class);
    }

    public function candidates(): BelongsToMany {
        return $this->belongsToMany(Candidate::class);
    }

    public function candidatesUnlocked(): BelongsToMany {
        return $this->belongsToMany(Candidate::class, 'candidate_company_unlocked');
    }

    public function chatMessages(): BelongsToMany {
        return $this->belongsToMany(ChatMessage::class, 'chat_messages');
    }

    //--- Mutators

}
