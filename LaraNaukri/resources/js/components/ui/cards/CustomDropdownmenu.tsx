import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../UnusedUI/dropdown-menu';

export default function CustomDropdownMenu({ triggertext, changeFn }: { triggertext: string; changeFn: (category: string) => void }) {
    const [categories, setCategories] = useState<string[] | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [trigger, setTrigger] = useState(triggertext);

    useEffect(() => {
        async function fetchCategories() {
            const url = route('all.categories.api');

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                const results = await response.json();

                console.log(results);

                const data = results.categories.map((category: { name: string }) => category.name);

                setCategories(data);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.error(error.message);
                }
            }
        }

        fetchCategories();
    }, []);

    return (
        <DropdownMenu onOpenChange={() => setIsOpen(!isOpen)}>
            <DropdownMenuTrigger className="my-auto h-full w-full focus-visible:outline-0">
                <div className="flex items-center justify-between">
                    <p>{trigger}</p>
                    <ChevronDown className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform delay-75 duration-100`} />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="-mt-2 bg-white py-3.5">
                <DropdownMenuItem
                    className={`transition-colors delay-75 duration-300 hover:bg-primary hover:text-white`}
                    onClick={() => setTrigger(triggertext)}
                >
                    {triggertext}
                </DropdownMenuItem>
                {categories &&
                    categories.map((item) => (
                        <DropdownMenuItem
                            className={`cursor-pointer transition-colors delay-75 duration-300 hover:bg-primary hover:text-white ${trigger == item && 'bg-primary text-white'}`}
                            key={item}
                            onClick={() => {
                                setTrigger(item);
                                changeFn(item);
                            }}
                        >
                            {item}
                        </DropdownMenuItem>
                    ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
