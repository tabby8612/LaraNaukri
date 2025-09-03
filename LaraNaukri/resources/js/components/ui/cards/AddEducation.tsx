import { FormEvent, ReactNode } from 'react';
import { Button } from '../UnusedUI/button';
import { Dialog, DialogContent, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '../UnusedUI/dialog';
import CustomInputField from './CustomInputField';
import CustomSelectField from './CustomSelectField';

export default function AddEducation({ type }: { type?: string | ReactNode }) {
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
                        <DialogTitle className="text-center text-2xl capitalize">Add Education</DialogTitle>
                        <form className="flex flex-col justify-center gap-5" onSubmit={(e) => formHanlder(e)}>
                            <div className="flex gap-5">
                                <CustomSelectField
                                    label="Select Degree Level"
                                    name="degree_level_id"
                                    items={[
                                        { id: '1', name: 'Matric' },
                                        { id: '2', name: 'Intermediate' },
                                    ]}
                                />
                                <CustomSelectField
                                    label="Select Degree Type"
                                    name="degree_type_id"
                                    items={[
                                        { id: '1', name: 'Matric' },
                                        { id: '2', name: 'Matric In Arts' },
                                    ]}
                                />
                            </div>

                            <CustomInputField label="Degree Title" name="degree-title" placeholder="Degree Title" type="text" value="" />
                            <div className="flex gap-5">
                                <CustomSelectField
                                    label="Select Country"
                                    name="country_id"
                                    items={[
                                        { id: '1', name: 'United States' },
                                        { id: '2', name: 'Pakistan' },
                                    ]}
                                />
                                <CustomSelectField
                                    label="Select City"
                                    name="city_id"
                                    items={[
                                        { id: '1', name: 'New York' },
                                        { id: '2', name: 'Islamabad' },
                                    ]}
                                />
                            </div>
                            <div className="flex gap-5">
                                <CustomInputField label="Institution" name="institution" placeholder="Institution" type="text" value="" />
                                <CustomInputField label="Year" name="year" placeholder="Year" type="text" value="" />
                            </div>

                            <Button className="hoverEffect text-white">Save Changes</Button>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}
