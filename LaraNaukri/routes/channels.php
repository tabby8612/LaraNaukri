<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel("chat.{receiver_id}", function ($user, $receiver_id) {
    // dump($receiver_id);
    // dd($user);
    return (int) $user->id === (int) $receiver_id;
});
