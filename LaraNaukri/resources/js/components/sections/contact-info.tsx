import { Home } from '@/SVGs/Home';
import { Email } from '@/SVGs/Mail';
import { Phone } from '@/SVGs/Phone';

export default function ContactInfo() {
    return (
        <>
            <div id="contact-info" className="w-1/3">
                <p className="mt-7 font-montserrat text-lg font-bold tracking-wider text-primary">Need Any help?</p>
                <h1 className="font-montserrat text-4xl font-bold tracking-wider">Get In Touch With Us</h1>
                <div className="mt-7 flex items-center gap-3">
                    <Home className="h-15 w-20 bg-primary px-4 text-white" />
                    <div>
                        <p className="font-bold uppercase">Address:</p>
                        <p>651 N Broad St, Suite 201, Middletown, Zip Code 19709, New Castle, Delaware, USA.</p>
                    </div>
                </div>
                <div className="mt-7 flex items-center gap-3">
                    <Email className="h-15 w-16 bg-primary px-4 text-white" />
                    <div>
                        <p className="font-bold uppercase">Email Address:</p>
                        <p>info@LaraNaukri.com</p>
                    </div>
                </div>
                <div className="mt-7 flex items-center gap-3">
                    <Phone className="h-15 w-16 bg-primary px-4 text-white" />
                    <div>
                        <p className="font-bold uppercase">Phone:</p>
                        <p>+923133933083</p>
                    </div>
                </div>
            </div>
        </>
    );
}
