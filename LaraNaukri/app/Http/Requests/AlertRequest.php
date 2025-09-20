<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class AlertRequest extends FormRequest {
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool {

        /** 
         * @var User|null $user
         */
        $user = Auth::user();

        return $user?->isCandidate() ?? false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array {
        return [
            //
            "name" => ["required", "min:3"],
            "country_id" => ["required"],
            "state_id" => ["required"],
            "city_id" => ["required"]
        ];
    }
}
