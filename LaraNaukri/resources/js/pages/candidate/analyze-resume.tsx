import { Button } from '@/components/ui/button';
import AppCandidateLayout from '@/layouts/app/app-candidate-layout';
import { useForm } from '@inertiajs/react';
import { LoaderCircle, Sparkles, Upload } from 'lucide-react';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function AnalyzeResume() {
    const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
    const [isThinking, setIsThinking] = useState(false);

    const { data, setData, post, errors } = useForm({
        resume: null as File | null,
    });

    console.log(errors);

    function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files!.length > 0) {
            setSelectedFile(e.target.files![0]);
            setData('resume', e.target.files![0]);
        }
    }

    function submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setIsThinking(true);

        post(route('candidate.analyze.resume'), {
            preserveScroll: true,
            preserveState: true,
            onFinish: () => setIsThinking(false),
        });
    }

    return (
        <AppCandidateLayout page="resume-analyzer" displaySearch={false} titleText="Build Resume">
            <h1 className="text-center font-montserrat text-4xl font-bold">AI Resume Analyzer</h1>
            <p className="text-center">The AI-powered resume review platform for unbiased feedback and expert tips</p>

            <div className="mx-auto mt-5 w-10/12 rounded-lg bg-green-50 p-7 text-center">
                <h1 className="font-montserrat text-6xl font-bold text-primary">Get Your Resume Reviewed For Free</h1>
                <p className="mt-6 text-4xl font-bold">Upload Your Resume Below To Analyze</p>
                <form
                    className="mt-5 w-full items-center gap-4 rounded-none border-gray-300 bg-white px-3 py-1 shadow-none"
                    encType="multipart/formData"
                    onSubmit={(e) => submitHandler(e)}
                >
                    {errors && !selectedFile && <p className="text-red-400">{errors.resume}</p>}
                    {selectedFile && <p className="text-primary">{selectedFile.name} is selected</p>}
                    <div className="relative my-5 mt-5 flex items-center justify-center gap-2 border-4 border-dashed border-gray-400 px-20 py-3 text-gray-500">
                        <Upload />
                        <p className="font-bold uppercase">Select Resume</p>
                        <input
                            type="file"
                            name="resume"
                            accept="application/pdf"
                            className="absolute top-0 left-0 size-full cursor-pointer bg-green-500 opacity-0"
                            onChange={(e) => handleFileChange(e)}
                        />
                    </div>
                    <Button className="mx-auto my-5 flex cursor-pointer items-center justify-center gap-2 text-white" disabled={isThinking}>
                        {isThinking ? (
                            <>
                                <LoaderCircle className="animate-spin" />
                                Analyzing...
                            </>
                        ) : (
                            <>
                                <Sparkles />
                                Analyze Resume
                            </>
                        )}
                    </Button>
                </form>
            </div>
        </AppCandidateLayout>
    );
}
