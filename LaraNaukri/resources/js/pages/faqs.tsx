import Searchjobhero from '@/components/sections/searchjobhero';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import AppLayout from '@/layouts/app/app-layout';
import { FAQ } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function FAQs() {
    const { faqs } = usePage<{ faqs: FAQ[] }>().props;
    const [selectedItem, setSelectedItem] = useState('1');

    return (
        <AppLayout page="">
            <Head title="FAQs" />
            <Searchjobhero />
            <section className="headingGap mx-auto w-10/12 p-9">
                <Accordion type="single" collapsible className="w-full" value={selectedItem}>
                    {faqs.length > 0 &&
                        faqs.map((faq) => (
                            <AccordionItem value={faq.id} key={faq.id} onClick={() => setSelectedItem(faq.id)}>
                                <AccordionTrigger className="cursor-pointer rounded-lg bg-gray-100 p-2 font-montserrat text-lg font-bold">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <div className="p-2" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                </Accordion>
            </section>
        </AppLayout>
    );
}
