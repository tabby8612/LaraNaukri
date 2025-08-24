import JobCategoryCard from '@/components/ui/cards/jobCategoryCard';
import AppLayout from '@/layouts/app/app-layout';

export default function AllCategories() {
    return (
        <AppLayout page="categories">
            <main className="bg-green-50 p-7 text-center">
                <h1 className="font-montserrat text-3xl font-bold">All Categories</h1>
            </main>
            <section className="mx-auto my-16 grid size-11/12 grid-cols-6">
                <JobCategoryCard
                    id="1"
                    imageUrl="https://www.sharjeelanjum.com/demos/jobsportal-update/uploads/functional_area/admin_26.png"
                    jobs={0}
                    name="Admin"
                />
            </section>
        </AppLayout>
    );
}
