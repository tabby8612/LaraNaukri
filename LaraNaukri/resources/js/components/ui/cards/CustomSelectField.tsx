import { cn } from '@/lib/utils';
import { Item } from '@/types';
import { Label } from '@radix-ui/react-label';
import { InputHTMLAttributes, useEffect, useState } from 'react';

type Props = {
    label: string;
    name: string;
    fetchTable: string;
    isrequired?: boolean;
    items?: Item[];
    className?: string;
    showLabel?: boolean;
};
export default function CustomSelectField({
    label,
    name,
    items,
    fetchTable,
    isrequired = false,
    className,
    showLabel = true,
    ...props
}: InputHTMLAttributes<HTMLSelectElement> & Props) {
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
            {showLabel && (
                <Label
                    htmlFor={name}
                    className={`tracking-wider text-gray-500 ${isrequired && "after:ml-0.5 after:text-red-500 after:content-['*']"} `}
                >
                    {label}
                </Label>
            )}

            <select
                name={name}
                id={name}
                required={isrequired}
                className={cn(
                    'h-10 w-full rounded border-2 border-gray-300 bg-white focus-visible:outline-2 focus-visible:outline-primary',
                    className,
                )}
                {...props}
            >
                <option value="0">Select {label}</option>
                {fetchItems.length > 0 &&
                    fetchItems.map((item) => (
                        <option value={item.id} className="hover:bg-primary hover:text-white" key={item.id}>
                            {item.name}
                        </option>
                    ))}
            </select>
        </div>
    );
}
