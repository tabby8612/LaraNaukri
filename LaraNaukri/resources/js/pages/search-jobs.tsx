import JobSearchResults from '@/components/sections/job-search-results';
import Searchjobhero from '@/components/sections/searchjobhero';
import SearchFilter from '@/components/ui/cards/SearchFilter';
import AppLayout from '@/layouts/app/app-layout';
import { DocumentText } from '@/SVGs/Document';
import { SearchCheckIcon } from 'lucide-react';

const JobsByTitle = [
    {
        id: 'job_title_0',
        name: 'UI/UX Designer',
        count: 1,
    },
    {
        id: 'job_title_1',
        name: 'IOS Developer',
        count: 1,
    },
    {
        id: 'job_title_2',
        name: 'Electrical Engineer',
        count: 1,
    },
    {
        id: 'job_title_3',
        name: 'PHP Developer Required',
        count: 2,
    },
    {
        id: 'job_title_4',
        name: 'Frontend Developer',
        count: 1,
    },
    {
        id: 'job_title_5',
        name: 'Senior Php Programer',
        count: 1,
    },
];

const JobsByCountry = [
    {
        id: 'country_166',
        name: 'Pakistan',
        count: 2,
    },
    {
        id: 'country_231',
        name: 'United States of America',
        count: 16,
    },
];

const JobsByState = [
    {
        id: 'state_1',
        name: 'Islamabad - Federal Capital Area',
        count: 2,
    },
    {
        id: 'state_2',
        name: 'Georgia',
        count: 2,
    },
    {
        id: 'country_3',
        name: 'Florida',
        count: 1,
    },
    {
        id: 'country_4',
        name: 'Alabama',
        count: 3,
    },
    {
        id: 'country_5',
        name: 'Delware',
        count: 5,
    },
    {
        id: 'country_6',
        name: 'Indiana',
        count: 1,
    },
];

export default function SearchJobs() {
    return (
        <AppLayout page="jobs">
            <Searchjobhero />
            <section className="mx-auto flex w-[95%] p-10">
                <div id="search-filter" className="mr-6 w-1/4">
                    <div className="flex cursor-pointer items-center gap-3 rounded-lg bg-primary px-3 py-3 text-lg font-semibold text-white">
                        <DocumentText />
                        <p className="">Upload Your Document</p>
                    </div>

                    <SearchFilter title="Jobs By Title" filterItems={JobsByTitle} />
                    <SearchFilter title="Jobs By Country" filterItems={JobsByCountry} />
                    <SearchFilter title="Jobs By State" filterItems={JobsByState} />
                    <SearchFilter title="Jobs By City" filterItems={JobsByTitle} />
                    <SearchFilter title="Jobs By Experience" filterItems={JobsByTitle} />
                    <SearchFilter title="Jobs By Job Type" filterItems={JobsByTitle} />
                    <SearchFilter title="Jobs By Job Shift" filterItems={JobsByTitle} />
                    <SearchFilter title="Jobs By Career Level" filterItems={JobsByTitle} />
                    <SearchFilter title="Jobs By Degree Level" filterItems={JobsByTitle} />
                    <SearchFilter title="Jobs By Gender" filterItems={JobsByTitle} />
                    <SearchFilter title="Jobs By Industry" filterItems={JobsByTitle} />
                    <SearchFilter title="Jobs By Skills" filterItems={JobsByTitle} />
                    <SearchFilter title="Jobs By Functional Area" filterItems={JobsByTitle} />
                    <SearchFilter title="Jobs By Company" filterItems={JobsByTitle} />

                    <div className="flex cursor-pointer items-center justify-center gap-3 bg-primary px-3 py-3 text-lg font-semibold text-white">
                        <SearchCheckIcon />
                        <p className="">Search Job</p>
                    </div>
                </div>
                <JobSearchResults />
            </section>
        </AppLayout>
    );
}
