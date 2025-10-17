<?php

namespace App\Filament\Resources\Candidates\Schemas;

use App\Models\City;
use App\Models\Country;
use App\Models\DegreeLevel;
use App\Models\DegreeType;
use App\Models\State;
use Filament\Actions\Action;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Fieldset;
use Filament\Schemas\Components\Flex;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Schema;
use Filament\Widgets\StatsOverviewWidget\Stat;

use function Pest\Laravel\options;

class CandidateForm {
    public static function configure(Schema $schema): Schema {
        return $schema
            ->components([
                Tabs::make('Details')->tabs([
                    Tab::make('Details')->schema([

                        Grid::make()->schema([
                            TextInput::make('first_name')
                                ->required(),

                            TextInput::make('last_name')
                                ->required(),

                            FileUpload::make('image_path')
                                ->image()
                                ->label('Profile Image')
                                ->disk('public')
                                ->visibility('public')
                                ->directory('candidates')
                                ->required(),

                            FileUpload::make('cover_image_path')
                                ->image()
                                ->label('Cover Image')
                                ->disk('public')
                                ->directory('candidates')
                                ->required(),

                            Grid::make()
                                ->relationship('user')
                                ->schema([
                                    TextInput::make('email')
                                        ->label('Email')
                                        ->required(),

                                    TextInput::make('password')
                                        ->label('Password')
                                        ->password()
                                        ->required(),
                                ])->visibleOn('create'),


                            Grid::make(3)->schema([
                                Select::make('country_id')
                                    ->relationship('country', 'name')
                                    ->required()
                                    ->live(),

                                Select::make('state_id')
                                    ->label('State')
                                    ->options(fn($get) => $get('country_id') ? State::where('country_id', $get('country_id'))->pluck('name', 'id') : [])
                                    ->default(null)
                                    ->live(),

                                Select::make('city_id')
                                    ->label('City')
                                    ->options(fn($get) => $get('state_id') ? City::where('state_id', $get('state_id'))->pluck('name', 'id') : [])
                                    ->default(null),
                            ])->columnSpanFull(),


                            TextInput::make('profession')
                                ->required(),

                            TextInput::make('profile_views')
                                ->required()
                                ->numeric()
                                ->default(1),

                            Grid::make(4)->schema([
                                Select::make('career_level_id')
                                    ->relationship('careerLevel', 'name')
                                    ->required(),

                                Select::make('gender_id')
                                    ->relationship('gender', 'name')
                                    ->required(),

                                Select::make('marital_status_id')
                                    ->relationship('maritalStatus', 'name')
                                    ->required(),

                                Select::make('nationality_id')
                                    ->relationship('nationality', 'name')
                                    ->required(),

                                TextInput::make('phone')
                                    ->tel()
                                    ->required(),

                                TextInput::make('mobile')
                                    ->tel()
                                    ->required()
                                    ->default(null),

                                TextInput::make('address')
                                    ->required()
                                    ->default(null),

                                DatePicker::make('date_of_birth')
                                    ->minDate(now()->subYears(150))
                                    ->maxDate(now())
                                    ->required()

                            ])->columnSpanFull(),


                            Grid::make(3)->schema([
                                Select::make('industry_id')
                                    ->relationship('industry', 'name')
                                    ->required(),

                                Select::make('category_id')
                                    ->relationship('category', 'name')
                                    ->required(),

                                Select::make('experience_id')
                                    ->relationship('experience', 'name')
                                    ->required(),

                            ]),


                            TextInput::make('video_profile')
                                ->default(null),


                            TextInput::make('salary_from')
                                ->required()
                                ->numeric()
                                ->default(0),
                            TextInput::make('salary_to')
                                ->required()
                                ->numeric()
                                ->default(0),


                            Grid::make(3)->schema([
                                Toggle::make('is_featured'),

                                Toggle::make('open_to_work')
                                    ->required(),

                                Toggle::make('is_subscribed')
                                    ->required(),

                            ])


                        ]),

                    ])->columnSpanFull(),

                    Tab::make('Summary')->schema([
                        RichEditor::make('summary')
                            ->required()
                            ->columnSpanFull(),
                    ]),

                    Tab::make('Languages')->schema([
                        Select::make('languages')
                            ->relationship('languages', 'name')
                            ->preload()
                            ->multiple()
                    ])->hiddenOn('edit'),
                    Tab::make('Skills')->schema([
                        Repeater::make('skills')
                            ->relationship('skills')
                            ->schema([
                                Grid::make()->schema([
                                    Select::make('skill_id')->relationship('skill', 'name'),
                                    Select::make('experience_id')->relationship('experience', 'name'),

                                ])
                            ])
                    ]),
                    Tab::make('Education')->schema([
                        Repeater::make('educations')
                            ->relationship('educations')
                            ->schema([


                                Grid::make(3)->schema([
                                    TextInput::make('title')->label('Degree Title'),
                                    TextInput::make('institution')->label('Degree Institution'),
                                    TextInput::make('year')->label('Degree Year'),
                                ]),


                                Grid::make()->schema([

                                    Select::make('degree_level_id')
                                        ->label('Degree Level')
                                        ->options(fn() => DegreeLevel::pluck('name', 'id'))
                                        ->live(),


                                    Select::make('degree_type_id')
                                        ->label('Degree Type')
                                        ->options(fn(Get $get) => DegreeType::query()->where('degree_level_id', $get('degree_level_id'))->pluck('name', 'id'))
                                        ->live()
                                ]),

                                Grid::make(3)->schema([

                                    Select::make('country_id')
                                        ->label('Country')
                                        ->options(fn() => Country::pluck('name', 'id'))
                                        ->live(),


                                    Select::make('state_id')
                                        ->label('State')
                                        ->label('City')
                                        ->options(fn(Get $get) => State::query()->where('country_id', $get('country_id'))->pluck('name', 'id'))
                                        ->live(),

                                    Select::make('city_id')
                                        ->options(fn(Get $get) => City::query()->where('state_id', $get('state_id'))->pluck('name', 'id'))
                                        ->live()
                                ]),

                                Grid::make(2)->schema([

                                    TextInput::make('result')->label('Degree Result'),
                                    Select::make('result_type')->label('Type')->options(['GPA' => 'GPA', 'Grade' => 'Grade', 'Percentage' => 'Percentage']),

                                ])


                            ])
                    ]),
                    Tab::make('Projects')->schema([
                        Repeater::make('projects')
                            ->relationship('projects')
                            ->schema([


                                Grid::make(2)->schema([
                                    TextInput::make('name')->label('Project Name'),
                                    TextInput::make('url')->label('Project Url'),
                                ]),

                                FileUpload::make('image_path')
                                    ->label('Image')
                                    ->disk('public')
                                    ->directory('project_images')
                                    ->required()
                                    ->columnSpanFull(),

                                Grid::make(3)->schema([

                                    DatePicker::make('start_date')->required(),

                                    DatePicker::make('end_date')
                                        ->disabled(fn(Get $get) => $get('ongoing')),

                                    Toggle::make('ongoing')
                                        ->label('Ongoing')
                                        ->inline(false)
                                        ->live(),

                                ]),

                                Grid::make(1)->schema([

                                    RichEditor::make('description')->required()
                                ]),




                            ])
                    ]),



                ])->columnSpanFull()


            ]);
    }
}
