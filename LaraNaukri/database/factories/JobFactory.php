<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Job>
 */
class JobFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $salary_from = fake()->numberBetween(2000, 6000);
        $salary_to = fake()->numberBetween($salary_from + 1000, 8000);

        return [
            //
            "title" => fake()->jobTitle,
            "salary_from" => $salary_from,
            "salary_to" => $salary_to,
            "location" => fake()->city(),
            "type" => fake()->randomElement(["internship", "full time", "contract"]),
            "shift" => fake()->randomElement(["first shift", "second shift", "third shift", "rotating"]),
            "career_level" => fake()->randomElement(["experienced professional", "entry level", "department head"]),
            "positions" => fake()->numberBetween(1,10),
            "experience" => fake()->numberBetween(1,5),
            "gender" => fake()->randomElement(["male", "female"]),
            "degree" => fake()->randomElement(["intermediate", "graduate", "masters"]),
            "apply_before" => fake()->dateTimeBetween(now(), "+5 weeks"),
            "is_open" => fake()->numberBetween(0,1),
            "description" => fake()->realTextBetween(150,200),
            "benefits" => fake()->realTextBetween(150,200),
            "is_featured" => fake()->numberBetween(0,1),
            "created_at" => now(),
            "updated_at" => now()

        ];
    }
}
