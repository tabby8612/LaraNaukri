<?php

namespace App\Filament\Resources\Cities\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Schema;

class CityForm {
    public static function configure(Schema $schema): Schema {
        return $schema
            ->components([
                //
                Grid::make(3)->schema([
                    TextInput::make('name')->label('City Name'),
                    Select::make('state_id')->relationship('state', 'name'),
                    Select::make('country_id')->relationship('country', 'name'),
                ])->columnSpanFull(),

                FileUpload::make('image_path')->disk('public')->directory('city_images')->preserveFilenames()->columnSpanFull()
            ]);
    }
}
