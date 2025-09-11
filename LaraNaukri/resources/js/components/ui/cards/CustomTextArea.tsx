import { Textarea } from '@headlessui/react';
import { Label } from '@radix-ui/react-label';
import { InputHTMLAttributes } from 'react';

export default function CustomTextArea({
    label,
    name,
    value,
    ...props
}: InputHTMLAttributes<HTMLTextAreaElement> & { label: string; name: string; value: string }) {
    return (
        <div className="w-full">
            <Label htmlFor={name} className="tracking-wider text-gray-500">
                {label}
            </Label>
            <Textarea
                id={name}
                name={name}
                rows={5}
                className="mt-1 w-full rounded border bg-white p-2 focus-visible:outline-2 focus-visible:outline-primary"
                defaultValue={value}
                {...props}
            />
        </div>
    );
}
