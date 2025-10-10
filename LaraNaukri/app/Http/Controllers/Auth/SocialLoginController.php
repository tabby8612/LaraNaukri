<?php

namespace App\Http\Controllers\Auth;

use App\Events\UserCreated;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Contracts\Session\Session as SessionSession;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

class SocialLoginController extends Controller {
    //



    public function redirectToSocial(string $role, string $driver) {

        if (!in_array($role, ['candidate', 'employer'])) return abort(403);
        if (!in_array($driver, ['google', 'github', 'linkedin'])) return abort(403);

        Session::put('role', $role);
        return Inertia::location(Socialite::driver($driver)->redirect());
    }

    public function handleGoogleCallback() {
        $googleUser = Socialite::driver('google')->user();

        if (!isset($googleUser)) abort(403);

        $role = Session::pull('role');

        $user = User::where('google_id', $googleUser->getId())->first();

        if (isset($user)) {
            Auth::login($user);
            return to_route("{$user->role}.dashboard");
        } else {
            $newUser = User::create([
                'name' => $googleUser->getName(),
                'google_id' => $googleUser->getId(),
                'email' => $googleUser->getEmail(),
                'password' => Hash::make('123456'),
                'role' => $role
            ]);

            UserCreated::dispatch($newUser, $newUser->role);

            Auth::login($newUser);

            return to_route("{$newUser->role}.dashboard");
        }
    }
    public function handleGithubCallback(Request $request) {

        if (isset($request->error)) return abort(403);

        $githubUser = Socialite::driver('github')?->user();

        if (!isset($githubUser)) abort(403);

        $role = Session::pull('role');

        $user = User::query()
            ->where('github_id', '=', $githubUser->getId(), 'or')
            ->where('email', '=', $githubUser->getEmail(), 'or')
            ->first();

        if (isset($user)) {
            Auth::login($user);
            return to_route("{$user->role}.dashboard");
        } else {
            $newUser = User::create([
                'name' => $githubUser->getName() ?? "",
                'github_id' => $githubUser->getId(),
                'email' => $githubUser->getEmail(),
                'password' => Hash::make('123456'),
                'role' => $role
            ]);

            UserCreated::dispatch($newUser, $newUser->role);

            Auth::login($newUser);

            return to_route("{$newUser->role}.dashboard");
        }
    }


}
