<?php

namespace App\Filament\Resources\Countries;

use App\Filament\Resources\Countries\Pages\CreateCountry;
use App\Filament\Resources\Countries\Pages\EditCountry;
use App\Filament\Resources\Countries\Pages\ListCountries;
use App\Filament\Resources\Countries\Schemas\CountryForm;
use App\Filament\Resources\Countries\Tables\CountriesTable;
use App\Models\Country;
use BackedEnum;
use Filament\Navigation\NavigationItem;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class CountryResource extends Resource {
    protected static ?string $model = Country::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::GlobeAlt;
    protected static string|UnitEnum|null $navigationGroup = 'Location';
    protected static ?string $navigationLabel = 'List of Countries';
    protected static ?int $navigationSort = 16;

    protected static ?string $recordTitleAttribute = 'name';

    public static function form(Schema $schema): Schema {
        return CountryForm::configure($schema);
    }

    public static function table(Table $table): Table {
        return CountriesTable::configure($table);
    }

    public static function getRelations(): array {
        return [
            //
        ];
    }

    public static function getNavigationItems(): array {
        if (!static::hasPage('index')) {
            return [];
        }

        return [
            NavigationItem::make(static::getNavigationLabel())
                ->group(static::getNavigationGroup())
                ->isActiveWhen(fn() => request()->routeIs('filament.admin.resources.countries.index'))
                ->url(static::getNavigationUrl()),
        ];
    }

    public static function getPages(): array {
        return [
            'index' => ListCountries::route('/'),
            'edit' => EditCountry::route('/{record}/edit'),
        ];
    }
}
