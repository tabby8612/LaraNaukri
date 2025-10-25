import Searchjobhero from '@/components/sections/searchjobhero';
import { Card, CardContent } from '@/components/ui/card';
import ApplyJob from '@/components/ui/cards/ApplyJob';
import BenefitCard from '@/components/ui/cards/BenefitCard';
import CompanyOverviewCard from '@/components/ui/cards/CompanyOverviewCard';
import DescriptionCard from '@/components/ui/cards/DescriptionCard';
import JobIntroCard from '@/components/ui/cards/JobIntroCard';
import RelatedJobs from '@/components/ui/cards/RelatedJobs';
import SkillCard from '@/components/ui/cards/SkillCard';
import AppLayout from '@/layouts/app/app-layout';

import { Candidate, FilteredJobs } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Send } from 'lucide-react';

type SelectedJobProps = {
    selectedJob: FilteredJobs;
    candidate: Candidate;
    alreadyApplied: boolean;
    isFavorite: boolean;
};
export default function JobView() {
    const props = usePage<SelectedJobProps>().props;

    const { selectedJob, candidate, alreadyApplied, isFavorite } = props;

    return (
        <AppLayout page="jobs">
            <Head>
                <title>{selectedJob.title}</title>
                <meta name="description" content={selectedJob.description} />
            </Head>
            <Searchjobhero />

            <main className="mx-auto my-10 flex size-10/12 justify-between">
                <div>
                    <h1 className="font-montserrat text-xl font-semibold">{selectedJob.title}</h1>
                    <p className="mt-2 text-stone-400">Date Posted: {selectedJob.created_at}</p>
                    <p className="mt-2 font-semibold text-stone-500">
                        Monthly:{' '}
                        <span className="font-semibold text-black">
                            PKR {selectedJob.salary_from} - PKR {selectedJob.salary_to}
                        </span>
                    </p>
                </div>
                <div>
                    {candidate &&
                        (alreadyApplied ? (
                            <div className="flex cursor-no-drop items-center gap-2 rounded-xl bg-gray-300 px-10 py-4 font-semibold text-black">
                                <p>You've already applied for this job</p>
                            </div>
                        ) : (
                            <ApplyJob
                                trigger={
                                    <div className="flex cursor-pointer items-center gap-2 rounded-xl bg-primary px-10 py-4 text-lg font-semibold text-white">
                                        <Send fill="white" />
                                        <p>Apply Now</p>
                                    </div>
                                }
                                candidate={candidate}
                                job={selectedJob}
                            />
                        ))}
                </div>
            </main>

            <section className="mx-auto my-10 flex size-10/12 justify-between gap-7">
                <div className="w-7/12">
                    <JobIntroCard jobData={selectedJob} isFavorite={isFavorite} />

                    <DescriptionCard type="Job" description={selectedJob.description} />

                    <BenefitCard benefits={selectedJob.benefits} />

                    <SkillCard skills={selectedJob.skills.map((skill) => skill.name)} />
                </div>
                <div className="w-5/12">
                    <CompanyOverviewCard
                        companyID={`${selectedJob.companies!.id}`}
                        description={selectedJob.companies!.name}
                        imageURL={`/storage/${selectedJob.companies!.image_path}`}
                        location={selectedJob.location}
                        name={selectedJob.companies!.name}
                        openJobs={selectedJob.positions}
                        companySlug={selectedJob.companies.slug}
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
