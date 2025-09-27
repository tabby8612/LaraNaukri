import JobSearchResults from '@/components/sections/job-search-results';
import Searchjobhero from '@/components/sections/searchjobhero';
import SearchFilter from '@/components/ui/cards/SearchFilter';
import AppLayout from '@/layouts/app/app-layout';
import { DocumentText } from '@/SVGs/Document';
import { FilteredJobs } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { SearchCheckIcon } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';

type CustomPageProps = {
    filteredJobs: FilteredJobs[] | undefined;
};

export default function SearchJobs() {
    const props = usePage<CustomPageProps>().props;
    const { filteredJobs } = props;
    const [allJobs, setAllJobs] = useState<FilteredJobs[] | null>(null);

    useEffect(() => {
        async function getAllJobs() {
            const response = await fetch(route('all.jobs.api'));

            if (!response.ok) throw new Error('Unable to fetch data');

            const data = await response.json();

            setAllJobs(data);
        }

        getAllJobs();
    }, []);

    /**
     * this function is responible for sending POST request to ask for filtered data
     * @param e FormEvent
     * @returns null
     *
     */

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const buttons = document.querySelectorAll<HTMLButtonElement>("button[role='checkbox'][data-state='checked']");

        const selectedItems: Record<string, string[]> = {};

        buttons.forEach((item) => {
            if (!selectedItems[item.dataset.filter!]) {
                selectedItems[item.dataset.filter!] = [item.value];
            } else {
                selectedItems[item.dataset.filter!].push(item.value);
            }
        });

        router.post(route('filter.jobs'), selectedItems);
    }

    return (
        <AppLayout page="jobs">
            <Searchjobhero />
            <section className="mx-auto flex w-[95%] p-10">
                <div id="search-filter" className="mr-6 w-1/4">
                    <div className="flex cursor-pointer items-center gap-3 rounded-lg bg-primary px-3 py-3 text-lg font-semibold text-white">
                        <DocumentText />
                        <p className="">Upload Your Document</p>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        {allJobs && <SearchFilter widgetTitle="title" data={allJobs} filterKey="title" />}
                        {allJobs && <SearchFilter widgetTitle="type" data={allJobs} filterKey="type" />}
                        {allJobs && <SearchFilter widgetTitle="shift" data={allJobs} filterKey="shift" />}
                        {allJobs && <SearchFilter widgetTitle="Functional Area" data={allJobs} filterKey="category" />}
                        {allJobs && <SearchFilter widgetTitle="gender" data={allJobs} filterKey="gender" />}
                        {allJobs && <SearchFilter widgetTitle="degree" data={allJobs} filterKey="degree" />}
                        {allJobs && <SearchFilter widgetTitle="country" data={allJobs} filterKey="country" />}
                        {allJobs && <SearchFilter widgetTitle="company" data={allJobs} filterKey="company" />}
                        {allJobs && <SearchFilter widgetTitle="city" data={allJobs} filterKey="city" />}
                        {allJobs && <SearchFilter widgetTitle="career_level" data={allJobs} filterKey="career_level" />}

                        {allJobs && (
                            <button className="flex cursor-pointer items-center justify-center gap-3 bg-primary px-3 py-3 text-lg font-semibold text-white">
                                <SearchCheckIcon />
                                <p className="">Search Job</p>
                            </button>
                        )}
                    </form>
                </div>
                <JobSearchResults jobs={filteredJobs} />
            </section>
        </AppLayout>
    );
}
