import { CandidateLanguage } from '@/types';
import { useForm } from '@inertiajs/react';
import { FormEvent, ReactNode, useState } from 'react';
import { DialogDescription } from '../dialog';
import { Button } from '../UnusedUI/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../UnusedUI/dialog';
import CustomSelectField from './CustomSelectField';

type Props = {
    trigger?: string | ReactNode;
    language?: CandidateLanguage;
    type: 'update' | 'create';
    refreshFn: () => void;
};

export default function AddLanguage({ trigger, language, type, refreshFn }: Props) {
    const [success, setSuccess] = useState('');

    const { data, setData, post, errors, transform, reset } = useForm({
        language_id: language?.id ? language.id : '',
        language_level: language?.pivot.language_level ? language.pivot.language_level : '',
    });

    function formHanlder(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (type === 'create') {
            post(route('candidate.languageAdd'), {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    refreshFn();
                    reset();
                    setSuccess('Language Added Successfully');
                },
            });
        } else {
            transform((data) => ({
                ...data,
                _method: 'PUT',
            }));

            post(route('candidate.languageUpdate', language?.pivot.id), {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    refreshFn();
                    reset();
                    setSuccess('Language Update Successfully');
                },
            });
        }
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger
                    className="cursor-pointer text-4xl text-primary capitalize hover:text-green-900"
                    onClick={() => {
                        setSuccess('');
                        reset();
                    }}
                >
                    {trigger}
                </DialogTrigger>
                {/* <DialogOverlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-overlayClose data-[state=open]:animate-overlayOpen" /> */}
                <DialogContent className="translate-y-[-50%] bg-white data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                    {success ? (
                        <DialogHeader className="mx-auto flex w-full justify-center bg-green-100 p-7 text-center text-2xl">{success}</DialogHeader>
                    ) : (
                        <DialogHeader>
                            <DialogTitle className="text-center text-2xl capitalize">{type === 'create' ? 'Add' : 'Update'} Langauge</DialogTitle>
                            <DialogDescription />
                            <form className="flex flex-col justify-center gap-5" onSubmit={(e) => formHanlder(e)}>
                                <div>
                                    <CustomSelectField
                                        label="Language"
                                        name="language_id"
                                        fetchTable="languages"
                                        value={data.language_id}
                                        onChange={(e) => setData('language_id', e.target.value)}
                                    />
                                    {errors.language_id && <p className="text-sm text-red-500">{errors.language_id}</p>}
                                </div>

                                <div>
                                    <CustomSelectField
                                        label="Language Level"
                                        name="language_level"
                                        items={[
                                            { id: 'Beginner', name: 'Beginner' },
                                            { id: 'Intermediate', name: 'Intermediate' },
                                            { id: 'Expert', name: 'Expert' },
                                        ]}
                                        fetchTable=""
                                        value={data.language_level}
                                        onChange={(e) => setData('language_level', e.target.value)}
                                    />
                                    {errors.language_level && <p className="text-sm text-red-500">{errors.language_level}</p>}
                                </div>

                                <Button className="hoverEffect text-white">{type === 'create' ? 'Save' : 'Update'} Changes</Button>
                            </form>
                        </DialogHeader>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
