import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronDownCircle } from 'lucide-react';
import { useState } from 'react';
import { Label } from '../UnusedUI/label';

export default function CustomCombobox({ items, selectedText, name, label }: { items: string[]; selectedText: string; name: string; label: string }) {
    const [selectedPerson, setSelectedPerson] = useState(selectedText);

    return (
        <div className="size-full">
            <Label htmlFor={label} className="tracking-wider text-gray-500">
                {label[0].toUpperCase() + label.slice(1)}
            </Label>
            <Combobox value={selectedPerson} onChange={(value: string) => setSelectedPerson(value)}>
                <div className="relative">
                    <ComboboxInput
                        aria-label="Assignee"
                        id={name}
                        name={name}
                        className="w-full rounded-lg border border-black bg-white py-1.5 pr-8 pl-3 text-sm/6 text-black focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
                    />
                    <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                        <ChevronDownCircle className="size-4 fill-white/60 group-data-hover:fill-white" />
                    </ComboboxButton>
                </div>
                <ComboboxOptions
                    anchor="bottom"
                    transition
                    className="w-(--input-width) rounded-xl border border-black bg-white p-1 text-black transition duration-100 ease-in [--anchor-gap:--spacing(1)] empty:invisible data-leave:data-closed:opacity-0"
                >
                    {items.map((item) => (
                        <ComboboxOption
                            value={item}
                            className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10"
                        >
                            <CheckIcon className="invisible size-4 fill-white group-data-selected:visible" />
                            <div className="text-sm/6 text-black">{item}</div>
                        </ComboboxOption>
                    ))}
                </ComboboxOptions>
            </Combobox>
        </div>
    );
}
