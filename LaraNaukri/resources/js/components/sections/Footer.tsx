import { Location } from '@/SVGs/Location';
import { Email } from '@/SVGs/Mail';
import { Facebook, Instagram, Linkedin, X, Youtube } from 'lucide-react';


export default function Footer() {
    return (
        <>
            <section className="grid grid-cols-4 gap-3 bg-green-50 px-14 py-10">
                <div id="footermenuitems">
                    <h1 className="mb-5 font-montserrat text-lg font-semibold">Quick Links</h1>
                    <ul className="text-gray-500">
                        <li>Home</li>
                        <li>Contact Us</li>
                        <li>FAQs</li>
                        <li>About Us</li>
                        <li>Terms of Use</li>
                    </ul>
                </div>
                <div id="footerfunctionarea">
                    <h1 className="mb-5 font-montserrat text-lg font-semibold">Jobs By Functional Area</h1>
                    <ul className="text-gray-500">
                        <li>Marketing</li>
                        <li>Medicine</li>
                        <li>Software & Web Development</li>
                        <li>Advertisment</li>
                        <li>Database Administration (DBA)</li>
                        <li>Graphic Design</li>
                        <li>Advertising</li>
                        <li>Business Management</li>
                        <li>Information Technology</li>
                        <li>Electronics Technician</li>
                    </ul>
                </div>
                <div id="footerindustry">
                    <h1 className="mb-5 font-montserrat text-lg font-semibold">Jobs By Industry</h1>
                    <ul className="text-gray-500">
                        <li>Electronics</li>
                        <li>Manufacturing</li>
                        <li>Banking/Financial Services</li>
                        <li>Health & Fitness</li>
                        <li>Courier/Logistics</li>
                        <li>Education/Training</li>
                        <li>Information Technology</li>
                        <li>Travel/Tourism/Transportation</li>
                        <li>Fashion</li>
                        <li>Advertising/PR</li>
                    </ul>
                </div>
                <div id="footercontactus">
                    <h1 className="mb-5 font-montserrat text-lg font-semibold">Contact Us</h1>
                    <div className="flex gap-5">
                        <Location className="size-10" />
                        <p>651 N Broad St, Suite 201, Middletown, Zip Code 19709, New Castle, Delaware, USA.</p>
                    </div>
                    <div className="mt-6 flex gap-5">
                        <Email className="size-5" />
                        <p>info@LaraNaukri</p>
                    </div>
                    <div className="mt-6 flex gap-5">
                        <Facebook />
                        <X />
                        <Instagram />
                        <Linkedin />
                        <Youtube />
                    </div>
                </div>
            </section>
            <footer className="flex items-center justify-between px-8 py-2">
                <p className="text-gray-500">
                    Copyright © 2025 LaraNaukri. All Rights Reserved. Design by:{' '}
                    <a href="http://tabishsajwani.com" className="text-primary">
                        Tabish Sajwani
                    </a>
                </p>
                <img src={`/storage/payment_icons.png`} alt="payment icons" className='h-10' />
            </footer>
        </>
    );
}
