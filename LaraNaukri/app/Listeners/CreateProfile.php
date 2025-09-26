<?php

namespace App\Listeners;

use App\Events\UserCreated;
use App\Models\Candidate;
use App\Models\Company;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Str;


class CreateProfile {
    /**
     * Create the event listener.
     */
    public function __construct() {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(UserCreated $event): void {
        //
        $user = $event->user;
        $role = $event->role;

        if ($role == 'employer') {
            Company::create([
                "user_id" => $user->id,
                "name" => $user->name,
                "slug" => Str::slug("{$user->name}-{$user->id}")
            ]);
        }

        if ($role == 'candidate') {
            Candidate::create([
                "user_id" => $user->id,
                "first_name" => $user->name
            ]);
        }

        return;
    }
}
