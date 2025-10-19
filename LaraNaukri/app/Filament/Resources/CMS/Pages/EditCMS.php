<?php

namespace App\Filament\Resources\CMS\Pages;

use App\Filament\Resources\CMS\CMSResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditCMS extends EditRecord
{
    protected static string $resource = CMSResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
