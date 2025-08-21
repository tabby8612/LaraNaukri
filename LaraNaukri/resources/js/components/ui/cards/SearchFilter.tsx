import { useState } from 'react';
import FilterItem from './FilterItem';

type filterItem = {
    id: string;
    name: string;
    count: number;
};

type FilterProps = {
    title: string;
    filterItems: filterItem[];
};

export default function SearchFilter({ title, filterItems }: FilterProps) {
    const [showAll, setShowAll] = useState(false);

    let limitItems = [];

    if (!showAll && filterItems.length > 3) {
        limitItems = filterItems.slice(0, 3);
    } else {
        limitItems = filterItems;
    }
    return (
        <div className="mt-3">
            <h1 className="my-5 font-semibold">{title}</h1>

            {limitItems.map((item) => (
                <FilterItem id={item.id} name={item.name} count={item.count} key={item.id} />
            ))}
            {filterItems.length > 3 && (
                <p className="cursor-pointer font-semibold text-primary" onClick={() => setShowAll(!showAll)}>
                    View {showAll ? 'Less' : 'More'}
                </p>
            )}

            <hr className="mx-auto my-6 h-0 w-full rounded-full border border-stone-200 px-1 text-center" />
        </div>
    );
}
