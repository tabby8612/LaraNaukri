import { Checkbox } from '../UnusedUI/checkbox';

type filterItemProps = {
    id: string;
    name: string;
    count: number;
};

export default function FilterItem({ id, name, count }: filterItemProps) {
    return (
        <div className="my-2 flex justify-between">
            <div className="flex items-center gap-3">
                <Checkbox id={id} value={name} />
                <label htmlFor={id}>{name}</label>
            </div>
            <p>{count}</p>
        </div>
    );
}
