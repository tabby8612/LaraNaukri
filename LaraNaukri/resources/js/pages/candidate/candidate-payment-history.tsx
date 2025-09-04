import AppCandidateLayout from '@/layouts/app/app-candidate-layout';

export default function CandidatePaymentHistory() {
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
                    <tr className="odd:bg-green-100">
                        <td className="px-3">Featured Profile</td>
                        <td className="px-3">USD 10</td>
                        <td className="px-3">60</td>
                        <td className="px-3">Offline (Added by Admin)</td>
                        <td className="px-3">04-05-2025</td>
                        <td className="px-3">03-07-2025</td>
                    </tr>
                    <tr className="odd:bg-green-100">
                        <td className="px-3">Featured Profile</td>
                        <td className="px-3">USD 10</td>
                        <td className="px-3">60</td>
                        <td className="px-3">Offline (Added by Admin)</td>
                        <td className="px-3">04-05-2025</td>
                        <td className="px-3">03-07-2025</td>
                    </tr>
                    <tr className="odd:bg-green-100">
                        <td className="px-3">Featured Profile</td>
                        <td className="px-3">USD 10</td>
                        <td className="px-3">60</td>
                        <td className="px-3">Offline (Added by Admin)</td>
                        <td className="px-3">04-05-2025</td>
                        <td className="px-3">03-07-2025</td>
                    </tr>
                </tbody>
            </table>
        </AppCandidateLayout>
    );
}
