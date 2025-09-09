<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\Category;
use App\Models\City;
use App\Models\Country;
use App\Models\Industry;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class CandidateController extends Controller {
    //

    /**
     * fetches featured candidates from database
     * @return JsonResponse
     */

    public function featuredCandidate() {

        $featuredCandidates = Candidate::with("city")
            ->where("is_featured", "=", 1)
            ->get()
            ->mapWithKeys(function ($candidate, $index) {
                return [
                    $index => [
                        "id" => $candidate->id,
                        "name" => $candidate->name,
                        "image_path" => $candidate->image_path,
                        "profession" => $candidate->profession,
                        "city" => $candidate->city->name,
                        "career_level" => $candidate->career_level,
                        "is_featured" => $candidate->is_featured,
                    ]
                ];
            });

        return response()->json($featuredCandidates, 200);


    }

    public function dashboard() {
        $user_id = Auth::id();

        $candidate = Candidate::where("user_id", "=", $user_id)
            ->with("user:id,email")
            ->first()
            ->toArray();

        return Inertia::render("candidate-dashboard", [
            "candidate" => $candidate
        ]);
    }

    public function show() {
        $user_id = Auth::id();

        $candidate = Candidate::where("user_id", "=", $user_id)
            ->with(["user:id,email", "gender:id,name"])
            ->first()
            ->toArray();




        return Inertia::render("candidate/edit-profile", [
            "candidate" => $candidate,
        ]);
    }

    public function update(Request $request) {
        // dd($request->all());

        $candidateID = Auth::id();

        DB::transaction(function () use ($request, $candidateID) {
            $candidate = Candidate::where("user_id", "=", $candidateID);

            foreach ($request->all() as $key => $value) {
                if ($key == "email" && isset($value)) {
                    DB::table("users")->where("id", $candidateID)->update(["email" => $value]);
                }

                if ($key == "password" && isset($value)) {
                    when(isset($value), function () use ($value) {
                        DB::table("users")->where("id", Auth::id())->update([
                            "password" => Hash::make($value)
                        ]);
                    });
                }

                if ($key == "image_path" && $request->hasFile("image_path")) {
                    $image_path = $request->file("image_path")->store("candidates", "public");
                    $candidate->update([
                        $key => $image_path
                    ]);
                }
                if ($key == "cover_image_path" && $request->hasFile("cover_image_path")) {
                    $cover_image_path = $request->file("cover_image_path")->store("candidates", "public");
                    $candidate->update([
                        $key => $cover_image_path
                    ]);
                }

                if ($key != "email" && $key != "password" && $key != "image_path" && $key != "cover_image_path") {
                    $candidate->update([
                        $key => $value
                    ]);
                }
            }
        });

        Session::put("message", "User Updated Successfully");

        return to_route("candidate.editProfile");
    }
}
