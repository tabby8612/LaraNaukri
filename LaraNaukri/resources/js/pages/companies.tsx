import EmployerSearchFilters from '@/components/sections/employer-search-filters';
import EmployerSearchResults from '@/components/sections/employer-search-results';
import AppLayout from '@/layouts/app/app-layout';
import { Company, Industry } from '@/types';
import { Head, router, usePage } from '@inertiajs/react';

type CompaniesDataProps = {
    companiesData: Company[];
    industriesData: Industry[];
};

export default function Companies() {
    const props = usePage<CompaniesDataProps>().props;
    const { companiesData, industriesData } = props;

    function handleFormSubmit() {
        const inputEl = document.getElementById('keyword') as HTMLInputElement;
        const countryEl = document.querySelector('button[datatype="country"]') as HTMLButtonElement;
        const cityEl = document.querySelector('button[datatype="city"]') as HTMLButtonElement;
        const industriesBtns = document.querySelectorAll("button[data-state='checked']") as NodeListOf<HTMLButtonElement>;

        const keyword = inputEl.value;
        const country = countryEl.value;
        const city = cityEl.value;
        const industries = Array.from(industriesBtns).map((industryBTN) => industryBTN.id);

        router.get(route('companies'), {
            name: keyword,
            country: country,
            city: city,
            industries: industries.length > 0 ? industries : null,
        });
    }

    return (
        <AppLayout page="companies">
            <Head title="Search Top Companies on LaraNaukri" />
            <div className="flex flex-col items-center justify-center bg-primary/8 py-10">
                <h1 className="font-montserrat text-2xl font-semibold">Get hired in most high rated companies.</h1>
            </div>
            <section className="mx-auto flex w-[95%] flex-col justify-center gap-8 p-10 md:flex-row">
                <EmployerSearchFilters industries={industriesData} handleFn={handleFormSubmit} />
                <EmployerSearchResults companies={companiesData} />
            </section>
        </AppLayout>
    );
}
