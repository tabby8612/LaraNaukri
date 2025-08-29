import BlogPostSection from '@/components/sections/BlogPostSection';
import Calltoaction from '@/components/sections/calltoaction';
import JobCategories from '@/components/sections/categoriesSection';
import FeaturedCandidateSection from '@/components/sections/FeaturedCandidateSection';
import FeaturedJobsSection from '@/components/sections/FeaturedJobsSection';
import Hero from '@/components/sections/hero';
import HowItWork from '@/components/sections/HowItWork';
import JobsByCities from '@/components/sections/JobsByCities';
import JobsByCountrySection from '@/components/sections/JobsByCountrySection';
import JobsByIndustrySection from '@/components/sections/JobsByIndustrySection';
import Latestjobs from '@/components/sections/latestjobs';
import SuccessStorySection from '@/components/sections/SuccessStorySection';
import Topcompanies from '@/components/sections/topcompanies';
import AppLayout from '@/layouts/app/app-layout';
import { FilteredJobs } from '@/types';
import { usePage } from '@inertiajs/react';


type HomeProps = {
    jobs: FilteredJobs[]
}

export default function Welcome() {
    const props = usePage<HomeProps>().props;
    const { jobs } = props;


    return (
        <AppLayout page="home">
            <Hero />
            <Calltoaction />
            <Topcompanies />
            <JobsByIndustrySection />
            {jobs && <FeaturedJobsSection jobs={jobs} />}
            <JobCategories />
            {jobs && <Latestjobs jobs={jobs} />}
            <JobsByCities />
            <FeaturedCandidateSection />
            <HowItWork />
            <SuccessStorySection />
            <JobsByCountrySection />
            <BlogPostSection />
        </AppLayout>
    );
}
