<?php

namespace App\Filament\Resources\Jobs\Schemas;

use App\Models\Company;
use Filament\Actions\Action;
use Filament\Actions\EditAction;
use Filament\Infolists\Components\IconEntry;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;

class JobInfolist {
    public static function configure(Schema $schema): Schema {
        return $schema
            ->components([
                Section::make("Job Details")
                    ->description("Basic description of job")
                    ->icon(Heroicon::Briefcase)
                    ->iconColor('success')
                    ->schema([

                        Grid::make(3)->schema([
                            TextEntry::make('category.name')
                                ->label('Category')
                                ->placeholder('-')->limit(15),
                            TextEntry::make('title'),
                            TextEntry::make('companies.name'),

                        ]),


                        Grid::make(4)->schema([
                            TextEntry::make('type')
                                ->badge(),
                            TextEntry::make('shift')
                                ->badge(),
                            TextEntry::make('career_level')
                                ->badge(),
                            TextEntry::make('positions')
                                ->numeric(),
                        ])

                    ]),

                Section::make("Salary Details")
                    ->description("Basic Salary Information of job")
                    ->icon(Heroicon::CurrencyDollar)
                    ->iconColor('success')
                    ->schema([
                        Grid::make(4)->schema([
                            TextEntry::make('location')
                                ->placeholder('-'),

                            TextEntry::make('country.name')
                                ->label('Country')
                                ->placeholder('-'),

                            TextEntry::make('city.name')
                                ->label('City')
                                ->placeholder('-'),


                        ]),

                        Grid::make(4)->schema([
                            TextEntry::make('currency')
                                ->badge()
                                ->placeholder('-'),
                            TextEntry::make('period')
                                ->badge()
                                ->placeholder('-'),
                            TextEntry::make('salary_from')
                                ->numeric(),
                            TextEntry::make('salary_to')
                                ->numeric(),

                        ])


                    ]),

                Section::make("Education, Experience and Degree")
                    ->description("Basic education and Degree requirement of job")
                    ->icon(Heroicon::AcademicCap)
                    ->iconColor('success')
                    ->schema([
                        TextEntry::make('gender')
                            ->badge(),
                        Grid::make(2)->schema([
                            TextEntry::make('experience.name')
                                ->label('Experience'),
                            TextEntry::make('degree'),

                        ])


                    ]),

                Section::make("Other Features")
                    ->description("Other features of the job")
                    ->icon(Heroicon::Star)
                    ->iconColor('success')
                    ->schema([
                        Grid::make(4)->schema([
                            TextEntry::make('apply_before')
                                ->dateTime('d-m-o'),

                            IconEntry::make('is_open')
                                ->boolean(),

                            IconEntry::make('is_featured')
                                ->boolean(),
                            IconEntry::make('is_freelance')
                                ->boolean(),

                        ]),

                        Grid::make(4)->schema([


                            IconEntry::make('is_external')
                                ->boolean(),
                            TextEntry::make('external_url')
                                ->placeholder('-'),
                        ]),




                    ]),

                Section::make("Job Description and Experience")
                    ->description("Basic description and expertience of job")
                    ->icon(Heroicon::Document)
                    ->iconColor('success')
                    ->columnSpanFull()
                    ->schema([
                        TextEntry::make('description')
                            ->html()
                            ->columnSpanFull(),
                        TextEntry::make('benefits')
                            ->html()
                            ->columnSpanFull(),

                    ]),






            ]);
    }
}
