import { Location } from '@/SVGs/Location';
import { ResetTime } from '@/SVGs/ResetTime';

import { FileWarningIcon } from 'lucide-react';
import { Card, CardContent, CardTitle } from '../card';
import { Button } from '../UnusedUI/button';

export default function CompanyIntro() {
    return (
        <>
            <Card className="gap-1 border border-gray-200 py-0 shadow-transparent">
                <Card className="flex flex-row gap-3 border-0 px-6 shadow-transparent">
                    <img
                        src="https://www.sharjeelanjum.com/demos/jobsportal-update/admin_assets/no-image.png"
                        alt=""
                        className="size-24 border-4 border-white"
                    />
                    <Card className="inset-0 mt-0 gap-0 border-0 py-0 shadow-transparent">
                        <CardTitle className="font-montserrat text-lg font-bold">New Design Studio</CardTitle>
                        <CardContent className="mt-0 px-0 py-0">
                            <p className="text-lg">AutoMobile</p>
                            <div className="my-3 flex items-center gap-2">
                                <ResetTime className="text-primary" />
                                <p>Member Since, Nov 30</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Location className="text-primary" />
                                <p>Atlantic City, NJ USA</p>
                            </div>
                        </CardContent>
                    </Card>
                </Card>
                <Card className="my-0 flex flex-row gap-3 rounded-sm border-0 bg-stone-200/60 px-2 shadow-transparent">
                    <Button className="cursor-pointer rounded-lg border border-primary bg-transparent px-7 py-5 text-center text-primary transition-colors delay-75 duration-300 hover:text-white">
                        Add To Favorite
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
            </Card>
        </>
    );
}
