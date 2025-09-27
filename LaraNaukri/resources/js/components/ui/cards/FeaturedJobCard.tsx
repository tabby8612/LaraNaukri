import { LightningBolt } from '@/SVGs/Bolt';
import { Job } from '@/SVGs/Job';
import { Location } from '@/SVGs/Location';
import { router } from '@inertiajs/react';
import { Edit, Trash } from 'lucide-react';
import { Card } from '../card';
import { Badge } from '../UnusedUI/badge';
import { Button } from '../UnusedUI/button';
import DeleteConfirmation from './DeleteConfirmation';

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
    showCompanyDetails?: boolean;
    showEditOptions?: boolean;
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
    showCompanyDetails = true,
    showEditOptions = false,
}: JobsProps) {
    // console.log(title, type, location, postedDate, companyName, companyImageURL, companySlug);

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

            {showCompanyDetails && (
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
            )}

            {showEditOptions && (
                <div className="mt-3 flex gap-3">
                    <Button
                        className="cursor-pointer px-6 py-5 text-white"
                        onClick={() => router.get(route('employer.listAppliedUsers', { id: JobID }))}
                    >
                        Candidates{'  '}
                        <Badge variant={'default'} className="bg-white text-black">
                            10
                        </Badge>
                    </Button>
                    <Button
                        className="cursor-pointer bg-amber-400 py-5 text-black hover:bg-amber-400 hover:brightness-105"
                        onClick={() => router.get(route('employer.editJob', { id: JobID }))}
                    >
                        <Edit />
                    </Button>
                    <DeleteConfirmation
                        deleteFn={() => router.get(route('employer.deleteJob', { id: JobID }))}
                        trigger={<Trash className="size-10 rounded-lg bg-red-400 p-3 text-black" />}
                    />
                </div>
            )}

            {removeFavoriteFn && (
                <Button className="mt-5 w-28 cursor-pointer bg-red-500 font-montserrat font-bold text-white" onClick={() => removeFavoriteFn(JobID)}>
                    X Remove
                </Button>
            )}
        </Card>
    );
}
