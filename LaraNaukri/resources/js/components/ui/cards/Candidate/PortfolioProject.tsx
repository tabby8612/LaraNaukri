import { Project } from '@/types';
import { router } from '@inertiajs/react';
import { AspectRatio } from '../../aspect-ratio';
import { Label } from '../../UnusedUI/label';
import DeleteConfirmation from '../DeleteConfirmation';
import UploadProject from '../UploadProject';

type Props = {
    project: Project;
    refreshProjectsFn: () => void;
    showEditOptions?: boolean;
};

export default function PortfilioProject({ project, refreshProjectsFn, showEditOptions = true }: Props) {
    function deleteHandler(id: string) {
        router.delete(route('candidate.projectDelete', id), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => refreshProjectsFn(),
        });
    }

    return (
        <div className="size-full border-0 shadow-none">
            <div className="my-2 w-[250px] overflow-hidden rounded-md shadow-[0_1px_10px] shadow-black/50">
                <AspectRatio ratio={9 / 4}>
                    <img src={`/storage/${project.image_path}`} alt={project.name} className="rounded-lg" />
                </AspectRatio>
            </div>
            <a href={project.url}>
                <h1 className="font-montserrat font-bold">{project.name}</h1>
            </a>
            <p className="mt-3">
                {project.start_date} - {project.ongoing ? 'Currently Working' : project.end_date}
            </p>
            <p dangerouslySetInnerHTML={{ __html: project.description }}></p>

            {showEditOptions && (
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
            )}
        </div>
    );
}
