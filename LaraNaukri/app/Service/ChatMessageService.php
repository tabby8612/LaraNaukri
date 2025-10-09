<?php

namespace App\Service;

use App\Enums\MessageStatusEnum;
use App\Models\ChatMessage;
use Illuminate\Support\Facades\DB;

class ChatMessageService {
    /**
     * Create a new class instance.
     */
    public function __construct() {
        //
    }

    public function getMessages(string $senderID, string $receiverID) {
        $messages = ChatMessage::query()
            ->where(fn($q) => $q->where('sender_id', $senderID)->where('receiver_id', $receiverID))
            ->orWhere(fn($q) => $q->where('sender_id', $receiverID)->where('receiver_id', $senderID))
            ->get()
                ?->toArray();

        return $messages;
    }

    public function markReceiverMessagesAsRead(string $senderID, string $receiverID) {
        DB::table('chat_messages')
            ->where('sender_id', $senderID)
            ->where('receiver_id', $receiverID)
            ->update([
                'status' => MessageStatusEnum::READ
            ]);
    }

    public function createMessage(array $validated) {
        $newMessage = ChatMessage::create($validated);

        return $newMessage;
    }

    public function getUnreadMessageCount(string $senderUserID, string $receiverUserID) {
        $getUnReadMessages = ChatMessage::query()
            ->where('sender_id', $senderUserID)
            ->where('receiver_id', $receiverUserID)
            ->where('status', MessageStatusEnum::UNREAD)
            ->count();

        return $getUnReadMessages;
    }
}
