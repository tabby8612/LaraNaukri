import Searchjobhero from '@/components/sections/searchjobhero';
import AppLayout from '@/layouts/app/app-layout';
import { About } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function AboutUS() {
    const { aboutUS } = usePage<{ aboutUS: About }>().props;

    return (
        <div>
            <AppLayout page="">
                <Head title={aboutUS.seo_title} />
                <Searchjobhero />
                <section className="headingGap mx-auto w-10/12 p-9">
                    <h1 className="font-montserrat text-2xl font-bold">{aboutUS.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: aboutUS.description }} />
                </section>
            </AppLayout>
        </div>
    );
}
