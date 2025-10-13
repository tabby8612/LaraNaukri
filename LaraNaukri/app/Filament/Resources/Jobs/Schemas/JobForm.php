<?php

namespace App\Filament\Resources\Jobs\Schemas;

use App\Enums\CurrencyEnums;
use App\Enums\SalaryPeriod;
use App\Models\City;
use App\Models\Company;
use App\Models\Country;
use App\Models\Skill;
use App\Models\State;
use Filament\Forms\Components\DateTimePicker;
use Filament\Schemas\Components\Grid;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Wizard;
use Filament\Schemas\Components\Wizard\Step;
use Filament\Schemas\Schema;
use Illuminate\Support\HtmlString;


class JobForm {
    public static function configure(Schema $schema): Schema {
        return $schema
            ->components([
                Wizard::make([
                    Step::make('Job Details')->schema([
                        Select::make('company_id')
                            ->label('Company')
                            ->options(fn() => Company::query()->pluck('name', 'id'))
                            ->searchable()
                            ->columnSpanFull()
                            ->preload(),

                        Select::make('category_id')
                            ->relationship('category', 'name')
                            ->searchable()
                            ->preload()
                            ->default(null),

                        TextInput::make('title')
                            ->columnSpanFull()
                            ->required(),

                        Select::make('type')
                            ->options(['internship' => 'Internship', 'full time' => 'Full time', 'contract' => 'Contract'])
                            ->required(),

                        Select::make('shift')
                            ->options([
                                'first shift' => 'First shift',
                                'second shift' => 'Second shift',
                                'third shift' => 'Third shift',
                                'rotating' => 'Rotating',
                            ])
                            ->required(),

                        Select::make('gender')
                            ->options(['male' => 'Male', 'female' => 'Female'])
                            ->columnSpanFull()
                            ->required(),

                        TextInput::make('degree')
                            ->columnSpanFull()
                            ->required(),
                    ]),


                    Step::make('Description')->schema([
                        RichEditor::make('description')
                            ->columnSpanFull()
                            ->required(),

                        RichEditor::make('benefits')
                            ->columnSpanFull()
                            ->required(),
                    ]),

                    Step::make('Location')->schema([
                        Select::make('country_id')
                            ->label('Country')
                            ->placeholder('Select Country')
                            ->options(fn() => Country::pluck('name', 'id'))
                            ->preload()
                            ->live(),

                        Select::make('state_id')
                            ->label('State')
                            ->placeholder('Select State')
                            ->options(fn($get) => State::query()->where('country_id', $get('country_id'))->pluck('name', 'id'))
                            ->live(),

                        Select::make('city_id')
                            ->label('City')
                            ->placeholder('Select City')
                            ->options(fn($get) => $get('state_id') ? City::query()->where('state_id', $get('state_id'))->pluck('name', 'id') : [])
                            ->live(),
                    ]),

                    Step::make('Experience')->schema([
                        Select::make('skills')
                            ->relationship('skills', 'name')
                            ->multiple()
                            ->createOptionForm([
                                TextInput::make('name')->required()
                            ]),

                        TextInput::make('positions')
                            ->required()
                            ->columnSpanFull()
                            ->numeric(),

                        Select::make('experience_id')
                            ->relationship('experience', 'name')
                            ->columnSpanFull()
                            ->required(),


                        Select::make('career_level')
                            ->options([
                                'experienced professional' => 'Experienced professional',
                                'entry level' => 'Entry level',
                                'department head' => 'Department head',
                                'GM / CEO / Country Head / President' => 'G m/ c e o/ country head/ president',
                            ])
                            ->required(),
                    ]),

                    Step::make('Salary')->schema([

                        Grid::make(3)->components([
                            Select::make('currency')
                                // ->options(['$' => 'Dollar $'])
                                ->options(collect(CurrencyEnums::cases())->mapWithKeys(fn($item) => [$item->value => $item->label()]))
                                ->default(null),

                            TextInput::make('salary_from')
                                ->required()
                                ->numeric(),

                            TextInput::make('salary_to')
                                ->required()
                                ->numeric(),

                            Toggle::make('hide_salary')
                                ->required(),
                        ]),

                    ]),

                    Step::make('Other Details')->schema([
                        Select::make('period')
                            ->options(collect(SalaryPeriod::cases())->mapWithKeys(fn($item) => [$item->value => $item->label()]))
                            ->default(null),

                        DateTimePicker::make('apply_before')
                            ->required(),

                        Toggle::make('is_open')
                            ->label('Open')
                            ->required(),

                        Toggle::make('is_featured')
                            ->label('Featured')
                            ->required(),
                        Toggle::make('is_freelance')
                            ->label('Freelance')
                            ->required(),

                        Grid::make(2)->schema([
                            Toggle::make('is_external')
                                ->required(),

                            TextInput::make('external_url')
                                ->url()
                                ->default(null),
                        ])->columnSpanFull(),
                    ]),



                ])
                    ->columnSpanFull()

                    ->submitAction(new HtmlString('<button class="fi-color fi-color-primary fi-bg-color-600 text-white hover:fi-bg-color-300 dark:fi-bg-color-600 dark:hover:fi-bg-color-500 fi-text-color-900 hover:fi-text-color-800 dark:fi-text-color-950 dark:hover:fi-text-color-950 fi-btn fi-size-md  fi-ac-btn-action" type="submit">Save New Job</button>')),


            ])->columns(3);
    }
}
