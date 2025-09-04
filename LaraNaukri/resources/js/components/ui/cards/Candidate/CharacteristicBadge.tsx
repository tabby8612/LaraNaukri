import { ReactNode } from 'react';

type Props = {
    badge: ReactNode;
    name: string;
    value: string;
};

export default function CharacteristicBadge({ badge, name, value }: Props) {
    return (
        <div className="my-5">
            {badge}
            <p className="text-gray-500 uppercase">{name}</p>
            <p className="font-bold">{value}</p>
        </div>
    );
}
