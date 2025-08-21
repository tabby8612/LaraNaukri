import EmployerCard from '../ui/cards/EmployerCard';

const employers = [
    {
        id: 1,
        imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/power-color-1536854682-955.jpg',
        industry: 'Fashion',
        location: 'Albany',
        openJobCount: 2,
        title: 'Power Color',
    },
    {
        id: 2,
        imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/admin_assets/no-image.png',
        industry: 'Information Technology',
        location: 'Kennesaw',
        openJobCount: 0,
        title: 'AutoSoft Dynamic',
    },
    {
        id: 3,
        imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/admin_assets/no-image.png',
        industry: 'Automobile',
        location: 'Atlantic City',
        openJobCount: 1,
        title: 'New Design Studio',
    },
    {
        id: 4,
        imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/surf-wave-1536855024-252.jpg',
        industry: 'Courier/Logistic',
        location: 'Kodiak',
        openJobCount: 1,
        title: 'Surf Wave',
    },
];

export default function EmployerSearchResults() {
    return (
        <div id="job-results" className="w-3/4">
            <h1 className="font-montserrat text-xl font-semibold">15 Employers Found</h1>
            <p>Showing Employers: 1 - 15 Total 15</p>

            <div className="my-7 grid grid-cols-3 gap-5">
                {employers.map((employer) => (
                    <EmployerCard
                        imageUrl={employer.imageUrl}
                        industry={employer.industry}
                        location={employer.location}
                        openJobCount={employer.openJobCount}
                        title={employer.title}
                        key={employer.id}
                    />
                ))}
            </div>
        </div>
    );
}
