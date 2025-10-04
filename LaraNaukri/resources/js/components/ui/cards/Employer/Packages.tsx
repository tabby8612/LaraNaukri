import { PaymentHistory } from '@/types';

type Props = {
    purchasedPackages: PaymentHistory[];
};

export default function Packages({ purchasedPackages }: Props) {
    return (
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
                {purchasedPackages.map((purchasedPackage) => (
                    <tr className="text-center" key={purchasedPackage.id}>
                        <td>{purchasedPackage.package.name}</td>
                        <td>USD {purchasedPackage.package.price}</td>
                        <td>{`${purchasedPackage.quota_used}/${purchasedPackage.package.num_listings}`}</td>
                        <td>{purchasedPackage.created_at}</td>
                        <td>{purchasedPackage.expiry_date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
