import { Input } from '@headlessui/react';
import { Label } from '@radix-ui/react-label';
import { FormEvent, ReactNode } from 'react';
import { Button } from '../UnusedUI/button';
import { Dialog, DialogContent, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '../UnusedUI/dialog';
import CustomInputField from './CustomInputField';
import CustomRadioGroup from './CustomRadioGroup';
import CustomTextArea from './CustomTextArea';

export default function UploadProject({ type }: { type?: string | ReactNode }) {
    function formHanlder(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger className="cursor-pointer text-4xl text-primary capitalize hover:text-green-900">{type}</DialogTrigger>
                <DialogOverlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-overlayClose data-[state=open]:animate-overlayOpen" />
                <DialogContent className="translate-y-[-50%] bg-white data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                    <DialogHeader>
                        <DialogTitle className="text-center text-2xl capitalize">Add Project</DialogTitle>
                        <form className="flex flex-col justify-center gap-5" onSubmit={(e) => formHanlder(e)}>
                            <div className="flex gap-5">
                                <CustomInputField label="Project Name" name="project-name" placeholder="Project Name" type="text" value="" />
                                <CustomInputField label="Project URL" name="project-url" placeholder="Project URL" type="text" value="" />
                            </div>
                            <Label>Project Screenshot</Label>
                            <Input type="file" accept="images/" aria-required />
                            <div className="flex gap-5">
                                <CustomInputField label="Project Start Date" name="start-date" placeholder="" type="date" value="" />
                                <CustomInputField
                                    label="Project End Date"
                                    name="project-end-date"
                                    placeholder="Project End Date"
                                    type="date"
                                    value=""
                                />
                            </div>
                            <CustomRadioGroup label="Is Project OnGoing" options={['Yes', 'No']} />
                            <CustomTextArea label="Project Description" name="project-description" value="" />

                            <Button className="hoverEffect text-white">Save Changes</Button>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}
