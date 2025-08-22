import { AlignLeft } from 'lucide-react';
import { Card, CardContent } from '../card';

type CompanyOverviewProps = {
    imageURL: string;
    name: string;
    location: string;
    companyID: string;
    openJobs: number;
    description: string;
};
export default function CompanyOverviewCard({ imageURL, name, companyID, location, openJobs, description }: CompanyOverviewProps) {
    return (
        <Card className="border border-gray-200 bg-green-50 py-7 shadow-transparent">
            <CardContent className="my-0">
                <div className="flex items-center gap-2 p-6">
                    <AlignLeft className="size-8 text-gray-400" />
                    <h1 className="text-2xl font-semibold text-primary">Company Overview</h1>
                </div>
                <div className="mx-auto flex gap-3 px-6">
                    <img src={imageURL} alt="connect people" className="size-24 rounded-xl" />
                    <div>
                        <h1 className="text-lg font-semibold">{name}</h1>
                        <p className="text-primary">{location}</p>
                        <a
                            href={route('company.view', {
                                name: name,
                                id: companyID,
                            })}
                            className="text-primary"
                        >
                            {openJobs} Current Jobs Openings
                        </a>
                    </div>
                </div>
                <hr className="mx-auto my-7 w-11/12 rounded-2xl border border-gray-400/50" />

                <p className="mx-auto px-4">
                    {description}{' '}
                    <a
                        href={route('company.view', {
                            name: name,
                            id: companyID,
                        })}
                        className="text-primary"
                    >
                        Read More
                    </a>
                </p>
            </CardContent>
        </Card>
    );
}
