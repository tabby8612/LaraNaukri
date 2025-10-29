import ContactForm from '@/components/sections/contact-form';
import ContactInfo from '@/components/sections/contact-info';
import GoogleMap from '@/components/sections/GoogleMap';
import AppLayout from '@/layouts/app/app-layout';

export default function Contact() {
    return (
        <AppLayout page="contact">
            <div className="flex flex-col items-center justify-center bg-green-50 py-10">
                <h1 className="font-montserrat text-4xl font-bold">Contact Us</h1>
            </div>
            <section id="blog" className="flex flex-col gap-3 px-20 md:flex-row">
                <ContactInfo />
                <ContactForm />
            </section>
            <div className="relative my-10 flex size-full w-full flex-col items-center justify-center">
                <GoogleMap place="651 N Broad St, Suite 201, Middletown, Zip Code 19709, New Castle, Delaware, USA" />
            </div>
        </AppLayout>
    );
}
