<?php

namespace App\Jobs;

use App\Models\Candidate;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Spatie\Browsershot\Browsershot;

class GenerateResume implements ShouldQueue {
    use Queueable;

    private string $html;
    private string $candidateID;
    /**
     * Create a new job instance.
     */

    public function __construct(string $html, string $candidateID) {
        //
        $this->html = $html;
        $this->candidateID = $candidateID;
    }

    /**
     * Execute the job.
     */
    public function handle(): void {
        //        
        $fullPath = "app/public/candidates/cvs/{$this->candidateID}.pdf";
        $relativePath = "candidates/cvs/{$this->candidateID}.pdf";

        Candidate::where("id", "=", $this->candidateID)->update([
            "resume_path" => null
        ]);

        Browsershot::html($this->html)
            ->emulateMedia('screen')
            ->showBackground()
            ->margins(0, 0, 0, 0)
            ->timeout(10000)
            ->save(storage_path($fullPath));

        $updateCandidate = Candidate::where("id", "=", $this->candidateID);

        $updateCandidate->update([
            "resume_path" => $relativePath
        ]);

    }
}
