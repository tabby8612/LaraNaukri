<?php

namespace App\Filament\Resources\Companies;

use App\Filament\Resources\Companies\Pages\CreateCompany;
use App\Filament\Resources\Companies\Pages\EditCompany;
use App\Filament\Resources\Companies\Pages\ListCompanies;
use App\Filament\Resources\Companies\Pages\ViewCompany;
use App\Filament\Resources\Companies\Schemas\CompanyForm;
use App\Filament\Resources\Companies\Schemas\CompanyInfolist;
use App\Filament\Resources\Companies\Tables\CompaniesTable;
use App\Models\Company;
use App\Models\User;
use BackedEnum;
use Filament\Navigation\NavigationItem;
use Filament\Resources\Pages\Page;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class CompanyResource extends Resource {
    protected static ?string $model = Company::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::BuildingOffice;

    protected static ?string $recordTitleAttribute = 'name';

    protected static UnitEnum|string|null $navigationGroup = 'Companies';

    protected static ?string $navigationLabel = 'List All Companies';





    public static function form(Schema $schema): Schema {
        return CompanyForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema {
        return CompanyInfolist::configure($schema);
    }

    public static function table(Table $table): Table {
        return CompaniesTable::configure($table);
    }

    public static function getRelations(): array {
        return [
            //

        ];
    }

    public static function getPages(): array {
        return [
            'index' => ListCompanies::route('/'),
            'create' => CreateCompany::route('/create'),
            'view' => ViewCompany::route('/{record}'),
            'edit' => EditCompany::route('/{record}/edit'),
        ];
    }

    public static function getNavigationItems(): array {
        return [
            NavigationItem::make('List of Companies')
                ->url(fn() => CompanyResource::getUrl('index'))
                ->icon(Heroicon::BuildingOffice2)
                ->group('Companies')
                ->isActiveWhen(fn() => request()->routeIs('filament.admin.resources.companies.index')),
        ];

    }


}
