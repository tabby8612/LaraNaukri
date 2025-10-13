<?php

namespace App\Filament\Resources\Companies\Pages;

use App\Filament\Resources\Companies\CompanyResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Filament\Support\Icons\Heroicon;

class ListCompanies extends ListRecords {
    protected static string $resource = CompanyResource::class;

    protected function getHeaderActions(): array {
        return [
            CreateAction::make()
                ->label('Add New Company')
                ->icon(Heroicon::Plus)
                ->color('white')
        ];
    }
}
