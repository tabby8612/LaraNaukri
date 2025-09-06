import CustomCombobox from '@/components/ui/cards/CustomCombobox';
import CustomDatePicker from '@/components/ui/cards/CustomDatePicker';
import CustomInputField from '@/components/ui/cards/CustomInputField';
import CustomTextArea from '@/components/ui/cards/CustomTextArea';
import { Input } from '@/components/ui/UnusedUI/input';
import { Label } from '@/components/ui/UnusedUI/label';
import AppCandidateLayout from '@/layouts/app/app-candidate-layout';
import { Candidate } from '@/types';
import { Button } from '@headlessui/react';
import { usePage } from '@inertiajs/react';
import { ArrowRightCircle } from 'lucide-react';

type Props = {
    candidate: Candidate;
    genderValues: string[];
    martialStatusValues: string[];
    countriesValues: string[];
    citiesValues: string[];
    nationalityValues: string[];
    experienceValues: string[];
    industriesValues: string[];
    careerLevelValues: string[];
    categoriesValues: string[];
};
export default function EditProfile() {
    const {
        candidate,
        genderValues,
        martialStatusValues,
        countriesValues,
        citiesValues,
        nationalityValues,
        experienceValues,
        industriesValues,
        careerLevelValues,
        categoriesValues,
    } = usePage<Props>().props;
    console.log(industriesValues);

    return (
        <AppCandidateLayout page="edit-profile" displaySearch={false} titleText="Edit Profile">
            <form className="rounded-2xl bg-green-50 p-7">
                <h1 className="font-montserrat text-2xl font-bold">Account Information</h1>
                <div className="flex gap-3">
                    <CustomInputField type="email" name="email" placeholder="Email" value={candidate.user.email} label="Email" />
                    <CustomInputField type="password" name="password" placeholder="" value="" label="Password" />
                </div>
                <hr className="my-7 rounded-2xl border border-gray-300" />
                <h1 className="font-montserrat text-2xl font-bold">Personal Information</h1>
                <div className="flex gap-3">
                    <CustomInputField type="text" name="first-name" placeholder="First Name" value={candidate.name} label="First Name" />
                    <CustomInputField type="text" name="last-name" placeholder="Last Name" value={candidate.name} label="Last Name" />
                </div>
                <div className="mt-3 flex gap-3">
                    <CustomCombobox items={genderValues} selectedText={candidate.gender} name="gender" label="Gender" />
                    <CustomCombobox
                        items={martialStatusValues}
                        selectedText={candidate.martial_status}
                        name="martial-status"
                        label="Martial Status"
                    />
                </div>
                <div className="mt-3 flex gap-3">
                    <CustomCombobox name="country" label="Country" items={countriesValues} selectedText="USA" />
                    <CustomCombobox name="city" label="City" items={citiesValues} selectedText="Karachi" />
                </div>
                <div className="mt-3 flex gap-3">
                    <CustomCombobox name="nationality" label="Nationality" items={nationalityValues} selectedText={candidate.nationality} />
                    <CustomDatePicker label="Date of Birth" day={16} month={11} year={1989} />
                </div>
                <div className="mt-3 flex gap-3">
                    <CustomInputField type="tel" name="phone" placeholder="Phone" value={candidate.phone} label="Phone" />
                    <CustomInputField type="tel" name="Mobile" placeholder="Mobile" value={candidate.mobile} label="Mobile" />
                </div>
                <div className="mt-3 gap-3">
                    <CustomTextArea label="Street Address" name="street-address" value={candidate.address} />
                </div>
                <hr className="my-7 rounded-2xl border border-gray-300" />
                <h1 className="font-montserrat text-2xl font-bold">Add Video Profile</h1>
                <div className="mt-3 gap-3">
                    <CustomTextArea
                        label="Video Link - sample: https://www.youtube.com/embed/538cRSPrwZU"
                        name="video-links"
                        value={candidate.video_profile}
                    />
                </div>
                <hr className="my-7 rounded-2xl border border-gray-300" />
                <h1 className="font-montserrat text-2xl font-bold">Career Information</h1>
                <div className="mt-3 flex gap-3">
                    <CustomCombobox label="Job Experience" name="job-experience" items={experienceValues} selectedText={`${candidate.experience}`} />
                    <CustomCombobox label="Career Level" name="career-level" items={careerLevelValues} selectedText={candidate.career_level} />
                </div>
                <div className="mt-3 flex gap-3">
                    <CustomCombobox label="Select Industry" name="industry" items={industriesValues} selectedText={'candidate.industry.name'} />
                    <CustomCombobox
                        label="Functional Area"
                        name="functional-area"
                        items={categoriesValues}
                        selectedText={'candidate.category.name'}
                    />
                </div>
                <div className="mt-3 flex gap-3">
                    <CustomInputField label="Select Currency" disabled={true} type="text" name="currency" placeholder="" value="USD" />
                    <CustomInputField
                        label="Current Salary"
                        type="text"
                        name="current-salary"
                        placeholder="Current Salary"
                        value={`${candidate.salary_from}`}
                    />
                    <CustomInputField
                        label="Expected Salary"
                        type="text"
                        name="expected-salary"
                        placeholder="Expected Salary"
                        value={`${candidate.salary_to}`}
                    />
                </div>
                <div className="my-7 flex items-center gap-3">
                    <Input type="checkbox" name="newsletter" id="newsletter" className="size-5" />
                    <Label>Subscribe to Newsletter</Label>
                </div>
                <Button
                    className={`flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 font-montserrat font-bold text-white uppercase`}
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
