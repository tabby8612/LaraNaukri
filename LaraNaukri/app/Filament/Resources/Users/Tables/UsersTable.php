<?php

namespace App\Filament\Resources\Users\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class UsersTable {
    public static function configure(Table $table): Table {
        return $table
            ->columns([
                TextColumn::make('id')
                    ->searchable(),
                TextColumn::make('name')
                    ->searchable(),
                TextColumn::make('email')
                    ->label('Email address')
                    ->searchable(),
                TextColumn::make('role')
                    ->badge(),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make()->badge(),
                DeleteAction::make()->badge()
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
