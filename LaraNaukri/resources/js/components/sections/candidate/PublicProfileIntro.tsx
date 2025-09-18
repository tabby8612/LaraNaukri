import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/UnusedUI/button';
import { Location } from '@/SVGs/Location';
import { User } from '@/SVGs/User';
import { Download, Monitor } from 'lucide-react';

type Props = {
    cover_path: string;
    profile_path: string;
    name: string;
    industry: string;
    available: boolean;
    location: string;
    member_since: string;
    cv_path: string;
    description: string;
};

export default function PublicProfileIntro({
    cover_path,
    profile_path,
    name,
    industry,
    available,
    location,
    member_since,
    cv_path,
    description,
}: Props) {
    return (
        <>
            <Card className="rounded-2xl border-gray-300 py-0 shadow-none">
                <img src={`/storage/${cover_path}`} alt={name} className="h-52 rounded-t-xl" />
                <div className="flex gap-5 px-7">
                    <img src={`/storage/${profile_path}`} alt={name} className="size-32 rounded-xl" />
                    <div>
                        <h1 className="font-montserrat text-4xl font-bold">
                            {name} <span className="text-sm">({industry})</span>
                        </h1>
                        <div className="flex items-center gap-2 text-primary">
                            <Monitor className="size-4" />
                            <p>{available ? 'Ready for Hire' : 'Not available For hire'}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Location />
                            <p>{location}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <User />
                            <p>Member Since, {member_since}</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-b-2xl bg-green-100 py-4 pl-7">
                    <a href={`/storage/${cv_path}`} download={true}>
                        <Button className="hoverEffect flex cursor-pointer items-center gap-2 rounded-xl border-2 border-primary bg-transparent px-11 py-5 text-lg text-primary hover:bg-primary hover:text-white">
                            <Download className="size-5" />
                            Download CV
                        </Button>
                    </a>
                </div>
            </Card>
            <section className="my-7">
                <h1 className="font-montserrat text-2xl font-bold">About Me</h1>
                <p>{description}</p>
                <hr className="mx-auto my-7 w-11/12 border-gray-300" />
            </section>
        </>
    );
}
