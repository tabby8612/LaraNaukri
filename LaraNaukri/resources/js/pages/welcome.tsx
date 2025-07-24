import Calltoaction from '@/components/calltoaction';
import JobCategories from '@/components/categoriesSection';
import Hero from '@/components/hero';
import Latestjobs from '@/components/latestjobs';
import Nav from '@/components/nav';
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
        </>
    );
}
