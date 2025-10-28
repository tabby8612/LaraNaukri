import { Location } from '@/SVGs/Location';
import { ResetTime } from '@/SVGs/ResetTime';

import { Candidate, Company, User } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { FileWarningIcon } from 'lucide-react';
import { Card, CardContent, CardTitle } from '../card';
import { Button } from '../UnusedUI/button';

type CustomPageProps = {
    auth: {
        user: User | null;
        candidate: Candidate | null;
        employer: Company | null;
    };
};

export default function CompanyIntro({ companyData, isFollower }: { companyData: Company; isFollower: boolean }) {
    function handleFollower(id: string) {
        console.log(id);
        router.post(route('candidate.followCompany', id));
    }

    const { auth } = usePage<CustomPageProps>().props;

    return (
        <>
            <Card className="gap-1 border border-gray-200 py-0 shadow-transparent">
                <Card className="flex flex-col items-center gap-3 border-0 px-6 text-center shadow-transparent md:flex-row">
                    <img
                        src={`/storage/${companyData.image_path ?? 'companies/default.png'}`}
                        alt={companyData.name}
                        className="size-24 border-4 border-white"
                    />
                    <Card className="inset-0 mt-0 gap-0 border-0 py-0 shadow-transparent">
                        <CardTitle className="font-montserrat text-lg font-bold">{companyData.name}</CardTitle>
                        <CardContent className="mt-0 px-0 py-0">
                            <p className="text-lg">{companyData.industry?.name}</p>
                            <div className="my-3 flex items-center gap-2">
                                <ResetTime className="text-primary" />
                                {companyData.founded && <p>Member Since, {companyData.founded}</p>}
                            </div>
                            <div className="flex items-center gap-2">
                                <Location className="text-primary" />
                                <p>{companyData.location}</p>
                            </div>
                        </CardContent>
                    </Card>
                </Card>

                {auth.candidate && (
                    <Card className="my-0 flex flex-col gap-3 rounded-sm border-0 bg-stone-200/60 px-2 shadow-transparent md:flex-row">
                        <Button
                            className="cursor-pointer rounded-lg border border-primary bg-transparent px-7 py-5 text-center text-primary transition-colors delay-75 duration-300 hover:text-white"
                            onClick={() => handleFollower(`${companyData.id}`)}
                        >
                            {isFollower ? 'UnFollow' : 'Follow'} Company
                        </Button>
                        <Button className="cursor-pointer rounded-lg border border-red-500 bg-transparent px-7 py-5 text-red-500 transition-colors delay-75 duration-300 hover:bg-red-500 hover:text-white">
                            {
                                <div className="flex items-center justify-center gap-1">
                                    <FileWarningIcon />
                                    <p>Report Abuse</p>
                                </div>
                            }
                        </Button>
                    </Card>
                )}
            </Card>
        </>
    );
}
