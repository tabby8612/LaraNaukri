<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EducationRequest extends FormRequest {
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
            "degree_level_id" => ["required"],
            "degree_type_id" => ["required"],
            "country_id" => ["required"],
            "state_id" => ["required"],
            "city_id" => ["required"],
            "title" => ["required", "min:5"],
            "institution" => ["required", "min:5"],
            "year" => ["required", "size:4"],
            "result" => ["required"],
            "result_type" => ["required", "in:GPA,Percentage,Grade"],
            "subjects" => ["required"]
        ];
    }
}
