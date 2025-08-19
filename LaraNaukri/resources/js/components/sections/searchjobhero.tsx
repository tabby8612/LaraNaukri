import { SearchIcon } from 'lucide-react';

export default function Searchjobhero() {
    return (
        <div className="flex flex-col items-center justify-center bg-green-50 py-10">
            <h1 className="font-montserrat text-2xl font-semibold">One million success stories. Start your today</h1>
            <div id="jobsearch" className="mt-2 flex w-6/12 items-center rounded-2xl border-2 border-primary px-2">
                <form className="flex w-full justify-between gap-4 px-3">
                    <div className="group relative my-auto w-full">
                        <input
                            type="text"
                            name="jobtitle"
                            className="w-full px-2 py-3 outline-0 hover:outline-0"
                            placeholder="Enter Skill or Job Title"
                        />
                    </div>

                    <button className="my-2 ml-4 rounded-lg bg-primary px-4 py-3 text-white">{<SearchIcon />}</button>
                </form>
            </div>
        </div>
    );
}
