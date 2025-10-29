import { LucideIcon } from 'lucide-react';

type Props = {
    Icon: LucideIcon;
    name: string;
    value: string;
};

export default function Characteristic({ Icon, name, value }: Props) {
    return (
        <div className="my-4 flex flex-col items-center gap-1">
            {<Icon className="size-7 text-primary" />}
            <p className="text-xs text-gray-400 uppercase">{name}</p>
            <p className="text-center font-semibold">{value}</p>
        </div>
    );
}
