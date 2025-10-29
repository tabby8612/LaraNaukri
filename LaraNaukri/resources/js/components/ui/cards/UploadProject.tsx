import { Project } from '@/types';
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
import CustomRichTextEditor from './CustomRichTextEditor';

type Props = {
    trigger?: string | ReactNode;
    project?: Project;
    type?: 'update' | 'create';
    refreshProjectsFn: () => void;
};

export default function UploadProject({ trigger, project, type = 'create', refreshProjectsFn }: Props) {
    const [imagePath, setImagePath] = useState('/storage/user_images/default.png');
    const [successDialog, setSuccessDialog] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: project?.name ? project.name : '',
        url: project?.url ? project.url : '',
        image_path: project?.image_path ? project.image_path : ('' as File | string),
        start_date: project?.start_date ? project.start_date : '',
        end_date: project?.end_date ? project.end_date : '',
        description: project?.description ? project.description : '',
        ongoing: project?.ongoing ? project.ongoing : 0,
        _method: type === 'update' ? 'PUT' : 'POST', // Laravel wants image in multiform but interia PUT method can't send it so we added _method in post method
    });

    function formHanlder(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (type === 'create') {
            post(route('candidate.projectAdd'), {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    refreshProjectsFn();
                    setSuccessDialog(true);
                    reset();
                },
            });
        } else {
            post(route('candidate.projectUpdate', { project }), {
                forceFormData: true,
                preserveScroll: true,
                onSuccess: () => {
                    refreshProjectsFn();
                    setSuccessDialog(true);
                    reset();
                },
            });
        }
    }

    function handleProfilePhoto(e: ChangeEvent<HTMLInputElement>) {
        const imageTmp = URL.createObjectURL(e.target.files![0]);
        setImagePath(imageTmp);
        setData('image_path', e.target.files![0]);
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger
                    className="cursor-pointer text-4xl text-primary capitalize hover:text-green-900"
                    onClick={() => setSuccessDialog(false)}
                >
                    {trigger}
                </DialogTrigger>
                <DialogPortal>
                    <DialogOverlay className="DialogOverlay fixed inset-0 bg-black/50 data-[state=closed]:animate-overlayClose data-[state=open]:animate-overlayOpen" />
                    <DialogContent className="DialogContent translate-y-[-50%] bg-white data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                        {successDialog ? (
                            <DialogTitle className="my-auto bg-green-100 p-7 text-center text-2xl capitalize">Project Added Successfully</DialogTitle>
                        ) : (
                            <DialogHeader>
                                <DialogTitle className="text-center text-2xl capitalize">{type === 'update' ? 'Update' : 'Add'} Project</DialogTitle>
                                <DialogDescription>Add Your Project Details</DialogDescription>
                                <form className="flex flex-col justify-center gap-5" onSubmit={(e) => formHanlder(e)} encType="multipart/form-data">
                                    <div className="flex gap-5">
                                        <div className="mb-4 w-full">
                                            <CustomInputField
                                                label="Project Name"
                                                name="project-name"
                                                placeholder="Project Name"
                                                type="text"
                                                defaultValue={project?.name}
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                            />
                                            {errors.name && <div className="mt-0 gap-0 text-red-500">{errors.name}</div>}
                                        </div>
                                        <div className="w-full">
                                            <CustomInputField
                                                label="Project URL"
                                                name="project-url"
                                                placeholder="Project URL"
                                                type="text"
                                                value={data.url}
                                                onChange={(e) => setData('url', e.target.value)}
                                            />
                                            {errors.url && <div className="mt-0 gap-0 text-red-500">{errors.url}</div>}
                                        </div>
                                    </div>
                                    <Label>Project Screenshot</Label>
                                    {project?.image_path && <img src={`/storage/${project.image_path}`} alt={project.name} className="size-80" />}
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
                                    {errors.image_path && <div className="mt-0 gap-0 text-red-500">{errors.image_path}</div>}
                                    <div className="flex gap-5">
                                        <div className="w-full">
                                            <CustomDatePicker
                                                label="Project Start Date"
                                                name="start-date"
                                                type="date"
                                                date={data.start_date}
                                                onChange={(e) => setData('start_date', e.target.value)}
                                            />
                                            {errors.start_date && <div className="mt-0 gap-0 text-red-500">{errors.start_date}</div>}
                                        </div>
                                        <div className="w-full">
                                            <CustomDatePicker
                                                label="Project End Date"
                                                name="end-date"
                                                type="date"
                                                date={data.end_date}
                                                onChange={(e) => setData('end_date', e.target.value)}
                                            />
                                            {errors.end_date && <div className="mt-0 gap-0 text-red-500">{errors.end_date}</div>}
                                        </div>
                                    </div>
                                    <div>
                                        <CustomRadioGroup
                                            label="Is Project OnGoing"
                                            options={['No', 'Yes']}
                                            layout="horizontal"
                                            selectedOption={data.ongoing}
                                            onChangeFn={(selectedOption) => setData('ongoing', selectedOption)}
                                        />
                                        {errors.ongoing && <div className="mt-0 gap-0 text-red-500">{errors.ongoing}</div>}
                                    </div>

                                    <div>
                                        <CustomRichTextEditor
                                            label="Project Description"
                                            name="project-description"
                                            isrequired
                                            value={data.description}
                                            onUpdateFn={(content) => setData('description', content)}
                                        />

                                        {errors.description && <div className="mt-0 gap-0 text-red-500">{errors.description}</div>}
                                    </div>

                                    <Button className="hoverEffect text-white disabled:bg-gray-500" disabled={processing}>
                                        {type === 'update' ? 'Update' : 'Save'} Changes
                                    </Button>
                                </form>
                            </DialogHeader>
                        )}
                    </DialogContent>
                </DialogPortal>
            </Dialog>
        </div>
    );
}
