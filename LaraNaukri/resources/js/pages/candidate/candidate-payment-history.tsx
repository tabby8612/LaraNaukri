import AppCandidateLayout from '@/layouts/app/app-candidate-layout';
import { Payment } from '@/types';
import { usePage } from '@inertiajs/react';

export default function CandidatePaymentHistory() {
    const { payments } = usePage<{ payments: Payment[] }>().props;
    console.log(payments);
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
                    {payments.length > 0 &&
                        payments.map((payment) => (
                            <tr className="odd:bg-green-100" key={payment.id}>
                                <td className="px-3">{payment.name}</td>
                                <td className="px-3 text-center">USD {payment.price}</td>
                                <td className="px-3 text-center">{payment.length}</td>
                                <td className="px-3 text-center">{payment.method}</td>
                                <td className="px-3 text-center">{payment.start_date}</td>
                                <td className="px-3 text-center">{payment.end_date}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </AppCandidateLayout>
    );
}
