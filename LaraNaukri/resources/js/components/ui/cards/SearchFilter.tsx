import { useState } from 'react';
import FilterItem from './FilterItem';
import { FilteredJobs } from '@/types';


type FilterProps = {
    widgetTitle: string;
    data: FilteredJobs[];
    filterKey: keyof FilteredJobs;
}

export default function SearchFilter({ widgetTitle, data, filterKey }: FilterProps) {
    const [showAll, setShowAll] = useState(false);

    function getFilterData(data: FilteredJobs[], key: typeof filterKey) {
        const filteredData = data.reduce((acc, currObj) => {
            const filterKeyValue = String(currObj[key]);

            acc[filterKeyValue] = !acc[filterKeyValue] ? 1 : ++acc[filterKeyValue];

            return acc;

        }, {} as Record<string, number>)

        return filteredData;
    }

    const filteredData = getFilterData(data, filterKey);

    let listItems = [];

    if (!showAll && Object.entries(filteredData).length > 3) {
        listItems = Object.entries(filteredData).slice(0, 3);
    } else {
        listItems = Object.entries(filteredData);
    }


    return (
        <div className="mt-3">
            <h1 className="my-5 font-semibold">{`Jobs By ${widgetTitle}`.toLocaleUpperCase()}</h1>

            {filteredData && listItems.map((item) => (
                <FilterItem name={item[0]} count={item[1]} key={item[0]} columnName={filterKey} />
            ))}
            {filteredData && Object.entries(filteredData).length > 3 && (
                <p className="cursor-pointer font-semibold text-primary" onClick={() => setShowAll(!showAll)}>
                    View {showAll ? 'Less' : 'More'}
                </p>
            )}

            <hr className="mx-auto my-6 h-0 w-full rounded-full border border-stone-200 px-1 text-center" />
        </div>
    );
}


