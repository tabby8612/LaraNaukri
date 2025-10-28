import { Card } from '@/components/ui/card';
import UnlockConfirmation from '@/components/ui/cards/UnlockConfirmation';
import { Button } from '@/components/ui/UnusedUI/button';
import { Location } from '@/SVGs/Location';
import { User } from '@/SVGs/User';
import { Candidate, Company, User as UserType } from '@/types';
import { usePage } from '@inertiajs/react';
import { Download, Monitor, Send } from 'lucide-react';

type Props = {
    id?: string;
    cover_path: string;
    profile_path: string;
    name: string;
    industry: string;
    available: boolean;
    location: string;
    member_since: string;
    cv_path: string;
    description: string;
    showMessageBtn?: boolean;
    hasUnlocked?: boolean;
};

type CustomProps = {
    auth: {
        user: UserType | null;
        candidate: Candidate | null;
        employer: Company | null;
    };
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
    showMessageBtn = false,
    hasUnlocked = false,
    id = '',
}: Props) {
    const { auth } = usePage<CustomProps>().props;
    console.log(auth);
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
                {auth.employer &&
                    (cv_path ? (
                        hasUnlocked ? (
                            <div className="flex gap-3 rounded-b-2xl bg-green-100 py-4 pl-7">
                                <a href={`/storage/${cv_path}`} download={true}>
                                    <Button className="hoverEffect flex cursor-pointer items-center gap-2 rounded-xl border-2 border-primary bg-transparent px-11 py-5 text-lg text-primary hover:bg-primary hover:text-white">
                                        <Download className="size-5" />
                                        Download CV
                                    </Button>
                                </a>
                                {showMessageBtn && (
                                    <a href={route('employer.messages')}>
                                        <Button className="hoverEffect flex cursor-pointer items-center gap-2 rounded-xl border-2 border-primary bg-transparent px-11 py-5 text-lg text-primary hover:bg-primary hover:text-white">
                                            <Send className="size-5" />
                                            Send Message
                                        </Button>
                                    </a>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-start gap-3 rounded-b-2xl bg-green-100 py-4 pl-7">
                                <p className="text-primary">Unlock User To View Resume and Send Message </p>
                                <UnlockConfirmation
                                    trigger={<a className="cursor-pointer rounded bg-primary p-2 text-[14px] text-white">Unlock Now</a>}
                                    candidateID={id}
                                />
                            </div>
                        )
                    ) : (
                        <div className="flex gap-3 rounded-b-2xl bg-green-100 py-4 pl-7">
                            <p className="text-red-700">User has not completed his/her profile</p>
                        </div>
                    ))}

                {auth.candidate &&
                    (cv_path ? (
                        <div className="flex gap-3 rounded-b-2xl bg-green-100 py-4 pl-7">
                            <a href={`/storage/${cv_path}`} download={true}>
                                <Button className="hoverEffect flex cursor-pointer items-center gap-2 rounded-xl border-2 border-primary bg-transparent px-11 py-5 text-lg text-primary hover:bg-primary hover:text-white">
                                    <Download className="size-5" />
                                    Download CV
                                </Button>
                            </a>
                        </div>
                    ) : (
                        <div className="flex gap-3 rounded-b-2xl bg-green-100 py-4 pl-7">
                            <p className="text-red-700">Complete Profile To Download CV</p>
                        </div>
                    ))}
            </Card>
            <section className="my-7">
                <h1 className="font-montserrat text-2xl font-bold">About Me</h1>
                <p dangerouslySetInnerHTML={{ __html: description }} />
                <hr className="mx-auto my-7 w-11/12 border-gray-300" />
            </section>
        </>
    );
}
