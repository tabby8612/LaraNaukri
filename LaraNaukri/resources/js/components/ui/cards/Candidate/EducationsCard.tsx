import { Education } from '@/types';
import { useEffect, useState } from 'react';
import { Card } from '../../card';
import AddEducation from '../AddEducation';
import EducationCard from './EducationCard';

export default function EducationsCard() {
    const [educations, setEducation] = useState<Education[] | []>([]);

    async function getEducations() {
        const response = await fetch(route('candidate.educations'));
        const data = await response.json();

        setEducation(data);
    }

    useEffect(() => {
        getEducations();
    }, []);

    return (
        <Card className="mt-10 border-gray-200 p-7 shadow-xl">
            <div className="flex items-center justify-between">
                <h1 className="font-montserrat text-2xl font-bold">Education</h1>
                <AddEducation trigger="+" refreshFn={getEducations} />
            </div>
            {educations.length > 0 && <EducationCard educations={educations} refreshFn={getEducations} />}
            {educations.length < 1 && <p>No Education To Show. Click '+' To Add Education</p>}
        </Card>
    );
}
