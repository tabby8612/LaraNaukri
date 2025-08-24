<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Company>
 */
class CompanyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
        "name" => fake()->company(),
        "email" => fake()->companyEmail(),
        "password" => md5("123456"),
        "location" => fake()->country,
        "image_path" => "",
        "description" => fake()->realTextBetween(150,200),
        "founded" => Carbon::create(fake()->randomElement([1998,1990,1991,1992,1993,1994,1995,2000,2010,2020,2024,2025])),
        "company_size" => fake()->randomElement(["1-10","11-50","51-100","101-300","301-600","600+"]),
        "organization_type" => fake()->randomElement(["public", "private"]),
        "total_offices" => fake()->numberBetween(1,1000),
        "open_jobs" => 0,
        "created_at" => now(),
        "updated_at" => now(),        
        ];
    }
}
