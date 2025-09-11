<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CandidateExperienceRequest extends FormRequest {
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array {
        return [
            //
            "title" => ["required", "min:5"],
            "company" => ["required", "min:5"],
            "country_id" => ["required"],
            "state_id" => ["required"],
            "city_id" => ["required"],
            "start_date" => ["required"],
            "end_date" => ["required"],
            "is_working" => ["required"],
            "description" => ["required"],

        ];
    }
}
