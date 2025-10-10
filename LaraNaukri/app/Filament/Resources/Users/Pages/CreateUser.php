<?php

namespace App\Filament\Resources\Users\Pages;

use App\Filament\Resources\Users\UserResource;
use Filament\Resources\Pages\CreateRecord;
use UnitEnum;

class CreateUser extends CreateRecord {
    protected static string $resource = UserResource::class;

    protected static ?string $navigationLabel = 'Add Admin Users';
    protected static UnitEnum|string|null $navigationGroup = 'Admin Users';

}
