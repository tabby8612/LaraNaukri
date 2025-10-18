<?php

namespace App\Filament\Resources\Blogposts;

use App\Filament\Resources\Blogposts\Pages\CreateBlogpost;
use App\Filament\Resources\Blogposts\Pages\EditBlogpost;
use App\Filament\Resources\Blogposts\Pages\ListBlogposts;
use App\Filament\Resources\Blogposts\Schemas\BlogpostForm;
use App\Filament\Resources\Blogposts\Tables\BlogpostsTable;
use App\Models\Blogpost;
use BackedEnum;
use Filament\Navigation\NavigationItem;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class BlogpostResource extends Resource {
    protected static ?string $model = Blogpost::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::PencilSquare;

    protected static string|UnitEnum|null $navigationGroup = 'Blog Posts';

    protected static ?string $recordTitleAttribute = 'title';

    public static function form(Schema $schema): Schema {
        return BlogpostForm::configure($schema);
    }

    public static function table(Table $table): Table {
        return BlogpostsTable::configure($table);
    }

    public static function getRelations(): array {
        return [
            //
        ];
    }

    public static function getPages(): array {
        return [
            'index' => ListBlogposts::route('/'),
            'create' => CreateBlogpost::route('/create'),
            'edit' => EditBlogpost::route('/{record}/edit'),
        ];
    }

    public static function getNavigationItems(): array {
        return [
            NavigationItem::make("List All Blog Posts")
                ->group('Blog Posts')
                ->icon(static::getNavigationIcon())
                ->activeIcon(static::getActiveNavigationIcon())
                ->badge(static::getNavigationBadge(), color: static::getNavigationBadgeColor())
                ->badgeTooltip(static::getNavigationBadgeTooltip())
                ->isActiveWhen(fn() => request()->routeIs('filament.admin.resources.blogposts.index'))
                ->sort(static::getNavigationSort())
                ->url(static::getNavigationUrl()),
        ];
    }
}
