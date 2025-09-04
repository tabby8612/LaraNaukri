import { FormEvent, ReactNode } from 'react';
import { Button } from '../UnusedUI/button';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '../UnusedUI/dialog';
import CustomInputField from './CustomInputField';

export default function AddAlert({ type }: { type?: string | ReactNode }) {
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
                            <CustomInputField label="Alert Title" name="alert-title" placeholder="Enter Custom Alert Title" value="" type="text" />
                            <CustomInputField label="Email" name="alert-email" placeholder="Enter Email" value="" type="email" />
                            <div className="flex justify-end gap-4">
                                <DialogClose>
                                    <Button className="hoverEffect bg-gray-500 text-white hover:bg-gray-600">Close</Button>
                                </DialogClose>
                                <Button className="hoverEffect text-white">Save Changes</Button>
                            </div>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}
