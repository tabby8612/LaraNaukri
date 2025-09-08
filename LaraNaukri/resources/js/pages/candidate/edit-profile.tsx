import CustomDatePicker from '@/components/ui/cards/CustomDatePicker';
import CustomInputField from '@/components/ui/cards/CustomInputField';
import CustomSelectField from '@/components/ui/cards/CustomSelectField';
import CustomTextArea from '@/components/ui/cards/CustomTextArea';
import { Button } from '@/components/ui/UnusedUI/button';
import { Input } from '@/components/ui/UnusedUI/input';
import { Label } from '@/components/ui/UnusedUI/label';
import AppCandidateLayout from '@/layouts/app/app-candidate-layout';
import { Candidate } from '@/types';

import { useForm, usePage } from '@inertiajs/react';
import { ArrowRightCircle } from 'lucide-react';
import { FormEvent, useState } from 'react';

type Props = {
    candidate: Candidate;
    message: string;
};

export default function EditProfile() {
    const { candidate, message } = usePage<Props>().props;
    console.log(message);
    const [showMessage, setShowMessage] = useState(true);

    const { data, setData, post } = useForm({
        email: candidate.user.email,
        password: '',
        first_name: candidate.first_name,
        last_name: candidate.last_name,
        gender_id: candidate.gender.id,
        marital_status_id: candidate.marital_status_id,
        nationality_id: candidate.nationality_id,
        date_of_birth: candidate.date_of_birth,
        phone: candidate.phone,
        mobile: candidate.mobile,
        address: candidate.address,
        video_profile: candidate.video_profile,
        experience_id: candidate.experience_id,
        career_level_id: candidate.career_level_id,
        industry_id: candidate.industry_id,
        category_id: candidate.category_id,
        salary_from: candidate.salary_from,
        salary_to: candidate.salary_to,
        is_subscribed: candidate.is_subscribed,
    });

    function formHandler(e: FormEvent<HTMLFormElement | HTMLButtonElement>) {
        e.preventDefault();
        post(route('candidate.updateProfile'));
    }

    function selectedIDs(column: string, val: string) {
        setData(column, val);
    }

    return (
        <AppCandidateLayout page="edit-profile" displaySearch={false} titleText="Edit Profile">
            {showMessage && (
                <div className="flex w-full justify-between rounded bg-primary px-2 py-2 text-white">
                    <p>{message}</p>
                    <p className="cursor-pointer" onClick={() => setShowMessage(false)}>
                        X
                    </p>
                </div>
            )}
            <form className="rounded-2xl bg-green-50 p-7" onSubmit={(e) => formHandler(e)}>
                <h1 className="font-montserrat text-2xl font-bold">Account Information</h1>
                <div className="flex gap-3">
                    <CustomInputField
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        label="Email"
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <CustomInputField
                        type="password"
                        name="password"
                        placeholder=""
                        value={data.password}
                        label="Password"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                </div>
                <hr className="my-7 rounded-2xl border border-gray-300" />
                <h1 className="font-montserrat text-2xl font-bold">Personal Information</h1>
                <div className="flex gap-3">
                    <CustomInputField
                        type="text"
                        name="first-name"
                        placeholder="First Name"
                        value={data.first_name}
                        label="First Name"
                        onChange={(e) => setData('first_name', e.target.value)}
                    />
                    <CustomInputField
                        type="text"
                        name="last-name"
                        placeholder="Last Name"
                        value={data.last_name}
                        label="Last Name"
                        onChange={(e) => setData('last_name', e.target.value)}
                    />
                </div>
                <div className="mt-3 flex w-full gap-3">
                    <CustomSelectField label="Gender" name="gender_id" fetchTable="genders" selectedID={data.gender_id} onChangeFn={selectedIDs} />
                    <CustomSelectField
                        label="Marital Status"
                        name="marital_status_id"
                        fetchTable="marital_status"
                        selectedID={data.marital_status_id}
                        onChangeFn={selectedIDs}
                    />
                </div>

                {/* <div className="mt-3 flex gap-3">
                    <CustomSelectField label="Country" name="country_id" fetchTable="countries" />
                    <CustomSelectField label="State" name="state_id" fetchTable="states" />
                    <CustomSelectField label="City" name="city_id" fetchTable="cities" />
                </div> */}
                <div className="mt-3 flex gap-3">
                    <CustomSelectField
                        label="Nationality"
                        name="nationality_id"
                        fetchTable="nationalities"
                        selectedID={data.nationality_id}
                        onChangeFn={selectedIDs}
                    />

                    <CustomDatePicker label="Date of Birth" date={data.date_of_birth} onChangeFn={selectedIDs} />
                </div>
                <div className="mt-3 flex gap-3">
                    <CustomInputField
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={data.phone}
                        label="Phone"
                        onChange={(e) => setData('phone', e.target.value)}
                    />
                    <CustomInputField
                        type="tel"
                        name="Mobile"
                        placeholder="Mobile"
                        value={data.mobile}
                        label="Mobile"
                        onChange={(e) => setData('mobile', e.target.value)}
                    />
                </div>
                <div className="mt-3 gap-3">
                    <CustomTextArea
                        label="Street Address"
                        name="street-address"
                        value={data.address}
                        onChange={(e) => setData('address', e.target.value)}
                    />
                </div>
                <hr className="my-7 rounded-2xl border border-gray-300" />
                <h1 className="font-montserrat text-2xl font-bold">Add Video Profile</h1>
                <div className="mt-3 gap-3">
                    <CustomTextArea
                        label="Video Link - sample: https://www.youtube.com/embed/538cRSPrwZU"
                        name="video-links"
                        value={data.video_profile}
                        onChange={(e) => setData('video_profile', e.target.value)}
                    />
                </div>
                <hr className="my-7 rounded-2xl border border-gray-300" />
                <h1 className="font-montserrat text-2xl font-bold">Career Information</h1>
                <div className="mt-3 flex gap-3">
                    <CustomSelectField
                        label="Job Experience"
                        name="experience_id"
                        fetchTable="experiences"
                        onChangeFn={selectedIDs}
                        selectedID={data.experience_id}
                    />
                    <CustomSelectField
                        label="Career Level"
                        name="career_level_id"
                        fetchTable="career_levels"
                        selectedID={data.career_level_id}
                        onChangeFn={selectedIDs}
                    />
                </div>
                <div className="mt-3 flex gap-3">
                    <CustomSelectField
                        label="Select Industry"
                        name="industry_id"
                        fetchTable="industries"
                        selectedID={data.industry_id}
                        onChangeFn={selectedIDs}
                    />
                    <CustomSelectField
                        label="Select Category"
                        name="category_id"
                        fetchTable="categories"
                        selectedID={data.category_id}
                        onChangeFn={selectedIDs}
                    />
                </div>

                <div className="mt-3 flex gap-3">
                    <CustomInputField label="Select Currency" disabled={true} type="text" name="currency" placeholder="" value="USD" />
                    <CustomInputField
                        label="Current Salary"
                        type="text"
                        name="current-salary"
                        placeholder="Current Salary"
                        value={`${data.salary_from}`}
                        onChange={(e) => setData('salary_from', +e.target.value)}
                    />
                    <CustomInputField
                        label="Expected Salary"
                        type="text"
                        name="expected-salary"
                        placeholder="Expected Salary"
                        value={`${data.salary_to}`}
                        onChange={(e) => setData('salary_to', +e.target.value)}
                    />
                </div>
                <div className="my-7 flex items-center gap-3">
                    <Input type="checkbox" name="is_subscribed" id="is_subscribed" className="size-5" defaultChecked={data.is_subscribed} />
                    <Label>Subscribe to Newsletter</Label>
                </div>

                <Button
                    className={`flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary py-6 font-montserrat font-bold text-white uppercase`}
                    onSubmit={(e) => formHandler(e)}
                >
                    <p>Update Profile and Save</p>
                    <ArrowRightCircle />
                </Button>
            </form>
            <form className="mt-7 rounded-2xl bg-green-50 p-7">
                <h1 className="font-montserrat text-2xl font-bold">Summary</h1>
                <CustomTextArea label="Summary" name="summary" value={candidate.summary} />
                <Button
                    className={`mt-3 flex w-full items-center justify-center gap-2 rounded-lg border-primary bg-primary py-3 font-montserrat font-bold text-white uppercase`}
                >
                    <p>Update Summary</p>
                    <ArrowRightCircle />
                </Button>
            </form>
        </AppCandidateLayout>
    );
}
