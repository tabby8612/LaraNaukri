<?php

namespace App\Filament\Widgets;

use App\Models\User;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class ActiveUsers extends StatsOverviewWidget {


    protected static bool $isLazy = false;
    // protected int|string|array $columnSpan = 4;



    protected function getStats(): array {
        return [
            Stat::make('', User::all()->count())
                ->description('Active User')
                ->extraAttributes(['class' => 'relative overflow-hidden bg-teal-500 shadow text-white flex justify-center items-center'])
                ->color('white')
                ->icon('heroicon-s-users')
                ->columnSpan(1),
            Stat::make('', User::query()->whereNotNull('email_verified_at')->count())
                ->description('Verified User')
                ->icon('heroicon-s-face-smile')
                ->extraAttributes(['class' => 'relative overflow-hidden bg-red-500 shadow text-white flex justify-center items-center '])
                ->color('white')
                ->columnSpan(1),
            Stat::make('', User::query()->where('role', 'admin')->count())
                ->description('Admin User')
                ->icon('heroicon-s-face-smile')
                ->extraAttributes(['class' => 'relative overflow-hidden bg-sky-500 shadow text-white flex justify-center items-center'])
                ->color('white')
                ->columnSpan(1),

        ];
    }
}
