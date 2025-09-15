<?php

use App\Models\Candidate;
use App\Models\CandidateExperience;
use App\Models\Experience;
use App\Models\Skill;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('candidate_skill', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Candidate::class);
            $table->foreignIdFor(Skill::class);
            $table->foreignIdFor(Experience::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('candidate_skill');
    }
};
