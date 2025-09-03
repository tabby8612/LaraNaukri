import { Card } from '../../card';
import AddExperience from '../AddExperience';
import ExperienceCard from './ExperienceCard';

type Experience = {
    title: string;
    country: string;
    city: string;
    working_from: string;
    working_to: string;
    currentlyWorking: boolean;
};

export default function ExperiencesCard({ experiences }: { experiences: Experience[] }) {
    return (
        <Card className="mt-10 border-gray-200 p-7 shadow-xl">
            <div className="flex items-center justify-between">
                <h1 className="font-montserrat text-2xl font-bold">Experience</h1>
                <AddExperience type="+" />
            </div>
            <ExperienceCard experiences={experiences} />
        </Card>
    );
}
