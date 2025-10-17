<?php

namespace App\Filament\Resources\Candidates\Schemas;

use Filament\Infolists\Components\IconEntry;
use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class CandidateInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('user.name')
                    ->label('User')
                    ->placeholder('-'),
                TextEntry::make('first_name'),
                TextEntry::make('last_name')
                    ->placeholder('-'),
                ImageEntry::make('image_path')
                    ->placeholder('-'),
                TextEntry::make('resume_path')
                    ->placeholder('-'),
                TextEntry::make('profession')
                    ->placeholder('-'),
                TextEntry::make('country.name')
                    ->label('Country')
                    ->placeholder('-'),
                TextEntry::make('state.name')
                    ->label('State')
                    ->placeholder('-'),
                TextEntry::make('city.name')
                    ->label('City')
                    ->placeholder('-'),
                TextEntry::make('careerLevel.name')
                    ->label('Career level')
                    ->placeholder('-'),
                IconEntry::make('is_featured')
                    ->boolean()
                    ->placeholder('-'),
                TextEntry::make('created_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('updated_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('profile_views')
                    ->numeric(),
                ImageEntry::make('cover_image_path'),
                TextEntry::make('gender.name')
                    ->label('Gender')
                    ->placeholder('-'),
                TextEntry::make('maritalStatus.name')
                    ->label('Marital status')
                    ->placeholder('-'),
                TextEntry::make('nationality.name')
                    ->label('Nationality')
                    ->placeholder('-'),
                TextEntry::make('date_of_birth')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('phone')
                    ->placeholder('-'),
                TextEntry::make('mobile')
                    ->placeholder('-'),
                TextEntry::make('address')
                    ->placeholder('-'),
                TextEntry::make('video_profile')
                    ->placeholder('-'),
                TextEntry::make('experience_id')
                    ->numeric()
                    ->placeholder('-'),
                TextEntry::make('industry.name')
                    ->label('Industry')
                    ->placeholder('-'),
                TextEntry::make('category.name')
                    ->label('Category')
                    ->placeholder('-'),
                TextEntry::make('salary_from')
                    ->numeric(),
                TextEntry::make('salary_to')
                    ->numeric(),
                TextEntry::make('summary')
                    ->placeholder('-')
                    ->columnSpanFull(),
                IconEntry::make('open_to_work')
                    ->boolean(),
                IconEntry::make('is_subscribed')
                    ->boolean(),
            ]);
    }
}
