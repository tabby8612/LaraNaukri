<?php

namespace App\Filament\Resources\CMS\Schemas;

use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;


class CMSForm {
    public static function configure(Schema $schema): Schema {
        return $schema
            ->components([
                //
                Tabs::make()->schema([
                    Tab::make('Details')
                        ->schema([
                            TextInput::make('title')
                                ->live(onBlur: true)
                                ->afterStateUpdated(fn(Set $set, ?string $state) => $set('slug', Str::slug($state)))
                                ->required(),

                            TextInput::make('slug')
                                ->readOnly()
                                ->extraAttributes(['class' => 'isDisable'])
                                ->required(),


                            RichEditor::make('description')->required()
                        ])->columnSpanFull(),


                    Tab::make('SEO Settings')
                        ->schema([
                            TextInput::make('seo_title')
                                ->label('SEO Title'),

                            Textarea::make('seo_description'),

                            TextInput::make('seo_tags')
                                ->label('SEO Other Tags'),



                        ])->columnSpanFull(),




                ])->columnSpanFull()
            ]);
    }
}
