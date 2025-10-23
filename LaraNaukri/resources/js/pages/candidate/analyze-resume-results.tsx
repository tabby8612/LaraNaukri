import { Card, CardTitle } from '@/components/ui/card';
import CircularProgressColor from '@/components/ui/CircularProgressBar';
import AppCandidateLayout from '@/layouts/app/app-candidate-layout';
import { usePage } from '@inertiajs/react';
import { ThumbsDown, ThumbsUp } from 'lucide-react';

type ResumeAnalyzeReport = {
    overall_score: number;
    strength: string[];
    weakness: string[];
    improvement: string[];
};

export default function AnalyzeResumeResults() {
    const { resumeAnalysis } = usePage<{ resumeAnalysis: ResumeAnalyzeReport }>().props;

    return (
        <AppCandidateLayout displaySearch={false} page="resume-analyzer" titleText="Analyzed Resume Results">
            {resumeAnalysis && (
                <>
                    <h1 className="text-center font-montserrat text-5xl font-bold">Your Resume Result Is Here</h1>
                    <h1 className="mt-5 text-center text-3xl text-primary">Your Overall Score Is</h1>
                    <CircularProgressColor value={resumeAnalysis.overall_score} size={300} />

                    <div className="flex gap-5 px-3">
                        <Card className="w-full gap-0">
                            <div className="flex items-center gap-2.5 px-2">
                                <ThumbsUp fill="green" stroke="white" />
                                <CardTitle className="font-montserrat text-2xl font-bold">Strength</CardTitle>
                            </div>
                            <ul className="mt-5 ml-7 list-disc px-3">
                                {resumeAnalysis.strength &&
                                    resumeAnalysis.strength.map((list) => (
                                        <li className="my-2" key={list}>
                                            {list}
                                        </li>
                                    ))}
                            </ul>
                        </Card>
                        <Card className="w-full">
                            <div className="flex items-center gap-2.5 px-2">
                                <ThumbsDown fill="green" stroke="white" />
                                <CardTitle className="font-montserrat text-2xl font-bold">Weakness</CardTitle>
                            </div>
                            <ul className="ml-7 list-disc px-3">
                                {resumeAnalysis.weakness &&
                                    resumeAnalysis.weakness.map((list) => (
                                        <li className="my-2" key={list}>
                                            {list}
                                        </li>
                                    ))}
                            </ul>
                        </Card>
                    </div>
                    <div className="mt-5 w-full p-3">
                        <Card className="px-5">
                            <h1 className="text-center font-montserrat text-2xl font-bold">Recommended Actions</h1>
                            <ul className="ml-7 list-disc px-3">
                                {resumeAnalysis.improvement && resumeAnalysis.improvement.map((list) => <li key={list}>{list}</li>)}
                            </ul>
                        </Card>
                    </div>
                </>
            )}
        </AppCandidateLayout>
    );
}
