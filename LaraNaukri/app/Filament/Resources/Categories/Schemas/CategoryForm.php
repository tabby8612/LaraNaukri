<?php

namespace App\Filament\Resources\Categories\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Image;
use Filament\Schemas\Schema;

class CategoryForm {
    public static function configure(Schema $schema): Schema {
        return $schema
            ->components([
                //
                TextInput::make('name')->columnSpanFull(),
                FileUpload::make('image_path')->image()->disk('public')->directory('functional_area')->columnSpanFull()
            ]);
    }
}
