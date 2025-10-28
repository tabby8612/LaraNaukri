<?php

namespace App\Notifications;

use App\Models\Candidate;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Log;

class ResumeGenerated extends Notification implements ShouldQueue {
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(protected Candidate $candidate) {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array {
        return ['broadcast'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage {
        return (new MailMessage)
            ->line('The introduction to the notification.')
            ->action('Notification Action', url('/'))
            ->line('Thank you for using our application!');
    }

    public function toBroadcast(object $notifiable): BroadcastMessage {
        Log::info('📡 Broadcasting ResumeGenerated for user ' . $notifiable->id, [
            'resume_path' => $this->candidate->resume_path,
            'notifible_Obj' => $notifiable
        ]);

        return new BroadcastMessage([
            'message' => 'Resume Has Been Generated',
            'resume_path' => $this->candidate->resume_path,
        ]);
    }

    public function broadcastType(): string {
        return 'broadcast.message';
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array {
        return [
            //
            'message' => 'Resume Has Been Generated',
            'resume_path' => $this->candidate->resume_path
        ];
    }
}
