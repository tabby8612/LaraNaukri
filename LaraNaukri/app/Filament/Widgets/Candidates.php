<?php

namespace App\Filament\Widgets;

use App\Models\Candidate;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class Candidates extends StatsOverviewWidget {
    protected static bool $isLazy = false;

    protected function getStats(): array {
        return [
            //
            Stat::make('', Candidate::all()->count())
                ->description('Total Candidates')
                ->extraAttributes(['class' => 'relative overflow-hidden bg-teal-500 shadow text-white flex justify-center items-center'])
                ->color('white')
                ->icon('heroicon-s-academic-cap')
                ->columnSpan(1),
            Stat::make('', Candidate::query()->where('is_featured', 1)->count())
                ->description('Featured Candidate')
                ->extraAttributes(['class' => 'relative overflow-hidden bg-red-500 shadow text-white flex justify-center items-center'])
                ->color('white')
                ->icon('heroicon-s-bolt')
                ->columnSpan(1),
            Stat::make('', Candidate::query()->where('open_to_work', 1)->count())
                ->description('Open To Work')
                ->icon('heroicon-s-finger-print')
                ->extraAttributes(['class' => 'relative overflow-hidden bg-sky-500 shadow text-white flex justify-center items-center'])
                ->color('white')
                ->columnSpan(1),
        ];
    }
}
