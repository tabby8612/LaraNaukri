import { FilteredJobs } from '@/types';
import FeaturedJobCard from '../ui/cards/FeaturedJobCard';



export default function JobSearchResults({ jobs }: { jobs: FilteredJobs[] | undefined }) {
    return (
        <div id="job-results" className="w-3/4">
            {
                jobs?.length ? (
                    <div>
                        <h1>{jobs.length} Jobs Found</h1>
                        <p>Showing Jobs: 1 - {jobs.length} Total {jobs.length}</p>
                    </div>
                ) : (
                    <div>
                        <h1>0 Jobs Found</h1>
                        <p>Showing Jobs: 0 jobs</p>
                    </div>
                )
            }


            <div className="my-7 grid grid-cols-3 gap-5">
                {jobs && jobs.map((job) => (
                    <FeaturedJobCard
                        key={job.id}
                        JobID={job.id}
                        companyName={job.companies!.name}
                        companyImageURL={job.companies!.image_path}
                        location={job.city.name}
                        postedDate={job.created_at}
                        title={job.title}
                        type={job.type}
                        featured={job.featured}
                        salary={job.salary_to}
                    />
                ))}
            </div>
        </div>
    );
}
