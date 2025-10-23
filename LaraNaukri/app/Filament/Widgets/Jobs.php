<?php

namespace App\Filament\Widgets;

use App\Models\Job;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class Jobs extends StatsOverviewWidget {

    protected static bool $isLazy = false;


    protected function getStats(): array {
        return [
            Stat::make('', Job::all()->count())
                ->description('Total Jobs')
                ->extraAttributes(['class' => 'relative overflow-hidden bg-red-500 shadow text-white flex justify-center items-center'])
                ->color('white')
                ->icon('heroicon-s-briefcase')
                ->columnSpan(1),
            Stat::make('', Job::query()->where('is_featured', 1)->count())
                ->description('Featured Job')
                ->extraAttributes(['class' => 'relative overflow-hidden bg-teal-500 shadow text-white flex justify-center items-center'])
                ->color('white')
                ->icon('heroicon-s-bolt')
                ->columnSpan(1),
            Stat::make('', Job::query()->where('is_open', 1)->count())
                ->description('Open Jobs')
                ->icon('heroicon-s-eye')
                ->extraAttributes(['class' => 'relative overflow-hidden bg-violet-500 shadow text-white flex justify-center items-center'])
                ->color('white')
                ->columnSpan(1),
        ];
    }
}
