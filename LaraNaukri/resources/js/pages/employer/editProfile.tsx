import CountryStateCity from '@/components/ui/cards/CountryStateCity';
import CustomInputField from '@/components/ui/cards/CustomInputField';
import CustomRichTextEditor from '@/components/ui/cards/CustomRichTextEditor';
import CustomSelectField from '@/components/ui/cards/CustomSelectField';
import CustomUploadField from '@/components/ui/cards/CustomUploadField';
import { Button } from '@/components/ui/UnusedUI/button';
import AppEmployerLayout from '@/layouts/app/app-employer-layout';
import { Company } from '@/types/employer';
import { useForm, usePage } from '@inertiajs/react';
import { FormEvent, useEffect, useState } from 'react';

const ownership = ['Sole Proprietorship', 'Public', 'Private', 'Government', 'NGO'];
const companySize = ['1-10', '11-50', '51-100', '101-300', '301-600', '600+'];

type CustomProps = {
    company: Company;
    message: string;
};
export default function EditProfile() {
    const time = new Date().getFullYear();
    const [successMessage, setSuccessMessage] = useState('');
    const { company, message } = usePage<CustomProps>().props;

    useEffect(() => {
        if (message) {
            setSuccessMessage(message);

            const timer = setTimeout(() => {
                setSuccessMessage('');
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [message]);

    const ownershipArr = Array.from({ length: ownership.length }).map((_, index) => ({ id: ownership[index], name: ownership[index] }));
    const officesArr = Array.from({ length: 20 }).map((_, index) => ({ id: `${index + 1}`, name: `${index + 1}` }));
    const companySizeArr = Array.from({ length: companySize.length }).map((_, index) => ({ id: companySize[index], name: companySize[index] }));
    const establishedInArr = Array.from({ length: 100 }).map((_, index) => ({ id: `${time - index}`, name: `${time - index}` }));

    const { data, setData, post, errors, hasErrors } = useForm({
        user_id: company.user.id,
        email: company.user.email ?? '',
        password: '',
        image_path: null as null | File,
        name: company.name ?? '',
        industry_id: company.industry_id ?? '',
        organization_type: company.organization_type ?? '',
        description: company.description ?? '',
        total_offices: company.total_offices ?? '',
        company_size: company.company_size ?? '',
        founded: company.founded ?? '',
        url: company.url ?? '',
        phone: company.phone ?? '',
        facebook: company.facebook ?? '',
        twitter: company.twitter ?? '',
        linkedin: company.linkedin ?? '',
        pinterest: company.pinterest ?? '',
        country_id: company.country_id ?? '',
        state_id: company.state_id ?? '',
        city_id: company.city_id ?? '',
        location: company.location ?? '',
        hr_name: company.hr_name ?? '',
        hr_email: company.hr_email ?? '',
        hr_designation: company.hr_designation ?? '',
        reg_number: company.reg_number ?? '',
    });

    console.log(errors);
    console.log(data.description);

    function submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        post(route('employer.store'));
    }

    return (
        <AppEmployerLayout displaySearch={false} page="editProfile" titleText="Edit Profile">
            {successMessage && <p className="my-4 rounded bg-primary p-3 text-white">{successMessage}</p>}
            {hasErrors && (
                <div className="my-3 text-red-400">
                    <p>These are errors in submitted form</p>
                    <ul className="ml-4 list-disc">
                        {Array.from(
                            Object.values(errors).map((el) => (
                                <li key={el} className="">
                                    {el}
                                </li>
                            )),
                        )}
                    </ul>
                </div>
            )}
            <form className="rounded-2xl bg-green-50 p-7" encType="multipart/formData" autoComplete="off" onSubmit={(e) => submitHandler(e)}>
                <h1 className="my-5 font-montserrat text-2xl font-bold">Account Information</h1>
                <div className="flex w-full gap-6">
                    <CustomInputField
                        label="Email"
                        placeholder="Enter Email"
                        name="email"
                        type="text"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <CustomInputField
                        label="Password"
                        placeholder="Enter Password"
                        name="password"
                        type="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                    />
                </div>

                <h1 className="mt-5 font-montserrat text-2xl font-bold">Company Information</h1>
                <div className="flex w-1/2 gap-6">
                    <CustomUploadField label="Company Logo" name="image_path" profileImage={company.image_path ?? null} setData={setData} />
                </div>
                <div className="mt-5 w-full">
                    <CustomInputField
                        label="Company Name"
                        name="name"
                        placeholder="Company Name"
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        isrequired
                    />
                </div>
                <div className="mt-5 flex w-full gap-6">
                    <CustomSelectField
                        label="Industry"
                        fetchTable="industries"
                        name="industry_id"
                        value={data.industry_id}
                        onChange={(e) => setData('industry_id', e.target.value)}
                        isrequired
                    />
                    <CustomSelectField
                        label="Ownership"
                        fetchTable=""
                        name="ownership"
                        items={ownershipArr}
                        isrequired
                        value={data.organization_type}
                        onChange={(e) => setData('organization_type', e.target.value)}
                    />
                </div>
                <div className="mt-5 flex w-full gap-6">
                    <CustomRichTextEditor
                        label="Description"
                        name="description"
                        isrequired={true}
                        value={data.description}
                        onUpdateFn={(content) => setData('description', content)}
                    />
                </div>
                <div className="mt-5 flex w-full gap-6">
                    <CustomSelectField
                        label="No. of Office"
                        fetchTable=""
                        name="offices"
                        value={data.total_offices}
                        onChange={(e) => setData('total_offices', e.target.value)}
                        isrequired
                        items={officesArr}
                    />
                    <CustomSelectField
                        label="No. of Employees"
                        fetchTable=""
                        name="employees"
                        value={data.company_size}
                        onChange={(e) => setData('company_size', e.target.value)}
                        isrequired
                        items={companySizeArr}
                    />
                    <CustomSelectField
                        label="Established In"
                        fetchTable=""
                        name="founded"
                        isrequired
                        value={data.founded}
                        onChange={(e) => setData('founded', e.target.value)}
                        items={establishedInArr}
                    />
                </div>
                <div className="mt-5 flex w-full gap-6">
                    <CustomInputField
                        label="Website URL"
                        name="url"
                        placeholder="Website URL"
                        type="text"
                        value={data.url}
                        onChange={(e) => setData('url', e.target.value)}
                        isrequired
                    />
                    <CustomInputField
                        label="Phone"
                        name="phone"
                        placeholder="Phone"
                        type="tel"
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                        isrequired
                    />
                </div>
                <div className="mt-5 flex w-full gap-6">
                    <CustomInputField
                        label="Facebook"
                        name="facebook"
                        placeholder="http://facebook.com"
                        type="text"
                        value={data.facebook}
                        onChange={(e) => setData('facebook', e.target.value)}
                    />
                    <CustomInputField
                        label="Twitter"
                        name="twitter"
                        placeholder="http://twitter.com"
                        type="text"
                        value={data.twitter}
                        onChange={(e) => setData('twitter', e.target.value)}
                    />
                </div>
                <div className="mt-5 flex w-full gap-6">
                    <CustomInputField
                        label="LinkedIn"
                        name="linkedin"
                        placeholder="http://linkedin.com"
                        type="text"
                        value={data.linkedin}
                        onChange={(e) => setData('linkedin', e.target.value)}
                    />
                    <CustomInputField
                        label="Pinterest"
                        name="pinterest"
                        placeholder="http://pinterest.com"
                        type="text"
                        value={data.pinterest}
                        onChange={(e) => setData('pinterest', e.target.value)}
                    />
                </div>
                <div className="mt-5 flex w-full gap-6">
                    <CountryStateCity countryID={data.country_id} cityID={+data.city_id} stateID={+data.state_id} isrequired setData={setData} />
                </div>
                <div className="mt-5 flex w-full gap-6">
                    <CustomInputField
                        label="Company Address"
                        name="address"
                        placeholder="Company Address"
                        type="text"
                        value={data.location}
                        onChange={(e) => setData('location', e.target.value)}
                        isrequired
                    />
                </div>

                <h1 className="mt-5 font-montserrat text-2xl font-bold">HR Person Information</h1>
                <div className="mt-5 flex w-full gap-6">
                    <CustomInputField
                        label="Name"
                        name="hr_name"
                        placeholder="Hr Name"
                        type="text"
                        value={data.hr_name}
                        onChange={(e) => setData('hr_name', e.target.value)}
                        isrequired
                    />
                    <CustomInputField
                        label="Email"
                        name="hr_email"
                        placeholder="email"
                        type="email"
                        value={data.hr_email}
                        onChange={(e) => setData('hr_email', e.target.value)}
                        isrequired
                    />
                </div>
                <div className="mt-5 flex w-full gap-6">
                    <CustomInputField
                        label="Designation"
                        name="hr_designation"
                        placeholder="designation"
                        type="text"
                        value={data.hr_designation}
                        onChange={(e) => setData('hr_designation', e.target.value)}
                    />
                    <CustomInputField
                        label="Company Registration Number"
                        name="registration"
                        placeholder="Reg. Number"
                        type="text"
                        value={data.reg_number}
                        onChange={(e) => setData('reg_number', e.target.value)}
                    />
                </div>
                <Button className="mt-5 w-full cursor-pointer font-montserrat font-bold text-white uppercase">Update Profile and Save</Button>
            </form>
        </AppEmployerLayout>
    );
}
