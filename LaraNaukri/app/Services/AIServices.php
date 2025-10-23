<?php

namespace App\Services;

class AIServices {
    /**
     * Create a new class instance.
     */
    public function __construct() {
        //
    }

    public function getJobDescriptionPrompt(string $jobTitle) {
        return "I want you to act as an expert HR copywriter who specializes in writing clear, 
        attractive, and SEO-optimized job descriptions. For {$jobTitle}, generate the following sections:
        1. Job Summary: A 2–3 sentence overview describing the role’s purpose and impact.
        2. Key Responsibilities: A bullet list of 6–10 main duties
        3. Required Qualifications: A bullet list of essential skills, education, or experience.
        4. General Benefits: A list of typical benefits (healthcare, paid leave, growth opportunities, etc.) — keep it relevant to most professional companies.
        ";
    }

    public function getResumeAnalyzerPrompt(string $resumeText) {
        return "You are an expert resume reviewer with 10+ years of experience in technical and non-technical hiring.
                Analyze the following resume carefully and provide a structured evaluation.
                Resume:
                {$resumeText}
                Your output must be a valid JSON object with this exact structure:
                {
  'overall_score': <number between 0 and 100 representing resume quality>,
  'strength: [ List of key strengths and what makes them stand out ],
  'weakness': [List of weaknesses or issues found in the resume ],
  'improvement': [List of clear, actionable steps to improve the resume and score higher ]
        }

    Guidelines:
- Focus on writing quality, structure, and content relevance.
- Evaluate clarity, grammar, formatting, achievements, keywords, and professional presentation.
- Be objective and specific.
- Do NOT include any text outside the JSON object.               
";
    }
}
