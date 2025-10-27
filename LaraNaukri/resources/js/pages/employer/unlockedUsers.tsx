import FeaturedCandidateCard from '@/components/ui/cards/FeaturedCandidateCard';
import AppEmployerLayout from '@/layouts/app/app-employer-layout';
import { Candidate } from '@/types';
import { usePage } from '@inertiajs/react';

export default function UnlockedUsers() {
    const { unlockedCandidates } = usePage<{ unlockedCandidates: Candidate[] }>().props;

    return (
        <AppEmployerLayout displaySearch={false} page="unlockedUsers" titleText="Unlocked Seekers">
            {unlockedCandidates.length > 0 ? (
                <section className="grid grid-cols-1 gap-10 md:grid-cols-3">
                    {unlockedCandidates.map((unlockedCandidate) => (
                        <FeaturedCandidateCard
                            imageUrl={unlockedCandidate.image_path}
                            location={unlockedCandidate.country.name}
                            name={`${unlockedCandidate.first_name} ${unlockedCandidate.last_name}`}
                            profession={unlockedCandidate.profession}
                            featured={unlockedCandidate.is_featured ? true : false}
                            key={unlockedCandidate.id}
                            id={unlockedCandidate.user_id}
                        />
                    ))}
                </section>
            ) : (
                <div className="my-3 bg-green-100 p-5 text-center text-lg">😭 No User Have Been Unlocked</div>
            )}
        </AppEmployerLayout>
    );
}
