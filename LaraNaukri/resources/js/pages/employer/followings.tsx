import { Card } from '@/components/ui/card';
import FeaturedCandidateCard from '@/components/ui/cards/FeaturedCandidateCard';
import { Button } from '@/components/ui/UnusedUI/button';
import AppEmployerLayout from '@/layouts/app/app-employer-layout';
import { Candidate } from '@/types';
import { usePage } from '@inertiajs/react';

export default function Followings() {
    const { followers } = usePage<{ followers: Candidate[] }>().props;
    console.log(followers);

    return (
        <AppEmployerLayout displaySearch={false} page="followings" titleText="Company Followers">
            <h1 className="font-montserrat text-2xl font-bold">Company Followers</h1>
            {followers.length > 0 ? (
                <section className="grid grid-cols-3 gap-10">
                    {followers.map((follower) => (
                        <FeaturedCandidateCard
                            imageUrl={follower.image_path}
                            location={follower.country.name}
                            name={`${follower.first_name} ${follower.last_name}`}
                            profession={follower.profession}
                            featured={follower.is_featured ? true : false}
                            key={follower.id}
                            profileLink={route('userProfile', follower.user_id)}
                        />
                    ))}
                </section>
            ) : (
                <Card className="items-center justify-center gap-3 border-gray-200 bg-gray-200 p-7">
                    <p className="font-montserrat text-xl font-bold">No Followers Found. Please select Candidates</p>
                    <Button className="h-11 w-60 text-xl text-white">Search Candidates</Button>
                </Card>
            )}
        </AppEmployerLayout>
    );
}
