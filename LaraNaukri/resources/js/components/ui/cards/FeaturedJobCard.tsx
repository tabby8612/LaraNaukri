import { LightningBolt } from '@/SVGs/Bolt';
import { Job } from '@/SVGs/Job';
import { Location } from '@/SVGs/Location';
import { Card } from '../card';
import { Button } from '../UnusedUI/button';

type JobsProps = {
    title: string;
    type: string;
    location: string;
    postedDate: string;
    companyName: string;
    companyID?: string;
    companyImageURL: string;
    salary: string | number;
    featured: boolean;
    JobID: string;
    companySlug: string;
    removeFavoriteFn?: (id: string) => void;
};

export default function FeaturedJobCard({
    title,
    type,
    location,
    postedDate,
    companyName,
    companyImageURL,
    salary,
    featured,
    JobID,
    companySlug,
    removeFavoriteFn,
}: JobsProps) {
    return (
        <Card className="relative gap-0 rounded-4xl border-gray-300 p-5 shadow-2xs transition-all delay-100 duration-300 hover:translate-y-[-7px] hover:border-primary hover:shadow-xl">
            {featured && (
                <div className="bg-transparent before:absolute before:top-0 before:right-0 before:rounded-tr-4xl before:border-t-[50px] before:border-l-[50px] before:border-t-red-500 before:border-l-transparent">
                    <LightningBolt className="absolute top-2 right-3 text-white" />
                </div>
            )}
            <div className="flex items-center gap-2">
                <Job className="size-5.5 p-1 text-primary" />
                <p className="">{type}</p>
            </div>
            <h1 className="mt-4 font-montserrat text-lg font-semibold transition-colors delay-100 duration-300 hover:text-primary">
                <a
                    href={route('job.view', {
                        slug: `${title.toLowerCase().replaceAll(' ', '-')}-${JobID}`,
                    })}
                >
                    {title}
                </a>
            </h1>

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
                    <a
                        href={route('company.view', {
                            slug: companySlug,
                        })}
                    >
                        <p className="font-montserrat font-bold transition-colors delay-100 duration-300 hover:text-primary">{companyName}</p>
                    </a>
                </div>
                <img src={`/storage/${companyImageURL}`} alt={companyName} className="size-16 rounded-full border-4 border-white" />
            </div>
            {removeFavoriteFn && (
                <Button className="mt-5 w-28 cursor-pointer bg-red-500 font-montserrat font-bold text-white" onClick={() => removeFavoriteFn(JobID)}>
                    X Remove
                </Button>
            )}
        </Card>
    );
}
