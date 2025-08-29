import Searchjobhero from '@/components/sections/searchjobhero';
import { Card, CardContent } from '@/components/ui/card';
import BenefitCard from '@/components/ui/cards/BenefitCard';
import CompanyOverviewCard from '@/components/ui/cards/CompanyOverviewCard';
import DescriptionCard from '@/components/ui/cards/DescriptionCard';
import JobIntroCard from '@/components/ui/cards/JobIntroCard';
import RelatedJobs from '@/components/ui/cards/RelatedJobs';
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

    console.log(selectedJob);

    return (
        <AppLayout page="jobs">
            <Searchjobhero />

            <main className="mx-auto my-10 flex size-10/12 justify-between">
                <div>
                    <h1 className="font-montserrat text-xl font-semibold">{selectedJob.title}</h1>
                    <p className="mt-2 text-stone-400">Date Posted: {selectedJob.created_at}</p>
                    <p className="mt-2 font-semibold text-stone-500">
                        Monthly: <span className="font-semibold text-black">PKR {selectedJob.salary_from} - PKR {selectedJob.salary_to}</span>
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
                        description={selectedJob.description}
                    />

                    <BenefitCard benefits={['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4', 'Benefit 5']} />

                    <SkillCard skills={['PHP', 'Laravel', 'Javascript']} />
                </div>
                <div className="w-5/12">
                    <CompanyOverviewCard
                        companyID={selectedJob.companies!.id}
                        description={selectedJob.companies!.name}
                        imageURL={`/storage/${selectedJob.companies!.image_path}`}
                        location={"company location"}
                        name={selectedJob.companies!.name}
                        openJobs={selectedJob.positions}
                    />
                    <Card className="my-7 border border-stone-200">
                        <CardContent>Map Goes Here</CardContent>
                    </Card>
                </div>
            </section>
            <div className="mx-auto my-7 w-10/12">
                <RelatedJobs categoryID={selectedJob.category_id} />
            </div>
        </AppLayout>
    );
}
