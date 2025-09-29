<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class CompanyProfileRequest extends FormRequest {
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool {
        /**
         * @var User
         */
        $user = Auth::user();

        return $user?->isEmployer();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array {
        return [
            "email" => ["nullable", "email"],
            "password" => ["nullable", "min:5"],
            "name" => ["required", "min:3"],
            "industry_id" => ["required"],
            "organization_type" => ["required"],
            "description" => ["required", "min:5"],
            "total_offices" => ["required"],
            "company_size" => ["required"],
            "founded" => ["required"],
            "url" => ["required"],
            "phone" => ["required"],
            "facebook" => ["nullable"],
            "twitter" => ["nullable"],
            "pinterest" => ["nullable"],
            "linkedin" => ["nullable"],
            "country_id" => ["required"],
            "state_id" => ["required"],
            "city_id" => ["required"],
            "location" => ["required"],
            "hr_name" => ["required"],
            "hr_email" => ["required"],
            "hr_designation" => ["nullable"],
            "reg_number" => ["nullable"],
            "image_path" => ["nullable", "image"],
        ];
    }
}

