import CandidateSearchResults from '@/components/sections/candidate-search-result';
import SearchTalentHero from '@/components/sections/searchTalentHero';
import CandidateSearchFilter from '@/components/ui/cards/CandidateSearchFilter';
import AppLayout from '@/layouts/app/app-layout';
import { Candidate, CandidateGroup } from '@/types';
import { router, useForm, usePage } from '@inertiajs/react';
import { SearchCheckIcon } from 'lucide-react';
import { FormEvent, useState } from 'react';

type CustomPageProps = {
    allCandidates: Candidate[];
    searchedCandidates: Candidate[];
    groupByCountry: CandidateGroup[];
    groupByState: CandidateGroup[];
    groupByCity: CandidateGroup[];
};

export default function SearchTalent() {
    const { allCandidates, searchedCandidates, groupByCountry, groupByState, groupByCity } = usePage<CustomPageProps>().props;
    const [filteredCandidates, setFilteredCandidates] = useState(searchedCandidates);

    const { data, setData, post } = useForm({
        country_id: [] as number[],
        state_id: [] as number[],
        city_id: [] as number[],
    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const filterData = router.post(route('filter.talent'), { data });
        console.log(filterData);
    }
    function handleChange(attr: keyof typeof data, value: string) {
        if (data[attr].includes(+value)) {
            setData(attr, [...data[attr].filter((el) => el !== +value)]);
        } else {
            setData(attr, [...data[attr], +value]);
        }
    }

    return (
        <AppLayout page="talents">
            <SearchTalentHero />
            <section className="mx-auto flex w-[95%] p-10">
                <div id="search-filter" className="mr-6 w-1/4">
                    <CandidateSearchFilter widgetTitle="Country" data={groupByCountry} onChangeFn={(val) => handleChange('country_id', val)} />
                    <CandidateSearchFilter widgetTitle="State" data={groupByState} onChangeFn={(val) => handleChange('state_id', val)} />
                    <CandidateSearchFilter widgetTitle="City" data={groupByCity} onChangeFn={(val) => handleChange('city_id', val)} />
                    <form onSubmit={(e) => handleSubmit(e)}>
                        {/*    {allJobs && <SearchFilter widgetTitle="title" data={allJobs} filterKey="title" />}
                        {allJobs && <SearchFilter widgetTitle="type" data={allJobs} filterKey="type" />}
                        {allJobs && <SearchFilter widgetTitle="shift" data={allJobs} filterKey="shift" />}
                        {allJobs && <SearchFilter widgetTitle="Functional Area" data={allJobs} filterKey="category" />}
                        {allJobs && <SearchFilter widgetTitle="gender" data={allJobs} filterKey="gender" />}
                        {allJobs && <SearchFilter widgetTitle="degree" data={allJobs} filterKey="degree" />}
                        {allJobs && <SearchFilter widgetTitle="country" data={allJobs} filterKey="country" />}
                        {allJobs && <SearchFilter widgetTitle="company" data={allJobs} filterKey="company" />}
                        {allJobs && <SearchFilter widgetTitle="city" data={allJobs} filterKey="city" />}
                        {allJobs && <SearchFilter widgetTitle="career_level" data={allJobs} filterKey="career_level" />}
*/}
                        <button className="flex cursor-pointer items-center justify-center gap-3 bg-primary px-3 py-3 text-lg font-semibold text-white">
                            <SearchCheckIcon />
                            <p className="">Search Job</p>
                        </button>
                    </form>
                </div>
                <CandidateSearchResults candidates={searchedCandidates?.length > 0 ? searchedCandidates : allCandidates} />
            </section>
        </AppLayout>
    );
}
