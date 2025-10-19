<?php

namespace App\Filament\Resources\FAQS\Pages;

use App\Filament\Resources\FAQS\FAQResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListFAQS extends ListRecords {
    protected static string $resource = FAQResource::class;

    protected function getHeaderActions(): array {
        return [
            CreateAction::make()
                ->label('Add New FAQ')
                ->color('white')
                ->icon('heroicon-s-plus'),
        ];
    }
}
