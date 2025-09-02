import { CreditCard } from '@/SVGs/CreditCard';
import { Paypal } from '@/SVGs/Paypal';
import { Stripe } from '@/SVGs/Stripe';
import { Bell, Briefcase, CrownIcon, Eye, TrendingUp, ZapIcon } from 'lucide-react';
import { Ribbon } from '../Ribbon';

export default function CandidateSidebarHeader() {
    return (
        <div className="rounded-lg border-t-5 border-green-600 bg-green-800 p-8">
            <div className="flex items-center gap-3 font-montserrat text-2xl font-semibold text-white">
                <ZapIcon fill="white" />
                <h1>Featured Profile</h1>
            </div>
            <p className="my-3 text-white">
                <span className="text-4xl text-orange-300">USD 10 </span> For 60 Days
            </p>
            <p className="my-5 text-white">Gain a competitive edge in the job market with exclusive features</p>
            <ul className="my-8">
                <li className="mt-3 flex items-center gap-2 text-white">
                    <CrownIcon fill="orange" stroke="transparent" />
                    <p>Premium Badge</p>
                </li>
                <li className="mt-3 flex items-center gap-2 text-white">
                    <TrendingUp stroke="orange" fill="orange" />
                    <p>Rank Booster</p>
                </li>
                <li className="mt-3 flex items-center gap-2 text-white">
                    <Ribbon fill="orange" className="mx-1 text-center text-amber-400" />
                    <p>Your CV above all others</p>
                </li>
                <li className="mt-3 flex items-center gap-2 text-white">
                    <Briefcase className="oklch(62.7% 0.194 149.214)" fill="orange" stroke="oklch(62.7% 0.194 149.214)" />
                    <p>Increased Job Opportunities</p>
                </li>
                <li className="mt-3 flex items-center gap-2 text-white">
                    <Eye className="text-primary" fill="orange" stroke="green" />
                    <p>Higher Profile Views</p>
                </li>
                <li className="my-3 flex items-center gap-2 text-white">
                    <Bell className="text-amber-400" fill="orange" />
                    <p>Exclusive Alerts</p>
                </li>
            </ul>
            <section id="payment-buttons" className="mt-7">
                <div className="group relative my-3 flex cursor-pointer items-center gap-3 overflow-hidden rounded-full bg-white p-1">
                    <div className="bg-primary-2 z-1 rounded-full bg-primary p-3">
                        <Paypal className="size-6 text-white" />
                    </div>
                    <p className="z-1 font-montserrat text-lg font-semibold tracking-wider transition-colors delay-100 duration-300 group-hover:text-white">
                        Paypal
                    </p>
                    <div className="absolute right-0 bottom-0 z-1 h-full w-full translate-x-70 translate-y-10 rounded-full bg-black transition-transform delay-100 duration-500 group-hover:-translate-x-0 group-hover:-translate-y-0" />
                </div>
                <div className="group relative my-3 flex cursor-pointer items-center gap-3 overflow-hidden rounded-full bg-white p-1">
                    <div className="bg-primary-2 z-1 rounded-full bg-primary p-3">
                        <Stripe className="size-6 text-white" />
                    </div>
                    <p className="z-1 font-montserrat text-lg font-semibold tracking-wider transition-colors delay-100 duration-300 group-hover:text-white">
                        Stripe
                    </p>
                    <div className="absolute right-0 bottom-0 z-10 h-full w-full translate-x-70 translate-y-10 rounded-full bg-black transition-transform delay-100 duration-500 group-hover:-translate-x-0 group-hover:-translate-y-0" />
                </div>
                <div className="group relative my-3 flex cursor-pointer items-center gap-3 overflow-hidden rounded-full bg-white p-1">
                    <div className="bg-primary-2 z-1 rounded-full bg-primary p-3">
                        <CreditCard className="size-6 text-white" />
                    </div>
                    <p className="z-1 font-montserrat text-lg font-semibold tracking-wider transition-colors delay-100 duration-300 group-hover:text-white">
                        Paystack
                    </p>
                    <div className="absolute right-0 bottom-0 z-10 h-full w-full translate-x-70 translate-y-10 rounded-full bg-black transition-transform delay-100 duration-500 group-hover:-translate-x-0 group-hover:-translate-y-0" />
                </div>
            </section>
        </div>
    );
}
