import { CandidateGroup } from '@/types';
import { useState } from 'react';
import GroupFilterItem from './GroupFilterItem';

type FilterProps = {
    widgetTitle: string;
    data: CandidateGroup[];
    onChangeFn: (val: string) => void;
};

export default function CandidateSearchFilter({ widgetTitle, data, onChangeFn }: FilterProps) {
    const [showAll, setShowAll] = useState(false);

    let listItems = [];

    if (!showAll && data.length > 3) {
        listItems = data.slice(0, 3);
    } else {
        listItems = data;
    }

    function handleChange(val: string) {
        onChangeFn(val);
    }

    return (
        <div className="mt-3">
            <h1 className="my-5 font-semibold">{`Candidates By ${widgetTitle}`.toLocaleUpperCase()}</h1>

            {data &&
                listItems.map((item) => (
                    <GroupFilterItem
                        columnName="country_id"
                        count={item.candidate_count}
                        id={item.id}
                        name={item.name}
                        onChangeFn={() => handleChange(item.id)}
                        key={item.id}
                    />
                ))}
            {data && data.length > 3 && (
                <p className="cursor-pointer font-semibold text-primary" onClick={() => setShowAll(!showAll)}>
                    View {showAll ? 'Less' : 'More'}
                </p>
            )}

            <hr className="mx-auto my-6 h-0 w-full rounded-full border border-stone-200 px-1 text-center" />
        </div>
    );
}
