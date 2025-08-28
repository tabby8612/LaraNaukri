import Searchjobhero from '@/components/sections/searchjobhero';
import { Card, CardContent } from '@/components/ui/card';
import BenefitCard from '@/components/ui/cards/BenefitCard';
import CompanyOverviewCard from '@/components/ui/cards/CompanyOverviewCard';
import DescriptionCard from '@/components/ui/cards/DescriptionCard';
import FeaturedJobCard from '@/components/ui/cards/FeaturedJobCard';
import JobIntroCard from '@/components/ui/cards/JobIntroCard';
import SkillCard from '@/components/ui/cards/SkillCard';
import { Button } from '@/components/ui/UnusedUI/button';
import AppLayout from '@/layouts/app/app-layout';
import { FilteredJobs } from '@/types';
import { usePage } from '@inertiajs/react';
import { Send } from 'lucide-react';

type SelectedJobProps = {
    selectedJob: FilteredJobs;
}
export default function JobView() {
    const props = usePage<SelectedJobProps>().props;
    const { selectedJob } = props

    return (
        <AppLayout page="jobs">
            <Searchjobhero />

            <main className="mx-auto my-10 flex size-10/12 justify-between">
                <div>
                    <h1 className="font-montserrat text-xl font-semibold">{selectedJob.title}</h1>
                    <p className="mt-2 text-stone-400">Date Posted: {selectedJob.created_at}</p>
                    <p className="mt-2 font-semibold text-stone-500">
                        Monthly: <span className="font-semibold text-black">USD {selectedJob.salary_from} - USD {selectedJob.salary_to}</span>
                    </p>
                </div>
                <div>
                    <Button className="cursor-pointer rounded-xl bg-primary px-10 py-7 text-lg font-semibold text-white">
                        <div className="flex items-center gap-2">
                            <Send fill="white" />
                            <p>Apply Now</p>
                        </div>
                    </Button>
                </div>
            </main>

            <section className="mx-auto my-10 flex size-10/12 justify-between gap-7">
                <div className="w-7/12">
                    <JobIntroCard jobData={selectedJob} />

                    <DescriptionCard
                        type="Job"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia numquam delectus, corrupti inventore sapiente esse modi maxime ea sed magnam debitis nostrum illo necessitatibus eum cupiditate ipsam illum aut porro accusamus eligendi ipsum unde similique. Recusandae nam voluptates aliquam esse aut dolore, reprehenderit quasi? Nulla ipsam consequuntur facere tempore debitis, excepturi soluta praesentium aliquid fugit nobis qui saepe ea! Magnam, maiores expedita sequi ad quod dolorum adipisci ratione dolorem rem? Nulla deserunt quia enim perferendis dolorum magni ipsam nemo, vel voluptatum unde architecto omnis ea dicta aperiam animi dolor odio, temporibus explicabo, provident possimus veritatis odit reprehenderit? Exercitationem consectetur magni, eligendi dolores, ab unde asperiores non voluptatum adipisci, ex officiis repudiandae. Molestias ut aut explicabo sed tempore consequatur consectetur aspernatur doloribus, recusandae maiores dolorum provident unde adipisci facere voluptates quo nobis laboriosam magnam ipsum temporibus nisi ullam nam qui. Esse quasi qui aspernatur velit eius assumenda itaque fugit, ipsum totam."
                    />

                    <BenefitCard benefits={['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4', 'Benefit 5']} />

                    <SkillCard skills={['PHP', 'Laravel', 'Javascript']} />
                </div>
                <div className="w-5/12">
                    <CompanyOverviewCard
                        companyID="1"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ab?"
                        imageURL="https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/connect-people-1536859166-614.jpg"
                        location="Corning, Arkansas, United States of America"
                        name="Connect People"
                        openJobs={2}
                    />
                    <Card className="my-7 border border-stone-200">
                        <CardContent>Map Goes Here</CardContent>
                    </Card>
                </div>
            </section>
            <div className="mx-auto my-7 w-10/12">
                <h1 className="my-3 text-xl font-semibold">Related Jobs</h1>
                <div className="grid grid-cols-4 gap-4">
                    <FeaturedJobCard
                        companyImageURL="https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/connect-people-1536859166-614.jpg"
                        companyName="Connect People"
                        location="Islamabad"
                        title="UI/UX Designer"
                        type="Full Time/Parament"
                        postedDate="22-Aug-25"
                    />
                    <FeaturedJobCard
                        companyImageURL="https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/connect-people-1536859166-614.jpg"
                        companyName="Connect People"
                        location="Islamabad"
                        title="UI/UX Designer"
                        type="Full Time/Parament"
                        postedDate="22-Aug-25"
                    />
                </div>
            </div>
        </AppLayout>
    );
}
