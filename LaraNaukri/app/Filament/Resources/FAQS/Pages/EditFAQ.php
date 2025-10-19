<?php

namespace App\Filament\Resources\FAQS\Pages;

use App\Filament\Resources\FAQS\FAQResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditFAQ extends EditRecord
{
    protected static string $resource = FAQResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
