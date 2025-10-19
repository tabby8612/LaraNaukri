<?php

namespace App\Filament\Resources\CMS;

use App\Filament\Resources\CMS\Pages\CreateCMS;
use App\Filament\Resources\CMS\Pages\EditCMS;
use App\Filament\Resources\CMS\Pages\ListCMS;
use App\Filament\Resources\CMS\Schemas\CMSForm;
use App\Filament\Resources\CMS\Tables\CMSTable;
use App\Models\CMS;
use BackedEnum;
use Filament\Navigation\NavigationItem;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class CMSResource extends Resource {
    protected static ?string $model = CMS::class;
    protected static ?string $label = 'C.M.S Pages';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::DocumentText;
    protected static string|UnitEnum|null $navigationGroup = 'CMS Pages';

    protected static ?string $recordTitleAttribute = 'title';

    public static function form(Schema $schema): Schema {
        return CMSForm::configure($schema);
    }

    public static function table(Table $table): Table {
        return CMSTable::configure($table);
    }

    public static function getRelations(): array {
        return [
            //
        ];
    }

    public static function getPages(): array {
        return [
            'index' => ListCMS::route('/'),
            'create' => CreateCMS::route('/create'),
            'edit' => EditCMS::route('/{record}/edit'),
        ];
    }

    public static function getNavigationItems(): array {
        return [
            NavigationItem::make('List All CMS Pages')
                ->url(fn() => CMSResource::getUrl('index'))
                ->group('CMS Pages')
                ->isActiveWhen(fn() => request()->routeIs('filament.admin.resources.c-m-s.index'))
                ->badge(static::getNavigationBadge(), color: static::getNavigationBadgeColor())
                ->badgeTooltip(static::getNavigationBadgeTooltip())
        ];
    }
}
