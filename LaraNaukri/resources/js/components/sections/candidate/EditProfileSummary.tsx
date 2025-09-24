import CustomTextArea from '@/components/ui/cards/CustomTextArea';
import { Button } from '@/components/ui/UnusedUI/button';
import { useForm } from '@inertiajs/react';
import { ArrowRightCircle } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function EditProfileSummary({ summary }: { summary: string }) {
    const [successMessage, showSuccessMessage] = useState<string | null>(null);

    const { data, setData, post } = useForm({
        summary: summary,
    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(`Summary Submitted`);

        post(route('candidate.updateProfileSummary'), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                showSuccessMessage('Summary Updated Successfully');
                setTimeout(() => showSuccessMessage(''), 3000);
            },
        });
    }

    return (
        <form className="mt-7 rounded-2xl bg-green-50 p-7" onSubmit={(e) => handleSubmit(e)}>
            {successMessage && (
                <div className="flex w-full justify-between rounded bg-primary px-2 py-2 text-white">
                    <p>{successMessage}</p>
                </div>
            )}

            <h1 className="font-montserrat text-2xl font-bold">Summary</h1>
            <CustomTextArea label="Summary" name="summary" value={data.summary} onChange={(e) => setData('summary', e.target.value)} />
            <Button
                className={`mt-3 flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-primary bg-primary py-3 font-montserrat font-bold text-white uppercase`}
            >
                <p>Update Summary</p>
                <ArrowRightCircle />
            </Button>
        </form>
    );
}
