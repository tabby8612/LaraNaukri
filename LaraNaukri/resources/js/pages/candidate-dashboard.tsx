import DashboardOverviewWidget from '@/components/ui/cards/Candidate/DashboardOverviewWidget';
import IntroCard from '@/components/ui/cards/Candidate/IntroCard';
import FeaturedJobCard from '@/components/ui/cards/FeaturedJobCard';
import AppCandidateLayout from '@/layouts/app/app-candidate-layout';
import { RoundRemoveRedEye } from '@/SVGs/Eye';
import { Job } from '@/SVGs/Job';
import { Message } from '@/SVGs/Message';
import { User } from '@/SVGs/User';
import { usePage } from '@inertiajs/react';
import { SquarePen } from 'lucide-react';

export default function CandidateDashboard() {
    const props = usePage();
    console.log(props);

    return (
        <AppCandidateLayout page="dashboard" titleText="Welcome to Candidate Dashboard" displaySearch>
            <section id="dashboard-overview" className="flex gap-5">
                <DashboardOverviewWidget SVGIcon={RoundRemoveRedEye} link="" mainText="179" secondaryText="Profile Views" />
                <DashboardOverviewWidget SVGIcon={User} link="" mainText="7" secondaryText="Followings" />
                <DashboardOverviewWidget SVGIcon={Job} link="" mainText="1" secondaryText="My CV List" />
                <DashboardOverviewWidget SVGIcon={Message} link="" mainText="0" secondaryText="Messages" />
            </section>

            <section id="profile-image" className="relative mt-5">
                <img
                    src="https://www.sharjeelanjum.com/demos/jobsportal-update/user_images/-1736424828-319.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                />
                <SquarePen className="absolute top-3 right-5 size-10 cursor-pointer rounded-full bg-white p-2 drop-shadow-xl drop-shadow-black/30" />
                <IntroCard />
            </section>

            <section className="mt-30">
                <h1 className="font-montserrat text-2xl font-semibold">My Applied Jobs</h1>
                <p>No Applied Jobs Found</p>
            </section>

            <section className="mt-20">
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
            </section>
        </AppCandidateLayout>
    );
}
