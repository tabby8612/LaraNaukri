<?php

namespace App\Filament\Resources\Candidates\Pages;

use App\Filament\Resources\Candidates\CandidateResource;
use App\Jobs\GenerateResume;
use App\Models\Candidate;
use App\Models\User;
use App\Service\CandidateService;
use Carbon\Carbon;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Support\Arr;

class CreateCandidate extends CreateRecord {

    protected static string $resource = CandidateResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array {

        return $data;
    }


    public function afterCreate() {


    }
}
