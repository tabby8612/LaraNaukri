import FeaturedCandidateCard from '@/components/ui/cards/FeaturedCandidateCard';
import AppEmployerLayout from '@/layouts/app/app-employer-layout';

export default function unlockedUsers() {
    return (
        <AppEmployerLayout displaySearch={false} page="unlockedUsers" titleText="Unlocked Seekers">
            <section className="grid grid-cols-3 gap-10">
                <FeaturedCandidateCard id="1" imageUrl="companies/default.png" location="USA" name="Tabish Sajwani" profession="IT" />
                <FeaturedCandidateCard id="1" imageUrl="companies/default.png" location="USA" name="Tabish Sajwani" profession="IT" />
                <FeaturedCandidateCard id="1" imageUrl="companies/default.png" location="USA" name="Tabish Sajwani" profession="IT" />
            </section>
        </AppEmployerLayout>
    );
}
