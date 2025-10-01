<?php

namespace App\Http\Requests;

use App\Enums\JobShift;
use App\Enums\JobType;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class JobRequest extends FormRequest {
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool {
        /**
         * @var User $user
         */
        $user = Auth::user();

        return $user->isEmployer();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array {
        return [
            //
            "title" => ["required", "min:3"],
            "description" => ["required", "min:5"],
            "benefits" => ["required", "min:3"],
            "skills" => ["required", "array", "min:1"],
            "country_id" => ["required"],
            "state_id" => ["required"],
            "city_id" => ["nullable"],
            "salary_from" => ["required"],
            "salary_to" => ["required"],
            "hide_salary" => ["required", "max:3"],
            "career_level" => ["required"],
            "category_id" => ["required"],
            "type" => ["required", Rule::enum(JobType::class)],
            "shift" => ["required", Rule::enum(JobShift::class)],
            "positions" => ["required"],
            "gender" => ["required"],
            "apply_before" => ["required"],
            "degree" => ["required"],
            "experience_id" => ["required"],
            "is_freelance" => ["required"],
            "is_external" => ["required"],
            "external_url" => ["nullable"],
            "is_open" => ["required", "size:1"],
            "currency" => ["required"],
            "period" => ["required"]
        ];
    }
}
