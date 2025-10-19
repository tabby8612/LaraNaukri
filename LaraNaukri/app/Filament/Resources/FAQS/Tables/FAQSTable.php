<?php

namespace App\Filament\Resources\FAQS\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class FAQSTable {
    public static function configure(Table $table): Table {
        return $table
            ->columns([
                //
                TextColumn::make('id'),
                TextColumn::make('question'),
                TextColumn::make('answer')->html(),
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
