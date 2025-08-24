<?php

namespace Database\Seeders;

use App\Models\Industry;
use Arr;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class IndustrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $industries = ["Information Technology", "Automobile", "Fashion", "Courier", "Electronic", "Advertising/PR", "Travel/Tourism/Transportation", "Manufacturing", "Banking/Financial Services", "Education/Training", "Health & Fitness", "Media/Communication"];

        for($i = 0; $i < count($industries); $i++) {
            $industry = new Industry();
            $industry->name = $industries[$i];
            $industry->created_at = now();
            $industry->updated_at = now();
            $industry->save();
        }

    }
}
