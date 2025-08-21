import { SearchCheckIcon } from 'lucide-react';
import FilterDropDown from '../ui/cards/FilterDropDown';
import FilterItem from '../ui/cards/FilterItem';
import { Input } from '../ui/UnusedUI/input';

export default function EmployerSearchFilters() {
    return (
        <div id="search-filter" className="mr-6 w-1/4 rounded-lg bg-primary/8 p-6">
            <div className="flex flex-col gap-2">
                <p className="mt-3 font-semibold">Search Filter</p>
                <Input
                    type="text"
                    id="keyword"
                    placeholder='keywords e.g. "Google"'
                    className="h-10 outline-2 outline-red-500 selection:text-white focus-visible:border-0 focus-visible:ring-primary"
                />
            </div>
            <FilterDropDown type="Country" items={['United States of America', 'Pakistan']} />
            <FilterDropDown type="States" items={['Sindh', 'Albany']} />
            <FilterDropDown type="City" items={['Karachi', 'Lahore']} />

            <p className="mt-3 font-semibold">Industry</p>
            <FilterItem name="Advertising/PR" count={1} id="Advertising/PR" key={1} />
            <FilterItem name="AutoMobile" count={1} id="AutoMobile" key={2} />
            <FilterItem name="Banking/Financial Services" count={1} id="Banking/Financial Services" key={3} />
            <FilterItem name="Advertising/PR" count={1} id="Advertising/PR" key={1} />
            <FilterItem name="AutoMobile" count={1} id="AutoMobile" key={2} />
            <FilterItem name="Banking/Financial Services" count={1} id="Banking/Financial Services" key={3} />

            <div className="mt-6 flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-primary px-3 py-3 text-lg font-semibold text-white">
                <SearchCheckIcon />
                <p className="">Search Employer</p>
            </div>
        </div>
    );
}
