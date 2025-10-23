<?php

namespace App\Filament\Pages;

use App\Filament\Exports\CompanyPaymentsExporter;
use App\Models\Company;
use App\Models\PaymentHistory as ModelsPaymentHistory;
use App\Models\User;
use Filament\Actions\ExportAction;
use Filament\Pages\Page;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Concerns\InteractsWithTable;
use Filament\Tables\Contracts\HasTable;
use Filament\Tables\Table;
use UnitEnum;

class PaymentHistory extends Page implements HasTable {
    use InteractsWithTable;

    protected static string|UnitEnum|null $navigationGroup = "Companies";
    protected static ?string $navigationLabel = 'Companies With Payment';
    protected static ?int $navigationSort = 8;

    protected string $view = 'filament.pages.payment-history';

    public static User $user;

    public static function table(Table $table): Table {
        return $table
            ->columns([
                TextColumn::make('id'),
                TextColumn::make('user.company.name'),
                TextColumn::make('package.name'),
                TextColumn::make('method'),
                TextColumn::make('created_at'),
            ])
            ->query(fn() => ModelsPaymentHistory::query()->whereIn('package_id', [3, 4, 5])->with(['user.company', 'package']))
            ->headerActions([
                ExportAction::make()
                    ->label('Export Data')
                    ->color('success')
                    ->icon('heroicon-s-arrow-down-tray')
                    ->modalIconColor('white')
                    ->exporter(CompanyPaymentsExporter::class)
                    ->fileDisk('public')

            ])



        ;
    }


}
