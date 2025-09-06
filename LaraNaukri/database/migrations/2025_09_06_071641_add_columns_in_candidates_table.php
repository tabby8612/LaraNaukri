<?php

use App\Models\Category;
use App\Models\Industry;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::table('candidates', function (Blueprint $table) {
            //
            $table->integer("profile_views")->default(1);
            $table->string("cover_image_path")->default("/user_images/default.png");
            $table->enum("gender", ["Male", "Female"]);
            $table->enum("martial_status", ["Divorced", "Married", "Seperated", "Single", "Window/er"]);
            $table->string("nationality")->nullable();
            $table->timestamp("date_of_birth")->nullable();
            $table->string("phone")->nullable();
            $table->string("mobile")->nullable();
            $table->string("address")->nullable();
            $table->string("video_profile")->nullable();
            $table->integer("experience")->default(1);
            $table->foreignIdFor(Industry::class);
            $table->foreignIdFor(Category::class);
            $table->integer("salary_from")->default(0);
            $table->integer("salary_to")->default(0);
            $table->string("summary")->nullable();
            $table->boolean("open_to_work")->default(false);

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::table('candidates', function (Blueprint $table) {
            //
        });
    }
};
