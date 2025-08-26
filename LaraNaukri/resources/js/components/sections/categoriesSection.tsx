import { Category } from '@/types';
import { useEffect, useState } from 'react';
import JobCatgorySlider from './jobCategoriesSlider';

export default function JobCategories() {
    const [categoriesData, setCategoriesData] = useState<Category[] | null>(null);

    useEffect(() => {
        async function getCategoriesData() {
            const response = await fetch(route('top.categories'));

            if (!response.ok) throw new Error(`Not About to fetch ${response.status}`);

            const data = await response.json();

            setCategoriesData(data);
        }

        getCategoriesData();
    }, []);

    return (
        <section id="jobsByCategories" className="bg-green-50 px-14 py-10">
            <h1 className="my-7 text-center font-montserrat text-4xl font-semibold">Top Companies By Categories</h1>
            {categoriesData && <JobCatgorySlider categories={categoriesData} />}

            <div className="my-10 flex justify-center">
                <a
                    href={route('all.categories')}
                    className="rounded-lg bg-primary px-5 py-3 text-center font-sans text-xl font-semibold tracking-wider text-white transition-colors duration-500 hover:bg-black"
                >
                    View All Categories
                </a>
            </div>
        </section>
    );
}
