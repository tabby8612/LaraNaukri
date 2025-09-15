<?php

use App\Models\Education;
use App\Models\Subject;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('education_subject', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Education::class);
            $table->foreignIdFor(Subject::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('education_subject');
    }
};
