import { Field, Label, Radio, RadioGroup } from '@headlessui/react';
import { FormEvent, ReactNode, useState } from 'react';
import { Button } from '../UnusedUI/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '../UnusedUI/dialog';
import { Input } from '../UnusedUI/input';

export default function UploadCV({ type, title = '' }: { type?: string | ReactNode; title?: string }) {
    const options = ['Yes', 'No'];
    const [selected, setSelected] = useState(options[0]);

    function formHanlder(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const file = document.getElementById('cv-file') as HTMLInputElement;

        if (file.files) {
            console.log(file.files[0]);
        }
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger className="cursor-pointer text-4xl text-primary capitalize hover:text-green-900">{type}</DialogTrigger>
                <DialogOverlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-overlayClose data-[state=open]:animate-overlayOpen" />
                <DialogContent className="translate-y-[-50%] bg-white data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                    <DialogHeader>
                        <DialogTitle className="text-center text-2xl capitalize">Add CV</DialogTitle>
                        <DialogDescription className="text--lg my-3 text-center">Upload Your CV</DialogDescription>
                        <form className="flex flex-col justify-center gap-5" onSubmit={(e) => formHanlder(e)}>
                            <Input
                                name="cv-title"
                                id="cv-title"
                                placeholder="CV Title"
                                className="h-10 border-gray-400 selection:text-white focus-visible:ring-primary"
                                defaultValue={title}
                            />
                            <Input name="cv-file" id="cv-file" className="h-10 border-gray-400 file:text-primary" type="file" accept=".pdf" />
                            <div>
                                <p className="font-bold text-gray-500">Is Default</p>
                                <RadioGroup value={selected} onChange={setSelected} aria-label="default option">
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
                            </div>
                            <Button className="hoverEffect text-white">Save Changes</Button>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}
