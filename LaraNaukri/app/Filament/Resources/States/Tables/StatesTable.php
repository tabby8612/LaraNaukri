<?php

namespace App\Filament\Resources\States\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class StatesTable {
    public static function configure(Table $table): Table {
        return $table
            ->columns([
                //
                TextColumn::make('id')->label('ID'),
                TextColumn::make('name')->label('Name')->searchable(isIndividual: true),
                TextColumn::make('country.name')->label('Country')->searchable(isIndividual: true),
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
