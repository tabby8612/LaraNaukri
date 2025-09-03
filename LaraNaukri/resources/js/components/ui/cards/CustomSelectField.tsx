import { Label } from '@radix-ui/react-label';

type Props = {
    label: string;
    name: string;
    items: {
        name: string;
        id: string;
    }[];
};
export default function CustomSelectField({ label, name, items }: Props) {
    return (
        <div className="">
            <Label className="tracking-wider text-gray-500">{label}</Label>
            <select name={name} id={name} className="h-10 w-full rounded border-2 border-gray-300 px-2 focus-visible:outline-primary">
                <option selected>{label}</option>
                {items.map((item) => (
                    <option value={item.id}>{item.name}</option>
                ))}
            </select>
        </div>
    );
}
