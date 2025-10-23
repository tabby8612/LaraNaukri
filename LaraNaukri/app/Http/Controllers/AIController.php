<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use App\Services\AIServices;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Spatie\PdfToText\Pdf;

class AIController extends Controller {
    //
    public function __construct(protected AIServices $AIServices) {
    }

    public function generateJobDescription(Request $request) {
        $data = Setting::query()->first()?->data;
        $jobTitle = $request->get('jobTitle');

        if (!isset($data['hugging_face_access_token']) || !isset($jobTitle)) return response()->json([
                'message' => 'Unable to generate description, job title or hagging face access token is missing'
            ], 401);

        $postData = [
            'messages' => [[
                'role' => 'user',
                'content' => $this->AIServices->getJobDescriptionPrompt($jobTitle),
            ]],
            'model' => 'deepseek-ai/DeepSeek-V3:novita',
        ];

        $response = Http::acceptJson()
            ->withToken($data['hugging_face_access_token'])
            ->post('https://router.huggingface.co/v1/chat/completions', $postData);

        if ($response->successful()) {
            return response()->json([
                'message' => Str::markdown($response->json()['choices'][0]['message']['content'])
            ], 200);
        } else {
            return response()->json([
                'message' => "Unable to generate description"
            ], 401);
        }

    }

    public function AIResumeAnalyzer() {
        return Inertia::render('candidate/analyze-resume');
    }

    public function analyzeResume(Request $request) {

        $request->validate([
            'resume' => ['required', 'file', 'extensions:pdf']
        ]);

        if (!$request->hasFile('resume')) return back()->with('message', 'Upload Correct File');

        //--- Stores file
        $path = Storage::disk('public')->putFile('uploads/resume', $request->file('resume'));

        // -- Get Absolate Path
        $absoluatePath = Storage::disk('public')->path($path);

        //-- Get Text (in local and for product run sudo apt install poppler-utils -y in Linux)
        $text = (new Pdf('C:\Program Files\Git\mingw64\bin\pdftotext.exe'))->setPdf($absoluatePath)->text();
        $text = htmlentities($text);

        //-- Delete File
        Storage::delete($absoluatePath);

        //-- Get AI Response
        $data = Setting::query()->first()?->data;

        if (!isset($data['hugging_face_access_token'])) return response()->json([
                'message' => 'Unable to analyze resume -- Hugging Face Access Token Missing'
            ], 401);

        $postData = [
            'messages' => [[
                'role' => 'user',
                'content' => $this->AIServices->getResumeAnalyzerPrompt($text),
            ]],
            'model' => 'deepseek-ai/DeepSeek-V3:novita',
        ];

        $response = Http::acceptJson()
            ->withToken($data['hugging_face_access_token'])
            ->post('https://router.huggingface.co/v1/chat/completions', $postData);

        if ($response->successful()) {
            $responseText = $response->json()['choices'][0]['message']['content'];

            $cleanJson = preg_replace('/^```json\s*|```$/m', '', $responseText);
            $cleanJson = trim($cleanJson);

            $resumeAnalysis = json_decode($cleanJson, true);

            return Inertia::render('candidate/analyze-resume-results', compact("resumeAnalysis"));

        } else {
            back()->with('message', 'Unable to generate description');
        }


    }
}
