import { useEffect, useState } from 'react';

type Industry = {
    id: number;
    name: string;
    jobs_count: number;
};

export default function JobsByIndustrySection() {
    const [industryData, setIndustriesData] = useState<Industry[] | null>(null);

    useEffect(() => {
        const url = route('top.industries');

        async function getTopIndustries() {
            const response = await fetch(url);
            const data = await response.json();
            setIndustriesData(data.results);
        }

        getTopIndustries();
    }, []);

    return (
        <section id="jobsByIndustry" className="bg-green-50 px-14 py-10">
            <h1 className="my-7 text-center font-montserrat text-4xl font-semibold">Popular Industry</h1>
            <div className="mx-auto size-10/12">
                <ul className="flex flex-wrap items-center justify-center gap-3">
                    {industryData &&
                        industryData.map((industry) => (
                            <li className="hoverEffect rounded-md border-l border-l-primary px-3 py-1.5" key={industry.id}>
                                <a
                                    href={route('search.jobs', {
                                        industry_id: industry.id,
                                    })}
                                >
                                    {industry.name} ({industry.jobs_count})
                                </a>
                            </li>
                        ))}
                </ul>
            </div>
        </section>
    );
}
