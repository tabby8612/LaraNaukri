import { Textarea } from '@headlessui/react';
import { Label } from '../UnusedUI/label';

export default function CustomTextArea({ label, name, value }: { label: string; name: string; value: string }) {
    return (
        <div className="size-full">
            <Label htmlFor="street-address" className="block tracking-wider text-gray-500">
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
