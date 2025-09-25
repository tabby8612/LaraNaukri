import { CVPackage, JobPackage } from '@/types/employer';

type Props = {
    premiumPackages: JobPackage[] | CVPackage[];
};

export default function Packages({ premiumPackages }: Props) {
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
                {premiumPackages.map((premPackage) => (
                    <tr className="text-center" key={premPackage.id}>
                        <td>{premPackage.name}</td>
                        <td>USD{premPackage.price}</td>
                        <td>{premPackage.quota}</td>
                        <td>{premPackage.purchased_date}</td>
                        <td>{premPackage.package_expired}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
