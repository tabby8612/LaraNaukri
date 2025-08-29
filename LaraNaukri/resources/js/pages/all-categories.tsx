import JobCategoryCard from '@/components/ui/cards/jobCategoryCard';
import AppLayout from '@/layouts/app/app-layout';
import { Category } from '@/types';
import { usePage } from '@inertiajs/react';

type CategoryProps = {
    categories: Category[]
};

export default function AllCategories() {
    const props = usePage<CategoryProps>().props;
    const { categories } = props;
    console.log(categories);


    return (
        <AppLayout page="categories">
            <main className="bg-green-50 p-7 text-center">
                <h1 className="font-montserrat text-3xl font-bold">All Categories</h1>
            </main>
            <section className="mx-auto my-16 grid size-11/12 grid-cols-6 gap-4">
                {categories && categories.map(category => (
                    <JobCategoryCard
                        id={category.id}
                        imageUrl={category.image_path}
                        jobs={category.jobs_count}
                        name={category.name}
                    />
                ))}
            </section>
        </AppLayout>
    );
}
