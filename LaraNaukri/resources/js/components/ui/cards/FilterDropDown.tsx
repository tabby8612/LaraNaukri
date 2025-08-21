import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../UnusedUI/dropdown-menu';

type FilterProps = {
    type: string;
    items: string[];
};

export default function FilterDropDown({ items, type }: FilterProps) {
    const [selectedCountry, setSelectedCountry] = useState('Select Country');

    return (
        <div className="flex flex-col gap-2">
            <p className="mt-3 font-semibold">{type}</p>
            <DropdownMenu>
                <DropdownMenuTrigger className="relative flex w-full justify-between rounded-lg border-2 border-stone-200 bg-white px-2 py-2 text-left">
                    <p>{selectedCountry}</p>
                    <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-2xs translate-y-[-5px] bg-white">
                    {items.map((item, index) => (
                        <DropdownMenuItem className="hover:bg-primary/10" onClick={() => setSelectedCountry(item)} key={index}>
                            {item}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
