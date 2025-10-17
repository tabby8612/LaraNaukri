<?php

namespace App\Filament\Resources\Candidates;

use App\Filament\Resources\Candidates\Pages\CreateCandidate;
use App\Filament\Resources\Candidates\Pages\EditCandidate;
use App\Filament\Resources\Candidates\Pages\ListCandidates;
use App\Filament\Resources\Candidates\Pages\ViewCandidate;
use App\Filament\Resources\Candidates\RelationManagers\LanguagesRelationManager;
use App\Filament\Resources\Candidates\Schemas\CandidateForm;
use App\Filament\Resources\Candidates\Schemas\CandidateInfolist;
use App\Filament\Resources\Candidates\Tables\CandidatesTable;
use App\Models\Candidate;
use BackedEnum;
use Filament\Navigation\NavigationItem;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class CandidateResource extends Resource {
    protected static ?string $model = Candidate::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::UserGroup;
    protected static ?string $navigationLabel = 'List All Candidates';
    protected static UnitEnum|string|null $navigationGroup = 'Candidates';


    public static function form(Schema $schema): Schema {
        return CandidateForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema {
        return CandidateInfolist::configure($schema);
    }

    public static function table(Table $table): Table {
        return CandidatesTable::configure($table);
    }

    public static function getRelations(): array {
        return [
                //
            LanguagesRelationManager::class
        ];
    }

    public static function getPages(): array {
        return [
            'index' => ListCandidates::route('/'),
            'create' => CreateCandidate::route('/create'),
            'view' => ViewCandidate::route('/{record}'),
            'edit' => EditCandidate::route('/{record}/edit'),
        ];
    }

    public static function getNavigationItems(): array {
        return [
            NavigationItem::make('List of Candidates')
                ->url(fn() => CandidateResource::getUrl('index'))
                ->icon(Heroicon::Users)
                ->group('Candidates')
                ->isActiveWhen(fn() => request()->routeIs('filament.admin.resources.candidates.index')),

        ];
    }
}
