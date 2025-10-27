import { Experience } from '@/types';
import { useForm } from '@inertiajs/react';
import { DialogDescription } from '@radix-ui/react-dialog';
import { Loader } from 'lucide-react';
import { FormEvent, ReactNode, useState } from 'react';
import { Button } from '../UnusedUI/button';
import { Dialog, DialogContent, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '../UnusedUI/dialog';
import CountryStateCity from './CountryStateCity';
import CustomDatePicker from './CustomDatePicker';
import CustomInputField from './CustomInputField';
import CustomRadioGroup from './CustomRadioGroup';
import CustomTextArea from './CustomTextArea';

type Props = { trigger?: string | ReactNode; refreshExperiences: () => void; experience?: Experience; type?: 'create' | 'update' };

export default function AddExperience({ trigger, refreshExperiences, experience, type = 'create' }: Props) {
    const [successMessage, setSuccessMessage] = useState('');

    const { data, setData, post, errors, reset, processing } = useForm({
        title: experience?.title ? experience.title : '',
        company: experience?.company ? experience.company : '',
        country_id: experience?.country_id ? experience.country_id : 0,
        state_id: experience?.state_id ? +experience.state_id : 0,
        city_id: experience?.city_id ? +experience.city_id : 0,
        start_date: experience?.start_date ? experience.start_date : '',
        end_date: experience?.end_date ? experience.end_date : '',
        is_working: experience?.is_working ? experience?.is_working : 0,
        description: experience?.description ? experience.description : '',
        _method: type === 'update' ? 'PUT' : 'POST',
    });

    function formHanlder(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (type === 'update') {
            console.log(`update`);
            console.log(data);
            post(route('candidate.experienceUpdate', experience?.id), {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    refreshExperiences();
                    setSuccessMessage('Experience Updated Successfully');
                    reset();
                },
            });
        } else {
            post(route('candidate.experienceAdd'), {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    refreshExperiences();
                    setSuccessMessage('Experience Added Successfully');
                    reset();
                },
            });
        }
    }

    function handleSelect(id: number) {
        console.log(id);
        setData('is_working', id);
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger
                    className="cursor-pointer text-4xl text-primary capitalize hover:text-green-900"
                    onClick={() => {
                        setSuccessMessage('');
                        reset();
                    }}
                >
                    {trigger}
                </DialogTrigger>
                <DialogOverlay
                    className="DialogOverlay fixed inset-0 bg-black/50 data-[state=closed]:animate-overlayClose data-[state=open]:animate-overlayOpen"
                    onClick={() => reset()}
                />
                <DialogContent className="DialogContent translate-y-[-50%] bg-white data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                    {successMessage ? (
                        <DialogHeader className="flex items-center justify-center bg-green-50 text-center text-5xl font-bold text-primary">
                            {successMessage}
                        </DialogHeader>
                    ) : (
                        <DialogHeader>
                            <DialogTitle className="text-center text-2xl capitalize">Add Experience</DialogTitle>
                            <DialogDescription className="text-center text-primary">Provide all information where you have work</DialogDescription>
                            <form className="flex flex-col justify-center gap-5" onSubmit={(e) => formHanlder(e)}>
                                <div className="flex gap-5">
                                    <div className="w-full">
                                        <CustomInputField
                                            label="Experience Title"
                                            name="experience-title"
                                            placeholder="Experience Title"
                                            type="text"
                                            value={data.title}
                                            onChange={(e) => setData('title', e.target.value)}
                                        />
                                        {errors.title && <p className="text-red-400">{errors.title}</p>}
                                    </div>
                                    <div className="w-full">
                                        <CustomInputField
                                            label="Company"
                                            name="company"
                                            placeholder="Company"
                                            type="text"
                                            value={data.company}
                                            onChange={(e) => setData('company', e.target.value)}
                                        />
                                        {errors.company && <p className="text-red-400">{errors.company}</p>}
                                    </div>
                                </div>
                                <div className="relative flex gap-5">
                                    <CountryStateCity
                                        cityID={data.city_id}
                                        countryID={`${data.country_id}`}
                                        stateID={data.state_id}
                                        setData={setData}
                                    />
                                </div>
                                {(errors.country_id || errors.city_id || errors.state_id) && <p className="text-red-400">Location is required</p>}
                                <div className="flex gap-5">
                                    <div className="w-full">
                                        <CustomDatePicker
                                            label="Experience Start Date"
                                            date={data.start_date}
                                            name="start-date"
                                            onChange={(e) => setData('start_date', e.target.value)}
                                        />
                                        {errors.start_date && <p className="text-red-400">{errors.start_date}</p>}
                                    </div>
                                    <div className="w-full">
                                        <CustomDatePicker
                                            label="Experience End Date"
                                            date={data.end_date}
                                            name="end-date"
                                            onChange={(e) => setData('end_date', e.target.value)}
                                        />
                                        {errors.end_date && <p className="text-red-400">{errors.end_date}</p>}
                                    </div>
                                </div>
                                <CustomRadioGroup
                                    label="Currently Working"
                                    options={['No', 'Yes']}
                                    selectedOption={data.is_working ?? 0}
                                    onChangeFn={(id) => handleSelect(id)}
                                    layout="horizontal"
                                />
                                {errors.is_working && <p className="text-red-400">{errors.is_working}</p>}
                                <div>
                                    <CustomTextArea
                                        label="Experience Description"
                                        name="experience-description"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                    />
                                    {errors.description && <p className="text-red-400">{errors.description}</p>}
                                </div>

                                <Button className="hoverEffect flex gap-3 text-white" disabled={processing}>
                                    {processing && <Loader className="animate-spin" />}
                                    {type === 'create' ? 'Save' : 'Update'} Changes
                                </Button>
                            </form>
                        </DialogHeader>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
