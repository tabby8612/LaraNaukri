<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class CandidateProfileRequest extends FormRequest {
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool {
        /**
         * @var User $user
         */
        $user = Auth::user();

        return $user->isCandidate();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array {
        return [
            //
            "email" => ['required', Rule::email()->rfcCompliant()->preventSpoofing()],
            "password" => ['required', 'min:5'],
            "first_name" => ['required', 'min:3'],
            "last_name" => ['required', 'min:3'],
            "gender_id" => ['required', 'size:1'],
            "marital_status_id" => ['required', 'size:1'],
            "nationality_id" => ['required'],
            "date_of_birth" => ['required'],
            "phone" => ['required'],
            "mobile" => ['nullable'],
            "address" => ['required'],
            "video_profile" => ['required'],
            "experience_id" => ['required', 'size:1'],
            "career_level_id" => ['required', 'size:1'],
            "industry_id" => ['required'],
            "category_id" => ['required'],
            "salary_from" => ['required'],
            "salary_to" => ['required'],
            "is_subscribed" => ['required', 'size:1'],
            "country_id" => ['required'],
            "state_id" => ['required'],
            "city_id" => ['required'],
            "image_path" => ['required'],
            "cover_image_path" => ['required'],
            "summary" => ["nullable"]
        ];
    }
}
