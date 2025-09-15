<?php

use App\Models\CandidateExperience;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::table('skills', function (Blueprint $table) {
            //
            $table->foreignIdFor(CandidateExperience::class);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::table('skills', function (Blueprint $table) {
            //
            $table->dropForeignIdFor(CandidateExperience::class);
        });
    }
};
