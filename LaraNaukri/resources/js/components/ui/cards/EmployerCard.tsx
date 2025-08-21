import { Job } from '@/SVGs/Job';
import { Location } from '@/SVGs/Location';
import { Card } from '../card';

type EmployerProps = {
    imageUrl: string;
    title: string;
    industry: string;
    location: string;
    openJobCount: number;
};

export default function EmployerCard({ imageUrl, industry, location, openJobCount, title }: EmployerProps) {
    return (
        <Card className="group items-center justify-center gap-2 rounded-lg border-stone-200 px-5 shadow-xs transition-all delay-150 duration-300 hover:translate-y-[-10px] hover:bg-stone-100">
            <img src={imageUrl} alt={title} className="size-20 rounded-2xl" />
            <h1 className="font-montserrat text-lg font-bold">{title}</h1>
            <p className="text-stone-500">{industry}</p>
            <div className="flex items-center text-stone-500">
                <Location />
                {location}
            </div>
            <div className="mt-2 flex items-center justify-center gap-3 rounded-lg bg-stone-200 px-5 py-2 transition-all delay-150 duration-300 group-hover:bg-primary">
                <Job className="text-stone-400 transition-all delay-150 duration-300 group-hover:text-white" />
                <p className="transition-all delay-150 duration-300 group-hover:text-white">{openJobCount} Open Jobs</p>
            </div>
        </Card>
    );
}
