import EducationCard from '@/components/ui/cards/Candidate/EducationCard';
import ExperienceCard from '@/components/ui/cards/Candidate/ExperienceCard';
import PortfilioProject from '@/components/ui/cards/Candidate/PortfolioProject';
import SmallCards from '@/components/ui/cards/Candidate/SmallCards';
import { CandidateLanguage, Education, Experience, Project, Skills } from '@/types';

type Props = {
    skills: Skills[];
    languages: CandidateLanguage[];
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
                <ExperienceCard experiences={experiences} refreshExperiences={() => {}} viewOnly />
                <hr className="mx-auto my-7 w-11/12 border-gray-300" />
            </section>
            <section className="my-7">
                <h1 className="font-montserrat text-2xl font-bold">Education</h1>
                <EducationCard educations={educations} refreshFn={() => {}} viewOnly />
                <hr className="mx-auto my-7 w-11/12 border-gray-300" />
            </section>
            <section className="my-7">
                <h1 className="font-montserrat text-2xl font-bold">Portfilio</h1>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    {projects.length > 1 ? (
                        projects.map((project) => (
                            <PortfilioProject project={project} key={project.id} refreshProjectsFn={() => {}} showEditOptions={false} />
                        ))
                    ) : (
                        <div className="col-span-full text-center">
                            <p>😢 No Project Added. Start Adding Them To Show Here</p>
                        </div>
                    )}
                </div>
                <hr className="mx-auto my-7 w-11/12 border-gray-300" />
            </section>
        </>
    );
}
