type Industry = {
    id: number;
    name: string;
    job_count: number;
};

const industries: Industry[] = [
    {
        id: 1,
        name: 'Manufacturing',
        job_count: 3,
    },
    {
        id: 2,
        name: 'Fashion',
        job_count: 3,
    },
    {
        id: 3,
        name: 'Electronics',
        job_count: 3,
    },
    {
        id: 4,
        name: 'Information Technology',
        job_count: 3,
    },
    {
        id: 5,
        name: 'Advertising/PR',
        job_count: 3,
    },
    {
        id: 6,
        name: 'AutoMobile',
        job_count: 6,
    },
    {
        id: 7,
        name: 'Courier/Logistics',
        job_count: 1,
    },
    {
        id: 8,
        name: 'Banking/Financial Services',
        job_count: 13,
    },
    {
        id: 9,
        name: 'Education/Training',
        job_count: 15,
    },
    {
        id: 10,
        name: 'Health/Fitness',
        job_count: 1,
    },
];
export default function JobsByIndustrySection() {
    return (
        <section id="jobsByIndustry" className="bg-green-50 px-14 py-10">
            <h1 className="my-7 text-center font-montserrat text-4xl font-semibold">Popular Industry</h1>
            <div className="mx-auto size-10/12">
                <ul className="flex flex-wrap items-center justify-center gap-3">
                    {industries.map((industry) => (
                        <li className="hoverEffect rounded-md border-l border-l-primary px-3 py-1.5" key={industry.id}>
                            <a
                                href={route('search.jobs', {
                                    industry_id: industry.id,
                                })}
                            >
                                {industry.name} ({industry.job_count})
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
