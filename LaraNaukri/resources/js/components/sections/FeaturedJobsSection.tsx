import FeaturedJobCard from '../ui/cards/FeaturedJobCard';

const FeaturedJobs = [
    {
        id: 1,
        title: 'Full Stack Designer',
        type: 'Full Time/Permanent',
        location: 'Barrington',
        postedDate: 'Mar 07, 2025',
        companyName: 'Connect People',
        companyImageURL: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/connect-people-1536859166-614.jpg',
    },
    {
        id: 2,
        title: 'Dot Developer',
        type: 'Contract',
        location: 'Durant',
        postedDate: 'Mar 07, 2025',
        companyName: 'Power Wave',
        companyImageURL: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/power-wave-1536854843-603.jpg',
    },
    {
        id: 3,
        title: 'Full Stack Designer',
        type: 'Full Time/Permanent',
        location: 'Barrington',
        postedDate: 'Mar 07, 2025',
        companyName: 'Connect People',
        companyImageURL: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/connect-people-1536859166-614.jpg',
    },
    {
        id: 4,
        title: 'Full Stack Designer',
        type: 'Full Time/Permanent',
        location: 'Barrington',
        postedDate: 'Mar 07, 2025',
        companyName: 'Connect People',
        companyImageURL: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/connect-people-1536859166-614.jpg',
    },
    {
        id: 5,
        title: 'Full Stack Designer',
        type: 'Full Time/Permanent',
        location: 'Barrington',
        postedDate: 'Mar 07, 2025',
        companyName: 'Connect People',
        companyImageURL: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/connect-people-1536859166-614.jpg',
    },
];

export default function FeaturedJobsSection() {
    return (
        <section id="featuredJobsSection" className="px-14 py-10">
            <h1 className="my-7 text-center font-montserrat text-4xl font-semibold">Featured Jobs</h1>

            <div className="grid grid-cols-4 gap-6">
                {FeaturedJobs.map((job) => (
                    <FeaturedJobCard
                        title={job.title}
                        companyImageURL={job.companyImageURL}
                        companyName={job.companyName}
                        location={job.location}
                        postedDate={job.postedDate}
                        type={job.type}
                        key={job.id}
                    />
                ))}
            </div>

            <div className="my-10 flex justify-center">
                <a
                    href={route('search.jobs', {
                        is_featured: 1,
                    })}
                    className="cursor-pointer rounded-lg bg-primary px-5 py-3 text-center font-sans text-xl font-semibold tracking-wider text-white transition-colors duration-500 hover:bg-black"
                >
                    View All Featured Jobs
                </a>
            </div>
        </section>
    );
}
