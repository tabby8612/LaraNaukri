import { FilteredJobs } from '@/types';
import Latestjobcard from '../ui/cards/latestjobcard';

type LatestJobProps = {
    jobs: FilteredJobs[];
};

export default function Latestjobs({ jobs }: LatestJobProps) {
    return (
        <section id="latestJobs" className="px-14 py-10">
            <h1 className="my-7 text-center font-montserrat text-4xl font-semibold">Latest Jobs</h1>
            <div className="grid gap-10 md:grid-cols-3">
                {jobs.slice(0, 8).map((job) => (
                    <Latestjobcard
                        imageUrl={job.companies.image_path}
                        title={job.title}
                        company={job.companies.name}
                        type={job.type}
                        key={job.id}
                        city={job.location}
                        id={job.id}
                        slug={job.slug}
                        companySlug={job.companies.slug!}
                    />
                ))}
            </div>
            <div className="my-10 flex justify-center">
                <a
                    href={route('search.jobs')}
                    className="rounded-lg bg-primary px-5 py-3 text-center font-sans text-xl font-semibold tracking-wider text-white transition-colors duration-500 hover:bg-black"
                >
                    View All Latest Jobs
                </a>
            </div>
        </section>
    );
}
