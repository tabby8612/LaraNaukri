<?php

namespace App\Filament\Widgets;

use App\Filament\Resources\Jobs\JobResource;
use App\Models\Job;
use Filament\Actions\BulkActionGroup;
use Filament\Forms\Components\RichEditor\TextColor;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;
use Illuminate\Database\Eloquent\Builder;

class RecentJobs extends TableWidget {
    public function table(Table $table): Table {
        return $table
            ->query(fn(): Builder => Job::query()->with(['category', 'country'])->latest())
            ->columns([
                //
                TextColumn::make('name')
                    ->label('List of Recent Jobs')
                    ->icon('heroicon-s-check-circle')
                    ->iconColor('success')
                    ->state(fn($record) => "{$record->title} 🏢{$record->category?->name} 📌{$record->country?->name}")
                    ->url(fn($record) => JobResource::getUrl('view', ['record' => $record->id]))
            ])
            ->striped()
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
