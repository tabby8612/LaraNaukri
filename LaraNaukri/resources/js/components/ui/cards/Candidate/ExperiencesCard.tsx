import { Experience } from '@/types';
import { useEffect, useState } from 'react';
import { Card } from '../../card';
import AddExperience from '../AddExperience';
import ExperienceCard from './ExperienceCard';

export default function ExperiencesCard() {
    const [experiences, setExperiences] = useState<Experience[] | []>([]);

    async function getExperiences() {
        const response = await fetch(route('candidate.experiences'));
        const data = await response.json();
        setExperiences(data);
    }

    useEffect(() => {
        getExperiences();
    }, []);

    return (
        <Card className="mt-10 border-gray-200 p-7 shadow-xl">
            <div className="flex items-center justify-between">
                <h1 className="font-montserrat text-2xl font-bold">Experience</h1>

                <AddExperience trigger="+" refreshExperiences={getExperiences} />
            </div>
            <ExperienceCard experiences={experiences} refreshExperiences={getExperiences} />
        </Card>
    );
}
