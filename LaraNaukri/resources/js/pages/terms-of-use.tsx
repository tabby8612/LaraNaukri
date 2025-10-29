import Searchjobhero from '@/components/sections/searchjobhero';
import AppLayout from '@/layouts/app/app-layout';
import { Terms } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function TermsOfUse() {
    const { termsOfUse } = usePage<{ termsOfUse: Terms }>().props;

    return (
        <div>
            <AppLayout page="">
                <Head title={termsOfUse.seo_title} />
                <Searchjobhero />
                <section className="headingGap mx-auto w-10/12 p-9">
                    <h1 className="font-montserrat text-2xl font-bold">{termsOfUse.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: termsOfUse.description }} />
                </section>
            </AppLayout>
        </div>
    );
}
