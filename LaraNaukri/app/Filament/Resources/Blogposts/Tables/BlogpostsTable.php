<?php

namespace App\Filament\Resources\Blogposts\Tables;

use Carbon\Carbon;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\CreateAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class BlogpostsTable {
    public static function configure(Table $table): Table {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->limit(50)
                    ->searchable(isIndividual: true),


                TextColumn::make('description')
                    ->limit(50)
                    ->html()
                    ->searchable(isIndividual: true),


                TextColumn::make('updated_at')
                    ->getStateUsing(function ($record) {
                        $updatedDate = Carbon::parse($record->updated_at)->diffForHumans();
                        return $updatedDate;
                    })
                    ->sortable(),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make()
            ])
            ->searchable(false)
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
