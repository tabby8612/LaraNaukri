import { useForm } from '@inertiajs/react';

import { Field, Label, Radio, RadioGroup } from '@headlessui/react';
import { FormEvent, ReactNode, useState } from 'react';
import { Button } from '../UnusedUI/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '../UnusedUI/dialog';
import { Input } from '../UnusedUI/input';

type Props = {
    type?: string | ReactNode;
    title?: string;
    cv_path?: string;
    forUpdate?: boolean;
    id?: string;
};

export default function UploadCV({ type, forUpdate = false, title = '', cv_path = '', id }: Props) {
    const options = ['Yes', 'No'];
    const [selected, setSelected] = useState(options[1]);
    const [successDialog, setSuccessDialog] = useState(false);

    const { data, setData, post, transform, errors } = useForm({
        title: title,
        resume: null as File | null,
        is_default: null,
    });

    function formHanlder(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const fileEl = document.getElementById('cv-file') as HTMLInputElement;

        if (fileEl.files) {
            transform((data) => ({
                ...data,
                is_default: selected === 'Yes' ? 1 : 0,
            }));

            if (forUpdate) {
                post(
                    route('candidate.updateResume', {
                        id: id,
                    }),
                    {
                        preserveScroll: true,
                        preserveState: true,
                        showProgress: false,
                        onSuccess: () => setSuccessDialog(true),
                    },
                );
            } else {
                post(route('candidate.storeResume'), {
                    preserveScroll: true,
                    preserveState: true,
                    showProgress: false,
                    onSuccess: () => setSuccessDialog(true),
                });
            }
        }
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger
                    className="cursor-pointer text-4xl text-primary capitalize hover:text-green-900"
                    onClick={() => setSuccessDialog(false)}
                >
                    {type}
                </DialogTrigger>
                <DialogOverlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-overlayClose data-[state=open]:animate-overlayOpen" />
                <DialogContent className="translate-y-[-50%] bg-white data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                    {successDialog ? (
                        <DialogTitle className="bg-green-100 p-7 text-center text-2xl capitalize">Resume Added Successfully</DialogTitle>
                    ) : (
                        <DialogHeader>
                            <DialogTitle className="text-center text-2xl capitalize">{forUpdate ? 'Update' : 'Add'} CV</DialogTitle>
                            <DialogDescription className="text--lg my-3 text-center">Upload Your CV</DialogDescription>
                            <form className="flex flex-col justify-center gap-5" onSubmit={(e) => formHanlder(e)} encType="multipart/form-data">
                                <div>
                                    <Input
                                        name="cv-title"
                                        id="cv-title"
                                        placeholder="CV Title"
                                        className="h-10 border-gray-400 selection:text-white focus-visible:ring-primary"
                                        defaultValue={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                    />

                                    {errors && <p className="text-red-500">{errors.title}</p>}
                                </div>

                                <div>
                                    <Input
                                        name="cv-file"
                                        id="cv-file"
                                        className="h-10 border-gray-400 file:text-primary"
                                        type="file"
                                        accept=".pdf"
                                        onChange={(e) => setData('resume', e.target.files![0])}
                                    />
                                    {cv_path && (
                                        <p>
                                            Previous Resume File:{' '}
                                            <a
                                                href={`/storage/${cv_path}`}
                                                className="my-2 text-primary underline underline-offset-2"
                                                target="_blank"
                                            >
                                                {title}
                                            </a>
                                        </p>
                                    )}
                                    {errors && <p className="text-red-500">{errors.resume}</p>}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-500">Is Default</p>

                                    <RadioGroup value={selected} onChange={setSelected}>
                                        {options.map((option) => (
                                            <Field className="mt-2 flex gap-2" key={option}>
                                                <Radio
                                                    value={option}
                                                    className="group flex size-5 items-center justify-center rounded-full border bg-white data-checked:bg-primary"
                                                >
                                                    <span className="invisible size-2 rounded-full bg-white group-data-checked:visible" />
                                                </Radio>
                                                <Label>{option}</Label>
                                            </Field>
                                        ))}
                                    </RadioGroup>
                                    {errors && <p className="text-red-500">{errors.is_default}</p>}
                                </div>
                                <Button className="hoverEffect text-white">{forUpdate ? 'Update' : 'Save'} Changes</Button>
                            </form>
                        </DialogHeader>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
