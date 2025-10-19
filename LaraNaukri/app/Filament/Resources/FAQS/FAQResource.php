<?php

namespace App\Filament\Resources\FAQS;

use App\Filament\Resources\FAQS\Pages\CreateFAQ;
use App\Filament\Resources\FAQS\Pages\EditFAQ;
use App\Filament\Resources\FAQS\Pages\ListFAQS;
use App\Filament\Resources\FAQS\Schemas\FAQForm;
use App\Filament\Resources\FAQS\Tables\FAQSTable;
use App\Models\FAQ;
use BackedEnum;
use Filament\Navigation\NavigationItem;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class FAQResource extends Resource {
    protected static ?string $model = FAQ::class;
    protected static ?string $label = 'FAQs';

    protected static string|UnitEnum|null $navigationGroup = 'FAQs';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::QuestionMarkCircle;

    protected static ?string $recordTitleAttribute = 'question';

    public static function form(Schema $schema): Schema {
        return FAQForm::configure($schema);
    }

    public static function table(Table $table): Table {
        return FAQSTable::configure($table);
    }

    public static function getRelations(): array {
        return [
            //
        ];
    }

    public static function getPages(): array {
        return [
            'index' => ListFAQS::route('/'),
            'create' => CreateFAQ::route('/create'),
            'edit' => EditFAQ::route('/{record}/edit'),
        ];
    }

    public static function getNavigationItems(): array {


        return [
            NavigationItem::make('faq')
                ->group("FAQs")
                ->label('List All FAQs')
                ->icon(static::getNavigationIcon())
                ->activeIcon(static::getActiveNavigationIcon())
                ->isActiveWhen(fn() => request()->routeIs('filament.admin.resources.f-a-q-s.index'))
                ->badge(static::getNavigationBadge(), color: static::getNavigationBadgeColor())
                ->badgeTooltip(static::getNavigationBadgeTooltip())
                ->url(static::getNavigationUrl()),
        ];
    }
}
