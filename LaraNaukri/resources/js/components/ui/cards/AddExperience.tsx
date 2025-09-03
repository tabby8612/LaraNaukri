import { FormEvent, ReactNode } from 'react';
import { Button } from '../UnusedUI/button';
import { Dialog, DialogContent, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '../UnusedUI/dialog';
import CustomDropdownMenu from './CustomDropdownmenu';
import CustomInputField from './CustomInputField';
import CustomRadioGroup from './CustomRadioGroup';
import CustomTextArea from './CustomTextArea';

export default function AddExperience({ type }: { type?: string | ReactNode }) {
    function formHanlder(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    function countryHandler(chr: string) {
        console.log(chr);
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger className="cursor-pointer text-4xl text-primary capitalize hover:text-green-900">{type}</DialogTrigger>
                <DialogOverlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-overlayClose data-[state=open]:animate-overlayOpen" />
                <DialogContent className="translate-y-[-50%] bg-white data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                    <DialogHeader>
                        <DialogTitle className="text-center text-2xl capitalize">Add Experience</DialogTitle>
                        <form className="flex flex-col justify-center gap-5" onSubmit={(e) => formHanlder(e)}>
                            <div className="flex gap-5">
                                <CustomInputField
                                    label="Experience Title"
                                    name="experience-title"
                                    placeholder="Experience Title"
                                    type="text"
                                    value=""
                                />
                                <CustomInputField label="company" name="company" placeholder="Company" type="text" value="" />
                            </div>
                            <div className="relative flex gap-5">
                                <CustomDropdownMenu changeFn={countryHandler} triggertext="Select Country" />
                                <CustomDropdownMenu changeFn={countryHandler} triggertext="Select City" />
                            </div>
                            <div className="flex gap-5">
                                <CustomInputField label="Experience Start Date" name="start-date" placeholder="Start Date" type="date" value="" />
                                <CustomInputField label="Experience End Date" name="end-date" placeholder="End Date" type="date" value="" />
                            </div>
                            <CustomRadioGroup label="Currently Working" options={['Yes', 'No']} />
                            <CustomTextArea label="Experience Description" name="experience-description" value="" />

                            <Button className="hoverEffect text-white">Save Changes</Button>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}
