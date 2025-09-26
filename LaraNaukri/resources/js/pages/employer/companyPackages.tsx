import Packages from '@/components/ui/cards/Employer/Packages';
import PackageCard from '@/components/ui/cards/PackageCard';
import AppEmployerLayout from '@/layouts/app/app-employer-layout';
import { Package } from '@/types';
import { CVPackage } from '@/types/employer';

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

export default function companyPackages() {
    return (
        <AppEmployerLayout displaySearch={false} page="packages" titleText="CV Package">
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
