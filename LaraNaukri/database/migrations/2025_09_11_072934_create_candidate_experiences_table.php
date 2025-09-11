<?php

use App\Models\City;
use App\Models\Country;
use App\Models\State;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('candidate_experiences', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->string("company");
            $table->foreignIdFor(Country::class)->default(0);
            $table->foreignIdFor(State::class)->default(0);
            $table->foreignIdFor(City::class)->default(0);
            $table->string("start_date")->default(now());
            $table->string("end_date")->default(now());
            $table->boolean("is_working")->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('candidate_experiences');
    }
};
