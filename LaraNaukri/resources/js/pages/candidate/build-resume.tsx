import CVCard from '@/components/ui/cards/Candidate/CVCard';
import EducationsCard from '@/components/ui/cards/Candidate/EducationsCard';
import ExperiencesCard from '@/components/ui/cards/Candidate/ExperiencesCard';
import LanguagesCard from '@/components/ui/cards/Candidate/LanguagesCard';
import ProjectsCard from '@/components/ui/cards/Candidate/ProjectsCard';
import SkillsCard from '@/components/ui/cards/Candidate/SkillsCard';
import AppCandidateLayout from '@/layouts/app/app-candidate-layout';

export default function BuildResume() {
    return (
        <AppCandidateLayout page="build-resume" displaySearch={false} titleText="Build Resume">
            <h1 className="font-montserrat text-2xl font-semibold">Build Your Resume</h1>
            <CVCard />
            <ProjectsCard />
            <ExperiencesCard />
            <EducationsCard />
            <SkillsCard />
            <LanguagesCard />
        </AppCandidateLayout>
    );
}
