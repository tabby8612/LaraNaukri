import PackageCard from '@/components/ui/cards/PackageCard';
import AppEmployerLayout from '@/layouts/app/app-employer-layout';
import { Package, PaymentHistory } from '@/types';
import { usePage } from '@inertiajs/react';

export default function CompanyPackages() {
    const { cvPackage, activePackage } = usePage<{ cvPackage: Package; activePackage: PaymentHistory }>().props;
    console.log(activePackage);

    return (
        <AppEmployerLayout displaySearch={false} page="packages" titleText="CV Package">
            <section className="mt-10 rounded-xl bg-green-100 p-7">
                <h1 className="font-montserrat text-2xl font-bold">Purchased CVs Package Details</h1>
                {activePackage ? (
                    <table className="w-full bg-white">
                        <thead>
                            <tr className="bg-black text-white">
                                <th>Package Name</th>
                                <th>Price</th>
                                <th>Available Quota</th>
                                <th>Purchase Date</th>
                                <th>Package Expired</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center" key={activePackage.id}>
                                <td>{activePackage.package.name}</td>
                                <td>USD {activePackage.package.price}</td>
                                <td>{`${activePackage.quota_used} / ${activePackage.package.num_listings}`}</td>
                                <td>{activePackage.created_at}</td>
                                <td>{activePackage.expiry_date}</td>
                            </tr>
                        </tbody>
                    </table>
                ) : (
                    <div className="text-center text-lg">😢 No Package Found</div>
                )}
            </section>

            <section className="rounded-xl p-7">
                <h1 className="my-5 font-montserrat text-2xl font-bold">Upgrade CV Packages</h1>
                <div className="grid grid-cols-3 gap-5">
                    <PackageCard premiumPackage={cvPackage} type="cv" />
                </div>
            </section>
        </AppEmployerLayout>
    );
}
