import EmployerCard from '@/components/ui/cards/EmployerCard';
import AppCandidateLayout from '@/layouts/app/app-candidate-layout';
import { Company } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function MyFollowings() {
    const { companies } = usePage<{ companies: Company[] }>().props;

    return (
        <AppCandidateLayout displaySearch={false} page="my-followings" titleText="Followings">
            <Head title="Followings" />
            {companies.length > 0 ? (
                <section className="grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-3">
                    {companies.length > 0 &&
                        companies.map((company) => (
                            <EmployerCard
                                id={`${company.id}`}
                                imageUrl={company.image_path}
                                industry={company.industry.name}
                                location={company.location}
                                openJobCount={company.jobs.length}
                                slug={company.slug}
                                title={company.name}
                                key={company.id}
                            />
                        ))}
                </section>
            ) : (
                <div className="mt-3 text-center text-lg">😢 No Company or Employer Follows You</div>
            )}
        </AppCandidateLayout>
    );
}
