import { Job } from '@/types';
import FeaturedJobCard from '../ui/cards/FeaturedJobCard';

export default function FeaturedJobsSection({ jobs }: { jobs: Job[] }) {
    return (
        <section id="featuredJobsSection" className="px-14 py-10">
            <h1 className="my-7 text-center font-montserrat text-4xl font-semibold">Featured Jobs</h1>

            <div className="grid grid-cols-4 gap-6">
                {jobs.map((job) => (
                    <FeaturedJobCard
                        title={job.title}
                        companyImageURL={job.companyImageURL}
                        companyName={job.companyName}
                        location={job.location}
                        postedDate={job.postedDate}
                        type={job.type}
                        key={job.JobID}
                    />
                ))}
            </div>

            <div className="my-10 flex justify-center">
                <a
                    href={route('search.jobs', {
                        is_featured: 1,
                    })}
                    className="cursor-pointer rounded-lg bg-primary px-5 py-3 text-center font-sans text-xl font-semibold tracking-wider text-white transition-colors duration-500 hover:bg-black"
                >
                    View All Featured Jobs
                </a>
            </div>
        </section>
    );
}
