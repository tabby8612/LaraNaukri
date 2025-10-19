<?php

namespace App\Filament\Resources\FAQS\Schemas;

use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class FAQForm {
    public static function configure(Schema $schema): Schema {
        return $schema
            ->components([
                //
                TextInput::make('question')->required(),
                RichEditor::make('answer')->required()->columnSpanFull(),
            ]);
    }
}
