import { GraduationHatFilled } from '@/SVGs/GraduationHat';
import { Location } from '@/SVGs/Location';
import { SchoolSolid } from '@/SVGs/School';

type Education = {
    title: string;
    degree: string;
    country: string;
    city: string;
    institution: string;
    year: string;
};

export default function EducationCard({ educations }: { educations: Education[] }) {
    return (
        <>
            {educations.map((education) => (
                <div
                    id="education-card"
                    className="relative mt-3 pl-5 before:absolute before:top-2 before:left-[1px] before:h-full before:w-[1px] before:bg-gray-400/60"
                >
                    <h1 className="relative font-montserrat text-xl font-bold before:absolute before:top-1 before:-left-6 before:z-[1] before:size-3 before:rounded-full before:bg-gray-500/80">
                        {education.title}
                    </h1>
                    <p className="my-2 font-semibold">
                        {education.year} - {education.city} - {education.country}
                    </p>
                    <span className="flex items-center gap-1">
                        <GraduationHatFilled className="text-primary" />
                        {education.degree}
                    </span>
                    <span className="flex items-center gap-1 font-bold">
                        <Location className="text-primary" />
                        {education.city} - {education.country}
                    </span>
                    <span className="flex items-center gap-1 font-bold">
                        <SchoolSolid className="text-primary" />
                        {education.institution}
                    </span>
                </div>
            ))}
        </>
    );
}
