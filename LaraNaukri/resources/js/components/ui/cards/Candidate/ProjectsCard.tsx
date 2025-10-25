import { Project } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { Frown } from 'lucide-react';
import { Card } from '../../card';
import UploadProject from '../UploadProject';
import PortfilioProject from './PortfolioProject';

export default function ProjectsCard() {
    const { projects } = usePage<{ projects: Project[] }>().props;

    function refreshHandler() {
        router.get(
            route('candidate.buildResume'),
            {},
            {
                preserveScroll: true,
                preserveState: true,
            },
        );
    }

    return (
        <Card className="mt-10 border-gray-200 p-7 shadow-xl">
            <div className="flex items-center justify-between">
                <h1 className="font-montserrat text-2xl font-bold">Projects</h1>
                <UploadProject trigger="+" refreshProjectsFn={refreshHandler} />
            </div>
            <div className="grid grid-cols-2 gap-4">
                {projects.length > 0 ? (
                    projects.map((project) => <PortfilioProject project={project} refreshProjectsFn={refreshHandler} key={project.id} />)
                ) : (
                    <div className="col-span-4 flex items-center justify-center gap-2 text-center text-lg">
                        <Frown fill="yellow" className="text-black" /> 'No Projects To Display. Start Adding them to show it here'
                    </div>
                )}
            </div>
        </Card>
    );
}
