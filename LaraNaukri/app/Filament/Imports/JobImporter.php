<?php

namespace App\Filament\Imports;

use App\Models\Job;
use Filament\Actions\Imports\ImportColumn;
use Filament\Actions\Imports\Importer;
use Filament\Actions\Imports\Models\Import;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Number;

class JobImporter extends Importer {
    protected static ?string $model = Job::class;

    public static function getColumns(): array {
        return [
            ImportColumn::make('title')
                ->requiredMapping()
                ->example(['Job Title 1', 'Job Title 2'])
                ->rules(['required', 'max:255']),
            ImportColumn::make('company')
                ->requiredMapping()
                ->relationship('companies', 'name')
                ->example(['Apple', 'Samsung'])
                ->rules(['required']),
            ImportColumn::make('category')
                ->example(['Web Developer', 'Information Technology'])
                ->relationship("category", 'name')
                ->rules(['required']),
            ImportColumn::make('description')
                ->requiredMapping()
                ->example(['This is job description 1', 'This is job description 2'])
                ->rules(['required']),
            ImportColumn::make('benefits')
                ->requiredMapping()
                ->example(['This is job benefits 1', 'This is job benefits 2'])
                ->rules(['required']),
            ImportColumn::make('country')
                ->relationship('country', 'name')
                ->example(['United States Of America', 'United States of Emirates'])
                ->rules(['required']),
            ImportColumn::make('state')
                ->relationship('state', 'name')
                ->example(['Texas', 'Dubai'])
                ->rules(['required']),
            ImportColumn::make('city')
                ->relationship('city', 'name')
                ->example(['Houston', 'Dubai'])
                ->rules(['required']),
            ImportColumn::make('currency')
                ->example(['£', '$']),
            ImportColumn::make('period')
                ->example(['1', '2']),
            ImportColumn::make('salary_from')
                ->requiredMapping()
                ->numeric()
                ->example([2000, 2500])
                ->rules(['required', 'integer']),
            ImportColumn::make('salary_to')
                ->requiredMapping()
                ->numeric()
                ->example([5000, 5500])
                ->rules(['required', 'integer']),
            ImportColumn::make('hide_salary')
                ->requiredMapping()
                ->boolean()
                ->rules(['required', 'boolean']),
            ImportColumn::make('type')
                ->requiredMapping()
                ->example(['internship', 'full time'])
                ->rules(['required']),
            ImportColumn::make('shift')
                ->requiredMapping()
                ->example(['first shift', 'second shift'])
                ->rules(['required']),
            ImportColumn::make('career_level')
                ->requiredMapping()
                ->example(['experienced professional', 'entry level'])
                ->rules(['required']),
            ImportColumn::make('experience')
                ->requiredMapping()
                ->relationship('experience', 'name')
                ->example(['Fresh', 'Less Than 1 Year'])
                ->rules(['required']),
            ImportColumn::make('gender')
                ->requiredMapping()
                ->example(['male', 'female'])
                ->rules(['required']),
            ImportColumn::make('degree')
                ->requiredMapping()
                ->example(['Bachelors Degree', 'Associate Degree'])
                ->rules(['required', 'max:255']),
            ImportColumn::make('is_freelance')
                ->requiredMapping()
                ->boolean()
                ->example([1, 0])
                ->rules(['required', 'boolean']),
            ImportColumn::make('is_external')
                ->requiredMapping()
                ->boolean()
                ->example([1, 0])
                ->rules(['required', 'boolean']),
            ImportColumn::make('external_url')
                ->rules(['max:255']),
            ImportColumn::make('positions')
                ->requiredMapping()
                ->example([5, 10])
                ->numeric()
                ->rules(['required', 'integer']),
            ImportColumn::make('apply_before')
                ->requiredMapping()
                ->example(['10/10/2026', '11/11/2026'])
                ->rules(['required']),
            ImportColumn::make('is_featured')
                ->requiredMapping()
                ->boolean()
                ->example([1, 0])
                ->rules(['required', 'boolean']),


            ImportColumn::make('location')
                ->example(['USA', 'UAE'])
                ->rules(['max:255']),


            ImportColumn::make('is_open')
                ->requiredMapping()
                ->example([1, 0])
                ->boolean()
                ->rules(['required', 'boolean']),

            ImportColumn::make('slug')
                ->rules(['max:255']),
        ];
    }

    protected function beforeSave(): void {
        // ...
        $data = $this->data;

    }

    protected function afterSave(): void {
        // Runs after a record is saved to the database.
        $record = $this->record;
        Log::warning(json_encode($this->record));

    }

    public function resolveRecord(): Job {
        Log::debug(json_encode($this->data));

        return new Job();
    }

    public static function getCompletedNotificationBody(Import $import): string {
        $body = 'Your job import has completed and ' . Number::format($import->successful_rows) . ' ' . str('row')->plural($import->successful_rows) . ' imported.';

        if ($failedRowsCount = $import->getFailedRowsCount()) {
            $body .= ' ' . Number::format($failedRowsCount) . ' ' . str('row')->plural($failedRowsCount) . ' failed to import.';
        }

        return $body;
    }
}
