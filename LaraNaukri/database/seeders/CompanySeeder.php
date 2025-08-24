<?php

namespace Database\Seeders;

use App\Models\Company;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        
        $company = new Company();
        $company->name = fake()->company();
        $company->email = fake()->companyEmail();
        $company->password = md5("123456");
        $company->location = fake()->country;
        $company->image_path = "";
        $company->description = fake()->realTextBetween(150,200);
        $company->founded = Carbon::create(fake()->randomElement([1998,1990,1991,1992,1993,1994,1995,2000,2010,2020,2024,2025]));
        $company->company_size = fake()->randomElement(["1-10","11-50","51-100","101-300","301-600","600+"]);
        $company->organization_type = fake()->randomElement(["public", "private"]);
        $company->total_offices = fake()->numberBetween(1,1000);
        $company->open_jobs = 0;
        $company->created_at = now();
        $company->updated_at = now();
        $company->save();        

    }
}
