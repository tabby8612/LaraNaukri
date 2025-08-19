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
        salary: 1500,
        featured: true,
    },
    {
        id: 2,
        title: 'Dot Developer',
        type: 'Contract',
        location: 'Durant',
        postedDate: 'Mar 07, 2025',
        companyName: 'Power Wave',
        companyImageURL: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/power-wave-1536854843-603.jpg',
        salary: 1500,
        featured: true,
    },
    {
        id: 3,
        title: 'Full Stack Designer',
        type: 'Full Time/Permanent',
        location: 'Barrington',
        postedDate: 'Mar 07, 2025',
        companyName: 'Connect People',
        companyImageURL: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/connect-people-1536859166-614.jpg',
        salary: 1500,
    },
    {
        id: 4,
        title: 'Full Stack Designer',
        type: 'Full Time/Permanent',
        location: 'Barrington',
        postedDate: 'Mar 07, 2025',
        companyName: 'Connect People',
        companyImageURL: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/connect-people-1536859166-614.jpg',
        salary: 1500,
        featured: true,
    },
    {
        id: 5,
        title: 'Full Stack Designer',
        type: 'Full Time/Permanent',
        location: 'Barrington',
        postedDate: 'Mar 07, 2025',
        companyName: 'Connect People',
        companyImageURL: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/connect-people-1536859166-614.jpg',
        salary: 3000,
    },
    {
        id: 6,
        title: 'Full Stack Designer',
        type: 'Full Time/Permanent',
        location: 'Barrington',
        postedDate: 'Mar 07, 2025',
        companyName: 'Connect People',
        companyImageURL: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/connect-people-1536859166-614.jpg',
        salary: 1500,
        featured: true,
    },
];

export default function JobSearchResults() {
    return (
        <div id="job-results" className="w-3/4">
            <h1>18 Jobs Found</h1>
            <p>Showing Jobs: 1 - 18 Total 18</p>

            <div className="my-7 grid grid-cols-3 gap-5">
                {FeaturedJobs.map((job) => (
                    <FeaturedJobCard
                        companyImageURL={job.companyImageURL}
                        companyName={job.companyName}
                        location={job.location}
                        postedDate={job.postedDate}
                        title={job.title}
                        type={job.type}
                        key={job.id}
                        featured={job.featured}
                        salary={job.salary}
                    />
                ))}
            </div>
        </div>
    );
}
