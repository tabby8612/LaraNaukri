import { LightningBolt } from '@/SVGs/Bolt';
import { Job } from '@/SVGs/Job';
import { Location } from '@/SVGs/Location';
import { Card } from '../card';

type JobsProps = {
    title: string;
    type: string;
    location: string;
    postedDate: string;
    companyName: string;
    companyImageURL: string;
    salary?: string | number;
    featured?: boolean;
};

export default function FeaturedJobCard({ title, type, location, postedDate, companyName, companyImageURL, salary, featured }: JobsProps) {
    return (
        <Card className="relative gap-0 rounded-4xl border-gray-300 p-5 shadow-2xs transition-all delay-100 duration-300 hover:translate-y-[-12px] hover:border-primary hover:shadow-xl">
            {featured && (
                <div className="bg-transparent before:absolute before:top-0 before:right-0 before:rounded-tr-4xl before:border-t-[50px] before:border-l-[50px] before:border-t-red-500 before:border-l-transparent">
                    <LightningBolt className="absolute top-2 right-3 text-white" />
                </div>
            )}
            <div className="flex items-center gap-2">
                <Job className="size-5.5 p-1 text-white" />
                <p className="">{type}</p>
            </div>
            <h1 className="mt-4 font-montserrat text-lg font-semibold">{title}</h1>

            {salary && (
                <div className="mt-3 flex items-center gap-2">
                    <p>
                        Salary: <span className="font-semibold">${salary}</span>
                    </p>
                </div>
            )}

            <div className="flex items-center gap-2">
                <Location className="size-5 text-primary" />
                <strong>{location}</strong>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-gray-200/60 px-3 py-3">
                <div>
                    <p>{postedDate}</p>
                    <p className="font-montserrat font-bold">{companyName}</p>
                </div>
                <img src={companyImageURL} alt={companyName} className="size-16 rounded-full border-4 border-white" />
            </div>
        </Card>
    );
}
