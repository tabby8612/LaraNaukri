<?php

namespace App\Filament\Exports;

use App\Models\PaymentHistory;
use Filament\Actions\Exports\ExportColumn;
use Filament\Actions\Exports\Exporter;
use Filament\Actions\Exports\Models\Export;
use Illuminate\Support\Number;

class CompanyPaymentsExporter extends Exporter {
    protected static ?string $model = PaymentHistory::class;

    public static function getColumns(): array {
        return [
            //
            ExportColumn::make('id'),
            ExportColumn::make('user.company.name'),
            ExportColumn::make('package.name'),
            ExportColumn::make('method'),
            ExportColumn::make('created_at'),
        ];
    }

    public static function getCompletedNotificationBody(Export $export): string {
        $body = 'Your company payments export has completed and ' . Number::format($export->successful_rows) . ' ' . str('row')->plural($export->successful_rows) . ' exported.';

        if ($failedRowsCount = $export->getFailedRowsCount()) {
            $body .= ' ' . Number::format($failedRowsCount) . ' ' . str('row')->plural($failedRowsCount) . ' failed to export.';
        }

        return $body;
    }
}
