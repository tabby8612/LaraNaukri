<?php

use App\Models\Candidate;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Candidate::class);
            $table->string("name");
            $table->string("url")->nullable();
            $table->string("image_path")->default("projects/default.png");
            $table->boolean("ongoing")->default(0);
            $table->string("start_date")->nullable();
            $table->string("end_date")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('projects');
    }
};
