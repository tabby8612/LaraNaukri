import { SearchIcon } from 'lucide-react';

export default function Hero() {
    return (
        <section id="hero" className="mt-16 flex px-14 py-10">
            <div id="herotext" className="w-10/12 overflow-hidden">
                <h1 className="font-montserrat text-4xl font-semibold">Ready To Find Your Dream Job?</h1>
                <p className="mt-2 w-10/12 font-montserrat">
                    Take the next step in your career journey with LaraNaukri. Explore Opportunities that match your skills and passions, and land the
                    job you've always wanted!
                </p>
                <h2 className="mt-20 font-montserrat text-lg font-bold">Search Jobs</h2>
                <div id="jobsearch" className="border-primary flex w-11/12 items-center rounded-lg border-2 px-2">
                    <form className="flex gap-4">
                        <div className="group relative my-auto w-5/12">
                            <input
                                type="text"
                                name="jobtitle"
                                className="w-full px-2 py-3 outline-0 hover:outline-0"
                                placeholder="Enter Skill or Job Title"
                            />
                            <div className="absolute right-0 top-1/2 h-10 w-[1px] -translate-y-1/2 bg-gray-400 transition-opacity duration-300 group-focus-within:opacity-0" />
                        </div>

                        <select name="job categories" id="categories" className="w-5/12 px-4 outline-0 active:outline-0">
                            <option value="option1">Select Functional Area</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3 Option 3 Option 3 Option 4 Option 4</option>
                        </select>
                        <button className="bg-primary my-2 ml-4 rounded-r-lg px-4 py-3 text-white">{<SearchIcon />}</button>
                    </form>
                </div>
            </div>
            <div id="heroimage" className="">
                <img src="https://www.sharjeelanjum.com/demos/jobsportal-update/images/search-bg_1741804553.jpg" alt="search job" />
            </div>
        </section>
    );
}
