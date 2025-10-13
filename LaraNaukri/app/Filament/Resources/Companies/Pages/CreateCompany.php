<?php

namespace App\Filament\Resources\Companies\Pages;

use App\Filament\Resources\Companies\CompanyResource;
use App\Models\Country;
use App\Models\PaymentHistory;
use App\Models\User;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class CreateCompany extends CreateRecord {
    protected static string $resource = CompanyResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array {
        $data['location'] = Country::where('id', $data['country_id'])->first()?->name;

        $user = User::create([
            'name' => $data['name'],
            'email' => "{$data['name']}@laranaukri.com",
            'password' => Hash::make('buyer123456')
        ]);

        $data['user_id'] = $user->id;

        if (isset($data['employer_package_id'])) {
            $packageID = Arr::pull($data, 'employer_package_id');

            PaymentHistory::create([
                'user_id' => $user->id,
                'package_id' => $packageID,
                'method' => 'Added By Admin',
            ]);
        }

        if (isset($data['cv_package_id'])) {
            $packageID = Arr::pull($data, 'cv_package_id');

            PaymentHistory::create([
                'user_id' => $user->id,
                'package_id' => $packageID,
                'method' => 'Added By Admin',
            ]);
        }

        return $data;
    }

    protected function afterCreate(): void {
        // Runs after the form fields are saved to the database.
        $record = $this->record;

        $record->slug = Str::slug("{$record->name}-{$record->id}");

        $record->save();

    }
}
