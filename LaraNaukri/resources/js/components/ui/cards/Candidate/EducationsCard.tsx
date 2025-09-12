import { Card } from '../../card';
import AddEducation from '../AddEducation';
import EducationCard from './EducationCard';

type Education = {
    title: string;
    degree: string;
    country: string;
    city: string;
    institution: string;
    year: string;
};

export default function EducationsCard({ educations }: { educations: Education[] }) {
    return (
        <Card className="mt-10 border-gray-200 p-7 shadow-xl">
            <div className="flex items-center justify-between">
                <h1 className="font-montserrat text-2xl font-bold">Education</h1>
                <AddEducation trigger="+" />
            </div>
            <EducationCard educations={educations} />
        </Card>
    );
}
