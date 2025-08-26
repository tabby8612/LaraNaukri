import { Job } from '@/types';
import Latestjobcard from '../ui/cards/latestjobcard';

type LatestJobProps = {
    jobs: Job[];
};

export default function Latestjobs({ jobs }: LatestJobProps) {
    return (
        <section id="latestJobs" className="px-14 py-10">
            <h1 className="my-7 text-center font-montserrat text-4xl font-semibold">Latest Jobs</h1>
            <div className="grid grid-cols-3 gap-10">
                {jobs.map((job) => (
                    <Latestjobcard
                        imageUrl={job.companyImageURL}
                        title={job.title}
                        company={job.companyName}
                        type={job.type}
                        key={job.JobID}
                        city={job.location}
                        id={job.JobID}
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
