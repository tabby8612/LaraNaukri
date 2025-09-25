import CountryStateCity from '@/components/ui/cards/CountryStateCity';
import CustomInputField from '@/components/ui/cards/CustomInputField';
import CustomSelectField from '@/components/ui/cards/CustomSelectField';
import CustomTextArea from '@/components/ui/cards/CustomTextArea';
import CustomUploadField from '@/components/ui/cards/CustomUploadField';
import { Button } from '@/components/ui/UnusedUI/button';
import AppEmployerLayout from '@/layouts/app/app-employer-layout';

const ownerships = [
    {
        id: 'sole propietorship',
        name: 'Sole Propietorship',
    },
    {
        id: 'public',
        name: 'Public',
    },
];
export default function editProfile() {
    return (
        <AppEmployerLayout displaySearch={false} page="editProfile" titleText="Edit Profile">
            <form className="rounded-2xl bg-green-50 p-7" encType="multipart/formData">
                <h1 className="my-5 font-montserrat text-2xl font-bold">Account Information</h1>
                <div className="flex w-full gap-6">
                    <CustomInputField label="Email" placeholder="Enter Email" name="email" type="text" value={''} isrequired />
                    <CustomInputField label="Password" placeholder="Enter Password" name="password" type="password" value={''} isrequired />
                </div>

                <h1 className="mt-5 font-montserrat text-2xl font-bold">Company Information</h1>
                <div className="flex w-1/2 gap-6">
                    <CustomUploadField label="Company Logo" name="image_path" profileImage="companies/default.png" />
                </div>
                <div className="mt-5 w-full">
                    <CustomInputField label="Company Name" name="name" placeholder="Company Name" type="text" value={''} isrequired />
                </div>
                <div className="mt-5 flex w-full gap-6">
                    <CustomSelectField label="Industry" fetchTable="industries" name="industry_id" isrequired />
                    <CustomSelectField label="Ownership" fetchTable="" name="ownership" items={ownerships} isrequired />
                </div>
                <div className="mt-5 flex w-full gap-6">
                    <CustomTextArea label="Description" name="description" value={''} isrequired />
                </div>
                <div className="mt-5 flex w-full gap-6">
                    <CustomSelectField
                        label="No. of Office"
                        fetchTable=""
                        name="offices"
                        isrequired
                        items={Array.from({ length: 5 }).map((_, index) => ({ id: `${index + 1}`, name: `${index + 1}` }))}
                    />
                    <CustomSelectField
                        label="No. of Employees"
                        fetchTable=""
                        name="employees"
                        isrequired
                        items={Array.from({ length: 5 }).map((_, index) => ({ id: `${index + 1}`, name: `${index + 1}` }))}
                    />
                    <CustomSelectField
                        label="Established In"
                        fetchTable=""
                        name="founded"
                        isrequired
                        items={Array.from({ length: 5 }).map((_, index) => ({ id: `${2025 - index}`, name: `${2025 - index}` }))}
                    />
                </div>
                <div className="mt-5 flex w-full gap-6">
                    <CustomInputField label="Website URL" name="url" placeholder="Website URL" type="text" value={''} isrequired />
                    <CustomInputField label="Phone" name="phone" placeholder="Phone" type="tel" value={''} isrequired />
                </div>
                <div className="mt-5 flex w-full gap-6">
                    <CustomInputField label="Facebook" name="facebook" placeholder="http://facebook.com" type="text" value={''} />
                    <CustomInputField label="Twitter" name="twitter" placeholder="http://twitter.com" type="text" value={''} />
                </div>
                <div className="mt-5 flex w-full gap-6">
                    <CustomInputField label="LinkedIn" name="linkedin" placeholder="http://linkedin.com" type="text" value={''} />
                    <CustomInputField label="Pinterest" name="pinterest" placeholder="http://pinterest.com" type="text" value={''} />
                </div>
                <div className="mt-5 flex w-full gap-6">
                    <CountryStateCity countryID="0" cityID={0} stateID={0} isrequired />
                </div>
                <div className="mt-5 flex w-full gap-6">
                    <CustomInputField label="Company Address" name="address" placeholder="Company Address" type="text" value={''} isrequired />
                </div>

                <h1 className="mt-5 font-montserrat text-2xl font-bold">HR Person Information</h1>
                <div className="mt-5 flex w-full gap-6">
                    <CustomInputField label="Name" name="hr_name" placeholder="name" type="text" value={''} isrequired />
                    <CustomInputField label="Email" name="hr_email" placeholder="email" type="email" value={''} isrequired />
                </div>
                <div className="mt-5 flex w-full gap-6">
                    <CustomInputField label="Designation" name="hr_designation" placeholder="designation" type="text" value={''} />
                    <CustomInputField
                        label="Company Registration Number"
                        name="registration number"
                        placeholder="Reg. Number"
                        type="text"
                        value={''}
                    />
                </div>
                <Button className="mt-5 w-full cursor-pointer font-montserrat font-bold text-white uppercase">Update Profile and Save</Button>
            </form>
        </AppEmployerLayout>
    );
}
