<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApplicationRequest extends FormRequest {
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
            "first_name" => ["required", "min:5"],
            "last_name" => ["required", "min:5"],
            "email" => ["required", "email"],
            "phone" => ["required"],
            "message" => ["required", "min:5"],
            "candidate_id" => ["required"],
            "job_id" => ["required"],
            "resume_path" => ["nullable", "file", "mimes:pdf,doc,docx"],
            "cover_letter_path" => ["nullable", "file", "mimes:pdf,doc,docx"],



        ];
    }
}
