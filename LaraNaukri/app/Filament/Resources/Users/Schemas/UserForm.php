<?php

namespace App\Filament\Resources\Users\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Radio;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class UserForm {
    public static function configure(Schema $schema): Schema {
        return $schema
            ->components([
                TextInput::make('google_id')
                    ->default(null)->hidden(),
                TextInput::make('github_id')
                    ->default(null)->hidden(),
                TextInput::make('name')
                    ->required(),
                TextInput::make('email')
                    ->label('Email address')
                    ->email()
                    ->required(),

                TextInput::make('password')
                    ->password()
                    ->required(),

                Select::make('role')
                    ->options([
                        'candidate' => 'Candidate',
                        'employer' => 'Employer',
                        'admin' => 'Admin',
                        'company' => 'Company',
                    ])
                    ->default('admin')
                    ->disabled()
                    ->separator()
                    ->required(),
            ]);
    }


}
