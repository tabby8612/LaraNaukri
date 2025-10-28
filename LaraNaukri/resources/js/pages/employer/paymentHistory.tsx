import AppEmployerLayout from '@/layouts/app/app-employer-layout';
import { PaymentHistory } from '@/types';
import { usePage } from '@inertiajs/react';

export default function PurchasedJobPackages() {
    const { purchaseJobPackages } = usePage<{ purchaseJobPackages: PaymentHistory[] }>().props;

    return (
        <AppEmployerLayout displaySearch={false} page="paymentHistory" titleText="Payment History">
            {purchaseJobPackages.length > 0 && (
                <table className="w-full">
                    <thead className="bg-primary">
                        <tr>
                            <td className="px-3 font-bold text-white">Package Title</td>
                            <td className="border-l-2 border-l-white px-3 font-bold text-white">Price</td>
                            <td className="border-l-2 border-l-white px-3 font-bold text-white">Jobs Quota</td>
                            <td className="border-l-2 border-l-white px-3 font-bold text-white">Payment Method</td>
                            <td className="border-l-2 border-l-white px-3 font-bold text-white">Package Start Date</td>
                            <td className="border-l-2 border-l-white px-3 font-bold text-white">Package End Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {purchaseJobPackages.map((paymentHistory) => (
                            <tr className="bg-green-100" key={paymentHistory.id}>
                                <td className="px-3">{paymentHistory.package.name}</td>
                                <td className="px-3 text-center">USD {paymentHistory.package.price}</td>
                                <td className="px-3 text-center">{paymentHistory.package.num_listings}</td>
                                <td className="px-3 text-center">{paymentHistory.method}</td>
                                <td className="px-3 text-center">{paymentHistory.created_at}</td>
                                <td className="px-3 text-center">{paymentHistory.expiry_date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {purchaseJobPackages.length < 1 && <div className="text-center text-lg">😢 You've made no job package purchase</div>}
        </AppEmployerLayout>
    );
}
