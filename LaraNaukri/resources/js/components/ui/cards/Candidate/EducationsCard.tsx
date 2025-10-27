import { Education } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { Card } from '../../card';
import AddEducation from '../AddEducation';
import EducationCard from './EducationCard';

export default function EducationsCard() {
    const { educations } = usePage<{ educations: Education[] }>().props;

    function refreshHandler() {
        router.get(
            route('candidate.buildResume'),
            {},
            {
                preserveScroll: true,
                preserveState: true,
            },
        );
    }

    return (
        <Card className="mt-10 border-gray-200 p-7 shadow-xl">
            <div className="flex items-center justify-between">
                <h1 className="font-montserrat text-2xl font-bold">Education</h1>
                <AddEducation trigger="+" refreshFn={refreshHandler} />
            </div>
            {educations.length > 0 && <EducationCard educations={educations} refreshFn={refreshHandler} viewOnly={false} />}
            {educations.length < 1 && <p className="text-center text-lg">😢 No Education To Show. Click '+' To Add Education</p>}
        </Card>
    );
}
