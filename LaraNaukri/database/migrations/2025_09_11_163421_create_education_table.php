<?php

use App\Models\City;
use App\Models\Country;
use App\Models\DegreeLevel;
use App\Models\DegreeType;
use App\Models\State;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('educations', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->foreignIdFor(DegreeLevel::class);
            $table->foreignIdFor(DegreeType::class);
            $table->foreignIdFor(Country::class);
            $table->foreignIdFor(State::class);
            $table->foreignIdFor(City::class);
            $table->string("institution");
            $table->string("year");
            $table->string("result");
            $table->enum("result_type", ["GPA", "Grade", "Percentage"]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('education');
    }
};
