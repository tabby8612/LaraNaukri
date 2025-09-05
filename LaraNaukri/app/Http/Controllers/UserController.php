<?php

namespace App\Http\Controllers;

use App\Events\UserCreated;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller {
    //

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {
        //
        // dd($request->all());

        // dump($request->only(["firstName", "lastName", "email", "password"]));

        $request->validate([
            "firstName" => ["required", "min:3"],
            "lastName" => ["required", "min:3"],
            "email" => ["required", "min:3", "email", "unique:users,email"],
            "password" => ["required", "min:5", "confirmed"],
            "terms" => ["accepted"]
        ]);

        $user = User::create([
            "name" => $request->firstName . $request->lastName,
            "email" => $request->email,
            "password" => Hash::make($request->password),
            "role" => "candidate"
        ]);



        // Event UserCreated will create an entry in the Candidate table.
        UserCreated::dispatch($user);

        //Set The Authention To Login
        Auth::login($user);


        return redirect(route("candidate.dashboard"));
    }

    public function verify(Request $request) {
        dd($request->only(["email", "password"]));
    }
}
