<?php

namespace App\Filament\Resources\Blogposts\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class BlogpostForm {
    public static function configure(Schema $schema): Schema {
        return $schema
            ->components([
                Grid::make(3)->schema([
                    TextInput::make('title')
                        ->live()
                        ->afterStateUpdated(function (?string $state, ?string $old, Set $set) {
                            $set('slug', Str::slug($state));
                            return $state;
                        })
                        ->required(),


                    TextInput::make('slug')
                        ->readOnly()
                        ->extraAttributes(['class' => 'isDisable'])
                        ->required(),


                    Select::make('blog_categories_id')
                        ->relationship('blogcategory', 'name')
                        ->label('Blog Category')
                        ->createOptionForm([
                            TextInput::make('name')
                        ])
                        ->required()


                ])->columnSpanFull(),
                FileUpload::make('featured_image_path')
                    ->label('Featured Image')
                    ->image()
                    ->disk('public')
                    ->directory('blogposts')
                    ->columnSpanFull()
                    ->required(),
                RichEditor::make('description')
                    ->required()
                    ->columnSpanFull(),

            ]);
    }
}
