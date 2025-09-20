<?php

use App\Models\Candidate;
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
        Schema::create('alerts', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->foreignIdFor(Candidate::class);
            $table->foreignIdFor(Country::class);
            $table->foreignIdFor(State::class);
            $table->foreignIdFor(City::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('alerts');
    }
};
