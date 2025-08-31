import { Country, Industry } from '@/types';
import { SearchCheckIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import FilterDropDown from '../ui/cards/FilterDropDown';
import FilterItem from '../ui/cards/FilterItem';
import { Input } from '../ui/UnusedUI/input';

export default function EmployerSearchFilters({ industries, handleFn }: { industries: Industry[]; handleFn: () => void }) {
    const [countries, setCountries] = useState<Country[] | null>();

    useEffect(() => {
        async function allCountries() {
            const response = await fetch(route('all.countries.api'));
            const data = await response.json();

            setCountries(data);
        }

        allCountries();
    }, []);

    return (
        <form
            id="search-filter"
            className="mr-6 w-1/4 rounded-lg bg-primary/8 p-6"
            onSubmit={(e) => {
                e.preventDefault();
                handleFn();
            }}
        >
            <div className="flex flex-col gap-2">
                <p className="mt-3 font-semibold">Search Filter</p>
                <Input
                    type="text"
                    id="keyword"
                    name="keyword"
                    placeholder='keywords e.g. "Google"'
                    className="h-10 outline-2 outline-red-500 selection:text-white focus-visible:border-0 focus-visible:ring-primary"
                />
            </div>
            {countries && <FilterDropDown countries={countries} />}

            <p className="mt-3 font-semibold">Industry</p>
            {industries &&
                industries.map((industry) => (
                    <FilterItem name={industry.name} count={industry.companies_count} key={industry.id} columnName="industry_id" />
                ))}

            <button className="mt-6 flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-primary px-3 py-3 text-lg font-semibold text-white">
                <SearchCheckIcon />
                <p className="">Search Employer</p>
            </button>
        </form>
    );
}
