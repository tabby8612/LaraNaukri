import { useState } from 'react';
import { Checkbox } from '../UnusedUI/checkbox';

type filterItemProps = {
    name: string;
    count: number;
    columnName: string
};

export default function FilterItem({ name, count, columnName }: filterItemProps) {
    const [checkedItems, setCheckedItems] = useState<string[]>([]);

    function handleCheck(name: string) {
        if (!checkedItems.includes(name)) {
            setCheckedItems(prevItems => [...prevItems, name]);
        } else {
            setCheckedItems(checkedItems.filter(item => item !== name));
        }
    }

    return (
        <div className="my-2 flex justify-between">
            <div className="flex items-center gap-3">
                {/* <input type="checkbox" name='job_title[]' id='job_title_0' value={name} /> */}
                <Checkbox id={name} name={name} value={name} onCheckedChange={() => handleCheck(name)} data-filter={columnName} />
                <label htmlFor={name}>{name}</label>
            </div>
            <p>{count}</p>
        </div>
    );
}
