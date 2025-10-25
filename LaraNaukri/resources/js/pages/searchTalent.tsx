import CandidateSearchResults from '@/components/sections/candidate-search-result';
import SearchTalentHero from '@/components/sections/searchTalentHero';
import CandidateSearchFilter from '@/components/ui/cards/CandidateSearchFilter';
import AppLayout from '@/layouts/app/app-layout';
import { Candidate, CandidateGroup } from '@/types';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import { SearchCheckIcon } from 'lucide-react';
import { FormEvent, useState } from 'react';

type CustomPageProps = {
    allCandidates: Candidate[];
    searchedCandidates: Candidate[];
    groupByCountry: CandidateGroup[];
    groupByState: CandidateGroup[];
    groupByCity: CandidateGroup[];
    groupByExperience: CandidateGroup[];
    groupByCareerLevels: CandidateGroup[];
    groupByGender: CandidateGroup[];
};

export default function SearchTalent() {
    const { allCandidates, searchedCandidates, groupByCountry, groupByState, groupByCity } = usePage<CustomPageProps>().props;
    const { groupByExperience, groupByCareerLevels, groupByGender } = usePage<CustomPageProps>().props;
    const [filteredCandidates, setFilteredCandidates] = useState(searchedCandidates);

    const { data, setData } = useForm({
        country_id: [] as number[],
        state_id: [] as number[],
        city_id: [] as number[],
        experience_id: [] as number[],
        career_level_id: [] as number[],
        gender_id: [] as number[],
    });

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        router.get(route('filter.talent'), data, {
            onSuccess: (page) => {
                console.log(page.props.searchedCandidates);
                setFilteredCandidates(page.props.searchedCandidates as Candidate[]);
            },
            onError: (errors) => console.log(errors),
        });
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
            <Head title="Search Talent" />
            <SearchTalentHero />
            <section className="mx-auto flex w-[95%] p-10">
                <div id="search-filter" className="mr-6 w-1/4">
                    <CandidateSearchFilter widgetTitle="Country" data={groupByCountry} onChangeFn={(val) => handleChange('country_id', val)} />
                    <CandidateSearchFilter widgetTitle="State" data={groupByState} onChangeFn={(val) => handleChange('state_id', val)} />
                    <CandidateSearchFilter widgetTitle="City" data={groupByCity} onChangeFn={(val) => handleChange('city_id', val)} />
                    <CandidateSearchFilter
                        widgetTitle="Experience"
                        data={groupByExperience}
                        onChangeFn={(val) => handleChange('experience_id', val)}
                    />
                    <CandidateSearchFilter
                        widgetTitle="Career Level"
                        data={groupByCareerLevels}
                        onChangeFn={(val) => handleChange('career_level_id', val)}
                    />
                    <CandidateSearchFilter widgetTitle="Gender" data={groupByGender} onChangeFn={(val) => handleChange('gender_id', val)} />
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <button className="flex cursor-pointer items-center justify-center gap-3 bg-primary px-3 py-3 text-lg font-semibold text-white">
                            <SearchCheckIcon />
                            <p className="">Search Candidate</p>
                        </button>
                    </form>
                </div>
                <CandidateSearchResults candidates={searchedCandidates?.length > 0 ? searchedCandidates : allCandidates} />
            </section>
        </AppLayout>
    );
}
