<?php

namespace App\Http\Controllers;

use App\CompanyService;
use App\Enums\MessageStatusEnum;
use App\Models\ChatMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CompanyMessageController extends Controller {
    // -- Dependency Injection
    public function __construct(protected CompanyService $companyService) {

    }
    public function index() {

        $company = $this->companyService->findCompany(Auth::id(), 'candidatesUnlocked');

        return Inertia::render("employer/messages", [
            'candidatesUnlocked' => $company['candidates_unlocked']
        ]);
    }

    public function store(Request $request) {

        $validate = $request->validate([
            'message' => ['required', 'min:3', 'max:100'],
            'candidateID' => ['required']
        ]);

        ChatMessage::create([
            'candidate_id' => $validate['candidateID'],
            'company_id' => Auth::id(),
            'message' => $validate['message'],
            'status' => MessageStatusEnum::UNREAD
        ]);

        return back();
    }
}
