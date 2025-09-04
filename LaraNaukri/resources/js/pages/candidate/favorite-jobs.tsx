import FeaturedJobCard from '@/components/ui/cards/FeaturedJobCard';
import AppCandidateLayout from '@/layouts/app/app-candidate-layout';

export default function FavoriteJobs() {
    function removeHandler(id: string) {
        console.log(id);
    }

    return (
        <AppCandidateLayout page="my-favorite-jobs" titleText="Favorite Jobs" displaySearch={false}>
            <section className="grid grid-cols-2 gap-10">
                <FeaturedJobCard
                    JobID="1"
                    companyImageURL="https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/multimedia-design-1614272292-782.jpg"
                    companyName="Multimedia Design"
                    companySlug="multimedia-design/1"
                    featured={true}
                    location="Fairbanks"
                    postedDate="Mar 07, 2025"
                    salary={3000}
                    title="UI UX Designer Required"
                    type="Full Time/Permanent"
                    companyID="1"
                    removeFavoriteFn={removeHandler}
                />
                <FeaturedJobCard
                    JobID="2"
                    companyImageURL="https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/multimedia-design-1614272292-782.jpg"
                    companyName="Multimedia Design"
                    companySlug="multimedia-design/1"
                    featured={true}
                    location="Fairbanks"
                    postedDate="Mar 07, 2025"
                    salary={3000}
                    title="UI UX Designer Required"
                    type="Full Time/Permanent"
                    companyID="1"
                    removeFavoriteFn={removeHandler}
                />
            </section>
        </AppCandidateLayout>
    );
}
