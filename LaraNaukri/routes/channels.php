<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel("chat.{receiver_id}", function ($user, $receiver_id) {
    // dump($receiver_id);
    // dd($user);
    return (int) $user->id === (int) $receiver_id;
});

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});