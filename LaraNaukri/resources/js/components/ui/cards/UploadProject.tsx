import { useForm } from '@inertiajs/react';
import { DialogDescription } from '@radix-ui/react-dialog';
import { Label } from '@radix-ui/react-label';
import { Upload } from 'lucide-react';
import { ChangeEvent, FormEvent, ReactNode, useState } from 'react';
import { Card } from '../card';
import { Button } from '../UnusedUI/button';
import { Dialog, DialogContent, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from '../UnusedUI/dialog';
import CustomDatePicker from './CustomDatePicker';
import CustomInputField from './CustomInputField';
import CustomRadioGroup from './CustomRadioGroup';
import CustomTextArea from './CustomTextArea';

export default function UploadProject({ trigger }: { trigger?: string | ReactNode }) {
    const [imagePath, setImagePath] = useState('/storage/user_images/default.png');

    const { data, setData, post, processing } = useForm({
        name: '',
        url: '',
        image_path: '' as File | string,
        start_date: '',
        end_date: '',
        description: '',
        ongoing: false,
    });

    function formHanlder(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route('candidate.projectAdd'));
    }

    function handleProfilePhoto(e: ChangeEvent<HTMLInputElement>) {
        const imageTmp = URL.createObjectURL(e.target.files![0]);
        setImagePath(imageTmp);
        setData('image_path', e.target.files![0]);
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger className="cursor-pointer text-4xl text-primary capitalize hover:text-green-900">{trigger}</DialogTrigger>
                <DialogPortal>
                    <DialogOverlay className="DialogOverlay fixed inset-0 bg-black/50 data-[state=closed]:animate-overlayClose data-[state=open]:animate-overlayOpen" />
                    <DialogContent className="DialogContent translate-y-[-50%] bg-white data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                        <DialogHeader>
                            <DialogTitle className="text-center text-2xl capitalize">Add Project</DialogTitle>
                            <DialogDescription>Add Your Project Details</DialogDescription>
                            <form className="flex flex-col justify-center gap-5" onSubmit={(e) => formHanlder(e)} encType="multipart/form-data">
                                <div className="flex gap-5">
                                    <CustomInputField
                                        label="Project Name"
                                        name="project-name"
                                        placeholder="Project Name"
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                    />
                                    <CustomInputField
                                        label="Project URL"
                                        name="project-url"
                                        placeholder="Project URL"
                                        type="text"
                                        value={data.url}
                                        onChange={(e) => setData('url', e.target.value)}
                                    />
                                </div>
                                <Label>Project Screenshot</Label>
                                <Card className="w-full items-center gap-4 rounded-none border-gray-300 bg-white px-3 shadow-none">
                                    <img src={imagePath} alt={'photoImg.name'} className="size-28" />
                                    <div className="relative flex items-center justify-center gap-2 border-4 border-dashed border-gray-400 px-20 py-3 text-gray-500">
                                        <Upload />
                                        <p className="font-bold uppercase">Select Project Screenshot</p>
                                        <input
                                            type="file"
                                            name="image_path"
                                            accept="images/*"
                                            className="absolute top-0 left-0 size-full cursor-pointer bg-green-500 opacity-0"
                                            onChange={(e) => handleProfilePhoto(e)}
                                        />
                                    </div>
                                </Card>
                                <div className="flex gap-5">
                                    <CustomDatePicker
                                        label="Project Start Date"
                                        name="start-date"
                                        type="date"
                                        date={data.start_date}
                                        onChange={(e) => setData('start_date', e.target.value)}
                                    />
                                    <CustomDatePicker
                                        label="Project End Date"
                                        name="end-date"
                                        type="date"
                                        date={data.end_date}
                                        onChange={(e) => setData('end_date', e.target.value)}
                                    />
                                </div>
                                <CustomRadioGroup label="Is Project OnGoing" options={['Yes', 'No']} />
                                <CustomTextArea
                                    label="Project Description"
                                    name="project-description"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                />

                                <Button className="hoverEffect text-white" disabled={processing}>
                                    Save Changes
                                </Button>
                            </form>
                        </DialogHeader>
                    </DialogContent>
                </DialogPortal>
            </Dialog>
        </div>
    );
}
