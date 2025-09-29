<?php

namespace App;

use App\Models\Company;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CompanyService {
    /**
     * Create a new class instance.
     */
    public function __construct() {
        //        
    }

    public function findCompany(string $userID, string|array $relations = []) {
        $company = Company::where("user_id", $userID)
            ->with($relations)
            ->firstOrFail()
            ->toArray();

        return $company;
    }

    public function findCompanyWithSlug(string $slug, string|array $relations = []) {
        $company = Company::where("slug", $slug)
            ->with($relations)
            ->firstOrFail()
            ->toArray();

        return $company;
    }

    public function updateEmail(string $userID, string $newEmail) {

        return DB::table("users")
            ->where("id", $userID)
            ->update(["email" => $newEmail]);
    }

    public function updatePassword(string $userID, string $newPassword) {
        return DB::table("users")
            ->where("id", $userID)
            ->update(["password" => Hash::make($newPassword)]);
    }

    public function updateFile(string $userID, UploadedFile $file) {

        $filePath = $this->findCompany($userID);

        if (isset($filePath['image_path'])) Storage::disk("public")->delete($filePath["image_path"]);

        $path = Storage::disk("public")->putFile("companies/{$userID}", $file);

        DB::table("companies")
            ->where("user_id", $userID)
            ->update(["image_path" => $path]);
    }

    public function updateCompanyProfile(string $userID, array $updateValues) {
        $slug = "{$updateValues['name']}-{$updateValues['user_id']}";

        $updateValues["slug"] = Str::slug($slug, '-');
        DB::table("companies")
            ->where("user_id", $userID)
            ->update($updateValues);
    }

}
