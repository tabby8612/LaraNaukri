import { Experience } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { Card } from '../../card';
import AddExperience from '../AddExperience';
import ExperienceCard from './ExperienceCard';

export default function ExperiencesCard() {
    const { experiences } = usePage<{ experiences: Experience[] }>().props;
    console.log(experiences);

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
                <h1 className="font-montserrat text-2xl font-bold">Experience</h1>

                <AddExperience trigger="+" refreshExperiences={refreshHandler} />
            </div>
            <ExperienceCard experiences={experiences} refreshExperiences={refreshHandler} />
        </Card>
    );
}
