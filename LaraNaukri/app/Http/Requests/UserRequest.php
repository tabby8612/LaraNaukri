<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest {
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
            "firstName" => ["required", "min:3"],
            "lastName" => ["required", "min:3"],
            "email" => ["required", "min:3", "email", "unique:users,email"],
            "password" => ["required", "min:5", "confirmed"],
            "terms" => ["accepted"]
        ];
    }
}
