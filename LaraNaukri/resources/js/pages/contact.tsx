import ContactForm from '@/components/sections/contact-form';
import ContactInfo from '@/components/sections/contact-info';
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
                {/* put map here, I tried leaflet but it is not rending properly due to SSR limitions
                then I insalled react-google-map-api but it required google api and for this Pakistani debit card not working
                also I have put Google Map code in cards folder */}
                <iframe
                    src="https://maps.google.it/maps?q=651+N+Broad+St%2C+Suite+201%2C+Middletown%2C+Zip+Code+19709%2C+New+Castle%2C+Delaware%2C+USA&amp;output=embed"
                    allowFullScreen={true}
                ></iframe>
            </div>
        </AppLayout>
    );
}
