<?php

namespace App\Http\Controllers;

use App\Events\UserCreated;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller {
    //

    /**
     * Store a newly created resource in storage.
     */
    public function storeCandidate(UserRequest $userRequest) {
        //
        $validated = $userRequest->validated();

        $user = User::create([
            "name" => "{$validated['firstName']} {$validated['lastName']}",
            "email" => $validated['email'],
            "password" => Hash::make($validated['password']),
            "role" => "candidate"
        ]);

        // Event UserCreated will create an entry in the Candidate table.
        UserCreated::dispatch($user, $user->role);

        //Set The Authention To Login
        Auth::login($user);

        return redirect(route("candidate.dashboard"));
    }

    public function storeEmployer(UserRequest $userRequest) {

        $validated = $userRequest->validated();

        $user = User::create([
            "name" => "{$validated['firstName']} {$validated['lastName']}",
            "email" => $validated['email'],
            "password" => Hash::make($validated['password']),
            "role" => "employer"
        ]);

        UserCreated::dispatch($user, $user->role);

        Auth::login($user);

        return redirect(route("employer.dashboard"));


    }

    public function verify(Request $request) {

        $validate = $request->validate([
            "email" => ["required", "min:3", "email"],
            "password" => ["required", "min:5"],
        ]);

        $user = User::where("email", "=", $request->email)->firstOrFail();

        if (Auth::attempt($validate) && $user->isCandidate()) {
            return to_route("candidate.dashboard");
        } else {
            Auth::logout();
            return back()->withErrors([
                "invalidCombination" => "Invalid email and password combination"
            ]);
        }
    }

    public function verifyEmployer(Request $request) {
        // dd($request->all());

        $validated = $request->validate([
            "email" => ["required", "min:3", "email"],
            "password" => ["required", "min:5"],
        ]);

        $user = User::where("email", "=", $validated['email'])->firstOrFail();

        if (Auth::attempt($validated) && $user->isEmployer()) {
            return to_route("employer.dashboard");
        } else {
            Auth::logout();
            return back()->withErrors([
                "invalidCombination" => "Invalid email and password combination"
            ]);
        }

    }
}
