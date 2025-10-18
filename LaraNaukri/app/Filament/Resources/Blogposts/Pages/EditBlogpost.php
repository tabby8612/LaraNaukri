<?php

namespace App\Filament\Resources\Blogposts\Pages;

use App\Filament\Resources\Blogposts\BlogpostResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditBlogpost extends EditRecord
{
    protected static string $resource = BlogpostResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
