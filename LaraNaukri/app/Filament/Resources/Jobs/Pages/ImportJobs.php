<?php

namespace App\Filament\Resources\Jobs\Pages;

use App\Filament\Imports\JobImporter;
use App\Filament\Resources\Jobs\JobResource;
use App\Models\Job;
use Filament\Actions\ImportAction;
use Filament\Resources\Pages\Page;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Concerns\InteractsWithTable;
use Filament\Tables\Contracts\HasTable;
use Filament\Tables\Table;

class ImportJobs extends Page implements HasTable {
    use InteractsWithTable;

    protected static string $resource = JobResource::class;

    protected string $view = 'filament.resources.jobs.pages.import-jobs';

    public function table(Table $table) {
        return $table
            ->columns([
                TextColumn::make('id'),
                TextColumn::make('title')
            ])
            ->query(Job::query())
            ->headerActions([
                ImportAction::make('Import Jobs')->importer(JobImporter::class)
            ]);
    }
}
