import { Location } from '@/SVGs/Location';
import { Email } from '@/SVGs/Mail';
import { Phone } from '@/SVGs/Phone';
import { Globe, Smartphone } from 'lucide-react';

type Props = {
    phone: string;
    mobile: string;
    email: string;
    country: string;
    city: string;
    address: string;
};
export default function ContactDetails({ phone, mobile, email, country, city, address }: Props) {
    return (
        <div id="contact-details">
            <h1 className="font-montserrat text-xl font-bold text-white">Contact Details</h1>
            <hr className="h-0.5 rounded-2xl bg-white/50" />
            <div className="mt-2 flex items-center gap-2 text-lg text-white">
                <Phone className="size-5 text-white" />
                <p className="text-sm">+{phone}</p>
            </div>
            <div className="mt-2 flex items-center gap-2 text-lg text-white">
                <Smartphone className="size-5 text-white" />
                <p className="text-sm">+{mobile}</p>
            </div>
            <div className="mt-2 flex items-center gap-2 text-lg text-white">
                <Email className="size-5 text-white" />
                <p className="text-sm">{email}</p>
            </div>
            <div className="mt-2 flex items-center gap-2 text-lg text-white">
                <Globe className="size-5 text-white" />
                <p className="text-sm">
                    {city} - {country}
                </p>
            </div>
            <div className="mt-2 flex items-center gap-2 text-lg text-white">
                <Location className="size-5 text-white" />
                <p className="text-sm">{address}</p>
            </div>
        </div>
    );
}
