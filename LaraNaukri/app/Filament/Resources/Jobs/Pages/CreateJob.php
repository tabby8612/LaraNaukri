<?php

namespace App\Filament\Resources\Jobs\Pages;

use App\Filament\Resources\Jobs\JobResource;
use App\Models\Country;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Support\Str;


class CreateJob extends CreateRecord {
    protected static string $resource = JobResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array {

        $data['location'] = Country::query()->where('id', $data['country_id'])->first()->name;

        return $data;
    }

    protected function afterCreate(): void {
        // Runs after the form fields are saved to the database.
        $record = $this->record;

        $record->slug = Str::slug("{$record->title}-{$record->id}");

        $record->save();

    }

}
