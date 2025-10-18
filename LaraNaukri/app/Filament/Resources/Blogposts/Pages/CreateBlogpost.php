<?php

namespace App\Filament\Resources\Blogposts\Pages;

use App\Filament\Resources\Blogposts\BlogpostResource;
use Filament\Resources\Pages\CreateRecord;

class CreateBlogpost extends CreateRecord
{
    protected static string $resource = BlogpostResource::class;
}
