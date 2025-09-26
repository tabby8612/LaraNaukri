import { Location } from '@/SVGs/Location';
import { Banknote } from 'lucide-react';
import { Card } from '../../card';
import { Button } from '../../UnusedUI/button';

export default function AppliedCandidate() {
    return (
        <Card className="cursor-grab gap-3 rounded-sm border-0 bg-white/50 px-3 py-2.5">
            <h1 className="text-xl font-bold">Job Seeker</h1>
            <div className="flex items-center gap-2">
                <Location className="text-primary" />
                <p>Karachi, Sindh, Pakistan</p>
            </div>
            <div className="flex items-center gap-2">
                <Banknote className="text-primary" />
                <p>5555 USD / Month</p>
            </div>
            <hr className="border-gray-400" />
            <div className="flex justify-between p-1">
                <Button className="rounded-sm text-xs text-white">View Profile</Button>
            </div>
        </Card>
    );
}
