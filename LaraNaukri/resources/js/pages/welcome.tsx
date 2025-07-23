import Calltoaction from '@/components/calltoaction';
import Hero from '@/components/hero';
import Nav from '@/components/nav';
import Companycard from '@/components/ui/companycard';

export default function Welcome() {
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
        <>
            <Nav />
            <Hero />
            <Calltoaction />
            <section id="topcompanies" className="px-14 py-10">
                <h1 className="my-7 text-center font-montserrat text-4xl font-semibold">Top Companies Are Hiring</h1>
                <div className="grid grid-cols-5 gap-5">
                    {companies.map((company) => (
                        <Companycard imageUrl={company.imageUrl} location={company.location} name={company.name} openJobs={company.openJobs} />
                    ))}
                </div>
            </section>
        </>
    );
}
