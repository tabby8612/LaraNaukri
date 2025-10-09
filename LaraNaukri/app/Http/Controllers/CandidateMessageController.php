<?php

namespace App\Http\Controllers;

use App\Enums\MessageStatusEnum;
use App\Events\MessageSent;
use App\Models\ChatMessage;
use App\Service\CandidateService;
use App\Service\ChatMessageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CandidateMessageController extends Controller {
    //
    public function __construct(
        protected CandidateService $candidateService,
        protected ChatMessageService $chatMessageService
    ) {

    }

    public function index() {

        $candidate = $this->candidateService->fetchCandidate(Auth::id(), ['companiesUnlocked']);

        foreach ($candidate['companies_unlocked'] as $key => $company) {
            $candidate['companies_unlocked'][$key]['unread_message_count'] = $this->chatMessageService->getUnreadMessageCount($company['user_id'], Auth::id());
        }

        return Inertia::render("candidate/my-messages", ['companiesUnlocked' => $candidate['companies_unlocked']]);
    }

    public function store(Request $request) {

        $validated = $request->validate([
            'message' => ['required', 'min:3', 'max:100'],
            'receiver_id' => ['required']
        ]);

        $validated['sender_id'] = Auth::id();
        $validated['status'] = MessageStatusEnum::UNREAD;

        $newMessage = $this->chatMessageService->createMessage($validated);

        broadcast(new MessageSent($newMessage))->toOthers();

        return back();
    }

    public function loadMessages(string $userID) {

        //-- Marks all messages received by current user (candidate) from the userID (company)
        $this->chatMessageService->markReceiverMessagesAsRead($userID, Auth::id());


        $messages = $this->chatMessageService->getMessages(Auth::id(), $userID);

        return response()->json($messages);
    }
}
