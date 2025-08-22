import { Email } from '@/SVGs/Mail';
import { Button } from '@headlessui/react';
import {
    AlignLeft,
    Calendar,
    ChartBar,
    Clock1,
    GraduationCap,
    MapPin,
    Mars,
    Monitor,
    RectangleEllipsis,
    TriangleAlert,
    Users2Icon,
} from 'lucide-react';
import { Card, CardContent } from '../card';
import Characteristic from './Characteristic';

const JobCharacteristics = [
    {
        icon: MapPin,
        name: 'Location',
        value: 'Barrington, New Hampshire, United States of America',
    },
    {
        icon: Monitor,
        name: 'Job Type',
        value: 'Full Time/Permanent',
    },
    {
        icon: Clock1,
        name: 'Shift',
        value: 'Third Shift (Night)',
    },
    {
        icon: ChartBar,
        name: 'Career Level',
        value: 'Experienced Professional',
    },
    {
        icon: Users2Icon,
        name: 'Positions',
        value: '4',
    },
    {
        icon: RectangleEllipsis,
        name: 'Experience',
        value: '5 Years',
    },
    {
        icon: Mars,
        name: 'Gender',
        value: 'Male',
    },
    {
        icon: GraduationCap,
        name: 'Degree',
        value: 'Certification',
    },
    {
        icon: Calendar,
        name: 'Apply Before',
        value: 'Nov 30, 2026',
    },
];

export default function JobIntroCard() {
    return (
        <Card className="border border-gray-200 py-0 shadow-transparent">
            <CardContent className="my-0">
                <div className="flex items-center gap-2 p-6">
                    <AlignLeft className="size-8 text-gray-400" />
                    <h1 className="text-2xl font-semibold text-primary">Job Details</h1>
                </div>
                <div className="mx-auto grid grid-cols-3 gap-x-10 gap-y-3 px-6">
                    {JobCharacteristics.map((characteristic, index) => (
                        <Characteristic Icon={characteristic.icon} name={characteristic.name} value={characteristic.value} key={index} />
                    ))}
                </div>
            </CardContent>
            <div className="mt-2 flex gap-5 rounded-b-xl bg-stone-100 px-6 py-4">
                <a
                    href={route('email.friend', {
                        name: 'title',
                        id: '1',
                    })}
                >
                    <Button className="group h-fit cursor-pointer rounded-2xl border border-primary bg-transparent px-7 py-3 transition-colors delay-75 duration-300 hover:bg-primary">
                        <div className="flex items-center gap-2 text-primary transition-colors delay-100 duration-300 group-hover:text-white">
                            <Email />
                            <p>Email To Friend</p>
                        </div>
                    </Button>
                </a>
                <Button className="group h-fit cursor-pointer rounded-2xl border border-primary bg-transparent px-7 py-3 transition-colors delay-75 duration-300 hover:bg-primary">
                    <div className="flex items-center gap-2 text-primary transition-colors delay-75 duration-300 group-hover:text-white">
                        <p>Add To Friend</p>
                    </div>
                </Button>
                <a
                    href={route('report.abuse', {
                        name: 'title',
                        id: '1',
                    })}
                >
                    <Button className="group h-fit cursor-pointer rounded-2xl border border-red-500 bg-transparent px-7 py-3 transition-colors delay-75 duration-300 hover:bg-red-500">
                        <div className="flex items-center gap-2 text-red-500 transition-colors duration-300 group-hover:text-white">
                            <TriangleAlert fill="red" stroke="white" className="border-red-500 text-white" />
                            <p>Report Abuse</p>
                        </div>
                    </Button>
                </a>
            </div>
        </Card>
    );
}
