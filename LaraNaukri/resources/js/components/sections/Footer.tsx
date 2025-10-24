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
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href={route('contact')}>Contact Us</a>
                        </li>
                        <li>FAQs</li>
                        <li>About Us</li>
                        <li>Terms of Use</li>
                    </ul>
                </div>
                <div id="footerfunctionarea">
                    <h1 className="mb-5 font-montserrat text-lg font-semibold">Jobs By Functional Area</h1>
                    <ul className="text-gray-500">
                        <li>
                            <a href={route('search.jobs', { category: 'Marketing' })}>Marketing</a>
                        </li>
                        <li>
                            <a href={route('search.jobs', { category: 'Medicine' })}>Medicine</a>
                        </li>
                        <li>
                            <a href={route('search.jobs', { category: 'Software & Web Development' })}>Software & Web Development</a>
                        </li>
                        <li>
                            <a href={route('search.jobs', { category: 'Advertisment' })}>Advertisment</a>
                        </li>
                        <li>
                            <a href={route('search.jobs', { category: 'Database Administration (DBA)' })}>Database Administration (DBA)</a>
                        </li>
                        <li>
                            <a href={route('search.jobs', { category: 'Graphic Design' })}>Graphic Design</a>
                        </li>
                        <li>
                            <a href={route('search.jobs', { category: 'Advertising' })}>Advertising</a>
                        </li>
                        <li>
                            <a href={route('search.jobs', { category: 'Business Management' })}>Business Management</a>
                        </li>
                        <li>
                            <a href={route('search.jobs', { category: 'Information Technology' })}>Information Technology</a>
                        </li>
                        <li>
                            <a href={route('search.jobs', { category: 'Electronics Technician' })}>Electronics Technician</a>
                        </li>
                    </ul>
                </div>
                <div id="footerindustry">
                    <h1 className="mb-5 font-montserrat text-lg font-semibold">Jobs By Industry</h1>
                    <ul className="text-gray-500">
                        <li>
                            <a href={route('search.jobs', { industry_id: '6' })}>Electronics Technician</a>
                        </li>
                        <li>
                            <a href={route('search.jobs', { industry_id: '10' })}>Manufacturing</a>
                        </li>
                        <li>
                            <a href={route('search.jobs', { industry_id: '3' })}>Banking/Financial Services</a>
                        </li>
                        <li>
                            <a href={route('search.jobs', { industry_id: '8' })}>Health & Fitness</a>
                        </li>
                        <li>
                            <a href={route('search.jobs', { industry_id: '4' })}>Courier/Logistics</a>
                        </li>
                        <li>
                            <a href={route('search.jobs', { industry_id: '5' })}>Education/Training</a>
                        </li>
                        <li>
                            <a href={route('search.jobs', { industry_id: '9' })}>Information Technology</a>
                        </li>
                        <li>
                            <a href={route('search.jobs', { industry_id: '12' })}>Travel/Tourism/Transportation</a>
                        </li>
                        <li>
                            <a href={route('search.jobs', { industry_id: '7' })}>Fashion</a>
                        </li>
                        <li>
                            <a href={route('search.jobs', { industry_id: '1' })}>Advertising/PR</a>
                        </li>
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
                <img src={`/storage/payment_icons.png`} alt="payment icons" className="h-10" />
            </footer>
        </>
    );
}
