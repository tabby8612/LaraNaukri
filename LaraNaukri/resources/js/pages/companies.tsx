import EmployerSearchFilters from '@/components/sections/employer-search-filters';
import EmployerSearchResults from '@/components/sections/employer-search-results';
import AppLayout from '@/layouts/app/app-layout';

export default function Companies() {
    return (
        <AppLayout page="companies">
            <div className="flex flex-col items-center justify-center bg-primary/8 py-10">
                <h1 className="font-montserrat text-2xl font-semibold">Get hired in most high rated companies.</h1>
            </div>
            <section className="mx-auto flex w-[95%] p-10">
                <EmployerSearchFilters />
                <EmployerSearchResults />
            </section>
        </AppLayout>
    );
}
