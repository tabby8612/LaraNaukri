import BlogPostSection from '@/components/BlogPostSection';
import Calltoaction from '@/components/calltoaction';
import JobCategories from '@/components/categoriesSection';
import FeaturedCandidateSection from '@/components/FeaturedCandidateSection';
import Footer from '@/components/Footer';
import Hero from '@/components/hero';
import HowItWork from '@/components/HowItWork';
import JobsByCities from '@/components/JobsByCities';
import JobsByCountrySection from '@/components/JobsByCountrySection';
import Latestjobs from '@/components/latestjobs';
import Nav from '@/components/nav';
import SuccessStorySection from '@/components/SuccessStorySection';
import Topcompanies from '@/components/topcompanies';

export default function Welcome() {
    return (
        <>
            <Nav />
            <Hero />
            <Calltoaction />
            <Topcompanies />
            <JobCategories />
            <Latestjobs />
            <JobsByCities />
            <FeaturedCandidateSection />
            <HowItWork />
            <SuccessStorySection />
            <JobsByCountrySection />
            <BlogPostSection />
            <Footer />
        </>
    );
}
