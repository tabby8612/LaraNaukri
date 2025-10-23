<?php

namespace App\Filament\Widgets;

use App\Filament\Resources\Companies\CompanyResource;
use App\Models\Company;
use Filament\Actions\BulkActionGroup;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;
use Illuminate\Database\Eloquent\Builder;

class ActiveCompanies extends TableWidget {
    public function table(Table $table): Table {
        return $table
            ->query(fn(): Builder => Company::query()->with(['user', 'country']))
            ->striped()
            ->columns([
                TextColumn::make('name')
                    ->label('List of Active Companies')
                    ->state(fn($record) => "{$record->name} - 🏠 {$record->location}")
                    ->icon('heroicon-s-check-circle')
                    ->iconColor('success')
                    ->url(fn($record) => CompanyResource::getUrl('view', ['record' => $record->id]))

            ]);

    }
}
