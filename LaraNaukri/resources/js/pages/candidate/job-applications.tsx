import FeaturedJobCard from '@/components/ui/cards/FeaturedJobCard';
import AppCandidateLayout from '@/layouts/app/app-candidate-layout';
import { Application } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function JobApplications() {
    const { applications } = usePage<{ applications: Application[] }>().props;

    return (
        <AppCandidateLayout displaySearch={false} page="my-job-application" titleText="My Job Application">
            <Head title="Job Applications" />
            <section className="">
                <h1 className="font-montserrat text-2xl font-bold">Applied Jobs</h1>
                <div className="mt-10">
                    {applications.length > 0 ? (
                        applications.map((application) => (
                            <div className="my-5" key={application.id}>
                                <FeaturedJobCard
                                    JobID={application.job.id}
                                    companyImageURL={application.job.companies.image_path}
                                    companyName={application.job.companies.name}
                                    companySlug={application.job.companies.slug}
                                    featured={application.job.featured}
                                    location={application.job.location}
                                    postedDate={application.job.created_at}
                                    salary={application.job.salary_from}
                                    title={application.job.title}
                                    type={application.job.type}
                                    companyID={`${application.job.companies.id}`}
                                />
                            </div>
                        ))
                    ) : (
                        <p>You have not applied for any job 😞</p>
                    )}
                </div>
            </section>
        </AppCandidateLayout>
    );
}
