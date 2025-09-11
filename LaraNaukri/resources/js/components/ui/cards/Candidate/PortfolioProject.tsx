import { Project } from '@/types';
import { router } from '@inertiajs/react';
import { Label } from '../../UnusedUI/label';
import DeleteConfirmation from '../DeleteConfirmation';
import UploadProject from '../UploadProject';

type Props = {
    project: Project;
    refreshProjectsFn: () => void;
};

export default function PortfilioProject({ project, refreshProjectsFn }: Props) {
    function deleteHandler(id: string) {
        router.delete(route('candidate.projectDelete', id), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => refreshProjectsFn(),
        });
    }

    return (
        <div className="size-full border-0 shadow-none">
            <img src={`/storage/${project.image_path}`} alt={project.name} className="size-40 rounded-lg" />
            <a href={project.url}>
                <h1 className="font-montserrat font-bold">{project.name}</h1>
            </a>
            <p className="mt-3">
                {project.start_date} - {project.ongoing ? 'Currently Working' : project.end_date}
            </p>
            <p>{project.description}</p>

            <div className="mt-3 flex items-baseline gap-3">
                <span className="cursor-pointer text-primary">
                    <UploadProject
                        trigger={<Label className="cursor-pointer font-montserrat text-sm font-semibold">Edit</Label>}
                        project={project}
                        type="update"
                        refreshProjectsFn={refreshProjectsFn}
                    />
                </span>{' '}
                |{' '}
                <span className="cursor-pointer font-montserrat text-sm font-semibold text-red-500">
                    <DeleteConfirmation
                        trigger={<Label className="cursor-pointer font-montserrat text-sm font-semibold text-red-400">Delete</Label>}
                        deleteFn={() => deleteHandler(project.id)}
                    />
                </span>
            </div>
        </div>
    );
}
