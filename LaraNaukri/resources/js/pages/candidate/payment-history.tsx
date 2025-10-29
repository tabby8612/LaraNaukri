import AppCandidateLayout from '@/layouts/app/app-candidate-layout';
import { PaymentHistory } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function CandidatePaymentHistory() {
    const { paymentHistories } = usePage<{ paymentHistories: PaymentHistory[] }>().props;

    return (
        <AppCandidateLayout displaySearch={false} page="payment-history" titleText="Payment History">
            <Head title="Payment History" />
            {paymentHistories.length > 0 ? (
                <table className="w-full">
                    <thead className="bg-primary">
                        <tr>
                            <td className="px-3 font-bold text-white">Package Title</td>
                            <td className="px-3 font-bold text-white">Price</td>
                            <td className="px-3 font-bold text-white">Featured Profile Days</td>
                            <td className="px-3 font-bold text-white">Payment Method</td>
                            <td className="px-3 font-bold text-white">Package Start Date</td>
                            <td className="px-3 font-bold text-white">Package End Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentHistories.map((paymentHistory) => (
                            <tr className="odd:bg-green-100" key={paymentHistory.id}>
                                <td className="px-3">{paymentHistory.package.name}</td>
                                <td className="px-3 text-center">USD {paymentHistory.package.price}</td>
                                <td className="px-3 text-center">{paymentHistory.package.num_days}</td>
                                <td className="px-3 text-center">{paymentHistory.method}</td>
                                <td className="px-3 text-center">{paymentHistory.start_date}</td>
                                <td className="px-3 text-center">{paymentHistory.end_date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="mt-3 text-center text-lg">😢 You've Made No Purchases So Far</div>
            )}
        </AppCandidateLayout>
    );
}
