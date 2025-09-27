import { Checkbox } from '../UnusedUI/checkbox';

type filterItemProps = {
    name: string;
    count: string;
    columnName: string;
    id: string;
    onChangeFn: (val: string) => void;
};

export default function GroupFilterItem({ name, count, columnName, id, onChangeFn }: filterItemProps) {
    return (
        <div className="my-2 flex justify-between">
            <div className="flex items-center gap-3">
                <Checkbox id={id} name={columnName} value={id} onCheckedChange={() => onChangeFn(id)} data-filter={columnName} />
                <label htmlFor={id}>{name}</label>
            </div>
            <p>{count}</p>
        </div>
    );
}
