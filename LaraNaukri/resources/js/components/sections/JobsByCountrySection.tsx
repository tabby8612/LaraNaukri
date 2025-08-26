import { useEffect, useState } from 'react';
import { Card } from '../ui/card';
import { Country } from '@/types';

export default function JobsByCountrySection() {
    const [countryData, setCountryData] = useState<Country[] | null>(null);

    useEffect(() => {
        async function getCountryData() {
            const response = await fetch(route("top.countries"));

            if (!response.ok) throw new Error(`Can't fetch jobs by country ${response.status}`)

            const data = await response.json();

            setCountryData(data);
        }

        getCountryData();
    }, []);

    return (
        <section id="jobsByCities" className="bg-green-50 px-14 py-10">
            <h1 className="my-7 text-center font-montserrat text-4xl font-semibold">Find Jobs By Country</h1>
            <div className="my-auto grid grid-cols-4 gap-5  h-full">
                {countryData && countryData.map(country => (
                    <a
                        key={country.id}
                        href={route('search.jobs', {
                            country_id: country.id,
                        })}
                    >
                        <Card className="w-xs cursor-pointer gap-0 border-gray-200 bg-white p-3 transition-colors duration-300 hover:border-primary">
                            <h1 className="font-montserrat font-semibold">Jobs in {country.name}</h1>
                            <p className="text-black/50">({country.jobs_count}) Open Jobs</p>
                        </Card>
                    </a>
                ))}

            </div>
        </section>
    );
}
