<?php

namespace App\Filament\Widgets;

use App\Models\Company;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class Companies extends StatsOverviewWidget {

    protected static bool $isLazy = false;

    protected function getStats(): array {
        return [
            Stat::make('', Company::all()->count())
                ->description('Total Companies')
                ->extraAttributes(['class' => 'relative overflow-hidden bg-teal-500 shadow text-white flex justify-center items-center'])
                ->color('white')
                ->icon('heroicon-s-building-office-2')
                ->columnSpan(1),

        ];
    }
}
