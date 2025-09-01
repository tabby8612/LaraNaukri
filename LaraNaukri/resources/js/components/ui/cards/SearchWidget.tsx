import { router } from '@inertiajs/react';
import { SearchIcon } from 'lucide-react';
import { FormEvent } from 'react';
import { Input } from '../UnusedUI/input';

export default function SearchWidget() {
    function searchHandler(e?: FormEvent<HTMLFormElement>) {
        e?.preventDefault();
        const searchEl = document.getElementById('search') as HTMLInputElement;
        const searchText = searchEl.value;
        console.log(searchText);

        router.get(
            route('blog', {
                search: searchText,
            }),
        );
    }

    return (
        <form className="relative mx-auto mt-10 w-10/12" onSubmit={(e) => searchHandler(e)}>
            <h1 className="text-lg font-semibold">Search</h1>
            <Input className="relative mt-2 h-10 pr-12 text-lg selection:text-white focus-visible:ring-primary" id="search" name="search" />
            <SearchIcon
                className="absolute top-11 right-4 cursor-pointer"
                onClick={(e) => {
                    e.preventDefault();
                    searchHandler();
                }}
            />
        </form>
    );
}
