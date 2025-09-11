import { BuildingSolid } from '@/SVGs/Building';
import { CalendarSharp } from '@/SVGs/Calendar';
import { Location } from '@/SVGs/Location';
import { Pencil } from '@/SVGs/Pencil';
import { Experience } from '@/types';
import { router } from '@inertiajs/react';
import { X } from 'lucide-react';
import AddExperience from '../AddExperience';
import DeleteConfirmation from '../DeleteConfirmation';

export default function ExperienceCard({ experiences, refreshExperiences }: { experiences: Experience[]; refreshExperiences: () => void }) {
    function deleteHandler(id: string) {
        console.log(id);
        router.delete(route('candidate.experienceDelete', id), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => refreshExperiences(),
        });
    }

    return (
        <>
            {experiences.map((experience) => (
                <div
                    id="experience-card"
                    key={experience.id}
                    className="relative mt-3 pl-5 before:absolute before:top-2 before:left-0 before:h-full before:w-[1px] before:bg-gray-400/20"
                >
                    <div className="flex justify-between">
                        <h1 className="relative font-montserrat text-xl font-bold before:absolute before:top-1 before:-left-6 before:z-[1] before:size-3 before:rounded-full before:bg-gray-400/80">
                            {experience.title}
                        </h1>
                        <div className="flex items-center-safe justify-center gap-3">
                            <AddExperience
                                trigger={<Pencil className="size-4" />}
                                refreshExperiences={refreshExperiences}
                                experience={experience}
                                type="update"
                            />
                            <DeleteConfirmation trigger={<X className="text-red-500" />} deleteFn={() => deleteHandler(experience.id)} />
                        </div>
                    </div>
                    <span className="flex items-center gap-1">
                        <Location className="text-primary" />
                        {experience.country.name}
                    </span>
                    <span className="flex items-center gap-1 font-bold">
                        <BuildingSolid className="text-primary" />
                        {experience.city.name}
                    </span>
                    <span className="flex items-center gap-1 font-bold">
                        <CalendarSharp className="text-primary" />
                        {experience.start_date} - {experience.is_working ? 'Currently Working' : experience.end_date}
                    </span>
                    <p className="text-gray-400">{experience.description}</p>
                </div>
            ))}
        </>
    );
}
