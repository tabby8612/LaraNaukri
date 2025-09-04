import { Card } from '@/components/ui/card';
import { Location } from '@/SVGs/Location';
import { Email } from '@/SVGs/Mail';
import { Phone } from '@/SVGs/Phone';
import { Smartphone } from 'lucide-react';

type Props = {
    phone_no: string;
    mobile_no: string;
    email: string;
    locaion: string;
};

export default function PublicProfileContact({ email, locaion, mobile_no, phone_no }: Props) {
    return (
        <Card className="gap-2 border-gray-300 p-10 shadow-none">
            <h1 className="font-montserrat text-2xl font-bold text-primary">Contact Information</h1>
            <div className="flex items-center gap-5">
                <Phone className="size-5 text-primary" />
                <p>+{phone_no}</p>
            </div>
            <div className="flex items-center gap-5">
                <Smartphone className="size-5 text-primary" />
                <p>+{mobile_no}</p>
            </div>
            <div className="flex items-center gap-6">
                <Email className="size-5 text-primary" />
                <p>{email}</p>
            </div>
            <div className="flex items-center gap-6">
                <Location className="size-5 text-primary" />
                <p>{locaion}</p>
            </div>
        </Card>
    );
}
