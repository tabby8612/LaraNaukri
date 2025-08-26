<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Blogpost extends Model
{
    //
    public function blogcategory(): BelongsTo
    {
        return $this->belongsTo(BlogCategories::class, "blog_categories_id");
    }
}
