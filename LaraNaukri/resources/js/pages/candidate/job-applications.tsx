import FeaturedJobCard from '@/components/ui/cards/FeaturedJobCard';
import AppCandidateLayout from '@/layouts/app/app-candidate-layout';

export default function JobApplications() {
    return (
        <AppCandidateLayout displaySearch={false} page="my-job-application" titleText="My Job Application">
            <section className="">
                <h1 className="font-montserrat text-2xl font-bold">Applied Jobs</h1>
                <div className="mt-10">
                    <div className="my-5">
                        <FeaturedJobCard
                            JobID="1"
                            companyImageURL="https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/power-color-1536854682-955.jpg"
                            companyName="Power Color"
                            companySlug="power-color-5"
                            featured={true}
                            location="Islamabad"
                            postedDate="26th May"
                            salary={5000}
                            title="UI/UX Designer"
                            type="First Shift"
                            companyID="5"
                        />
                    </div>
                    <div className="my-5">
                        <FeaturedJobCard
                            JobID="1"
                            companyImageURL="https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/power-color-1536854682-955.jpg"
                            companyName="Power Color"
                            companySlug="power-color-5"
                            featured={true}
                            location="Islamabad"
                            postedDate="26th May"
                            salary={5000}
                            title="UI/UX Designer"
                            type="First Shift"
                            companyID="5"
                        />
                    </div>
                    <div className="my-5">
                        <FeaturedJobCard
                            JobID="1"
                            companyImageURL="https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/power-color-1536854682-955.jpg"
                            companyName="Power Color"
                            companySlug="power-color-5"
                            featured={true}
                            location="Islamabad"
                            postedDate="26th May"
                            salary={5000}
                            title="UI/UX Designer"
                            type="First Shift"
                            companyID="5"
                        />
                    </div>
                </div>
            </section>
        </AppCandidateLayout>
    );
}
