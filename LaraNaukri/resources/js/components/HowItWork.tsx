import { AccountPlus } from './ui/AccountPlus';
import { ApplyJob } from './ui/ApplyJob';
import { ProfileCardOutline } from './ui/ProfileCardOutline';

export default function HowItWork() {
    return (
        <section id="jobsByCities" className="bg-green-50 px-14 py-10">
            <h1 className="my-7 text-center font-montserrat text-4xl font-semibold">How it Works</h1>
            <div className="flex gap-6">
                <div className="flex flex-col items-center justify-center p-5">
                    <AccountPlus className="size-15 rounded-lg bg-white p-3" />
                    <h1 className="mt-8 font-montserrat text-2xl font-semibold">Create An Account</h1>
                    <p className="text-center text-black/50">It's very easy to open an account and start your journey.</p>
                </div>
                <div className="flex flex-col items-center justify-center p-5">
                    <ProfileCardOutline className="size-15 rounded-lg bg-white p-3" />
                    <h1 className="mt-8 font-montserrat text-2xl font-semibold">Complete Your Profile</h1>
                    <p className="text-center text-black/50">Complete your profile with all the info to get attention of client.</p>
                </div>
                <div className="flex flex-col items-center justify-center p-5">
                    <ApplyJob className="size-15 rounded-lg bg-white p-3" />
                    <h1 className="mt-8 font-montserrat text-2xl font-semibold">Apply job or hire</h1>
                    <p className="text-center text-black/50">Apply & get your preferable jobs with all the requirements and get it.</p>
                </div>
            </div>
        </section>
    );
}
