import { City } from '@/types';
import { useEffect, useState } from 'react';
import CityCard from '../ui/cards/CityCard';

export default function JobsByCities() {
    const [citiesData, setCitiesData] = useState<City[] | null>(null);

    useEffect(() => {
        async function getCitiesData() {
            const response = await fetch(route('top.cities'));

            if (!response.ok) throw new Error(`can't fetch data, error code ${response.status}`);

            const data = await response.json();

            setCitiesData(data);
        }

        getCitiesData();
    }, []);

    return (
        <section id="jobsByCities" className="bg-green-50 px-14 py-10">
            <h1 className="my-7 text-center font-montserrat text-4xl font-semibold">Jobs By Cities</h1>
            <div className="grid gap-5 md:grid-cols-4" id="citygrid">
                {citiesData &&
                    citiesData.map((city) => (
                        <CityCard imageUrl={city.image_path} cityName={city.name} id={city.id} jobs={city.jobs_count} key={city.id} />
                    ))}
            </div>
        </section>
    );
}
