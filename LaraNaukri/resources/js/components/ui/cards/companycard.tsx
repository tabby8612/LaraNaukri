import { Job } from '@/SVGs/Job';
import { Location } from '@/SVGs/Location';

type Props = {
    imageUrl: string;
    name: string;
    location: string;
    openJobs: number;
    id: number;
};

export default function Companycard({ id, imageUrl, name, location, openJobs }: Props) {
    return (
        <a
            href={route('company.view', {
                name: name.toLowerCase().replaceAll(' ', '-'),
                id: id,
            })}
            id="companycard"
            className="cursor-pointer rounded-lg border-2 px-3 py-4 transition-all delay-75 duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-lg"
        >
            <div className="flex gap-5">
                <div>
                    <img src={imageUrl} alt={name} className="size-16 rounded-full" />
                </div>
                <div>
                    <h1 className="text-md h-8 py-2 font-montserrat leading-4 font-semibold">{name}</h1>
                    <p className="my-1 text-sm text-primary">
                        <Location className="inline-block size-5" />
                        {location}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-1 text-gray-800/50">
                <Job />
                <p>{`${openJobs} Open Jobs`}</p>
            </div>
        </a>
    );
}
