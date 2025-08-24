<?php

use App\Models\Company;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('jobs_listings', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->integer("salary_from");
            $table->integer("salary_to");
            $table->string("location");
            $table->enum("type", ["internship", "full time", "contract"]);
            $table->enum("shift", ["first shift", "second shift", "third shift", "rotating"]);
            $table->enum("career_level", ["experienced professional", "entry level", "department head"]);
            $table->integer("positions");
            $table->integer("experience");
            $table->enum("gender", ["male", "female"]);
            $table->string("degree");
            $table->timestamp("apply_before");
            $table->foreignIdFor(Company::class);
            $table->boolean("is_open");
            $table->string("description");
            $table->string("benefits");
            $table->boolean("is_featured");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobs');
    }
};
