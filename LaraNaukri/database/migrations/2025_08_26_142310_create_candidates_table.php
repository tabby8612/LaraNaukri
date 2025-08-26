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
        Schema::create('candidates', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("email");
            $table->string("password");
            $table->string("image_path");
            $table->string("profession");
            $table->foreignIdFor(City::class);
            $table->enum("career_level", ["experienced professional", "entry level", "department head"]);
            $table->boolean("is_featured");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('candidates');
    }
};
