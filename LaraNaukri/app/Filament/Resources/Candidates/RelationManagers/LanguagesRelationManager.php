<?php

namespace App\Filament\Resources\Candidates\RelationManagers;

use App\Filament\Resources\Candidates\CandidateResource;
use App\Models\Language;
use Filament\Actions\AttachAction;
use Filament\Actions\CreateAction;
use Filament\Actions\DetachAction;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class LanguagesRelationManager extends RelationManager {
    protected static string $relationship = 'languages';

    // protected static ?string $relatedResource = CandidateResource::class;

    protected static ?string $recordTitleAttribute = 'name';


    public function table(Table $table): Table {
        return $table
            ->columns([
                TextColumn::make('name'),
                TextColumn::make('language_level'),
            ])
            ->headerActions([
                AttachAction::make()
                    ->label('Attach New Language')
                    ->color('primary')
                    ->icon('heroicon-s-plus')
                    ->preloadRecordSelect()
                    ->schema(fn(AttachAction $action) => [
                        $action->getRecordSelect(),

                        Select::make('language_level')
                            ->label('Language Level')
                            ->options(['Intermediate' => 'Intermediate', 'Beginner' => 'Beginner', 'Expert' => 'Expert'])
                            ->required(),
                    ])

            ])
            ->recordActions([
                DetachAction::make()->badge()->color('danger')
            ])

        ;
    }

    public function form(Schema $schema): Schema {
        return $schema
            ->components([
                // Select::make('language_id')
                //     ->label('Language')
                //     ->options(fn() => Language::pluck('name', 'id'))
                //     ->required(),

                // Select::make('language_level')
                //     ->label('Language Level')
                //     ->options(['Intermediate' => 'Intermediate', 'Beginner' => 'Beginner', 'Expert' => 'Expert'])
                //     ->required(),
                // ...
            ]);
    }
}
