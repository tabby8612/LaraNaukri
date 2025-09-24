import { Textarea } from '@headlessui/react';
import { Label } from '@radix-ui/react-label';
import { InputHTMLAttributes } from 'react';

export default function CustomTextArea({
    label,
    name,
    value,
    isrequired = false,
    ...props
}: InputHTMLAttributes<HTMLTextAreaElement> & { label: string; name: string; value: string; isrequired?: boolean }) {
    return (
        <div className="w-full">
            <Label htmlFor={name} className={`tracking-wider text-gray-500 ${isrequired && "after:ml-0.5 after:text-red-500 after:content-['*']"} `}>
                {label}
            </Label>
            <Textarea
                id={name}
                name={name}
                rows={5}
                required={isrequired}
                className="mt-1 w-full rounded border-2 border-gray-300 bg-white p-2 focus-visible:outline-2 focus-visible:outline-primary"
                defaultValue={value}
                {...props}
            />
        </div>
    );
}
