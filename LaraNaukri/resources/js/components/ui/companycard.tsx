import { BadgeDollarSign, MapPin } from 'lucide-react';

type Props = {
    imageUrl: string;
    name: string;
    location: string;
    openJobs: number;
};

export default function Companycard({ imageUrl, name, location, openJobs }: Props) {
    return (
        <div
            id="companycard"
            className="hover:border-primary cursor-pointer rounded-lg border-2 p-3 transition-all delay-75 duration-300 hover:-translate-y-2"
        >
            <div className="flex gap-5">
                <div>
                    <img src={imageUrl} alt={name} className="size-16 rounded-full" />
                </div>
                <div>
                    <h1 className="font-montserrat text-lg font-bold">{name}</h1>
                    <p className="text-primary">
                        <MapPin className="inline-block size-5" /> {location}
                    </p>
                </div>
            </div>
            <div className="mt-4 flex gap-1 text-gray-800/50">
                <BadgeDollarSign />
                <p>{`${openJobs} Open Jobs`}</p>
            </div>
        </div>
    );
}
