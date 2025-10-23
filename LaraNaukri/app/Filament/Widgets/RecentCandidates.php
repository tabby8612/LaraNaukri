<?php

namespace App\Filament\Widgets;

use App\Filament\Resources\Candidates\CandidateResource;
use App\Models\Candidate;
use Filament\Actions\BulkActionGroup;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;
use Illuminate\Database\Eloquent\Builder;

class RecentCandidates extends TableWidget {
    public function table(Table $table): Table {
        return $table
            ->query(fn(): Builder => Candidate::query()->with(['user', 'country'])->latest())
            ->striped()
            ->columns([
                //
                TextColumn::make('first_name')
                    ->label('List of Recent Candidates')
                    ->icon('heroicon-s-check-circle')
                    ->iconColor('success')
                    ->state(fn($record) => "{$record->first_name} {$record->last_name} ({$record->user?->email}) - 🏠 {$record->country?->name}")
                    ->url(fn($record) => CandidateResource::getUrl('view', ['record' => $record->id]))
            ])
            ->filters([
                //
            ])
            ->headerActions([
                //
            ])
            ->recordActions([
                //
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    //
                ]),
            ]);
    }
}
