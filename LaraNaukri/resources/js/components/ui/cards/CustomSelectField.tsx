import { Label } from '@radix-ui/react-label';
import { InputHTMLAttributes, useEffect, useState } from 'react';

type Props = {
    label: string;
    name: string;
    fetchTable: string;
    selectedID?: number;
    items?: {
        name: string;
        id: number;
    }[];
};
export default function CustomSelectField({ label, name, items, fetchTable, selectedID, ...props }: InputHTMLAttributes<HTMLSelectElement> & Props) {
    const [fetchItems, setFetchItems] = useState(items ?? []);

    useEffect(() => {
        async function fetchData(column: string) {
            if (!items) {
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
