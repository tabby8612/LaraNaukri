import { Job } from '@/SVGs/Job';
import { router } from '@inertiajs/react';

type Props = {
    imageUrl: string;
    name: string;
    jobs: number;
    id: string;
};

export default function JobCategoryCard({ imageUrl, name, jobs, id }: Props) {
    function categoryHandler(id: string) {
        console.log(id);

        return router.get(
            route('search.jobs', {
                functional_area_id: id,
            }),
        );
    }

    return (
        <div
            className="group flex cursor-pointer flex-col items-center justify-center rounded-lg border border-stone-300 bg-white p-5"
            onClick={() => categoryHandler(id)}
        >
            <img src={imageUrl} alt={name} className="size-14 align-middle" />
            <h1 className="mt-2 h-8 text-center font-montserrat leading-4 transition-colors duration-300 group-hover:text-primary">{name}</h1>
            <div className="mt-8 flex items-center justify-center rounded-lg bg-gray-300/50 px-2 py-1">
                <Job />
                <p className="ml-2">{`(${jobs}) Jobs`}</p>
            </div>
        </div>
    );
}
