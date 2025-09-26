import CountryStateCity from '@/components/ui/cards/CountryStateCity';
import CustomDatePicker from '@/components/ui/cards/CustomDatePicker';
import CustomInputField from '@/components/ui/cards/CustomInputField';
import { CustomMultiSelector } from '@/components/ui/cards/CustomMultiSelector';
import CustomRadioGroup from '@/components/ui/cards/CustomRadioGroup';
import CustomSelectField from '@/components/ui/cards/CustomSelectField';
import CustomTextArea from '@/components/ui/cards/CustomTextArea';
import { Button } from '@/components/ui/UnusedUI/button';
import AppEmployerLayout from '@/layouts/app/app-employer-layout';
import { ArrowRightCircle } from 'lucide-react';
import { useState } from 'react';

export default function PostJob() {
    const [isExternal, setIsExternal] = useState(false);

    return (
        <AppEmployerLayout displaySearch={false} page="postJob" titleText="Job Details">
            <form className="flex w-full flex-col gap-5 rounded-2xl bg-green-50 p-7" encType="multipart/formData">
                <h1 className="mt-5 font-montserrat text-xl font-bold">Job Details</h1>
                <CustomInputField label="Title" name="title" placeholder="Job Title" type="text" value={''} isrequired />
                <CustomTextArea label="Description" name="description" value={''} isrequired />
                <CustomTextArea label="Benefits" name="benefits" value={''} isrequired />
                <CustomMultiSelector label="Skills" fetchTable="skills" data={[]} />
                <div className="flex gap-5">
                    <CountryStateCity countryID="277" stateID={0} cityID={0} isrequired />
                </div>

                <div className="flex gap-5">
                    <CustomInputField label="Salary From" name="salary_from" placeholder="Salary From" type="number" isrequired value={''} />
                    <CustomInputField label="Salary To" name="salary_to" placeholder="Salary To" type="number" isrequired value={''} />
                </div>

                <div className="flex gap-10">
                    <CustomSelectField label="Salary Currency" name="currency" fetchTable="" items={[{ id: 'usd', name: 'USD' }]} />
                    <CustomSelectField label="Select Salary Period" name="period" fetchTable="" items={[{ id: 'weekly', name: 'Weekly' }]} />
                    <div className="size-12 w-full">
                        <CustomRadioGroup label="Hide Salary" options={['Yes', 'No']} onChangeFn={() => {}} selectedText="No" layout="horizontal" />
                    </div>
                </div>

                <div className="flex gap-5">
                    <CustomSelectField label="Career Level" fetchTable="career_levels" name="career_level" />
                    <CustomSelectField label="Functional Level" fetchTable="categories" name="categories_id" />
                </div>

                <div className="flex gap-5">
                    <CustomSelectField label="Job Type" fetchTable="" name="job_type" items={[{ id: 'contract', name: 'Contract' }]} />
                    <CustomSelectField label="Functional Level" fetchTable="categories" name="categories_id" />
                </div>

                <div className="flex gap-5">
                    <CustomSelectField label="Positions" fetchTable="" name="positions" items={[{ id: '1', name: '1' }]} />
                    <CustomSelectField label="Gender" fetchTable="" name="categories_id" items={[{ id: 'male', name: 'Male' }]} />
                </div>

                <div className="flex gap-5">
                    <CustomDatePicker label="Job Expiry Date" date="2025-11-11" />
                    <CustomSelectField label="Degree Level" name="degree_level" fetchTable="degree_levels" />
                </div>

                <div className="flex items-center justify-center gap-5">
                    <div className="w-1/2">
                        <CustomSelectField label="Job Experience" name="job_experience_level" fetchTable="experiences" />
                    </div>

                    <div className="w-1/2">
                        <CustomRadioGroup label="Is Freelance?" onChangeFn={() => {}} options={['Yes', 'No']} selectedText="No" layout="horizontal" />
                    </div>
                </div>

                <div className="flex h-15 items-center gap-5">
                    <div className="w-1/4">
                        <CustomRadioGroup
                            label="Is this External Job?"
                            onChangeFn={() => setIsExternal(!isExternal)}
                            options={['Yes', 'No']}
                            selectedText={isExternal ? 'Yes' : 'No'}
                            layout="horizontal"
                        />
                    </div>

                    {isExternal && (
                        <div className="w-3/4">
                            <CustomInputField label="External Link" name="external_link" placeholder="External Link" type="url" value={''} />
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
