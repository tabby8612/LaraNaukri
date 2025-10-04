import PublicProfileContact from '@/components/sections/candidate/PublicProfileContact';
import PublicProfileIntro from '@/components/sections/candidate/PublicProfileIntro';
import PublicProfileQualifications from '@/components/sections/candidate/PublicProfileQualifications';
import PublicProfileQualities from '@/components/sections/candidate/PublicProfileQualities';
import { Card } from '@/components/ui/card';
import AppLayout from '@/layouts/app/app-layout';
import { Candidate } from '@/types';
import { usePage } from '@inertiajs/react';

export default function UserProfile() {
    const { candidate } = usePage<{ candidate: Candidate }>().props;

    return (
        <AppLayout page="">
            <main className="mx-auto flex w-11/12 gap-5 p-7">
                <section id="content" className="w-8/12 rounded-2xl">
                    <PublicProfileIntro
                        cover_path={candidate.cover_image_path}
                        profile_path={candidate.image_path}
                        name={`${candidate.first_name} ${candidate.last_name}`}
                        industry={candidate.industry.name}
                        available={candidate.open_to_work}
                        location={`${candidate.city.name} ${candidate.state.name}, ${candidate.country.name}`}
                        cv_path={candidate.resume_path}
                        member_since={candidate.created_at}
                        description={candidate.summary}
                    />

                    <PublicProfileQualifications
                        educations={candidate.educations}
                        experiences={candidate.experiences}
                        languages={candidate.languages}
                        projects={candidate.projects}
                        skills={candidate.skills}
                    />
                </section>
                <section id="sidebar" className="w-4/12">
                    <PublicProfileContact
                        phone_no={candidate.phone}
                        mobile_no={candidate.mobile}
                        email={candidate.user.email}
                        locaion={candidate.address}
                    />
                    <PublicProfileQualities
                        age={candidate.age}
                        availability={candidate.open_to_work}
                        career_level={candidate.career_level.name}
                        current_salary={candidate.salary_from}
                        expectation_salary={candidate.salary_to}
                        experience={candidate.total_experience}
                        gender={candidate.gender.name}
                        location={`${candidate.state.name}, ${candidate.country.name}`}
                        martial_status={candidate.marital_status.name}
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
