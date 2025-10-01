<?php

use App\Enums\CurrencyEnums;
use App\Enums\JobShift;
use App\Enums\SalaryPeriod;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::table('jobs_listings', function (Blueprint $table) {
            //
            $table->enum("currency", array_column(CurrencyEnums::cases(), 'value'))->after('degree')->nullable();
            $table->enum("period", array_column(SalaryPeriod::cases(), 'value'))->after('currency')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::table('jobs_listings', function (Blueprint $table) {
            //
            $table->dropColumn(["currency", "period"]);
        });
    }
};
