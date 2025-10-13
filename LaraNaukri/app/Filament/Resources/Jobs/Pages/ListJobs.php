<?php

namespace App\Filament\Resources\Jobs\Pages;

use App\Filament\Resources\Jobs\JobResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Filament\Support\Icons\Heroicon;

class ListJobs extends ListRecords {
    protected static string $resource = JobResource::class;

    protected function getHeaderActions(): array {
        return [
            CreateAction::make()
                ->label('Add New Job')
                ->icon(Heroicon::Plus)
                ->iconPosition('left')
                ->color('white'),
        ];
    }
}
