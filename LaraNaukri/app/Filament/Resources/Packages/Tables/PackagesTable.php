<?php

namespace App\Filament\Resources\Packages\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class PackagesTable {
    public static function configure(Table $table): Table {
        return $table
            ->columns([
                //
                TextColumn::make('id'),
                TextColumn::make('name'),
                TextColumn::make('price'),
                TextColumn::make('num_days'),
                TextColumn::make('num_listings'),
                TextColumn::make('for')->badge()->color(fn(string $state) => match ($state) {
                    'job_seeker' => 'success',
                    'employer' => 'warning',
                    'cv_search' => 'warning',
                    'make_featured' => 'success'
                }),
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
