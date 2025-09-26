import { Card } from '../../card';

type Props = {
    image_path: string;
    name: string;
    message_count: string;
};
export default function MessageTab({ image_path, name, message_count }: Props) {
    return (
        <Card className="flex cursor-pointer flex-row items-center gap-3 rounded-none border-0 bg-gray-300/30 px-3 py-3 shadow-none not-first:mt-2">
            <img src={`/storage/${image_path}`} alt={name} className="size-12 rounded-full" />
            <h1 className="grow font-bold">{name}</h1>
            <p className="text-primary">{message_count}</p>
        </Card>
    );
}
