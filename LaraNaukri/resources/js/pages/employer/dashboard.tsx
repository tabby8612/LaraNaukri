import DashboardOverviewWidget from '@/components/ui/cards/Candidate/DashboardOverviewWidget';
import { default as Packages } from '@/components/ui/cards/Employer/Packages';
import PackageCard from '@/components/ui/cards/PackageCard';
import AppEmployerLayout from '@/layouts/app/app-employer-layout';
import { ClockCircleFilled } from '@/SVGs/Clock';
import { Message } from '@/SVGs/Message';
import { User } from '@/SVGs/User';
import { Package } from '@/types';
import { CVPackage, JobPackage } from '@/types/employer';

export default function Dashboard() {
    const activeJobPackages: JobPackage[] = [
        {
            id: '1',
            name: 'Platinum',
            price: '30',
            quota: '0/22',
            purchased_date: '02-11-2025',
            package_expired: '02-12-2025',
        },
    ];

    const premiumJobsPackages: Package[] = [
        {
            id: '1',
            for: 'jobs',
            name: 'Platinum',
            num_days: '30',
            num_listings: '22',
            price: '20',
        },
        {
            id: '2',
            for: 'jobs',
            name: 'Gold',
            num_days: '7',
            num_listings: '3',
            price: '50',
        },
    ];

    const activeCVPackages: CVPackage[] = [
        {
            id: '1',
            name: 'Startup',
            price: '30',
            quota: '3/30',
            purchased_date: '02-11-2025',
            package_expired: '02-12-2025',
        },
    ];

    const premiumCVPackages: Package[] = [
        {
            id: '1',
            for: 'cv',
            name: 'Startup',
            num_days: '30',
            num_listings: '30',
            price: '30',
        },
    ];

    return (
        <AppEmployerLayout displaySearch={false} page="dashboard" titleText="Welcome to Employer Dashboard">
            <section id="dashboard-widgets" className="grid grid-cols-3 gap-7">
                <DashboardOverviewWidget SVGIcon={ClockCircleFilled} link="" mainText="5" secondaryText="Open Jobs" />
                <DashboardOverviewWidget SVGIcon={User} link="" mainText="5" secondaryText="Open Jobs" />
                <DashboardOverviewWidget SVGIcon={Message} link="" mainText="5" secondaryText="Open Jobs" />
            </section>

            <section className="mt-10 rounded-xl bg-green-100 p-7">
                <h1 className="font-montserrat text-2xl font-bold">Purchased Job Package Details</h1>
                <Packages premiumPackages={activeJobPackages} />
            </section>

            <section className="rounded-xl p-7">
                <h1 className="my-5 font-montserrat text-2xl font-bold">Upgrade Job Packages</h1>
                <div className="grid grid-cols-3 gap-10">
                    {premiumJobsPackages.map((premiumPackage) => (
                        <PackageCard premiumPackage={premiumPackage} type="job" key={premiumPackage.id} />
                    ))}
                </div>
            </section>

            <section className="mt-10 rounded-xl bg-green-100 p-7">
                <h1 className="font-montserrat text-2xl font-bold">Purchased CVs Package Details</h1>
                <Packages premiumPackages={activeCVPackages} />
            </section>

            <section className="rounded-xl p-7">
                <h1 className="my-5 font-montserrat text-2xl font-bold">Upgrade CV Packages</h1>
                <div className="grid grid-cols-3 gap-10">
                    {premiumCVPackages.map((premiumPackage) => (
                        <PackageCard premiumPackage={premiumPackage} type="cv" key={premiumPackage.id} />
                    ))}
                </div>
            </section>
        </AppEmployerLayout>
    );
}
