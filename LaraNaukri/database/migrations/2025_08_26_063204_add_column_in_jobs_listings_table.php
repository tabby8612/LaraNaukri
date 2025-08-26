<?php

use App\Models\City;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('jobs_listings', function (Blueprint $table) {
            //
            $table->foreignIdFor(City::class);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('jobs_listings', function (Blueprint $table) {
            //
            $table->dropForeignIdFor(City::class);
        });
    }
};
