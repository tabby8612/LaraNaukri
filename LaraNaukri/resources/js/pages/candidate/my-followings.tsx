import EmployerCard from '@/components/ui/cards/EmployerCard';
import AppCandidateLayout from '@/layouts/app/app-candidate-layout';
import { Company } from '@/types';
import { usePage } from '@inertiajs/react';

export default function MyFollowings() {
    const { companies } = usePage<{ companies: Company[] }>().props;

    console.log(companies);

    return (
        <AppCandidateLayout displaySearch={false} page="my-followings" titleText="Followings">
            <section className="grid grid-cols-3 gap-x-5 gap-y-5">
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
        </AppCandidateLayout>
    );
}
