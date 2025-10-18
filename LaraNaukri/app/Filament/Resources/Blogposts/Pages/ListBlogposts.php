<?php

namespace App\Filament\Resources\Blogposts\Pages;

use App\Filament\Resources\Blogposts\BlogpostResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Filament\Support\Icons\Heroicon;
use Illuminate\Contracts\Support\Htmlable;

class ListBlogposts extends ListRecords {
    protected static string $resource = BlogpostResource::class;

    protected function getHeaderActions(): array {
        return [
            CreateAction::make()
                ->label('Add New Blog Post')
                ->icon('heroicon-s-plus')
                ->color('white')
            ,
        ];
    }

    public function getTitle(): string|Htmlable {
        // return static::$title ?? static::getResource()::getTitleCasePluralModelLabel();
        return 'Blog Post';
    }
}
