import { Education } from '@/types';
import { useForm } from '@inertiajs/react';
import { FormEvent, ReactNode, useState } from 'react';
import { Button } from '../UnusedUI/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '../UnusedUI/dialog';
import CountryStateCity from './CountryStateCity';
import CustomInputField from './CustomInputField';
import { CustomMultiSelect } from './CustomMultiSelect';
import CustomSelectField from './CustomSelectField';
import DegreeLevelsTypes from './DegreeLevelsTypes';

type Props = {
    trigger?: string | ReactNode;
    type?: 'create' | 'update';
    education?: Education;
    refreshFn: () => void;
};

export default function AddEducation({ trigger, type = 'create', education, refreshFn }: Props) {
    const [successDialog, setSuccessDialog] = useState('');

    const { data, setData, errors, post, reset } = useForm({
        degree_level_id: education?.degree_level_id ? education.degree_level_id : '',
        degree_type_id: education?.degree_type_id ? education.degree_type_id : '',
        country_id: education?.country_id ? education.country_id : '',
        state_id: education?.state_id ? education.state_id : '',
        city_id: education?.city_id ? education.city_id : '',
        title: education?.title ? education.title : '',
        subjects: education?.subjects ? education.subjects : [],
        institution: education?.institution ? education.institution : '',
        year: education?.year ? education.year : '',
        result: education?.result ? education.result : '',
        result_type: education?.result_type ? education.result_type : '',
        _method: type === 'create' ? 'POST' : 'PUT',
    });

    function formHanlder(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (type === 'create') {
            post(route('candidate.educationAdd'), {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    refreshFn();
                    reset();
                    setSuccessDialog('Education Added Successfully');
                },
            });
        } else {
            post(route('candidate.educationUpdate', education?.id), {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    refreshFn();
                    reset();
                    setSuccessDialog('Education Updated Successfully');
                },
            });
        }
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger className="cursor-pointer text-4xl text-primary capitalize hover:text-green-900" onClick={() => setSuccessDialog('')}>
                    {trigger}
                </DialogTrigger>
                <DialogOverlay className="DialogOverlay fixed inset-0 bg-black/50 data-[state=closed]:animate-overlayClose data-[state=open]:animate-overlayOpen" />
                {successDialog ? (
                    <DialogContent className="translate-y-[-50%] bg-green-100 data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                        <DialogDescription className="size-0" />
                        <DialogTitle className="text-center text-2xl font-semibold">{successDialog}</DialogTitle>
                    </DialogContent>
                ) : (
                    <DialogContent className="DialogContent translate-y-[-50%] bg-white data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                        <DialogDescription />
                        <DialogHeader>
                            <DialogTitle className="text-center text-2xl capitalize">{type === 'update' ? 'Update' : 'Create'} Education</DialogTitle>
                            <form className="flex flex-col justify-center gap-5" onSubmit={(e) => formHanlder(e)}>
                                <div className="">
                                    <div className="flex gap-5">
                                        <DegreeLevelsTypes
                                            DegreeLevelID={data.degree_level_id}
                                            DegreeTypeID={data.degree_type_id}
                                            setData={setData}
                                        />
                                    </div>
                                    {(errors.degree_level_id || errors.degree_type_id) && (
                                        <div className="text-sm text-red-400">degree is required</div>
                                    )}
                                </div>

                                <div>
                                    <CustomInputField
                                        label="Degree Title"
                                        name="title"
                                        placeholder="Degree Title"
                                        type="text"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                    />
                                    {errors.title && <div className="text-sm text-red-400">{errors.title}</div>}
                                </div>

                                <div className="w-full">
                                    <CustomMultiSelect data={education?.subjects ?? []} setData={setData} />
                                </div>

                                <div>
                                    <div className="flex flex-col gap-5">
                                        <CountryStateCity
                                            countryID={data.country_id}
                                            stateID={+data.state_id}
                                            cityID={+data.city_id}
                                            setData={setData}
                                        />
                                    </div>
                                    {(errors.country_id || errors.state_id || errors.city_id) && (
                                        <div className="text-sm text-red-400">Location is required</div>
                                    )}
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-full">
                                        <CustomInputField
                                            label="Institution"
                                            name="institution"
                                            placeholder="Institution"
                                            type="text"
                                            value={data.institution}
                                            onChange={(e) => setData('institution', e.target.value)}
                                        />
                                        {errors.institution && <div className="text-sm text-red-400">{errors.institution}</div>}
                                    </div>

                                    <div className="w-full">
                                        <CustomInputField
                                            label="Year"
                                            name="year"
                                            placeholder="Year"
                                            type="text"
                                            value={data.year}
                                            onChange={(e) => setData('year', e.target.value)}
                                        />
                                        {errors.year && <div className="text-sm text-red-400">{errors.year}</div>}
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-full">
                                        <CustomInputField
                                            label="Degree Result"
                                            name="result"
                                            placeholder="Degree Result"
                                            type="text"
                                            value={data.result}
                                            onChange={(e) => setData('result', e.target.value)}
                                        />
                                        {errors.result && <div className="text-sm text-red-400">{errors.result}</div>}
                                    </div>

                                    <div className="w-full">
                                        <CustomSelectField
                                            label="Select Result Type"
                                            name="result_type"
                                            items={[
                                                { name: 'GPA', id: 'GPA' },
                                                { name: 'Grade', id: 'Grade' },
                                                { name: 'Percentage', id: 'Percentage' },
                                            ]}
                                            fetchTable=""
                                            value={data.result_type}
                                            onChange={(e) => setData('result_type', e.target.value)}
                                        />
                                        {errors.result_type && <div className="text-sm text-red-400">{errors.result_type}</div>}
                                    </div>
                                </div>

                                <Button className="hoverEffect text-white">{type === 'update' ? 'Update' : 'Save'} Changes</Button>
                            </form>
                        </DialogHeader>
                    </DialogContent>
                )}
            </Dialog>
        </div>
    );
}
