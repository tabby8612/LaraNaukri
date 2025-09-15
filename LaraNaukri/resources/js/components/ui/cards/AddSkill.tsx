import { useForm } from '@inertiajs/react';
import { FormEvent, ReactNode, useState } from 'react';
import { DialogDescription } from '../dialog';
import { Button } from '../UnusedUI/button';
import { Dialog, DialogContent, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '../UnusedUI/dialog';
import CustomSelectField from './CustomSelectField';

export default function AddSkill({ trigger }: { trigger?: string | ReactNode }) {
    const [successDialog, setSuccessDialog] = useState('');

    const { data, setData, errors, post } = useForm({
        skill_id: '',
        experience_id: '',
    });

    function formHanlder(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route('candidate.skillAdd'), {
            onSuccess: () => {
                setSuccessDialog('Skill Added Successfully');
            },
        });
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger className="cursor-pointer text-4xl text-primary capitalize hover:text-green-900">{trigger}</DialogTrigger>
                <DialogOverlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-overlayClose data-[state=open]:animate-overlayOpen" />
                {successDialog ? (
                    <DialogContent className="translate-y-[-50%] bg-green-100 data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                        <DialogDescription className="text-2xl font-semibold">{successDialog}</DialogDescription>
                    </DialogContent>
                ) : (
                    <DialogContent className="translate-y-[-50%] bg-white data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                        <DialogHeader>
                            <DialogTitle className="text-center text-2xl capitalize">Add Skills</DialogTitle>
                            <DialogDescription />

                            <form className="flex flex-col justify-center gap-5" onSubmit={(e) => formHanlder(e)}>
                                <div>
                                    <CustomSelectField
                                        label="Select Skill"
                                        name="skills_id"
                                        fetchTable="skills"
                                        value={data.skill_id}
                                        onChange={(e) => setData('skill_id', e.target.value)}
                                    />
                                    {errors.skill_id && <div className="text-sm text-red-400">{errors.skill_id}</div>}
                                </div>

                                <div>
                                    <CustomSelectField
                                        label="Select Year"
                                        name="years_id"
                                        fetchTable="experiences"
                                        value={data.experience_id}
                                        onChange={(e) => setData('experience_id', e.target.value)}
                                    />
                                    {errors.experience_id && <div className="text-sm text-red-400">{errors.experience_id}</div>}
                                </div>

                                <Button className="hoverEffect text-white">Save Changes</Button>
                            </form>
                        </DialogHeader>
                    </DialogContent>
                )}
            </Dialog>
        </div>
    );
}
