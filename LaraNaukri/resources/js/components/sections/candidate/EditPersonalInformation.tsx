import CountryStateCity from '@/components/ui/cards/CountryStateCity';
import CustomDatePicker from '@/components/ui/cards/CustomDatePicker';
import CustomInputField from '@/components/ui/cards/CustomInputField';
import CustomSelectField from '@/components/ui/cards/CustomSelectField';
import CustomTextArea from '@/components/ui/cards/CustomTextArea';

type Props = {
    data: {
        first_name: string;
        last_name: string;
        gender_id: number;
        marital_status_id: number;
        country_id: number;
        state_id: number;
        city_id: number;
        nationality_id: number;
        date_of_birth: string;
        phone: string;
        mobile: string;
        address: string;
    };

    setData: (attribute: string, value: string | number) => void;
};

export default function EditPersonalInformation({ data, setData }: Props) {
    return (
        <>
            <div className="flex gap-3">
                <CustomInputField
                    type="text"
                    name="first-name"
                    placeholder="First Name"
                    value={data.first_name}
                    label="First Name"
                    onChange={(e) => setData('first_name', e.target.value)}
                    isrequired
                />
                <CustomInputField
                    type="text"
                    name="last-name"
                    placeholder="Last Name"
                    value={data.last_name}
                    label="Last Name"
                    onChange={(e) => setData('last_name', e.target.value)}
                    isrequired
                />
            </div>
            <div className="mt-3 flex w-full gap-3">
                <CustomSelectField
                    label="Gender"
                    name="gender_id"
                    fetchTable="genders"
                    value={data.gender_id}
                    onChange={(e) => setData('gender_id', +e.target.value)}
                    isrequired
                />
                <CustomSelectField
                    label="Marital Status"
                    name="marital_status_id"
                    fetchTable="marital_status"
                    value={data.marital_status_id}
                    onChange={(e) => setData('marital_status_id', +e.target.value)}
                    isrequired
                />
            </div>

            <div className="mt-3 flex gap-3">
                <CountryStateCity countryID={`${data.country_id}`} stateID={data.state_id} cityID={data.city_id} isrequired />
            </div>
            <div className="mt-3 flex gap-3">
                <CustomSelectField
                    label="Nationality"
                    name="nationality_id"
                    fetchTable="nationalities"
                    value={data.nationality_id}
                    onChange={(e) => setData('nationality_id', +e.target.value)}
                    isrequired
                />

                <CustomDatePicker
                    label="Date of Birth"
                    name="date_of_birth"
                    date={data.date_of_birth}
                    onChange={(e) => setData('date_of_birth', e.target.value)}
                    isrequired
                />
            </div>
            <div className="mt-3 flex gap-3">
                <CustomInputField
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={data.phone}
                    label="Phone"
                    onChange={(e) => setData('phone', e.target.value)}
                    isrequired
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
                    isrequired
                />
            </div>
            <hr className="my-7 rounded-2xl border border-gray-300" />
        </>
    );
}
