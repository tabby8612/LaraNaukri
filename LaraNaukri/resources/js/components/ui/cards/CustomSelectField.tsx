import { Label } from '@radix-ui/react-label';
import { InputHTMLAttributes, useEffect, useState } from 'react';

type Props = {
    label: string;
    name: string;
    fetchTable: string;
    selectedID?: number;
    onChangeFn: (column: string, val: string) => void;
    items?: {
        name: string;
        id: number;
    }[];
};
export default function CustomSelectField({
    label,
    name,
    items,
    fetchTable,
    selectedID,
    onChangeFn,
    ...props
}: InputHTMLAttributes<HTMLSelectElement> & Props) {
    const [fetchItems, setFetchItems] = useState(items ?? []);

    useEffect(() => {
        async function fetchData(column: string) {
            if (fetchItems.length === 0) {
                const response = await fetch(route('fetch', { column }));

                const data = await response.json();

                setFetchItems(data);
            }
        }

        fetchData(fetchTable);
    }, []);

    return (
        <div className="w-full">
            <Label htmlFor={name} className="tracking-wider text-gray-500">
                {label}
            </Label>
            <select
                name={name}
                id={name}
                className="h-10 w-full rounded border-2 border-gray-300 bg-white focus-visible:outline-2 focus-visible:outline-primary"
                onChange={(e) => onChangeFn(name, e.target.value)}
                {...props}
            >
                {fetchItems.length > 0 &&
                    fetchItems.map((item) => (
                        <option value={item.id} className="hover:bg-primary hover:text-white" key={item.id} selected={item.id === selectedID}>
                            {item.name}
                        </option>
                    ))}
            </select>
        </div>
    );
}
