import CountryStateCity from '@/components/ui/cards/CountryStateCity';
import CustomDatePicker from '@/components/ui/cards/CustomDatePicker';
import CustomInputField from '@/components/ui/cards/CustomInputField';
import { CustomMultiSelector } from '@/components/ui/cards/CustomMultiSelector';
import CustomRadioGroup from '@/components/ui/cards/CustomRadioGroup';
import CustomRichTextEditor from '@/components/ui/cards/CustomRichTextEditor';
import CustomSelectField from '@/components/ui/cards/CustomSelectField';
import { Button } from '@/components/ui/UnusedUI/button';
import AppEmployerLayout from '@/layouts/app/app-employer-layout';
import { Item, Job } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { ArrowRightCircle } from 'lucide-react';
import { FormEvent, useState } from 'react';

type CustomPageProps = {
    currencies: Item[];
    salaryPeriods: Item[];
    jobTypes: Item[];
    jobShifts: Item[];
    job: Job;
    type: string;
    message: string;
};
export default function PostJob() {
    const { currencies, salaryPeriods, jobTypes, jobShifts, job, type, message } = usePage<CustomPageProps>().props;
    const [isExternal, setIsExternal] = useState(Boolean(job?.is_external ?? 0));
    const [successMessage, setSuccessMessage] = useState(message);

    // console.log(job);

    const { data, setData, post, transform, errors } = useForm({
        title: job?.title ?? '',
        description: job?.description ?? '',
        benefits: job?.benefits ?? '',
        country_id: job?.country_id ?? '277',
        state_id: job?.state_id ?? '',
        city_id: job?.city_id ?? '',
        salary_from: job?.salary_from ?? '',
        salary_to: job?.salary_to ?? '',
        career_level: job?.career_level ?? '',
        category_id: job?.category_id ?? '',
        type: job?.type ?? '',
        shift: job?.shift ?? '',
        positions: job?.positions ?? '',
        gender: job?.gender ?? '',
        apply_before: job?.apply_before ?? '',
        degree: job?.degree.id ?? '',
        experience_id: job?.experience_id ?? '',
        hide_salary: job?.hide_salary ?? 0,
        is_freelance: job?.is_freelance ?? 0,
        is_external: job?.is_external ?? 0,
        is_featured: job?.is_featured ?? 0,
        external_url: job?.external_url ?? '',
        currency: job?.currency ?? '',
        period: job?.period ?? '',
        location: job?.location ?? '',
        is_open: job?.is_open ?? 1,
        _method: type === 'edit' ? 'PUT' : 'POST',
    });

    function submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const selectedSkillsEls = document.getElementById('selectedItems')?.children as HTMLCollection;
        const skills = [] as string[];

        for (const selectedSkillsEl of selectedSkillsEls) {
            if (selectedSkillsEl instanceof HTMLElement) {
                if (selectedSkillsEl.dataset.id) skills.push(selectedSkillsEl.dataset.id!);
            }
        }

        transform((data) => ({
            ...data,
            skills,
        }));

        if (type === 'edit') {
            post(route('employer.editJob', job.id), {
                onSuccess: () => setSuccessMessage('Updated Successfully'),
            });
        } else {
            post(route('employer.postJob'));
        }
    }

    return (
        <AppEmployerLayout displaySearch={false} page="postJob" titleText="Job Details">
            <Head>
                <title>Create Job</title>
            </Head>
            {errors &&
                Object.values(errors).map((error) => (
                    <p className="text-red-500" key={error}>
                        {error}
                    </p>
                ))}

            {successMessage && (
                <div className="flex justify-between rounded bg-primary p-2 text-white">
                    <p>{successMessage}</p>
                    <p className="cursor-pointer font-bold" onClick={() => setSuccessMessage('')}>
                        X
                    </p>
                </div>
            )}
            <form className="flex w-full flex-col gap-5 rounded-2xl bg-green-50 p-7" encType="multipart/formData" onSubmit={(e) => submitHandler(e)}>
                <h1 className="mt-5 font-montserrat text-xl font-bold">Job Details</h1>
                <CustomInputField
                    label="Title"
                    name="title"
                    placeholder="Job Title"
                    type="text"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    isrequired
                />

                <CustomRichTextEditor
                    label="Description"
                    name="description"
                    value={data.description}
                    isrequired
                    onUpdateFn={(e) => setData('description', e)}
                    showAIGenerator={true}
                    jobTitle={data.title}
                />

                <CustomRichTextEditor label="Benefits" name="benefits" value={data.benefits} onUpdateFn={(e) => setData('benefits', e)} isrequired />

                <CustomMultiSelector label="Skills" fetchTable="skills" data={job?.skills ?? []} onChangeFn={() => {}} />
                <div className="flex flex-col gap-5 md:flex-row">
                    <CountryStateCity countryID={data.country_id} stateID={+data.state_id} cityID={+data.city_id} setData={setData} isrequired />
                </div>

                <div className="flex flex-col gap-5 md:flex-row">
                    <CustomInputField
                        label="Salary From"
                        name="salary_from"
                        placeholder="Salary From"
                        type="number"
                        isrequired
                        value={`${data.salary_from}`}
                        onChange={(e) => setData('salary_from', e.target.value)}
                    />
                    <CustomInputField
                        label="Salary To"
                        name="salary_to"
                        placeholder="Salary To"
                        type="number"
                        isrequired
                        value={`${data.salary_to}`}
                        onChange={(e) => setData('salary_to', e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-10 md:flex-row">
                    <CustomSelectField
                        label="Salary Currency"
                        name="currency"
                        fetchTable=""
                        items={currencies}
                        value={data.currency}
                        onChange={(e) => setData('currency', e.target.value)}
                        isrequired
                    />
                    <CustomSelectField
                        label="Select Salary Period"
                        name="period"
                        fetchTable=""
                        items={salaryPeriods}
                        value={data.period}
                        isrequired
                        onChange={(e) => setData('period', e.target.value)}
                    />
                    <div className="size-12 w-full">
                        <CustomRadioGroup
                            label="Hide Salary"
                            options={['No', 'Yes']}
                            onChangeFn={(val) => setData('hide_salary', `${val}`)}
                            selectedOption={+data.hide_salary}
                            layout="horizontal"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-5 md:flex-row">
                    <CustomSelectField
                        label="Career Level"
                        fetchTable="career_levels"
                        name="career_level"
                        isrequired
                        value={data.career_level}
                        onChange={(e) => setData('career_level', e.target.value)}
                    />
                    <CustomSelectField
                        label="Functional Area"
                        fetchTable="categories"
                        name="categories_id"
                        isrequired
                        value={data.category_id}
                        onChange={(e) => setData('category_id', e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-5 md:flex-row">
                    <CustomSelectField
                        label="Job Type"
                        fetchTable=""
                        name="type"
                        isrequired
                        items={jobTypes}
                        value={data.type}
                        onChange={(e) => setData('type', e.target.value)}
                    />
                    <CustomSelectField
                        label="Job Shift"
                        fetchTable=""
                        name="job_shift_id"
                        isrequired
                        items={jobShifts}
                        value={data.shift}
                        onChange={(e) => setData('shift', e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-5 md:flex-row">
                    <CustomSelectField
                        label="Positions"
                        fetchTable=""
                        name="positions"
                        isrequired
                        items={Array.from({ length: 20 }).map((_, index) => ({ id: `${index + 1}`, name: `${index + 1}` }))}
                        value={data.positions}
                        onChange={(e) => setData('positions', e.target.value)}
                    />
                    <CustomSelectField
                        label="Gender"
                        fetchTable=""
                        name="categories_id"
                        items={[
                            { id: 'male', name: 'Male' },
                            { id: 'female', name: 'Female' },
                        ]}
                        value={data.gender}
                        isrequired
                        onChange={(e) => setData('gender', e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-5 md:flex-row">
                    <CustomDatePicker
                        label="Job Expiry Date"
                        date={data.apply_before}
                        isrequired
                        onChange={(e) => setData('apply_before', e.target.value)}
                    />
                    <CustomSelectField
                        label="Degree Level"
                        name="degree_level"
                        fetchTable="degree_levels"
                        value={data.degree}
                        isrequired
                        onChange={(e) => setData('degree', e.target.value)}
                    />
                </div>

                <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
                    <div className="w-full md:w-1/2">
                        <CustomSelectField
                            label="Job Experience"
                            name="job_experience_level"
                            fetchTable="experiences"
                            value={data.experience_id}
                            isrequired
                            onChange={(e) => setData('experience_id', e.target.value)}
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <CustomRadioGroup
                            label="Is Freelance?"
                            options={['No', 'Yes']}
                            onChangeFn={(val) => setData('is_freelance', `${val}`)}
                            selectedOption={+data.is_freelance}
                            layout="horizontal"
                        />
                    </div>
                </div>

                <div className="flex h-15 items-center gap-5">
                    <div className="w-1/4">
                        <CustomRadioGroup
                            label="Is this External Job?"
                            onChangeFn={(val) => {
                                setIsExternal(!isExternal);
                                setData('is_external', `${val}`);
                            }}
                            options={['No', 'Yes']}
                            selectedOption={+data.is_external}
                            layout="horizontal"
                        />
                    </div>

                    {isExternal && (
                        <div className="w-3/4">
                            <CustomInputField
                                label="External Link"
                                name="external_link"
                                placeholder="External Link"
                                type="url"
                                value={data.external_url}
                                onChange={(e) => setData('external_url', e.target.value)}
                            />
                        </div>
                    )}
                </div>

                <Button className="flex h-11 cursor-pointer gap-2 text-lg text-white">
                    <p>Submit Job</p>
                    <ArrowRightCircle className="size-5" />
                </Button>
            </form>
        </AppEmployerLayout>
    );
}
