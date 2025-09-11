import { Input } from '@headlessui/react';
import { Label } from '@radix-ui/react-label';
import { InputHTMLAttributes } from 'react';

type CustomProps = {
    label: string;
    name: string;
    type: string;
    placeholder: string;
    value: string;
    disabled?: boolean;
};

export default function CustomInputField({
    label,
    name,
    type,
    placeholder,
    value,
    disabled = false,
    ...props
}: InputHTMLAttributes<HTMLInputElement> & CustomProps) {
    return (
        <div className="w-full">
            <Label htmlFor={name} className="tracking-wider text-gray-500">
                {label}
            </Label>
            <Input
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                defaultValue={value}
                disabled={disabled}
                className="size-full h-11 rounded border-2 border-gray-300 bg-white px-3 py-1 focus-visible:outline-3 focus-visible:outline-primary disabled:bg-gray-200"
                {...props}
            />
        </div>
    );
}
