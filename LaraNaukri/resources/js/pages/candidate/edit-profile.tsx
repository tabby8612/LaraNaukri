import EditCareerInformation from '@/components/sections/candidate/EditCareerInformation';
import EditPersonalInformation from '@/components/sections/candidate/EditPersonalInformation';
import EditProfileAccountInformation from '@/components/sections/candidate/EditProfileAccountInformation';
import EditProfilePhotoUpload from '@/components/sections/candidate/EditProfilePhotoUpload';
import EditProfileSummary from '@/components/sections/candidate/EditProfileSummary';
import EditProfileVideo from '@/components/sections/candidate/EditProfileVideo';
import { Button } from '@/components/ui/UnusedUI/button';
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
    const { candidate } = usePage<Props>().props;
    const [successMessage, showSuccessMessage] = useState<string | null>(null);

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
        country_id: candidate.country_id,
        state_id: candidate.state_id,
        city_id: candidate.city_id,
        image_path: candidate.image_path,
        cover_image_path: candidate.cover_image_path,
    });

    function formHandler(e: FormEvent<HTMLFormElement | HTMLButtonElement>) {
        e.preventDefault();
        post(route('candidate.updateProfile'), {
            onSuccess: () => {
                showSuccessMessage('User Updated Successfully');
                setTimeout(() => showSuccessMessage(''), 3000);
            },
        });
    }

    return (
        <AppCandidateLayout page="edit-profile" displaySearch={false} titleText="Edit Profile">
            {successMessage && (
                <div className="flex w-full justify-between rounded bg-primary px-2 py-2 text-white">
                    <p>{successMessage}</p>
                    <p className="cursor-pointer">X</p>
                </div>
            )}
            <form className="rounded-2xl bg-green-50 p-7" onSubmit={(e) => formHandler(e)} encType="mulmultipart/form-data">
                <EditProfileAccountInformation email={data.email} password={data.password} setData={setData} />

                <h1 className="font-montserrat text-2xl font-bold">Personal Information</h1>
                <div className="flex gap-3">
                    <EditProfilePhotoUpload profileImage={data.image_path} coverImage={data.cover_image_path} setData={setData} />
                </div>
                <EditPersonalInformation
                    data={{
                        first_name: data.first_name,
                        last_name: data.last_name,
                        gender_id: data.gender_id,
                        marital_status_id: data.marital_status_id,
                        country_id: data.country_id,
                        state_id: data.state_id,
                        city_id: data.city_id,
                        nationality_id: data.nationality_id,
                        date_of_birth: data.date_of_birth,
                        phone: data.phone,
                        mobile: data.mobile,
                        address: data.address,
                    }}
                    setData={setData}
                />

                <EditProfileVideo videoProfile={data.video_profile} setData={setData} />

                <EditCareerInformation
                    career_level_id={data.career_level_id}
                    category_id={data.category_id}
                    experience_id={data.experience_id}
                    industry_id={data.industry_id}
                    is_subscribed={data.is_subscribed}
                    salary_from={data.salary_from}
                    salary_to={data.salary_to}
                    setData={setData}
                />

                <Button
                    className={`flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary py-6 font-montserrat font-bold text-white uppercase`}
                    onSubmit={(e) => formHandler(e)}
                >
                    <p>Update Profile and Save</p>
                    <ArrowRightCircle />
                </Button>
            </form>
            <EditProfileSummary summary={candidate.summary} />
        </AppCandidateLayout>
    );
}
