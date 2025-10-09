<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ChatMessage extends Model {
    //
    protected $guarded = [];

    //--- Relationships
    public function sender(): BelongsTo {
        return $this->belongsTo(User::class, 'sender_id');
    }

    public function receiver(): BelongsTo {
        return $this->belongsTo(User::class, 'receiver_id');
    }


    //--- Mutators 
    public function createdAt(): Attribute {
        return Attribute::get(fn(string $value) => Carbon::parse($value)->format('g:i a'));
    }

}
