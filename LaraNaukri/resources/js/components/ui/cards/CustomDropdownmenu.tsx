import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../UnusedUI/dropdown-menu';

type DropdownMenuProps = {
    triggertext: string;
    items: string[];
};

export default function CustomDropdownMenu({ triggertext, items }: DropdownMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [trigger, setTrigger] = useState(triggertext);

    return (
        <DropdownMenu onOpenChange={() => setIsOpen(!isOpen)}>
            <DropdownMenuTrigger className="w-4/12 focus-visible:outline-0">
                <div className="flex items-center justify-between">
                    <p>{trigger}</p>
                    <ChevronDown className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform delay-75 duration-100`} />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="-mt-2 w-xs bg-white py-3.5">
                <DropdownMenuItem className="transition-colors delay-75 duration-300 hover:bg-primary hover:text-white">{trigger}</DropdownMenuItem>
                {items.map((item) => (
                    <DropdownMenuItem
                        className="cursor-pointer transition-colors delay-75 duration-300 hover:bg-primary hover:text-white"
                        key={item}
                        onClick={() => setTrigger(item)}
                    >
                        {item}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
