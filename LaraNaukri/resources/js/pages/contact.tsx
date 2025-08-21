import ContactForm from '@/components/sections/contact-form';
import ContactInfo from '@/components/sections/contact-info';
import AppLayout from '@/layouts/app/app-layout';

export default function Contact() {
    return (
        <AppLayout page="contact">
            <div className="flex flex-col items-center justify-center bg-green-50 py-10">
                <h1 className="font-montserrat text-4xl font-bold">Contact Us</h1>
            </div>
            <section id="blog" className="flex gap-3 px-20">
                <ContactInfo />
                <ContactForm />
            </section>
            <div className="relative h-96 w-full">
                {/* put map here, I tried leaflet but it is not rending properly due to SSR limitions
                then I insalled react-google-map-api but it required google api and for this Pakistani debit card not working
                also I have put Google Map code in cards folder */}
            </div>
        </AppLayout>
    );
}
