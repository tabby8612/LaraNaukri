<?php

namespace App\Filament\Resources\Cities\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class CitiesTable {
    public static function configure(Table $table): Table {
        return $table
            ->columns([
                //
                TextColumn::make('id')->label('ID'),
                TextColumn::make('name')->label('City')->searchable(isIndividual: true),
                TextColumn::make('state.name')->label('State')->searchable(isIndividual: true),
                TextColumn::make('country.name')->label('Country')->searchable(isIndividual: true),
                ImageColumn::make('image_path')->label('Image')->disk('public')

            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
