import { Card } from '../../card';

type Props = {
    image_path: string;
    name: string;
    message_count: string;
    clickFn: (id: string) => void;
    id: string;
    selectedUser: string;
};
export default function MessageTab({ image_path, name, message_count, clickFn, id, selectedUser }: Props) {
    return (
        <Card
            className={`flex cursor-pointer flex-row items-center gap-3 rounded-none border-0 border-b border-b-gray-400/20 px-3 py-3 shadow-none hover:brightness-110 ${selectedUser === id ? 'bg-green-300/30' : 'bg-gray-300/30'}`}
            onClick={(event) => {
                event.stopPropagation();
                clickFn(id);
            }}
        >
            <img src={`/storage/${image_path}`} alt={name} className="size-12 rounded-full" />
            <h1 className="grow font-bold">{name}</h1>
            <p className="text-primary">{message_count}</p>
        </Card>
    );
}
