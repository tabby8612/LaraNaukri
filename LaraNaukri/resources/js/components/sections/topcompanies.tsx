import Companycard from '../ui/cards/companycard';

export default function Topcompanies() {
    const companies = [
        {
            id: 1,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/media-wave-1536851777-515.jpg',
            location: 'United States of America',
            name: 'Multimedia Design',
            openJobs: 5,
        },
        {
            id: 2,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/admin_assets/no-image.png',
            location: 'United States of America',
            name: 'Connect People',
            openJobs: 5,
        },
        {
            id: 3,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/power-wave-1536854843-603.jpg',
            location: 'United States of America',
            name: 'Power Wave',
            openJobs: 7,
        },
        {
            id: 4,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/surf-wave-1536855024-252.jpg',
            location: 'United States of America',
            name: 'Surf Wave',
            openJobs: 1,
        },
        {
            id: 5,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/admin_assets/no-image.png',
            location: 'United States of America',
            name: 'New Design Studio',
            openJobs: 1,
        },
        {
            id: 6,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/media-wave-1536851777-515.jpg',
            location: 'United States of America',
            name: 'Multimedia Design',
            openJobs: 5,
        },
        {
            id: 7,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/power-color-1536854682-955.jpg',
            location: 'United States of America',
            name: 'Power Color',
            openJobs: 4,
        },
        {
            id: 8,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/travel-advisor-1536859060-458.jpg',
            location: 'United States of America',
            name: 'Travel Advisor',
            openJobs: 7,
        },
        {
            id: 9,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/sphere-1536859528-893.jpg',
            location: 'United States of America',
            name: 'Sphere',
            openJobs: 2,
        },
        {
            id: 10,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/sphere-1536859528-893.jpg',
            location: 'United States of America',
            name: 'Sphere',
            openJobs: 2,
        },
    ];
    return (
        <section id="topcompanies" className="px-14 py-10">
            <h1 className="my-7 text-center font-montserrat text-4xl font-semibold">Top Companies Are Hiring</h1>
            <div className="grid grid-cols-5 gap-5">
                {companies.map((company) => (
                    <Companycard
                        key={company.id}
                        imageUrl={company.imageUrl}
                        location={company.location}
                        name={company.name}
                        openJobs={company.openJobs}
                        id={company.id}
                    />
                ))}
            </div>
            <div className="my-10 flex justify-center">
                <button className="rounded-lg bg-primary px-5 py-3 text-center font-sans text-xl font-semibold tracking-wider text-white transition-colors duration-500 hover:bg-black">
                    View All Featured Companies
                </button>
            </div>
        </section>
    );
}
