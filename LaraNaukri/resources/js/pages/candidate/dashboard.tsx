import DashboardOverviewWidget from '@/components/ui/cards/Candidate/DashboardOverviewWidget';
import IntroCard from '@/components/ui/cards/Candidate/IntroCard';
import FeaturedJobCard from '@/components/ui/cards/FeaturedJobCard';
import AppCandidateLayout from '@/layouts/app/app-candidate-layout';
import { RoundRemoveRedEye } from '@/SVGs/Eye';
import { Job } from '@/SVGs/Job';
import { Message } from '@/SVGs/Message';
import { User } from '@/SVGs/User';
import { Candidate } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { SquarePen } from 'lucide-react';
import { useState } from 'react';

export default function CandidateDashboard() {
    const { candidate } = usePage<{ candidate: Candidate }>().props;
    const [showAllJobs, setShowAllJobs] = useState(false);

    let filteredAppliedJobs = candidate.applications;

    if (!showAllJobs && candidate.applications.length > 3) {
        filteredAppliedJobs = Array.from({ length: 3 }).map((el, index) => (el = candidate.applications[index]));
    }

    return (
        <AppCandidateLayout page="dashboard" titleText="Welcome to Candidate Dashboard" displaySearch>
            <section id="dashboard-overview" className="flex gap-5">
                <DashboardOverviewWidget SVGIcon={RoundRemoveRedEye} link="" mainText={candidate.profile_views} secondaryText="Profile Views" />
                <DashboardOverviewWidget
                    SVGIcon={User}
                    link={route('candidate.followings')}
                    mainText={candidate.companies_count}
                    secondaryText="Followings"
                />
                <DashboardOverviewWidget
                    SVGIcon={Job}
                    link={route('candidate.downloadResume')}
                    mainText={candidate.resumes_count}
                    secondaryText="My CV List"
                />
                <DashboardOverviewWidget SVGIcon={Message} link={route('candidate.messages')} mainText="0" secondaryText="Messages" />
            </section>

            <section id="profile-image" className="relative mt-5">
                <img
                    src={`/storage/${candidate.cover_image_path ? candidate.cover_image_path : 'user_images/default.png'}`}
                    alt={candidate.first_name}
                    className="h-60 w-full rounded-2xl"
                />
                <SquarePen
                    className="absolute top-3 right-5 size-10 cursor-pointer rounded-full bg-white p-2 drop-shadow-xl drop-shadow-black/30"
                    onClick={() => router.get(route('candidate.editProfile'))}
                />
                <IntroCard candidate={candidate} />
            </section>

            <section className="mt-30">
                <h1 className="font-montserrat text-2xl font-semibold">My Applied Jobs</h1>

                <div className="mt-2 grid grid-cols-3 gap-5">
                    {filteredAppliedJobs.length > 0 &&
                        filteredAppliedJobs.map((application) => (
                            <FeaturedJobCard
                                JobID={application.job.id}
                                companyImageURL={application.job.companies.image_path}
                                companyName={application.job.companies.name}
                                companySlug={application.job.companies.slug}
                                featured={application.job.featured}
                                location={application.job.location}
                                postedDate={application.job.created_at}
                                salary={application.job.salary_from}
                                title={application.job.title}
                                type={application.job.type}
                                companyID={`${application.job.companies.id}`}
                                key={application.id}
                            />
                        ))}
                </div>
                <p className="mt-3 cursor-pointer text-right font-bold text-primary" onClick={() => setShowAllJobs(!showAllJobs)}>
                    {showAllJobs ? 'Show (3)' : 'Show All'}
                </p>
            </section>

            <section className="p-7">
                <h1 className="my-3 font-montserrat text-2xl font-semibold">Premium Package</h1>
                {candidate.active_package ? (
                    <div className="rounded-xl bg-green-50 p-7">
                        <h2 className="font-montserrat text-2xl font-semibold">
                            Your Package is:{' '}
                            <span className="text-primary">
                                {candidate.active_package.package.name} - ${candidate.active_package.package.price}
                            </span>
                        </h2>
                        <h2 className="mt-5 font-montserrat text-2xl font-semibold">
                            Your Package Duration:{' '}
                            <span className="text-primary">
                                {candidate.active_package.start_date} - {candidate.active_package.end_date}
                            </span>
                        </h2>
                    </div>
                ) : (
                    <div className="rounded-xl bg-green-50 p-7">
                        <p>No Premium Package Is Activated</p>
                    </div>
                )}
            </section>

            {/* <section className="mt-20">
                <h1 className="font-montserrat text-2xl font-semibold">Recommended Jobs</h1>
                <div className="mt-2 grid grid-cols-3 gap-5">
                    <FeaturedJobCard
                        JobID="1"
                        companyImageURL="https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/power-color-1536854682-955.jpg"
                        companyName="Power Color"
                        companySlug="power-color-259"
                        featured={true}
                        location="Islamabad"
                        postedDate="Mar 07, 2025"
                        salary={90000}
                        title="UI/UX Designer"
                        type="Full Time/Parmanent"
                        companyID="259"
                    />
                    <FeaturedJobCard
                        JobID="1"
                        companyImageURL="https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/power-color-1536854682-955.jpg"
                        companyName="Power Color"
                        companySlug="power-color-259"
                        featured={false}
                        location="Islamabad"
                        postedDate="Mar 07, 2025"
                        salary={90000}
                        title="UI/UX Designer"
                        type="Full Time/Parmanent"
                        companyID="259"
                    />
                </div>
            </section> */}
        </AppCandidateLayout>
    );
}
