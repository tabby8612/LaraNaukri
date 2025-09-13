import CVCard from '@/components/ui/cards/Candidate/CVCard';
import EducationsCard from '@/components/ui/cards/Candidate/EducationsCard';
import ExperiencesCard from '@/components/ui/cards/Candidate/ExperiencesCard';
import ProjectsCard from '@/components/ui/cards/Candidate/ProjectsCard';
import AppCandidateLayout from '@/layouts/app/app-candidate-layout';

// const skills = [
//     {
//         id: '1',
//         name: 'Adobe Photoshop',
//         years: '14 Years',
//     },
//     {
//         id: '2',
//         name: 'Adobe Illustrator',
//         years: '9 years',
//     },
// ];

// const languages = [
//     {
//         id: '1',
//         name: 'English',
//         language_level: 'Expert',
//     },
//     {
//         id: '2',
//         name: 'Urdu',
//         language_level: 'Expert',
//     },
// ];

export default function BuildResume() {
    return (
        <AppCandidateLayout page="build-resume" displaySearch={false} titleText="Build Resume">
            <h1 className="font-montserrat text-2xl font-semibold">Build Your Resume</h1>
            <CVCard />
            <ProjectsCard />
            <ExperiencesCard />
            <EducationsCard />
            {/* <SkillsCard skills={skills} />
            <LanguagesCard languages={languages} /> */}
        </AppCandidateLayout>
    );
}
