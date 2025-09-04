import EmployerCard from '@/components/ui/cards/EmployerCard';
import AppCandidateLayout from '@/layouts/app/app-candidate-layout';

export default function MyFollowings() {
    return (
        <AppCandidateLayout displaySearch={false} page="my-followings" titleText="Followings">
            <section className="grid grid-cols-3 gap-x-5 gap-y-5">
                <EmployerCard
                    id="1"
                    imageUrl="https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/power-color-1536854682-955.jpg"
                    industry="Fashion"
                    location="Albany"
                    openJobCount={1}
                    slug="power-color-1"
                    title="Power Color"
                />
                <EmployerCard
                    id="1"
                    imageUrl="https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/power-color-1536854682-955.jpg"
                    industry="Fashion"
                    location="Albany"
                    openJobCount={1}
                    slug="power-color-1"
                    title="Power Color"
                />
                <EmployerCard
                    id="1"
                    imageUrl="https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/power-color-1536854682-955.jpg"
                    industry="Fashion"
                    location="Albany"
                    openJobCount={1}
                    slug="power-color-1"
                    title="Power Color"
                />
                <EmployerCard
                    id="1"
                    imageUrl="https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/power-color-1536854682-955.jpg"
                    industry="Fashion"
                    location="Albany"
                    openJobCount={1}
                    slug="power-color-1"
                    title="Power Color"
                />
            </section>
        </AppCandidateLayout>
    );
}
