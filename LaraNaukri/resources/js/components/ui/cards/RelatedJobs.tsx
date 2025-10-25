import { FilteredJobs } from '@/types';
import { useEffect, useState } from 'react';
import FeaturedJobCard from './FeaturedJobCard';

export default function RelatedJobs({ categoryID }: { categoryID: string }) {
    const [relatedJobs, setRelatedJobs] = useState<FilteredJobs[] | null>(null);

    useEffect(() => {
        async function getRelatedJobs(categoryID: string) {
            const response = await fetch(
                route('related.jobs.api', {
                    categoryID,
                }),
            );

            const data = await response.json();

            setRelatedJobs(data.results);
        }

        getRelatedJobs(categoryID);
    }, [categoryID]);

    return (
        <>
            <h1 className="my-3 text-xl font-semibold">Related Jobs</h1>
            <div className="grid grid-cols-4 gap-4">
                {relatedJobs &&
                    relatedJobs.map((job) => (
                        <FeaturedJobCard
                            title={job.title}
                            type={job.type}
                            location={job.city.name}
                            postedDate={job.created_at}
                            companyName={job.companies!.name}
                            companyImageURL={job.companies!.image_path}
                            salary={job.salary_to}
                            featured={job.featured}
                            companyID={`${job.companies?.id}`}
                            JobID={job.id}
                            key={job.id}
                            jobSlug={job.slug}
                            companySlug={job.companies.slug}
                        />
                    ))}
            </div>
        </>
    );
}
