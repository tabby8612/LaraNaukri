import { FormEvent, ReactNode } from 'react';
import { Button } from '../UnusedUI/button';
import { Dialog, DialogContent, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '../UnusedUI/dialog';
import CustomSelectField from './CustomSelectField';

export default function AddSkill({ type }: { type?: string | ReactNode }) {
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
                        <DialogTitle className="text-center text-2xl capitalize">Add Skills</DialogTitle>
                        <form className="flex flex-col justify-center gap-5" onSubmit={(e) => formHanlder(e)}>
                            <CustomSelectField
                                label="Select Skill"
                                name="skills_id"
                                items={[
                                    { id: '1', name: 'Photoshop' },
                                    { id: '2', name: 'Illustrator' },
                                ]}
                            />
                            <CustomSelectField
                                label="Select Year"
                                name="years_id"
                                items={[
                                    { id: '1', name: '1 Year' },
                                    { id: '2', name: '2 Years' },
                                ]}
                            />

                            <Button className="hoverEffect text-white">Save Changes</Button>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}
