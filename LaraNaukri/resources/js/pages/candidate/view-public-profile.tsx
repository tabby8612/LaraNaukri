import PublicProfileContact from '@/components/sections/candidate/PublicProfileContact';
import PublicProfileIntro from '@/components/sections/candidate/PublicProfileIntro';
import PublicProfileQualifications from '@/components/sections/candidate/PublicProfileQualifications';
import PublicProfileQualities from '@/components/sections/candidate/PublicProfileQualities';
import { Card } from '@/components/ui/card';
import AppLayout from '@/layouts/app/app-layout';
import { Candidate } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function ViewPublicProfile() {
    const { candidate } = usePage<{ candidate: Candidate }>().props;

    return (
        <AppLayout page="">
            <Head title={`${candidate.first_name}'s Profile`} />
            <main className="mx-auto flex flex-col gap-5 p-7 md:w-11/12 md:flex-row">
                <section id="content" className="rounded-2xl md:w-8/12">
                    <PublicProfileIntro
                        cover_path={candidate.cover_image_path}
                        profile_path={candidate.image_path}
                        name={`${candidate.first_name} ${candidate.last_name ?? ''}`}
                        industry={candidate.industry?.name ?? 'Not Set'}
                        available={candidate.open_to_work}
                        location={`${candidate.city?.name} ${candidate.state?.name}, ${candidate.country?.name}`}
                        cv_path={candidate.resume_path}
                        member_since={candidate.created_at}
                        description={candidate.summary ?? 'Summary Not Set'}
                    />

                    <PublicProfileQualifications
                        educations={candidate.educations}
                        experiences={candidate.experiences}
                        languages={candidate.languages}
                        projects={candidate.projects}
                        skills={candidate.skills}
                    />
                </section>
                <section id="sidebar" className="md:w-4/12">
                    <PublicProfileContact
                        phone_no={candidate.phone ?? 'Not Set'}
                        mobile_no={candidate.mobile ?? 'Not Set'}
                        email={candidate.user.email}
                        locaion={candidate.address ?? 'Not Set'}
                    />
                    <PublicProfileQualities
                        age={candidate.age ?? 'Age Not Set'}
                        availability={candidate.open_to_work}
                        career_level={candidate.career_level?.name ?? 'Career Level Not Set'}
                        current_salary={candidate.salary_from}
                        expectation_salary={candidate.salary_to}
                        experience={candidate.total_experience}
                        gender={candidate.gender?.name ?? 'Gender Not Set'}
                        location={`${candidate.state?.name ?? 'State Not Set'}, ${candidate.country?.name ?? 'Country Not Set'}`}
                        martial_status={candidate.marital_status?.name ?? 'Martial Status Not Set'}
                        verified={true}
                    />

                    <Card className="mt-5 gap-2 border-gray-300 p-10 shadow-none">
                        <h1 className="font-montserrat text-2xl font-bold text-primary">Video Profile</h1>
                        {/* <video src={candidate.video_profile}></video> */}
                        <iframe src={candidate.video_profile} className="h-72 w-full"></iframe>
                    </Card>
                </section>
            </main>
        </AppLayout>
    );
}
