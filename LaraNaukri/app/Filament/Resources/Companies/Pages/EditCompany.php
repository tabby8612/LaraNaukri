<?php

namespace App\Filament\Resources\Companies\Pages;

use App\Filament\Resources\Companies\CompanyResource;
use App\Models\PaymentHistory;
use Filament\Actions\DeleteAction;
use Filament\Actions\ViewAction;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class EditCompany extends EditRecord {
    protected static string $resource = CompanyResource::class;

    protected function getHeaderActions(): array {
        return [
            ViewAction::make(),
            DeleteAction::make(),
        ];
    }

    protected function mutateFormDataBeforeSave(array $data): array {

        $record = $this->getRecord();

        $data['slug'] = Str::slug("{$data['name']}-{$record->id}");

        if (isset($data['employer_package_id'])) {
            $packageID = Arr::pull($data, 'employer_package_id');

            PaymentHistory::create([
                'user_id' => $record->id,
                'package_id' => $packageID,
                'method' => 'Added By Admin',
            ]);
        }

        if (isset($data['cv_package_id'])) {
            $packageID = Arr::pull($data, 'cv_package_id');

            PaymentHistory::create([
                'user_id' => $record->id,
                'package_id' => $packageID,
                'method' => 'Added By Admin',
            ]);

        }

        Arr::pull($data, 'employer_package_id');
        Arr::pull($data, 'cv_package_id');

        return $data;
    }

    protected function getRedirectUrl(): string {
        return $this->getResource()::getUrl('view', ['record' => $this->getRecord()]);
    }


}
