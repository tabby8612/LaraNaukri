<?php

namespace App\Filament\Resources\Packages\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class PackageForm {
    public static function configure(Schema $schema): Schema {
        return $schema
            ->components([
                //
                TextInput::make('name'),
                TextInput::make('price'),
                TextInput::make('num_days')->label('Number of Days'),
                TextInput::make('num_listings')->label('Number of Listings'),
                Select::make('for')->options(
                    ['cv_search' => 'CV Search', 'employer' => 'Employer', 'job_seeker' => 'Job Seeker', 'make_featured' => 'Make Featured'])
            ]);
    }
}
