import { Loader, WandSparkles } from 'lucide-react';
import { useState } from 'react';

export default function AIJobDescriptionGenerator({ jobTitle, onUpdateFn }: { jobTitle: string; onUpdateFn: (content: string) => void }) {
    const [isFetching, setIsFetching] = useState(false);

    function getJobDescription() {
        async function getDescription() {
            setIsFetching(true);

            const response = await fetch(
                route('AI.Job.Description', {
                    jobTitle,
                }),
            );

            const data = await response.json();

            setIsFetching(false);
            onUpdateFn(data.message);
        }

        getDescription();
    }

    return (
        <div
            className="absolute right-5 bottom-2 flex cursor-pointer items-center justify-center rounded-full border-4 border-white bg-white bg-gradient-to-r from-blue-500 via-purple-500 to-red-400 px-2 text-white hover:brightness-110"
            onClick={getJobDescription}
        >
            {isFetching ? (
                <>
                    <Loader className="size-10 animate-spin p-2" />
                    <p>Generating...</p>
                </>
            ) : (
                <>
                    <WandSparkles className="size-10 p-2" />
                    <p>Generate</p>
                </>
            )}
        </div>
    );
}
