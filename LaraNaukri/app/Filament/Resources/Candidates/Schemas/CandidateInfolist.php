<?php

namespace App\Filament\Resources\Candidates\Schemas;

use App\Filament\Resources\Jobs\JobResource;
use Faker\Core\Color;
use Filament\Infolists\Components\Grid as ComponentsGrid;
use Filament\Infolists\Components\IconEntry;
use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\RepeatableEntry;
use Filament\Infolists\Components\Section as ComponentsSection;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Components\TextEntry\TextEntrySize;
use Filament\Schemas\Components\Flex;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Schema;
use Filament\Support\Enums\FontWeight;
use Filament\Support\Enums\TextSize;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\HtmlString;
use Filament\Infolists\Components\RepeatableEntry\TableColumn;


class CandidateInfolist {
    public static function configure(Schema $schema): Schema {
        return $schema
            ->components([

                Grid::make(12)->schema([


                    Grid::make(1)->schema([
                        Section::make()->schema([
                            Grid::make(5)->schema([
                                Grid::make(1)->schema([
                                    ImageEntry::make('image_path')
                                        ->disk('public')
                                        ->hiddenLabel(),

                                ])->columnSpan(1),

                                Grid::make(1)->schema([
                                    TextEntry::make('full_name')
                                        ->getStateUsing(fn($record) => "{$record?->first_name} {$record?->last_name}")
                                        ->hiddenLabel()
                                        ->extraAttributes(['class' => 'text-2xl font-bold']),


                                    TextEntry::make('created_at')
                                        ->hiddenLabel()
                                        ->getStateUsing(fn($record) => "Member since {$record->created_at}")
                                        ->icon('heroicon-s-cake')

                                    ,

                                    TextEntry::make('resume_path')
                                        ->url(fn($record) => isset($record->resume_path) && Storage::disk('public')->exists($record->resume_path)
                                            ? Storage::url($record->resume_path)
                                            : "", true)
                                        ->getStateUsing(fn($record) => $record->resume_path ? 'Download CV' : 'No CV Found')
                                        ->hiddenLabel()
                                        ->extraAttributes(['class' => 'px-3 py-2 bg-green-600 text-white size-fit rounded hover:brightess-110'])

                                ])
                                    ->columnSpan(4)
                                    ->gap(1)

                            ])->columnSpanFull()

                        ])->columns(8)
                            ->columnSpan(8)
                            ->extraAttributes(['class' => 'shadow-2xl rounded']),


                        Section::make()->schema([
                            TextEntry::make('summary')->html()->columnSpanFull()

                        ])
                            ->columns(8)
                            ->columnSpan(8)
                            ->heading(new HtmlString("<h1 class='text-2xl text-green-600 font-bold'>About me (Summary)</h1>"))
                            ->extraAttributes(['class' => 'shadow-2xl rounded']),



                        Section::make()->schema([

                            RepeatableEntry::make('educations')->schema([
                                Grid::make(1)
                                    ->id('card')
                                    ->schema([
                                        TextEntry::make('title')
                                            ->hiddenLabel()
                                            ->getStateUsing(fn($record) => "{$record->title} - {$record->degreeLevel->name}")
                                            ->color('success')
                                            ->size(TextSize::Large)
                                            ->weight(FontWeight::Bold),

                                        TextEntry::make('institution')
                                            ->hiddenLabel()
                                            ->getStateUsing(fn($record) => "{$record->institution} - {$record->country->name} - {$record->year}"),


                                        TextEntry::make('result')
                                            ->hiddenLabel()
                                            ->getStateUsing(fn($record) => "{$record->result} {$record->result_type}"),

                                    ])
                                    ->gap(0)


                            ])
                                ->hiddenLabel()
                                ->columnSpanFull()


                        ])
                            ->columns(8)
                            ->columnSpan(8)
                            ->heading(new HtmlString("<h1 class='text-2xl text-green-600 font-bold'>Education</h1>"))
                            ->extraAttributes(['class' => 'shadow-2xl rounded']),


                        Section::make()->schema([

                            RepeatableEntry::make('projects')->schema([
                                Grid::make(1)
                                    ->id('project-card')
                                    ->schema([
                                        Grid::make(6)->schema([
                                            ImageEntry::make('image_path')
                                                ->hiddenLabel()
                                                ->disk('public')
                                                ->columnSpan(2)
                                                ->extraAttributes(['class' => 'rounded-2xl overflow-x-hidden']),


                                            Grid::make(1)->schema([
                                                TextEntry::make('name')
                                                    ->size(TextSize::Large)
                                                    ->weight(FontWeight::Bold)
                                                    ->color('success')
                                                    ->hiddenLabel(),
                                                TextEntry::make("date")
                                                    ->hiddenLabel()
                                                    ->size(TextSize::ExtraSmall)
                                                    ->getStateUsing(function ($record) {
                                                        $endDate = $record->ongoing ? 'Ongoing' : $record->end_date;
                                                        return "{$record->start_date} - {$endDate}";
                                                    }),
                                                TextEntry::make('description')
                                                    ->size(TextSize::Small)
                                                    ->html()
                                                    ->extraAttributes(['class' => 'mt-4'])
                                                    ->hiddenLabel(),



                                            ])->columnSpan(3)->gap(0)


                                        ])

                                    ])
                                    ->gap(1)


                            ])
                                ->hiddenLabel()
                                ->columnSpanFull()


                        ])
                            ->columns(8)
                            ->columnSpan(8)
                            ->heading(new HtmlString("<h1 class='text-2xl text-green-600 font-bold'>Portfolio</h1>"))
                            ->extraAttributes(['class' => 'shadow-2xl rounded']),

                        Section::make()->schema([

                            RepeatableEntry::make('applications')
                                ->table([
                                    TableColumn::make('Name'),
                                    TableColumn::make('Job Title'),
                                    TableColumn::make('Company Name'),
                                    TableColumn::make('Applied Date')
                                ])
                                ->schema([
                                    TextEntry::make('name')
                                        ->getStateUsing(fn($record) => "{$record->first_name} {$record->last_name}"),

                                    TextEntry::make('job.title')
                                        ->color('success')
                                        ->url(fn($record) => JobResource::getUrl('view', ['record' => $record])),

                                    TextEntry::make('job.companies.name'),

                                    TextEntry::make('created_at')->date('d/m/o'),

                                ])
                                ->columnSpanFull()
                                ->hiddenLabel()


                        ])
                            ->columns(8)
                            ->columnSpan(8)
                            ->heading(new HtmlString("<h1 class='text-2xl text-green-600 font-bold'>Applied On Jobs</h1>"))
                            ->extraAttributes(['class' => 'shadow-2xl rounded']),



                    ])->columnSpan(8),



                    Grid::make(1)->schema([
                        Section::make('Contact Details')->schema([
                            TextEntry::make('phone')->icon('heroicon-s-phone')->hiddenLabel()->iconColor('primary'),
                            TextEntry::make('mobile')->icon('heroicon-s-device-phone-mobile')->hiddenLabel()->iconColor('primary'),
                            TextEntry::make('user.email')->icon('heroicon-s-envelope')->hiddenLabel()->iconColor('primary'),
                            TextEntry::make('country.name')->icon('heroicon-s-map-pin')->hiddenLabel()->iconColor('primary'),
                        ])
                            ->heading(new HtmlString("<h1 class='text-2xl text-green-600 font-bold'>Contact Details</h1>"))
                            ->extraAttributes(['class' => 'shadow-xl']),

                        Section::make('Candidate Details')->schema([
                            IconEntry::make('open_to_work')->boolean()->label('Open To Work')->inlineLabel(),
                            TextEntry::make('gender.name')->label('Gender')->inlineLabel(),
                            TextEntry::make('maritalStatus.name')->label('Marital Status')->inlineLabel(),
                            TextEntry::make('experience.name')->label('Experience')->inlineLabel(),
                            TextEntry::make('careerLevel.name')->label('Career Level')->inlineLabel(),
                            TextEntry::make('industry.name')->label('Profession')->inlineLabel(),
                            IconEntry::make('is_featured')
                                ->boolean()
                                ->label('Featured')
                                ->inlineLabel()
                                ->falseIcon('heroicon-o-star')
                                ->trueIcon('heroicon-s-star')->trueColor('success'),
                            TextEntry::make('salary_from')->label('Current Salary')->inlineLabel()->color('success'),
                            TextEntry::make('salary_to')->label('Expected Salary')->inlineLabel()->color('danger')

                        ])
                            ->heading(new HtmlString("<h1 class='text-2xl text-green-600 font-bold'>Candidate Details</h1>"))
                            ->extraAttributes(['class' => 'shadow-xl']),

                        Section::make('Skills')->schema([
                            RepeatableEntry::make('skills')
                                ->schema([
                                    TextEntry::make('skill.name')->hiddenLabel()
                                        ->weight(FontWeight::Bold)
                                        ->color('success')
                                        ->extraAttributes(['class' => 'flex justify-center'])
                                    ,
                                    TextEntry::make('experience.name')
                                        ->hiddenLabel()
                                        ->extraAttributes(['class' => 'flex justify-center']),
                                ])
                                ->hiddenLabel()
                                ->grid(2)
                                ->gap(0)


                        ])
                            ->heading(new HtmlString("<h1 class='text-2xl text-green-600 font-bold'>Skills</h1>"))
                            ->extraAttributes(['class' => 'shadow-xl']),


                        Section::make('languages')->schema([
                            RepeatableEntry::make('languages')
                                ->schema([
                                    TextEntry::make('name')->hiddenLabel()
                                        ->weight(FontWeight::Bold)
                                        ->color('success')
                                        ->extraAttributes(['class' => 'flex justify-center'])
                                    ,
                                    TextEntry::make('pivot.language_level')
                                        ->hiddenLabel()
                                        ->extraAttributes(['class' => 'flex justify-center']),
                                ])
                                ->hiddenLabel()
                                ->grid(2)
                                ->gap(0)


                        ])
                            ->heading(new HtmlString("<h1 class='text-2xl text-green-600 font-bold'>Languages</h1>"))
                            ->extraAttributes(['class' => 'shadow-xl']),


                    ])->columnSpan(4)->extraAttributes(['class' => 'bg-transparent']),

                ])->columnSpanFull()

                // TextEntry::make('user.name')
                //     ->label('User')
                //     ->placeholder('-'),
                // TextEntry::make('first_name'),
                // TextEntry::make('last_name')
                //     ->placeholder('-'),
                // ImageEntry::make('image_path')
                //     ->placeholder('-'),
                // TextEntry::make('resume_path')
                //     ->placeholder('-'),
                // TextEntry::make('profession')
                //     ->placeholder('-'),
                // TextEntry::make('country.name')
                //     ->label('Country')
                //     ->placeholder('-'),
                // TextEntry::make('state.name')
                //     ->label('State')
                //     ->placeholder('-'),
                // TextEntry::make('city.name')
                //     ->label('City')
                //     ->placeholder('-'),
                // TextEntry::make('careerLevel.name')
                //     ->label('Career level')
                //     ->placeholder('-'),
                // IconEntry::make('is_featured')
                //     ->boolean()
                //     ->placeholder('-'),
                // TextEntry::make('created_at')
                //     ->dateTime()
                //     ->placeholder('-'),
                // TextEntry::make('updated_at')
                //     ->dateTime()
                //     ->placeholder('-'),
                // TextEntry::make('profile_views')
                //     ->numeric(),
                // ImageEntry::make('cover_image_path'),
                // TextEntry::make('gender.name')
                //     ->label('Gender')
                //     ->placeholder('-'),
                // TextEntry::make('maritalStatus.name')
                //     ->label('Marital status')
                //     ->placeholder('-'),
                // TextEntry::make('nationality.name')
                //     ->label('Nationality')
                //     ->placeholder('-'),
                // TextEntry::make('date_of_birth')
                //     ->dateTime()
                //     ->placeholder('-'),
                // TextEntry::make('phone')
                //     ->placeholder('-'),
                // TextEntry::make('mobile')
                //     ->placeholder('-'),
                // TextEntry::make('address')
                //     ->placeholder('-'),
                // TextEntry::make('video_profile')
                //     ->placeholder('-'),
                // TextEntry::make('experience_id')
                //     ->numeric()
                //     ->placeholder('-'),
                // TextEntry::make('industry.name')
                //     ->label('Industry')
                //     ->placeholder('-'),
                // TextEntry::make('category.name')
                //     ->label('Category')
                //     ->placeholder('-'),
                // TextEntry::make('salary_from')
                //     ->numeric(),
                // TextEntry::make('salary_to')
                //     ->numeric(),
                // TextEntry::make('summary')
                //     ->placeholder('-')
                //     ->columnSpanFull(),
                // IconEntry::make('open_to_work')
                //     ->boolean(),
                // IconEntry::make('is_subscribed')
                //     ->boolean(),
            ]);
    }
}
