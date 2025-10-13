<?php

namespace App\Filament\Resources\Companies\Schemas;

use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class CompanyInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('user.name')
                    ->label('User')
                    ->placeholder('-'),
                TextEntry::make('name'),
                TextEntry::make('location')
                    ->placeholder('-'),
                TextEntry::make('industry.name')
                    ->label('Industry')
                    ->placeholder('-'),
                ImageEntry::make('image_path')
                    ->placeholder('-'),
                TextEntry::make('description')
                    ->placeholder('-')
                    ->columnSpanFull(),
                TextEntry::make('url')
                    ->placeholder('-'),
                TextEntry::make('phone')
                    ->placeholder('-'),
                TextEntry::make('facebook')
                    ->placeholder('-'),
                TextEntry::make('twitter')
                    ->placeholder('-'),
                TextEntry::make('pinterest')
                    ->placeholder('-'),
                TextEntry::make('linkedin')
                    ->placeholder('-'),
                TextEntry::make('country_id')
                    ->numeric()
                    ->placeholder('-'),
                TextEntry::make('state_id')
                    ->numeric()
                    ->placeholder('-'),
                TextEntry::make('city_id')
                    ->numeric()
                    ->placeholder('-'),
                TextEntry::make('hr_name')
                    ->placeholder('-'),
                TextEntry::make('hr_email')
                    ->placeholder('-'),
                TextEntry::make('hr_designation')
                    ->placeholder('-'),
                TextEntry::make('reg_number')
                    ->placeholder('-'),
                TextEntry::make('founded')
                    ->placeholder('-'),
                TextEntry::make('company_size')
                    ->badge()
                    ->placeholder('-'),
                TextEntry::make('organization_type')
                    ->badge()
                    ->placeholder('-'),
                TextEntry::make('total_offices')
                    ->numeric()
                    ->placeholder('-'),
                TextEntry::make('created_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('updated_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('slug')
                    ->placeholder('-'),
            ]);
    }
}
