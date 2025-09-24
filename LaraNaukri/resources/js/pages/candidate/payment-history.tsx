import AppCandidateLayout from '@/layouts/app/app-candidate-layout';
import { PaymentHistory } from '@/types';
import { usePage } from '@inertiajs/react';

export default function CandidatePaymentHistory() {
    const { paymentHistories } = usePage<{ paymentHistories: PaymentHistory[] }>().props;
    console.log(paymentHistories);
    return (
        <AppCandidateLayout displaySearch={false} page="payment-history" titleText="Payment History">
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
                    {paymentHistories.length > 0 &&
                        paymentHistories.map((paymentHistory) => (
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
        </AppCandidateLayout>
    );
}
