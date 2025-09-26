import AppEmployerLayout from '@/layouts/app/app-employer-layout';

const paymentHistories = [
    {
        id: '1',
        package: { name: 'Platinum', num_days: '30', price: '20' },
        method: 'Stripe',
        start_date: '11-11-2025',
        end_date: '11-11-2025',
    },
];
export default function paymentHistory() {
    return (
        <AppEmployerLayout displaySearch={false} page="paymentHistory" titleText="Payment History">
            <table className="w-full">
                <thead className="bg-primary">
                    <tr>
                        <td className="px-3 font-bold text-white">Package Title</td>
                        <td className="border-l-2 border-l-white px-3 font-bold text-white">Price</td>
                        <td className="border-l-2 border-l-white px-3 font-bold text-white">Featured Profile Days</td>
                        <td className="border-l-2 border-l-white px-3 font-bold text-white">Payment Method</td>
                        <td className="border-l-2 border-l-white px-3 font-bold text-white">Package Start Date</td>
                        <td className="border-l-2 border-l-white px-3 font-bold text-white">Package End Date</td>
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
        </AppEmployerLayout>
    );
}
