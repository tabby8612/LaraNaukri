import { Card } from '../../card';
import UploadProject from '../UploadProject';
import PortfilioProject from './PortfolioProject';

type Project = {
    id: string;
    name: string;
    image_path: string;
    description: string;
    dateFrom: string;
    dateTo: string;
};

export default function ProjectsCard({ projects }: { projects: Project[] }) {
    return (
        <Card className="mt-10 border-gray-200 p-7 shadow-xl">
            <div className="flex items-center justify-between">
                <h1 className="font-montserrat text-2xl font-bold">Projects</h1>
                <UploadProject type="+" />
            </div>
            <div className="grid grid-cols-4 gap-4">
                {projects &&
                    projects.map((project) => (
                        <PortfilioProject
                            image={project.image_path}
                            dateFrom={project.dateFrom}
                            dateTo={project.dateTo}
                            description={project.description}
                            id={project.id}
                            name={project.name}
                        />
                    ))}
            </div>
        </Card>
    );
}
