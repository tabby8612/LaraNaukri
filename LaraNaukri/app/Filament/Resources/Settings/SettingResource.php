<?php

namespace App\Filament\Resources\Settings;

use App\Filament\Resources\Settings\Pages\CreateSetting;
use App\Filament\Resources\Settings\Pages\EditSetting;
use App\Filament\Resources\Settings\Pages\ListSettings;
use App\Filament\Resources\Settings\Schemas\SettingForm;
use App\Filament\Resources\Settings\Tables\SettingsTable;
use App\Models\Setting;
use BackedEnum;
use Filament\Navigation\NavigationItem;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Database\Eloquent\Model;
use UnitEnum;

class SettingResource extends Resource {
    protected static ?string $model = Setting::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::Cog6Tooth;

    protected static string|UnitEnum|null $navigationGroup = "Settings";

    protected static ?string $recordTitleAttribute = 'data';

    public static function form(Schema $schema): Schema {
        return SettingForm::configure($schema);
    }

    public static function table(Table $table): Table {
        return SettingsTable::configure($table);
    }

    public static function getRelations(): array {
        return [
            //
        ];
    }

    public static function getPages(): array {
        return [
            'edit' => EditSetting::route('/{record}/edit'),
        ];
    }

    public static function getNavigationItems(): array {
        return [
            NavigationItem::make('Manage Site Settings')
                ->group('Settings')
                ->isActiveWhen(fn() => request()->routeIs('filament.admin.resources.settings.edit'))
                ->url(static::getUrl('edit', ['record' => 1])),
        ];
    }



    public static function getIndexUrl(array $parameters = [], bool $isAbsolute = true, ?string $panel = null, ?Model $tenant = null, bool $shouldGuessMissingParameters = false): string {

        return static::getUrl('edit', ['record' => 1]);
    }



    public static function getRecordTitle(?Model $record): string|Htmlable|null {
        return "Settings";
    }
}
