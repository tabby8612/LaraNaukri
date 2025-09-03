import { Textarea } from '@headlessui/react';
import { Label } from '@radix-ui/react-label';

export default function CustomTextArea({ label, name, value }: { label: string; name: string; value: string }) {
    return (
        <div className="size-full">
            <Label htmlFor={name} className="tracking-wider text-gray-500">
                {label}
            </Label>
            <Textarea
                id={name}
                name={name}
                rows={5}
                className="mt-1 w-full rounded border bg-white p-2 focus-visible:border-2 focus-visible:border-primary"
                defaultValue={value}
            />
        </div>
    );
}
