import { Card } from '@/components/ui/card';
import CharacteristicBadge from '@/components/ui/cards/Candidate/CharacteristicBadge';
import { Briefcase, Cake, CircleDollarSign, Clipboard, Handshake, Locate, LucideBadgeDollarSign, Terminal, User, VerifiedIcon } from 'lucide-react';

type Props = {
    verified: boolean;
    availability: boolean;
    age: number;
    gender: string;
    martial_status: string;
    experience: number;
    career_level: string;
    location: string;
    current_salary: number;
    expectation_salary: number;
};

export default function PublicProfileQualities({
    age,
    availability,
    career_level,
    current_salary,
    expectation_salary,
    experience,
    gender,
    location,
    martial_status,
    verified,
}: Props) {
    return (
        <Card className="mt-5 gap-2 border-gray-300 p-10 shadow-none">
            <h1 className="font-montserrat text-2xl font-bold text-primary">Candidate Details</h1>
            <section className="mx-auto grid grid-cols-2 items-center justify-between gap-6">
                <CharacteristicBadge badge={<VerifiedIcon className="size-7 text-primary" />} name="Verified" value={verified ? 'Yes' : 'No'} />
                <CharacteristicBadge
                    badge={<Handshake className="size-7 text-primary" />}
                    name="Ready for Hire"
                    value={availability ? 'Yes' : 'No'}
                />
                <CharacteristicBadge badge={<Cake className="size-7 text-primary" />} name="Age" value={`${age} Years`} />
                <CharacteristicBadge badge={<User className="size-7 text-primary" />} name="Gender" value={gender} />
                <CharacteristicBadge badge={<Clipboard className="size-7 text-primary" />} name="Martial Status" value={martial_status} />
                <CharacteristicBadge badge={<Briefcase className="size-7 text-primary" />} name="Experience" value={`${experience} Years`} />
                <CharacteristicBadge badge={<Terminal className="size-7 text-primary" />} name="Career Level" value={career_level} />
                <CharacteristicBadge badge={<Locate className="size-7 text-primary" />} name="Location" value={location} />
                <CharacteristicBadge badge={<CircleDollarSign className="size-7 text-primary" />} name="Current Salary" value={`${current_salary}`} />
                <CharacteristicBadge
                    badge={<LucideBadgeDollarSign className="size-7 text-primary" />}
                    name="Verified"
                    value={`${expectation_salary}`}
                />
            </section>
        </Card>
    );
}
