import { router } from '@inertiajs/react';
import { SearchIcon } from 'lucide-react';
import { FormEvent, useRef, useState } from 'react';
import CustomDropdownMenu from '../ui/cards/CustomDropdownmenu';
import HeroImg from '/public/storage/HeroImage.jpg';

type Search = {
    title: string;
    id: string;
};
export default function Hero() {
    const searchInputText = useRef<HTMLInputElement | null>(null);
    const [searches, setSearches] = useState<Search[] | null>(null);
    const [searchText, setSearchText] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState('');

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
                category: selectedCategory,
            }),
        );
    }

    function handleCategory(categoryID: string) {
        setSelectedCategory(categoryID);
    }

    return (
        <section id="hero" className="mt-16 px-14 py-10 md:flex">
            <div id="herotext" className="md:w-10/12">
                <h1 className="font-montserrat text-2xl font-semibold md:text-4xl">Ready To Find Your Dream Job?</h1>
                <p className="mt-2 hidden font-montserrat md:block md:w-10/12">
                    Take the next step in your career journey with LaraNaukri. Explore Opportunities that match your skills and passions, and land the
                    job you've always wanted!
                </p>
                <h2 className="mt-5 w-full font-montserrat text-lg font-bold md:mt-20">Search Jobs</h2>
                <div id="jobsearch" className="flex items-center justify-between rounded-lg border-2 border-primary md:w-[94%]">
                    <form className="flex w-full gap-4" autoComplete="off" onSubmit={(e) => handleSearchForm(e)}>
                        <div className="group relative my-auto w-full md:w-6/12">
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className="w-11/12 px-2 py-3 outline-0 hover:outline-0"
                                ref={searchInputText}
                                value={searchText}
                                placeholder="Enter skills or job title"
                                onChange={(e) => {
                                    setSearchText(e.target.value);

                                    if (e.target.value.length > 1) {
                                        handleJobFind(e.target.value);
                                    } else {
                                        setSearches(null);
                                    }
                                }}
                            />
                            <div className="absolute top-1/2 right-0 h-10 w-0 -translate-y-1/2 bg-gray-400 transition-opacity duration-300 group-focus-within:opacity-0 md:w-[1px]" />
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
                        <div className="hidden w-0 md:block md:w-5/12">
                            <CustomDropdownMenu triggertext="Select Functional Area" changeFn={handleCategory} />
                        </div>

                        <button className="mx-2 my-2 cursor-pointer self-end rounded-r-lg bg-primary px-4 py-3 text-white">{<SearchIcon />}</button>
                    </form>
                </div>
            </div>
            <div id="heroimage" className="">
                <img src={HeroImg} alt="search job" />
            </div>
        </section>
    );
}
