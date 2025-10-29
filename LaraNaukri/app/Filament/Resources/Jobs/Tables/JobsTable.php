<?php

namespace App\Filament\Resources\Jobs\Tables;

use App\CompanyService;
use App\Models\Company;
use App\Models\Country;
use App\Models\State;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\CreateAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Forms\Components\Group;
use Filament\Forms\Components\Section;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Enums\FiltersLayout;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TernaryFilter;
use Filament\Tables\Table;
use GuzzleHttp\Promise\Create;
use Illuminate\Support\Str;


class JobsTable {


    public static function configure(Table $table): Table {
        return $table
            ->columns([
                TextColumn::make('companies.name')
                    ->sortable()->searchable(isIndividual: true),
                TextColumn::make('title')
                    ->searchable(isIndividual: true),

                TextColumn::make('city.name'),
                TextColumn::make('slug'),
            ])
            ->filters([
                //
                SelectFilter::make('Company')
                    // ->options(fn() => Company::pluck('name', 'id')->toArray())
                    ->relationship('companies', 'name')
                    ->attribute('company_id'),


                SelectFilter::make('country_id')
                    ->label('Country')
                    ->options(fn() => Country::pluck('name', 'id')->toArray())
                    ->attribute('country_id'),

                TernaryFilter::make('is_featured')

            ], layout: FiltersLayout::AboveContent)
            ->recordActions([
                ViewAction::make(),
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ])
            ->searchable(false);
    }
}
