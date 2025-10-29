<?php

namespace App\Filament\Resources\Companies\Schemas;

use App\Filament\Resources\Jobs\JobResource;
use Filament\Forms\Components\Repeater\TableColumn as RepeaterTableColumn;
use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\RepeatableEntry;
use Filament\Infolists\Components\RepeatableEntry\TableColumn;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;

use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Support\HtmlString;

class CompanyInfolist {
    public static function configure(Schema $schema): Schema {
        return $schema
            ->components([

                Section::make()->schema([

                    Grid::make()->schema([
                        ImageEntry::make('image_path')
                            ->visibility('public')
                            ->getStateUsing(fn($record) => asset('storage/' . $record->image_path))
                            ->defaultImageUrl('/storage/app/public/default.png')
                            ->hiddenLabel(true)
                            ->imageWidth(200)

                        ,

                        Grid::make()->schema([
                            TextEntry::make('name')->hiddenLabel(true)
                                ->extraAttributes(['class' => 'text-3xl font-bold'])
                            ,

                            TextEntry::make('industry.name')
                                ->hiddenLabel(true)
                                ->extraAttributes(["class" => 'mt-2'])
                                ->icon(Heroicon::BuildingOffice)
                                ->iconColor('primary')
                            ,


                            TextEntry::make('created_at')
                                ->hiddenLabel(true)
                                ->getStateUsing(fn($record) => "Member since {$record->created_at->format('d-m-o')}")
                                ->extraAttributes(attributes: ["class" => 'mt-2'])
                                ->icon(Heroicon::Cake)
                                ->iconColor('primary')
                            ,

                            TextEntry::make('location')
                                ->hiddenLabel(true)
                                ->extraAttributes(["class" => 'mt-2'])
                                ->icon(Heroicon::MapPin)
                                ->iconColor('primary')
                            ,

                        ])->columns(1)->columnSpan(3)->gap(0),


                        Grid::make(1)->schema([
                            TextEntry::make("phone")
                                ->icon(Heroicon::Phone)
                                ->hiddenLabel(true)
                                ->extraAttributes(["class" => 'mt-2'])
                                ->iconColor('primary'),

                            TextEntry::make("user.email")
                                ->icon(Heroicon::Envelope)
                                ->extraAttributes(["class" => 'mt-2'])
                                ->hiddenLabel(true)
                                ->limit(23)
                                ->iconColor('primary'),

                            TextEntry::make("url")
                                ->icon(Heroicon::GlobeAlt)
                                ->extraAttributes(["class" => 'mt-2'])
                                ->hiddenLabel(true)
                                ->limit(23)
                                ->iconColor('primary'),
                        ])->gap(0),

                    ])->columns(5)

                ])->columnSpan(3)->extraAttributes(['class' => 'shadow-2xl']),


                Grid::make(12)->schema([
                    Grid::make(1)->schema([
                        Section::make('About Company')->schema([
                            TextEntry::make('description')
                                ->html()
                                ->hiddenLabel(),


                        ])
                            ->extraAttributes(['class' => 'shadow-xl'])
                            ->heading(new HtmlString("<h1 class='font-bold text-green-600 text-2xl'>About Company</h1>")),

                        Section::make('Jobs')->schema([
                            RepeatableEntry::make('jobs')
                                ->table([
                                    TableColumn::make('Title'),
                                    TableColumn::make('Type'),
                                    TableColumn::make('Career Level'),
                                    TableColumn::make('Experience'),
                                    TableColumn::make('Category'),
                                ])
                                ->schema([
                                    TextEntry::make('title')->url(fn($record) => JobResource::getUrl('view', [$record])),
                                    TextEntry::make('type'),
                                    TextEntry::make('career_level'),
                                    TextEntry::make('experience.name')->badge(),
                                    TextEntry::make('category.name'),
                                ])
                                ->hiddenLabel()

                        ])
                            ->extraAttributes(['class' => 'shadow-xl'])
                            ->heading(new HtmlString("<h1 class='font-bold text-green-600 text-2xl'>Jobs</h1>"))
                    ])->columnSpan(8),



                    Section::make()->schema([
                        Grid::make(1)->schema([
                            TextEntry::make('Company Details')
                                ->hiddenLabel()
                                ->aboveLabel(new HtmlString("<h1 class='font-bold text-green-600 text-2xl'>Company Details</h1>"))
                            ,

                            TextEntry::make('organization_type')
                                ->label('Organization')
                                ->inlineLabel()
                            ,

                            TextEntry::make('founded')
                                ->label('Founded')
                                ->inlineLabel(),

                            TextEntry::make('jobs')
                                ->label('Job Count')
                                ->getStateUsing(fn($record) => collect($record->jobs)->count())
                                ->inlineLabel()
                            ,

                            TextEntry::make('horizontal_line')
                                ->label('Job Count')
                                ->hiddenLabel()
                                ->belowContent(new HtmlString("<hr class='border border-gray-300 w-[320px] mx-auto opacity-50' />"))
                            ,


                        ]),


                        Grid::make(1)->schema([
                            TextEntry::make('Company Person')
                                ->hiddenLabel()
                                ->aboveLabel(new HtmlString("<h1 class='font-bold text-primary text-2xl'>Company Person</h1>"))
                            ,

                            TextEntry::make('hr_name')
                                ->label('Name')
                                ->inlineLabel()
                            ,

                            TextEntry::make('hr_email')
                                ->label('email')
                                ->inlineLabel(),

                            TextEntry::make('hr_designation')
                                ->label('Designation')
                                ->inlineLabel(),

                            TextEntry::make('reg_number')
                                ->label('Reg. Number')
                                ->inlineLabel(),


                        ]),
                    ])
                        ->columnSpan(4)
                        ->extraAttributes(['class' => 'shadow-xl'])
                        ->gap(1)

                ])->columnSpanFull(),








                // TextEntry::make('user.name')
                //     ->label('User')
                //     ->placeholder('-'),
                // TextEntry::make('name'),
                // TextEntry::make('location')
                //     ->placeholder('-'),
                // TextEntry::make('industry.name')
                //     ->label('Industry')
                //     ->placeholder('-'),
                // ImageEntry::make('image_path')
                //     ->placeholder('-'),
                // TextEntry::make('description')
                //     ->placeholder('-')
                //     ->columnSpanFull(),
                // TextEntry::make('url')
                //     ->placeholder('-'),
                // TextEntry::make('phone')
                //     ->placeholder('-'),
                // TextEntry::make('facebook')
                //     ->placeholder('-'),
                // TextEntry::make('twitter')
                //     ->placeholder('-'),
                // TextEntry::make('pinterest')
                //     ->placeholder('-'),
                // TextEntry::make('linkedin')
                //     ->placeholder('-'),
                // TextEntry::make('country_id')
                //     ->numeric()
                //     ->placeholder('-'),
                // TextEntry::make('state_id')
                //     ->numeric()
                //     ->placeholder('-'),
                // TextEntry::make('city_id')
                //     ->numeric()
                //     ->placeholder('-'),
                // TextEntry::make('hr_name')
                //     ->placeholder('-'),
                // TextEntry::make('hr_email')
                //     ->placeholder('-'),
                // TextEntry::make('hr_designation')
                //     ->placeholder('-'),
                // TextEntry::make('reg_number')
                //     ->placeholder('-'),
                // TextEntry::make('founded')
                //     ->placeholder('-'),
                // TextEntry::make('company_size')
                //     ->badge()
                //     ->placeholder('-'),
                // TextEntry::make('organization_type')
                //     ->badge()
                //     ->placeholder('-'),
                // TextEntry::make('total_offices')
                //     ->numeric()
                //     ->placeholder('-'),
                // TextEntry::make('created_at')
                //     ->dateTime()
                //     ->placeholder('-'),
                // TextEntry::make('updated_at')
                //     ->dateTime()
                //     ->placeholder('-'),
                // TextEntry::make('slug')
                //     ->placeholder('-'),
            ]);
    }
}
