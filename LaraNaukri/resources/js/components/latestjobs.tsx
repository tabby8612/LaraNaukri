import Latestjobcard from './ui/latestjobcard';

export default function Latestjobs() {
    const JOBS = [
        {
            id: 1,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/no-image.png',
            title: 'Senior Executive',
            company: 'NielsenIQ',
            type: 'Intership',
            city: 'Apache Junction',
        },
        {
            id: 2,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/no-image.png',
            title: 'Senior Officer Supply Chain',
            company: 'Lucky Cement',
            type: 'Contract',
            city: 'Fairbanks',
        },
        {
            id: 3,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/no-image.png',
            title: 'Senior Executive',
            company: 'NielsenIQ',
            type: 'Intership',
            city: 'Bessemer',
        },
        {
            id: 4,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/admin_assets/no-image.png',
            title: 'UI UX Designer Required',
            company: 'Multimedia Design',
            type: 'Intership',
            city: 'Bessemer',
        },
        {
            id: 5,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/admin_assets/no-image.png',
            title: 'Graphic Designer Required',
            company: 'Multimedia Design',
            type: 'Intership',
            city: 'Barrington',
        },
        {
            id: 6,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/media-wave-1536851777-515.jpg',
            title: 'Full Stack Developer Required',
            company: 'Multimedia Design',
            type: 'Intership',
            city: 'Fairbanks',
        },
        {
            id: 7,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/admin_assets/no-image.png',
            title: 'Full Stack Developer Required',
            company: 'Multimedia Design',
            type: 'Intership',
            city: 'Bessemer',
        },
        {
            id: 8,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/media-wave-1536851777-515.jpg',
            title: 'Full Stack Developer Required',
            company: 'Multimedia Design',
            type: 'Intership',
            city: 'Fairbanks',
        },
        {
            id: 9,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/admin_assets/no-image.png',
            title: 'Full Stack Developer Required',
            company: 'Multimedia Design',
            type: 'Intership',
            city: 'Bessemer',
        },
    ];

    return (
        <section id="latestJobs" className="px-14 py-10">
            <h1 className="my-7 text-center font-montserrat text-4xl font-semibold">Latest Jobs</h1>
            <div className="grid grid-cols-3 gap-10">
                {JOBS.map((job) => (
                    <Latestjobcard imageUrl={job.imageUrl} title={job.title} company={job.company} type={job.type} key={job.id} city={job.city} />
                ))}
            </div>
            <div className="my-10 flex justify-center">
                <button className="rounded-lg bg-primary px-5 py-3 text-center font-sans text-xl font-semibold tracking-wider text-white transition-colors duration-500 hover:bg-black">
                    View All Latest Jobs
                </button>
            </div>
        </section>
    );
}
