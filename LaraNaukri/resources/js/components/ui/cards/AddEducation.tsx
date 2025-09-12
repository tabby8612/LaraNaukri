import { useForm } from '@inertiajs/react';
import { FormEvent, ReactNode } from 'react';
import { Button } from '../UnusedUI/button';
import { Dialog, DialogContent, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '../UnusedUI/dialog';
import CountryStateCity from './CountryStateCity';
import CustomInputField from './CustomInputField';
import CustomSelectField from './CustomSelectField';
import DegreeLevelsTypes from './DegreeLevelsTypes';

export default function AddEducation({ trigger }: { trigger?: string | ReactNode }) {
    const { data, setData, errors, post } = useForm({
        degree_level_id: '',
        degree_type_id: '',
        country_id: '',
        state_id: '',
        city_id: '',
        title: '',
        institution: '',
        year: '',
        result: '',
        result_type: '',
    });
    function formHanlder(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route('candidate.educationAdd'));
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger className="cursor-pointer text-4xl text-primary capitalize hover:text-green-900">{trigger}</DialogTrigger>
                <DialogOverlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-overlayClose data-[state=open]:animate-overlayOpen" />
                <DialogContent className="translate-y-[-50%] bg-white data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                    <DialogHeader>
                        <DialogTitle className="text-center text-2xl capitalize">Add Education</DialogTitle>
                        <form className="flex flex-col justify-center gap-5" onSubmit={(e) => formHanlder(e)}>
                            <div className="flex gap-5">
                                <DegreeLevelsTypes DegreeLevelID={data.degree_level_id} DegreeTypeID={data.degree_type_id} setData={setData} />
                            </div>

                            <CustomInputField
                                label="Degree Title"
                                name="title"
                                placeholder="Degree Title"
                                type="text"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                            />
                            <div className="flex flex-col gap-5">
                                <CountryStateCity countryID={data.country_id} stateID={+data.state_id} cityID={+data.city_id} setData={setData} />
                            </div>
                            <div className="flex gap-5">
                                <CustomInputField
                                    label="Institution"
                                    name="institution"
                                    placeholder="Institution"
                                    type="text"
                                    value={data.institution}
                                    onChange={(e) => setData('institution', e.target.value)}
                                />
                                <CustomInputField
                                    label="Year"
                                    name="year"
                                    placeholder="Year"
                                    type="text"
                                    value={data.year}
                                    onChange={(e) => setData('year', e.target.value)}
                                />
                            </div>
                            <div className="flex gap-5">
                                <CustomInputField
                                    label="Degree Result"
                                    name="result"
                                    placeholder="Degree Result"
                                    type="text"
                                    value={data.result}
                                    onChange={(e) => setData('result', e.target.value)}
                                />
                                <CustomSelectField
                                    label="Select Result Type"
                                    name="result_type"
                                    items={[
                                        { name: 'GPA', id: 1 },
                                        { name: 'Grade', id: 2 },
                                        { name: 'Percentage', id: 3 },
                                    ]}
                                    fetchTable=""
                                    selectedID={+data.result_type}
                                    onChange={(e) => setData('result_type', e.target.value)}
                                />
                            </div>

                            <Button className="hoverEffect text-white">Save Changes</Button>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}
