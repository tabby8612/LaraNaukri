<?php

namespace App\Filament\Resources\Jobs;

use App\Filament\Resources\Jobs\Pages\CreateJob;
use App\Filament\Resources\Jobs\Pages\EditJob;
use App\Filament\Resources\Jobs\Pages\ImportJobs;
use App\Filament\Resources\Jobs\Pages\ListJobs;
use App\Filament\Resources\Jobs\Pages\ViewJob;
use App\Filament\Resources\Jobs\Schemas\JobForm;
use App\Filament\Resources\Jobs\Schemas\JobInfolist;
use App\Filament\Resources\Jobs\Tables\JobsTable;
use App\Models\Country;
use App\Models\Job;
use BackedEnum;
use Filament\Actions\CreateAction;
use Filament\Forms\Form;
use Filament\Navigation\NavigationItem;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use UnitEnum;

class JobResource extends Resource {
    protected static ?string $model = Job::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::Briefcase;

    protected static ?string $navigationLabel = 'List All Jobs';
    protected static string|UnitEnum|null $navigationGroup = 'Jobs';
    protected static ?int $navigationSort = 4;

    protected static ?string $recordTitleAttribute = 'jobs_listings';

    public static function form(Schema $schema): Schema {
        return JobForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema {
        return JobInfolist::configure($schema);
    }

    public static function table(Table $table): Table {
        return JobsTable::configure($table);
    }

    public static function getRelations(): array {
        return [
            //
        ];
    }

    public static function getNavigationItems(): array {
        return [
            NavigationItem::make('Jobs')
                ->url(fn() => static::getUrl('index'))
                ->icon(Heroicon::Briefcase)
                ->group('Jobs')
                ->isActiveWhen(fn() => request()->routeIs('filament.admin.resources.jobs.index')),
        ];
    }





    public static function getPages(): array {
        return [
            'import' => Pages\ImportJobs::route('/import'),
            'index' => ListJobs::route('/'),
            'create' => CreateJob::route('/create'),
            'view' => ViewJob::route('/{record}'),
            'edit' => EditJob::route('/{record}/edit'),
        ];
    }
}
