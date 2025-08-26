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
import { Job } from '@/types';
import { useEffect, useState } from 'react';

export default function Welcome() {
    const [latestJobs, setLatestJobs] = useState<Job[] | null>(null);
    const [featuredJobs, setFeaturedJobs] = useState<Job[] | null>(null);

    useEffect(() => {
        async function getLatestJobs() {
            const response = await fetch(route('latest.jobs'));

            if (!response.ok) throw new Error('Unable to fetch data');

            const data = await response.json();

            setLatestJobs(data.results.slice(0, 9));
            setFeaturedJobs(data.results.filter((job: Job) => job.featured).slice(0, 8));
        }

        getLatestJobs();
    }, []);

    return (
        <AppLayout page="home">
            <Hero />
            <Calltoaction />
            <Topcompanies />
            <JobsByIndustrySection />
            {featuredJobs && <FeaturedJobsSection jobs={featuredJobs} />}
            <JobCategories />
            {latestJobs && <Latestjobs jobs={latestJobs} />}
            <JobsByCities />
            <FeaturedCandidateSection />
            <HowItWork />
            <SuccessStorySection />
            <JobsByCountrySection />
            <BlogPostSection />
        </AppLayout>
    );
}
