import JobSearchResults from '@/components/sections/job-search-results';
import Searchjobhero from '@/components/sections/searchjobhero';
import { Checkbox } from '@/components/ui/UnusedUI/checkbox';
import AppLayout from '@/layouts/app/app-layout';
import { DocumentText } from '@/SVGs/Document';

export default function SearchJobs() {
    return (
        <AppLayout>
            <Searchjobhero />
            <section className="mx-auto flex w-[95%] p-10">
                <div id="search-filters" className="mr-6 w-1/4">
                    <div className="flex cursor-pointer items-center gap-3 rounded-lg bg-primary px-3 py-3 text-lg font-semibold text-white">
                        <DocumentText />
                        <p className="">Upload Your Document</p>
                    </div>

                    <div className="mt-3">
                        <h1>Jobs By Title</h1>

                        <div className="flex justify-between">
                            <div className="flex gap-3">
                                <Checkbox>Hi</Checkbox>
                                <input type="checkbox" name="job_title[]" id="job_title_0" value="UI/UX Designer" />
                                <label htmlFor="job_title_0">UI/UX Designer</label>
                            </div>
                        </div>
                    </div>
                </div>
                <JobSearchResults />
            </section>
        </AppLayout>
    );
}
