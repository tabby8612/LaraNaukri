<?php

namespace App\Filament\Resources\Candidates\Pages;

use App\Filament\Resources\Candidates\CandidateResource;
use Filament\Resources\Pages\CreateRecord;

class CreateCandidate extends CreateRecord {

    protected static string $resource = CandidateResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array {

        return $data;
    }


    public function afterCreate() {


    }
}
