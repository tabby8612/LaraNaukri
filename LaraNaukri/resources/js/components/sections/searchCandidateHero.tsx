import { router } from '@inertiajs/react';
import { SearchIcon } from 'lucide-react';
import { FormEvent, useRef } from 'react';

export default function SearchCandidateHero({
    titleText = 'Find Candidates',
    displaySearch = true,
}: {
    titleText?: string;
    displaySearch?: boolean;
}) {
    const searchInputText = useRef<HTMLInputElement | null>(null);

    function handleSearchForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (searchInputText.current?.value) {
            if (searchInputText.current?.value.length < 3) return;

            router.get(
                route('job.seekers', {
                    name: searchInputText.current?.value,
                }),
            );
        }
    }

    return (
        <div className="flex items-center justify-center gap-10 bg-green-50 py-10">
            <h1 className="font-montserrat text-4xl font-bold">{titleText}</h1>
            {displaySearch && (
                <div id="candidateSearch" className="mt-2 flex w-6/12 items-center rounded-2xl border-2 border-primary px-2">
                    <form className="flex w-full justify-between gap-4 px-3" onSubmit={(e) => handleSearchForm(e)}>
                        <div className="group relative my-auto w-full">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                ref={searchInputText}
                                className="w-full px-2 py-3 outline-0 hover:outline-0"
                                placeholder="Enter Seeker name"
                            />
                        </div>

                        <button className="my-2 ml-4 cursor-pointer rounded-lg bg-primary px-4 py-3 text-white">{<SearchIcon />}</button>
                    </form>
                </div>
            )}
        </div>
    );
}
