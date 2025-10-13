<?php

namespace App\Filament\Resources\Users;

use App\Filament\Resources\Users\Pages\CreateUser;
use App\Filament\Resources\Users\Pages\EditUser;
use App\Filament\Resources\Users\Pages\ListUsers;
use App\Filament\Resources\Users\Schemas\UserForm;
use App\Filament\Resources\Users\Tables\UsersTable;
use App\Models\User;
use BackedEnum;
use Filament\Navigation\NavigationItem;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use UnitEnum;


class UserResource extends Resource {
    protected static ?string $model = User::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::User;

    protected static ?string $navigationLabel = 'List All Admin Users';
    protected static UnitEnum|string|null $navigationGroup = 'Admin Users';



    protected static ?string $recordTitleAttribute = 'Admin Users';

    public static function form(Schema $schema): Schema {
        return UserForm::configure($schema);
    }

    public static function table(Table $table): Table {
        return UsersTable::configure($table);
    }

    public static function getEloquentQuery(): Builder {
        return parent::getEloquentQuery()->where('role', '=', 'admin');
    }

    public static function getRelations(): array {
        return [
            //
        ];
    }

    public static function getPages(): array {
        return [
            'index' => ListUsers::route('/'),
            'create' => CreateUser::route('/create'),
            'edit' => EditUser::route('/{record}/edit'),
        ];
    }

    public static function getNavigationItems(): array {
        return [
            NavigationItem::make('List of Admin Users')
                ->url(fn() => UserResource::getUrl('index'))
                ->icon(Heroicon::User)
                ->group('Admin Users')
                ->isActiveWhen(fn() => request()->routeIs('filament.admin.resources.users.index')),
        ];
    }
}
