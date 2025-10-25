<?php

namespace App\Filament\Resources\Companies\Schemas;

use App\Models\City;
use App\Models\Package;
use App\Models\State;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Wizard;
use Filament\Schemas\Components\Wizard\Step;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;

class CompanyForm {
    public static function configure(Schema $schema): Schema {
        return $schema
            ->components([
                Wizard::make([



                    Step::make('Main Details')->components([

                        Grid::make(2)
                            ->schema([
                                TextInput::make('name')
                                    ->required(),


                                Select::make('industry_id')
                                    ->relationship('industry', 'name')
                                    ->default(null),

                            ]),

                        Grid::make(2)
                            ->schema([
                                TextInput::make('url')
                                    ->label('Website')
                                    ->url()
                                    ->default(null),

                                TextInput::make('phone')
                                    ->tel()
                                    ->default(null),

                            ]),


                    ])->columnSpanFull(),

                    Step::make('Description')->components([

                        Grid::make(2)
                            ->schema([
                                FileUpload::make('image_path')
                                    ->disk('public')
                                    ->directory('company_logos')
                                    ->image(),

                                RichEditor::make('Description')
                                    ->default(null)
                            ]),

                        Grid::make(3)
                            ->schema([
                                Select::make('country_id')
                                    ->label('Country')
                                    ->placeholder('Select Country')
                                    ->relationship('country', 'name')
                                    ->live(),


                                Select::make('state_id')
                                    ->label('State')
                                    ->placeholder('Select State')
                                    ->options(fn($get) => $get('country_id') ? State::where('country_id', $get('country_id'))->pluck('name', 'id') : [])
                                    ->default(null)
                                    ->live(),

                                Select::make('city_id')
                                    ->label('City')
                                    ->placeholder('Select City')
                                    ->options(fn($get) => $get('state_id') ? City::where('state_id', $get('state_id'))->pluck('name', 'id') : [])
                                    ->default(null)
                                    ->live(),

                            ]),

                    ])->columnSpanFull(),


                    Step::make('Social Media')->components([

                        Grid::make(3)
                            ->schema([
                                TextInput::make('facebook')
                                    ->default(null),
                                TextInput::make('twitter')
                                    ->default(null),
                                TextInput::make('pinterest')
                                    ->default(null),
                                TextInput::make('linkedin')
                                    ->default(null),

                            ]),

                    ])->columnSpanFull(),


                    Step::make('Other Details')->components([

                        Grid::make(2)
                            ->schema([
                                TextInput::make('reg_number')
                                    ->default(null),

                                TextInput::make('founded')
                                    ->default(null),
                            ]),

                        Grid::make(3)
                            ->schema([
                                Select::make('company_size')
                                    ->options([
                                        '1-10' => '1 10',
                                        '11-50' => '11 50',
                                        '51-100' => '51 100',
                                        '101-300' => '101 300',
                                        '301-600' => '301 600',
                                        '600+' => '600+',
                                    ])
                                    ->default(null),

                                Select::make('organization_type')
                                    ->options([
                                        'public' => 'Public',
                                        'private' => 'Private',
                                        'NGO' => 'N g o',
                                        'Sole Proprietorship' => 'Sole proprietorship',
                                        'Government' => 'Government',
                                    ])
                                    ->default(null),

                                TextInput::make('total_offices')
                                    ->numeric()
                                    ->default(null),
                            ]),

                    ])->columnSpanFull(),


                    Step::make('HR Details')->components([

                        Grid::make(2)
                            ->schema([
                                TextInput::make('reg_number')
                                    ->default(null),

                                TextInput::make('founded')
                                    ->default(null),
                            ]),

                        Grid::make(3)
                            ->schema([
                                TextInput::make('hr_name')
                                    ->default(null),

                                TextInput::make('hr_email')
                                    ->email()
                                    ->default(null),

                                TextInput::make('hr_designation')
                                    ->default(null),
                            ]),

                    ])->columnSpanFull(),

                    Step::make('Premium Packages')->schema([
                        Select::make('employer_package_id')
                            ->label('Employer Package')
                            ->options(fn() => Package::where('for', 'employer')->pluck('name', 'id')),

                        Select::make('cv_package_id')
                            ->label('CV Package')
                            ->options(fn() => Package::where('for', 'cv_search')->pluck('name', 'id'))


                    ]),



                ])->columnSpanFull(),

            ]);
    }
}
