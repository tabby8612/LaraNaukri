import { BuildingSolid } from '@/SVGs/Building';
import { CalendarSharp } from '@/SVGs/Calendar';
import { Location } from '@/SVGs/Location';

type Experience = {
    title: string;
    country: string;
    city: string;
    working_from: string;
    working_to: string;
    currentlyWorking: boolean;
};
export default function ExperienceCard({ experiences }: { experiences: Experience[] }) {
    return (
        <>
            {experiences.map((experience) => (
                <div
                    id="experience-card"
                    className="relative mt-3 pl-5 before:absolute before:top-2 before:left-0 before:h-full before:w-[1px] before:bg-gray-400/20"
                >
                    <h1 className="relative font-montserrat text-xl font-bold before:absolute before:top-1 before:-left-6 before:z-[1] before:size-3 before:rounded-full before:bg-gray-400/80">
                        {experience.title}
                    </h1>
                    <span className="flex items-center gap-1">
                        <Location className="text-primary" />
                        {experience.country}
                    </span>
                    <span className="flex items-center gap-1 font-bold">
                        <BuildingSolid className="text-primary" />
                        {experience.city}
                    </span>
                    <span className="flex items-center gap-1 font-bold">
                        <CalendarSharp className="text-primary" />
                        {experience.working_from} - {experience.currentlyWorking ? 'Currently Working' : experience.working_to}
                    </span>
                    <p className="text-gray-400">This is just for testing experience details - This is just for testing experience details</p>
                </div>
            ))}
        </>
    );
}
