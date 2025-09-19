import FeaturedJobCard from '@/components/ui/cards/FeaturedJobCard';
import AppCandidateLayout from '@/layouts/app/app-candidate-layout';
import { FilteredJobs } from '@/types';
import { router, usePage } from '@inertiajs/react';

export default function FavoriteJobs() {
    const { favoriteJobs } = usePage<{ favoriteJobs: FilteredJobs[] }>().props;
    console.log(favoriteJobs);
    function removeHandler(id: string) {
        router.post(route('candidate.toggleFavoriteJob', id));
    }

    return (
        <AppCandidateLayout page="my-favorite-jobs" titleText="Favorite Jobs" displaySearch={false}>
            <section className="grid grid-cols-2 gap-10">
                {favoriteJobs.length > 0 &&
                    favoriteJobs.map((favoriteJob) => (
                        <FeaturedJobCard
                            JobID={favoriteJob.id}
                            companyImageURL={favoriteJob.companies.image_path}
                            companyName={favoriteJob.companies.name}
                            companySlug={favoriteJob.companies.slug}
                            featured={favoriteJob.featured}
                            location={favoriteJob.location}
                            postedDate={favoriteJob.created_at}
                            salary={favoriteJob.salary_from}
                            title={favoriteJob.title}
                            type={favoriteJob.type}
                            companyID={`${favoriteJob.companies.id}`}
                            removeFavoriteFn={removeHandler}
                            key={favoriteJob.id}
                        />
                    ))}
            </section>
        </AppCandidateLayout>
    );
}
