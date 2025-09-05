<?php

namespace App\Listeners;

use App\Events\UserCreated;
use App\Models\Candidate;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CreateCandidateProfile {
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


        Candidate::create([
            "user_id" => $user->id,
            "name" => $user->name
        ]);
    }
}
