import { GraduationHatFilled } from '@/SVGs/GraduationHat';
import { Location } from '@/SVGs/Location';
import { Pencil } from '@/SVGs/Pencil';
import { SchoolSolid } from '@/SVGs/School';
import { Education } from '@/types';
import { router } from '@inertiajs/react';
import { X } from 'lucide-react';
import AddEducation from '../AddEducation';
import DeleteConfirmation from '../DeleteConfirmation';

type Props = {
    educations: Education[];
    refreshFn: () => void;
    viewOnly: boolean;
};

export default function EducationCard({ educations, refreshFn, viewOnly = false }: Props) {
    function deleteHandler(id: string) {
        router.delete(route('candidate.educationDelete', id), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => refreshFn(),
        });
    }

    return (
        <>
            {educations.length > 0 ? (
                educations.map((education) => (
                    <div
                        key={education.id}
                        className="relative mt-3 pl-5 before:absolute before:top-2 before:left-[1px] before:h-full before:w-[1px] before:bg-gray-400/60"
                    >
                        <div className="flex justify-between">
                            <h1 className="relative font-montserrat text-xl font-bold before:absolute before:top-1 before:-left-6 before:z-[1] before:size-3 before:rounded-full before:bg-gray-500/80">
                                {education.title}
                            </h1>
                            {!viewOnly && (
                                <div className="flex gap-3">
                                    <AddEducation
                                        trigger={<Pencil className="text-sm" />}
                                        education={education}
                                        type="update"
                                        refreshFn={refreshFn}
                                    />
                                    <DeleteConfirmation trigger={<X className="text-red-500" />} deleteFn={() => deleteHandler(education.id)} />
                                </div>
                            )}
                        </div>
                        <p className="my-2 font-semibold">
                            {education.year} -{' '}
                            {education.city.name ? `${education.city.name} - ${education.country.name}` : education.country.name}{' '}
                        </p>
                        <span className="flex items-center gap-1">
                            <GraduationHatFilled className="text-primary" />
                            {education.title}
                        </span>
                        <span className="flex items-center gap-1 font-bold">
                            <Location className="text-primary" />
                            {education.city.name ? `${education.city.name}-${education.country.name}` : education.country.name}
                        </span>
                        <span className="flex items-center gap-1 font-bold">
                            <SchoolSolid className="text-primary" />
                            {education.institution}
                        </span>
                    </div>
                ))
            ) : (
                <div className="text-center text-lg">😢'No Education To Display. Start Adding them to show it here'</div>
            )}
        </>
    );
}
