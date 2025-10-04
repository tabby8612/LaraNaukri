import DashboardOverviewWidget from '@/components/ui/cards/Candidate/DashboardOverviewWidget';
import { default as Packages } from '@/components/ui/cards/Employer/Packages';
import PackageCard from '@/components/ui/cards/PackageCard';
import { Toaster } from '@/components/ui/sonner';
import AppEmployerLayout from '@/layouts/app/app-employer-layout';
import { ClockCircleFilled } from '@/SVGs/Clock';
import { Message } from '@/SVGs/Message';
import { User } from '@/SVGs/User';
import { Package, PaymentHistory } from '@/types';
import { usePage } from '@inertiajs/react';
import { toast } from 'sonner';

type CustomProps = {
    jobPackages: Package[];
    cvPackages: Package[];
    message: string;
    PurchasedCVPackages: PaymentHistory[];
    PurchasedJobPackages: PaymentHistory[];
};

export default function Dashboard() {
    const { jobPackages, cvPackages, message, PurchasedCVPackages, PurchasedJobPackages } = usePage<CustomProps>().props;
    console.log(PurchasedJobPackages);

    if (message) {
        if (message === 'paymentSuccess') toast.success('Your Purchase Is Successful');
        if (message === 'paymentFail') toast.error('Purchase Is Not Successful');
    }

    return (
        <AppEmployerLayout displaySearch={false} page="dashboard" titleText="Welcome to Employer Dashboard">
            <Toaster position="bottom-center" richColors closeButton />
            <section id="dashboard-widgets" className="grid grid-cols-3 gap-7">
                <DashboardOverviewWidget SVGIcon={ClockCircleFilled} link="" mainText="5" secondaryText="Open Jobs" />
                <DashboardOverviewWidget SVGIcon={User} link="" mainText="5" secondaryText="Open Jobs" />
                <DashboardOverviewWidget SVGIcon={Message} link="" mainText="5" secondaryText="Open Jobs" />
            </section>

            <section className="mt-10 rounded-xl bg-green-100 p-7">
                <h1 className="font-montserrat text-2xl font-bold">Purchased Job Package Details</h1>
                {PurchasedJobPackages.length > 0 ? (
                    <Packages purchasedPackages={PurchasedJobPackages} />
                ) : (
                    <p className="text-center text-lg">😢 No Job Package Found</p>
                )}
            </section>

            <section className="rounded-xl p-7">
                <h1 className="my-5 font-montserrat text-2xl font-bold">Upgrade Job Packages</h1>
                <div className="grid grid-cols-3 gap-10">
                    {jobPackages.map((jobPackage) => (
                        <PackageCard premiumPackage={jobPackage} type="job" key={jobPackage.id} />
                    ))}
                </div>
            </section>

            <section className="mt-10 rounded-xl bg-green-100 p-7">
                <h1 className="font-montserrat text-2xl font-bold">Purchased CVs Package Details</h1>
                {PurchasedCVPackages.length > 0 ? (
                    <Packages purchasedPackages={PurchasedCVPackages} />
                ) : (
                    <p className="text-center text-lg">😢 No Job Package Found</p>
                )}
            </section>

            <section className="rounded-xl p-7">
                <h1 className="my-5 font-montserrat text-2xl font-bold">Upgrade CV Packages</h1>
                <div className="grid grid-cols-3 gap-5">
                    {cvPackages.map((cvPackage) => (
                        <PackageCard premiumPackage={cvPackage} type="cv" key={cvPackage.id} />
                    ))}
                </div>
            </section>
        </AppEmployerLayout>
    );
}
