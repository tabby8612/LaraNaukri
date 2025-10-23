<?php

namespace App\Filament\Resources\Countries\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class CountryForm {
    public static function configure(Schema $schema): Schema {
        return $schema
            ->components([
                //
                TextInput::make('name')->columnSpanFull(),


                FileUpload::make('image_path')
                    ->disk('public')
                    ->preserveFilenames()
                    ->directory('country_images')
                    ->columnSpanFull()
            ]);
    }
}
