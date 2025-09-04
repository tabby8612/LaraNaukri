import EducationCard from '@/components/ui/cards/Candidate/EducationCard';
import ExperienceCard from '@/components/ui/cards/Candidate/ExperienceCard';
import PortfilioProject from '@/components/ui/cards/Candidate/PortfolioProject';
import SmallCards from '@/components/ui/cards/Candidate/SmallCards';

type Skill = {
    id: string;
    name: string;
    years: string;
};

type Language = {
    id: string;
    name: string;
    language_level: string;
};

type Experience = {
    title: string;
    country: string;
    city: string;
    working_from: string;
    working_to: string;
    currentlyWorking: boolean;
};

type Project = {
    id: string;
    name: string;
    image_path: string;
    description: string;
    dateFrom: string;
    dateTo: string;
};

type Education = {
    title: string;
    degree: string;
    country: string;
    city: string;
    institution: string;
    year: string;
};

type Props = {
    skills: Skill[];
    languages: Language[];
    experiences: Experience[];
    projects: Project[];
    educations: Education[];
};

export default function PublicProfileQualifications({ skills, languages, experiences, projects, educations }: Props) {
    return (
        <>
            <section className="my-7">
                <h1 className="font-montserrat text-2xl font-bold">Skills</h1>
                <SmallCards skills={skills} />
                <hr className="mx-auto my-7 w-11/12 border-gray-300" />
            </section>
            <section className="my-7">
                <h1 className="font-montserrat text-2xl font-bold">Languages</h1>
                <SmallCards languages={languages} />
                <hr className="mx-auto my-7 w-11/12 border-gray-300" />
            </section>
            <section className="my-7">
                <h1 className="font-montserrat text-2xl font-bold">Experience</h1>
                <ExperienceCard experiences={experiences} />
                <hr className="mx-auto my-7 w-11/12 border-gray-300" />
            </section>
            <section className="my-7">
                <h1 className="font-montserrat text-2xl font-bold">Education</h1>
                <EducationCard educations={educations} />
                <hr className="mx-auto my-7 w-11/12 border-gray-300" />
            </section>
            <section className="my-7">
                <h1 className="font-montserrat text-2xl font-bold">Portfilio</h1>
                <div className="grid grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <PortfilioProject
                            image={project.image_path}
                            name={project.name}
                            id={project.id}
                            description={project.description}
                            dateFrom={project.dateFrom}
                            dateTo={project.dateTo}
                        />
                    ))}
                </div>
                <hr className="mx-auto my-7 w-11/12 border-gray-300" />
            </section>
        </>
    );
}
