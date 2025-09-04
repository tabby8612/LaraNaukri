import PublicProfileContact from '@/components/sections/candidate/PublicProfileContact';
import PublicProfileIntro from '@/components/sections/candidate/PublicProfileIntro';
import PublicProfileQualifications from '@/components/sections/candidate/PublicProfileQualifications';
import PublicProfileQualities from '@/components/sections/candidate/PublicProfileQualities';
import { Card } from '@/components/ui/card';
import AppLayout from '@/layouts/app/app-layout';

const skills = [
    {
        id: '1',
        name: 'Adobe Photoshop',
        years: '14 Years',
    },
    {
        id: '2',
        name: 'Adobe Illustrator',
        years: '9 years',
    },
];

const languages = [
    {
        id: '1',
        name: 'English',
        language_level: 'Expert',
    },
    {
        id: '2',
        name: 'Urdu',
        language_level: 'Expert',
    },
];

const experiences = [
    {
        title: 'UI UX Designer',
        country: 'Namibia',
        city: 'Maltahohe',
        working_from: '13 Dec, 2009',
        working_to: '07 Feb, 2012',
        currentlyWorking: false,
    },
    {
        title: 'Laravel Developer',
        country: 'Pakistan',
        city: 'Karachi',
        working_from: '13 Dec, 2009',
        working_to: '07 Feb, 2012',
        currentlyWorking: true,
    },
];

const educations = [
    {
        title: 'Matriculation/O-Level',
        degree: 'Matric in Science',
        country: 'New Zealand',
        city: 'Palmerston North',
        institution: 'Matric',
        year: '2005',
    },
    {
        title: 'Matriculation/O-Level',
        degree: 'Matric in Science',
        country: 'New Zealand',
        city: 'Palmerston North',
        institution: 'Matric',
        year: '2005',
    },
];

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

export default function ViewPublicProfile() {
    return (
        <AppLayout page="">
            <main className="mx-auto flex w-11/12 gap-5 p-7">
                <section id="content" className="w-8/12 rounded-2xl">
                    <PublicProfileIntro
                        cover_path="https://www.sharjeelanjum.com/demos/jobsportal-update/user_images/-1736424828-319.jpg"
                        profile_path="https://www.sharjeelanjum.com/demos/jobsportal-update/user_images/-1741437874-596.jpg"
                        name="Job Seeker"
                        industry="Information Technology"
                        available={true}
                        location="Bainbridge Island, Washington, United States of America"
                        cv_path=""
                        member_since="Sep 19, 2018"
                        description="Hello! I'm Sharjeel, A Passionate UI/UX Designer and Frontend Developer with a strong technical background. I bring innovation and attention to detail to create visually stunning, user-centric designs. Proactive and disciplined, I excel in ensuring maximum accessibility and elevating customer experiences throughout the development process. Let's redefine digital interactions together."
                    />

                    <PublicProfileQualifications
                        educations={educations}
                        experiences={experiences}
                        languages={languages}
                        projects={projects}
                        skills={skills}
                    />
                </section>
                <section id="sidebar" className="w-4/12">
                    <PublicProfileContact
                        phone_no="123456789"
                        mobile_no="123456789"
                        email="tabishsajwani@hotmail.com"
                        locaion="Dummy Street Address 123 USA"
                    />
                    <PublicProfileQualities
                        age={36}
                        availability={true}
                        career_level="Experienced Professional"
                        current_salary={6000}
                        expectation_salary={10000}
                        experience={6}
                        gender="Male"
                        location="Washington, USA"
                        martial_status="Single"
                        verified={true}
                    />

                    <Card className="mt-5 gap-2 border-gray-300 p-10 shadow-none">
                        <h1 className="font-montserrat text-2xl font-bold text-primary">Video Profile</h1>
                        <p>Add Video </p>
                    </Card>
                </section>
            </main>
        </AppLayout>
    );
}
