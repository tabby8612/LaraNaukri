import { Company } from '@/types';
import { useEffect, useState } from 'react';
import Companycard from '../ui/cards/companycard';

export default function Topcompanies() {
    const url = route('top.companies');
    const [companiesData, setCompaniesData] = useState<Company[] | null>(null);

    useEffect(() => {
        async function topCompanies() {
            const response = await fetch(url);
            const data = await response.json();
            setCompaniesData(data.data);
        }

        topCompanies();
    });

    return (
        <section id="topcompanies" className="px-14 py-10">
            <h1 className="my-7 text-center font-montserrat text-4xl font-semibold">Top Companies Are Hiring</h1>
            <div className="grid grid-cols-5 gap-5">
                {companiesData &&
                    companiesData.map((company) => (
                        <Companycard
                            key={company.id}
                            imageUrl={company.image_path}
                            location={company.location}
                            name={company.name}
                            openJobs={company.open_jobs}
                            id={company.id}
                        />
                    ))}
            </div>
            <div className="my-10 flex justify-center">
                <a
                    href={route('featured.companies')}
                    className="rounded-lg bg-primary px-5 py-3 text-center font-sans text-xl font-semibold tracking-wider text-white transition-colors duration-500 hover:bg-black"
                >
                    View All Featured Companies
                </a>
            </div>
        </section>
    );
}
