import { Candidate, FilteredJobs } from '@/types';
import { useForm } from '@inertiajs/react';
import { FormEvent, ReactNode, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '../UnusedUI/dialog';
import { Input } from '../UnusedUI/input';
import CustomInputField from './CustomInputField';
import CustomTextArea from './CustomTextArea';

type Props = {
    trigger: string | ReactNode;
    candidate: Candidate;
    job: FilteredJobs;
};

export default function ApplyJob({ trigger, candidate, job }: Props) {
    const [success, setSuccess] = useState('');

    const { data, setData, post, transform, errors, reset } = useForm({
        first_name: candidate.first_name,
        last_name: candidate.last_name,
        email: candidate.user.email,
        phone: candidate.phone,
        message: '',
        resume_path: null as File | null,
        cover_letter_path: null as File | null,
        error: '',
    });

    function formHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        transform((data) => ({
            ...data,
            candidate_id: candidate.id,
            job_id: job.id,
        }));

        post(route('candidate.applicationStore'), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                reset();
                setSuccess('Application submitted successfully');
            },
        });
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger className="cursor-pointer text-4xl text-primary capitalize hover:text-green-900" onClick={() => setSuccess('')}>
                    {trigger}
                </DialogTrigger>
                <DialogOverlay className="DialogOverlay fixed inset-0 bg-black/50 data-[state=closed]:animate-overlayClose data-[state=open]:animate-overlayOpen" />

                <DialogDescription />
                {success ? (
                    <DialogContent className="translate-y-[-50%] bg-green-100 data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                        <DialogHeader className="bg-green-100">
                            <DialogTitle className="text-center font-montserrat text-4xl font-semibold text-primary capitalize">
                                {success}
                            </DialogTitle>
                        </DialogHeader>
                    </DialogContent>
                ) : (
                    <DialogContent className="DialogContent translate-y-[-50%] bg-white data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                        <DialogHeader>
                            <DialogTitle className="text-center font-montserrat text-4xl font-semibold capitalize">Apply For This Job</DialogTitle>
                            <DialogDescription className="text-center font-montserrat text-2xl font-semibold text-primary">
                                {job.title}
                            </DialogDescription>
                            {errors.error && (
                                <DialogDescription className="rounded bg-red-100 px-2 py-1 text-center font-montserrat text-sm font-semibold text-red-500">
                                    {errors.error}
                                </DialogDescription>
                            )}
                            <form className="mt-4" onSubmit={(e) => formHandler(e)} encType="multipart/formData">
                                <div className="flex w-full gap-6">
                                    <div className="w-full">
                                        <CustomInputField
                                            label="First Name"
                                            name="first-name"
                                            placeholder="Your First Name"
                                            type="input"
                                            value={data.first_name}
                                            onChange={(e) => setData('first_name', e.target.value)}
                                            isRequired
                                        />
                                        {errors.first_name && <p className="text-sm text-red-500">{errors.first_name}</p>}
                                    </div>
                                    <div className="w-full">
                                        <CustomInputField
                                            label="Last Name"
                                            name="last-name"
                                            placeholder="Your Last Name"
                                            type="input"
                                            value={data.last_name}
                                            onChange={(e) => setData('last_name', e.target.value)}
                                            isRequired
                                        />
                                        {errors.last_name && <p className="text-sm text-red-500">{errors.last_name}</p>}
                                    </div>
                                </div>
                                <div className="mt-5 flex w-full gap-6">
                                    <div className="w-full">
                                        <CustomInputField
                                            label="Email"
                                            name="email"
                                            placeholder="Your email"
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            isRequired
                                        />
                                        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                                    </div>
                                    <div className="w-full">
                                        <CustomInputField
                                            label="Phone"
                                            name="phone"
                                            placeholder="Your Phone"
                                            type="tel"
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            isRequired
                                        />
                                        {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                                    </div>
                                </div>
                                <div className="mt-5 w-full">
                                    <CustomTextArea
                                        label="Message"
                                        name="message"
                                        value={data.message}
                                        onChange={(e) => setData('message', e.target.value)}
                                        isRequired
                                    />
                                    {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                                </div>
                                <div className="mt-5 flex w-full gap-6">
                                    <CustomInputField
                                        label="Resume Upload (Optional)"
                                        type="file"
                                        name="resume"
                                        placeholder=""
                                        accept=".pdf"
                                        value={''}
                                        onChange={(e) => setData('resume_path', e.target.files![0])}
                                    />
                                </div>
                                <div className="mt-3 rounded bg-primary px-2 py-1.5 text-sm text-white">
                                    {candidate.resume_path && (
                                        <p>
                                            {' '}
                                            Your current resume{' '}
                                            <a href={`/storage/${candidate.resume_path}`} className="font-semibold text-blue-800" target="_blank">
                                                {candidate.resume_path}
                                            </a>{' '}
                                            . Just upload a new resume if you want to change it.
                                        </p>
                                    )}
                                </div>
                                <div className="mt-5 flex w-full gap-6">
                                    <CustomInputField
                                        label="Cover Letter Upload (Optional)"
                                        type="file"
                                        name="cover"
                                        placeholder=""
                                        accept=".pdf,.doc,.docx"
                                        value={''}
                                        onChange={(e) => setData('cover_letter_path', e.target.files![0])}
                                    />
                                </div>
                                <div className="mt-5 flex w-full gap-6">
                                    <Input
                                        className="h-10 cursor-pointer bg-primary text-lg font-bold text-white hover:brightness-110"
                                        type="submit"
                                    />
                                </div>
                            </form>
                        </DialogHeader>
                    </DialogContent>
                )}
            </Dialog>
        </div>
    );
}
