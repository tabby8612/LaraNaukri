import CVCard from '@/components/ui/cards/Candidate/CVCard';
import ProjectsCard from '@/components/ui/cards/Candidate/ProjectsCard';
import AppCandidateLayout from '@/layouts/app/app-candidate-layout';

const projects = [
    {
        image_path: 'https://www.sharjeelanjum.com/demos/jobsportal-update/project_images/thumb/jobs-portal-wzrm0-373.jpg',
        dateFrom: '31 Jan, 2025',
        dateTo: '31 Jan, 2025',
        description: 'This is test project',
        id: '2',
        name: 'Job Portal',
    },
    {
        image_path: 'https://www.sharjeelanjum.com/demos/jobsportal-update/project_images/thumb/jobs-portal-wzrm0-373.jpg',
        dateFrom: '31 Jan, 2025',
        dateTo: '31 Jan, 2025',
        description: 'This is test project',
        id: '1',
        name: 'Job Portal',
    },
];

// const experiences = [
//     {
//         title: 'UI UX Designer',
//         country: 'Namibia',
//         city: 'Maltahohe',
//         working_from: '13 Dec, 2009',
//         working_to: '07 Feb, 2012',
//         currentlyWorking: false,
//     },
//     {
//         title: 'Laravel Developer',
//         country: 'Pakistan',
//         city: 'Karachi',
//         working_from: '13 Dec, 2009',
//         working_to: '07 Feb, 2012',
//         currentlyWorking: true,
//     },
// ];

// const educations = [
//     {
//         title: 'Matriculation/O-Level',
//         degree: 'Matric in Science',
//         country: 'New Zealand',
//         city: 'Palmerston North',
//         institution: 'Matric',
//         year: '2005',
//     },
//     {
//         title: 'Matriculation/O-Level',
//         degree: 'Matric in Science',
//         country: 'New Zealand',
//         city: 'Palmerston North',
//         institution: 'Matric',
//         year: '2005',
//     },
// ];

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
            <ProjectsCard projects={projects} />
            {/*<ExperiencesCard experiences={experiences} />
            <EducationsCard educations={educations} />
            <SkillsCard skills={skills} />
            <LanguagesCard languages={languages} /> */}
        </AppCandidateLayout>
    );
}
