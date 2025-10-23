<?php

namespace App\Filament\Pages;

use App\Filament\Widgets\ActiveCompanies;
use App\Filament\Widgets\ActiveUsers;
use App\Filament\Widgets\Candidates;
use App\Filament\Widgets\Companies;
use App\Filament\Widgets\Jobs;
use Filament\Pages\Page;

use Filament\Pages\Dashboard as BaseDashboard;
use Filament\Widgets\AccountWidget;
use Filament\Widgets\FilamentInfoWidget;


class Dashboard extends BaseDashboard {

    public function getColumns(): int|array {
        return 15;
    }

    public function getWidgets(): array {
        return [
            ActiveUsers::class,
            Jobs::class,
            Candidates::class,
            Companies::class
        ];
    }

    public function UsersWidgets() {
        return [
            ActiveUsers::class,
        ];
    }

    public function JobsWidgets() {
        return [
            Jobs::class,
        ];
    }

    public function CandidatesWidgets() {
        return [
            Candidates::class,
        ];
    }
    public function CompaniesWidgets() {
        return [
            Companies::class
        ];
    }

    public function ActiveCompaniesWidgets() {
        return [
            ActiveCompanies::class
        ];
    }

    protected string $view = 'filament.pages.dashboard';
}
