import CustomInputField from '@/components/ui/cards/CustomInputField';

type Props = {
    email: string;
    password: string;
    setData: (type: string, val: string) => void;
};
export default function EditProfileAccountInformation({ email, password, setData }: Props) {
    return (
        <>
            <h1 className="font-montserrat text-2xl font-bold">Account Information</h1>
            <div className="flex gap-3">
                <CustomInputField
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    label="Email"
                    onChange={(e) => setData('email', e.target.value)}
                />
                <CustomInputField
                    type="password"
                    name="password"
                    placeholder=""
                    value={password}
                    label="Password"
                    onChange={(e) => setData('password', e.target.value)}
                />
            </div>
            <hr className="my-7 rounded-2xl border border-gray-300" />
        </>
    );
}
