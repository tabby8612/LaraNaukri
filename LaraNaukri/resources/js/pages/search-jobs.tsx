import JobSearchResults from '@/components/sections/job-search-results';
import Searchjobhero from '@/components/sections/searchjobhero';
import SearchFilter from '@/components/ui/cards/SearchFilter';
import WarningDialog from '@/components/ui/cards/WarningDialog';
import AppLayout from '@/layouts/app/app-layout';
import { DocumentText } from '@/SVGs/Document';
import { Candidate, Company, FilteredJobs, User } from '@/types';
import { Head, router, usePage } from '@inertiajs/react';
import { Filter, SearchCheckIcon } from 'lucide-react';
import { FormEvent, useEffect, useLayoutEffect, useState } from 'react';

type CustomPageProps = {
    filteredJobs: FilteredJobs[] | undefined;
    auth: {
        user: User | null;
        candidate: Candidate | null;
        employer: Company | null;
    };
};

export default function SearchJobs() {
    const props = usePage<CustomPageProps>().props;
    const { filteredJobs } = props;
    const [allJobs, setAllJobs] = useState<FilteredJobs[] | null>(null);
    const { auth } = props;
    const [isMobFilters, setIsMobFilters] = useState(false);
    const [isMobAside, setIsMobAside] = useState(false);

    useEffect(() => {
        async function getAllJobs() {
            const response = await fetch(route('all.jobs.api'));

            if (!response.ok) throw new Error('Unable to fetch data');

            const data = await response.json();

            setAllJobs(data);
        }

        getAllJobs();
    }, []);

    useLayoutEffect(() => {
        function handleResize() {
            if (window.screen.width < 1000) {
                setIsMobFilters(true);
                setIsMobAside(false);
            } else {
                setIsMobFilters(false);
                setIsMobAside(false);
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
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
            <aside
                className={`smoothTransition fixed top-0 right-0 z-20 block h-full overflow-y-auto bg-white pt-16 shadow-2xl ${isMobAside ? 'w-1/2 translate-x-0 sm:w-1/2' : 'w-0 translate-x-96'}`}
            >
                <p className="flex items-end justify-end px-4 py-3 text-right text-2xl" onClick={() => setIsMobAside(false)}>
                    X
                </p>

                <div className="px-2">
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
            </aside>
            <Head title="Search Job" />
            <Searchjobhero />

            <section className="mx-auto flex w-[95%] flex-col p-10 md:flex-row">
                <div id="search-filter" className="mr-6 w-full md:w-1/4">
                    {auth.candidate ? (
                        <div
                            className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-primary px-3 py-3 text-lg font-semibold text-white"
                            onClick={() => router.get(route('candidate.buildResume'))}
                        >
                            <DocumentText />
                            <p className="">Upload Your Document</p>
                        </div>
                    ) : (
                        <WarningDialog
                            trigger={
                                <div className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-primary px-3 py-3 text-lg font-semibold text-white">
                                    <DocumentText />
                                    <p className="">Upload Your Document</p>
                                </div>
                            }
                            warningText={
                                <div className="flex flex-col items-center justify-center gap-5">
                                    <h1 className="text-center text-2xl font-bold">Log in or register as a candidate to upload CV.</h1>
                                    <div className="flex gap-3">
                                        <a href={route('candidate.login')} className="rounded-xl bg-primary p-3 text-white">
                                            Login
                                        </a>
                                        <a href={route('candidate.register')} className="rounded-xl bg-black p-3 text-white">
                                            Register
                                        </a>
                                    </div>
                                </div>
                            }
                        />
                    )}

                    {isMobFilters && (
                        <div
                            className="my-3 flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-black px-3 py-3 text-lg font-semibold text-white"
                            onClick={() => setIsMobAside(true)}
                        >
                            <Filter fill="white" />
                            <p className="">Filters</p>
                        </div>
                    )}

                    <form onSubmit={(e) => handleSubmit(e)} className={`${isMobFilters && 'hidden size-0'}`}>
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
