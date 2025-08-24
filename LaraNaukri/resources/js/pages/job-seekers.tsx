import CustomDropdownMenu from '@/components/ui/cards/CustomDropdownmenu';
import FeaturedCandidateCard from '@/components/ui/cards/FeaturedCandidateCard';
import SearchFilter from '@/components/ui/cards/SearchFilter';
import { Button } from '@/components/ui/UnusedUI/button';
import { Input } from '@/components/ui/UnusedUI/input';
import AppLayout from '@/layouts/app/app-layout';
import { Search, SearchCheckIcon } from 'lucide-react';

const JobsByTitle = [
    {
        id: 'job_title_0',
        name: 'UI/UX Designer',
        count: 1,
    },
    {
        id: 'job_title_1',
        name: 'IOS Developer',
        count: 1,
    },
    {
        id: 'job_title_2',
        name: 'Electrical Engineer',
        count: 1,
    },
    {
        id: 'job_title_3',
        name: 'PHP Developer Required',
        count: 2,
    },
    {
        id: 'job_title_4',
        name: 'Frontend Developer',
        count: 1,
    },
    {
        id: 'job_title_5',
        name: 'Senior Php Programer',
        count: 1,
    },
];

export default function JobSeekers() {
    return (
        <AppLayout page="">
            <header className="red flex items-center justify-center gap-7 bg-green-50 p-7">
                <h1 className="w-4/12 text-center font-montserrat text-2xl font-bold">Find Candidates</h1>
                <div className="flex w-6/12 gap-7 rounded-xl border border-primary">
                    <Input
                        className="h-12 w-6/12 border-0 selection:text-white focus-visible:ring-0"
                        id="search"
                        type="text"
                        name="search"
                        placeholder="Enter Skills or job sekkers details"
                    />
                    <CustomDropdownMenu triggertext="Select Functional Area" items={['Admin', 'Accountant', 'Developer']} />
                    <Button className="my-auto h-10 w-1/12">
                        <Search className="size-6 font-bold text-white" />
                    </Button>
                </div>
            </header>
            <section className="mx-auto my-7 flex size-10/12 gap-3 p-7">
                <div className="w-1/4 p-7">
                    <SearchFilter title="Jobs By Title" filterItems={JobsByTitle} />
                    <SearchFilter title="Jobs By Title" filterItems={JobsByTitle} />
                    <SearchFilter title="Jobs By Title" filterItems={JobsByTitle} />
                    <SearchFilter title="Jobs By Title" filterItems={JobsByTitle} />
                    <SearchFilter title="Jobs By Title" filterItems={JobsByTitle} />
                    <SearchFilter title="Jobs By Title" filterItems={JobsByTitle} />
                    <SearchFilter title="Jobs By Title" filterItems={JobsByTitle} />
                    <SearchFilter title="Jobs By Title" filterItems={JobsByTitle} />
                    <SearchFilter title="Jobs By Title" filterItems={JobsByTitle} />
                    <SearchFilter title="Jobs By Title" filterItems={JobsByTitle} />

                    <div className="flex cursor-pointer items-center justify-center gap-3 bg-primary px-3 py-3 text-lg font-semibold text-white">
                        <SearchCheckIcon />
                        <p className="">Search Job</p>
                    </div>
                </div>
                <div className="grid h-fit w-3/4 grid-cols-3 gap-7">
                    <FeaturedCandidateCard
                        id="1"
                        imageUrl="https://www.sharjeelanjum.com/demos/jobsportal-update/user_images/-1741437674-648.jpg"
                        location="asd"
                        name="asd"
                        profession="asd"
                    />
                    <FeaturedCandidateCard
                        id="1"
                        imageUrl="https://www.sharjeelanjum.com/demos/jobsportal-update/user_images/-1741437674-648.jpg"
                        location="asd"
                        name="asd"
                        profession="asd"
                    />
                    <FeaturedCandidateCard
                        id="1"
                        imageUrl="https://www.sharjeelanjum.com/demos/jobsportal-update/user_images/-1741437674-648.jpg"
                        location="asd"
                        name="asd"
                        profession="asd"
                    />
                    <FeaturedCandidateCard
                        id="1"
                        imageUrl="https://www.sharjeelanjum.com/demos/jobsportal-update/user_images/-1741437674-648.jpg"
                        location="asd"
                        name="asd"
                        profession="asd"
                    />
                    <FeaturedCandidateCard
                        id="1"
                        imageUrl="https://www.sharjeelanjum.com/demos/jobsportal-update/user_images/-1741437674-648.jpg"
                        location="asd"
                        name="asd"
                        profession="asd"
                    />
                </div>
            </section>
        </AppLayout>
    );
}
