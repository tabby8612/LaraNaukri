import { router } from '@inertiajs/react';
import { SearchIcon } from 'lucide-react';
import { FormEvent, useRef, useState } from 'react';

type Search = {
    title: string;
    id: string;
};

export default function Searchjobhero({
    titleText = 'One million success stories. Start your today',
    displaySearch = true,
}: {
    titleText?: string;
    displaySearch?: boolean;
}) {
    const searchInputText = useRef<HTMLInputElement | null>(null);
    const [searches, setSearches] = useState<Search[] | null>(null);
    const [searchText, setSearchText] = useState<string>('');

    async function handleJobFind(text: string) {
        const url = route('find.jobs.api', {
            text: text,
        });

        const response = await fetch(url);
        const data = await response.json();

        setSearches(data.results);
    }

    function handleSearchForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.get(
            route('search.jobs', {
                title: searchText,
            }),
        );
    }

    return (
        <div className="flex flex-col items-center justify-center bg-green-50 py-10">
            <h1 className="font-montserrat text-3xl font-bold md:text-4xl">{titleText}</h1>
            {displaySearch && (
                <div id="jobsearch" className="mx-3 mt-2 flex w-11/12 items-center rounded-2xl border-2 border-primary bg-white px-2 md:w-6/12">
                    <form className="flex w-full justify-between gap-4 px-3" onSubmit={(e) => handleSearchForm(e)}>
                        <div className="group relative my-auto w-full">
                            <input
                                type="text"
                                name="title"
                                id="title"
                                ref={searchInputText}
                                value={searchText}
                                className="w-full px-2 py-3 outline-0 hover:outline-0"
                                placeholder="Enter Skill or Job Title"
                                onChange={(e) => {
                                    setSearchText(e.target.value);

                                    if (e.target.value.length > 1) {
                                        handleJobFind(e.target.value);
                                    } else {
                                        setSearches(null);
                                    }
                                }}
                            />
                            {searches && searches.length > 0 && (
                                <div className="absolute z-20 w-full rounded-lg border-2 border-stone-200 bg-white px-5 py-3 shadow-2xl">
                                    <ul>
                                        {searches.map((search) => (
                                            <li
                                                className="hoverEffect px-3 py-2"
                                                key={search.id}
                                                onClick={() => {
                                                    setSearchText(search.title);
                                                    setSearches(null);
                                                }}
                                            >
                                                {search.title}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <button className="my-2 ml-4 cursor-pointer rounded-lg bg-primary px-4 py-3 text-white">{<SearchIcon />}</button>
                    </form>
                </div>
            )}
        </div>
    );
}
