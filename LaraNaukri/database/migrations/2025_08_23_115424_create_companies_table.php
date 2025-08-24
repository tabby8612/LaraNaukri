<?php

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
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("location");
            $table->string("image_path");
            $table->string("description");
            $table->timestamp("founded");
            $table->enum("company_size", ["1-10", "11-50", "51-100", "101-300", "301-600", "600+"]);
            $table->enum("organization_type", ["public", "private"]);
            $table->integer("total_offices");
            $table->integer("open_jobs");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};
