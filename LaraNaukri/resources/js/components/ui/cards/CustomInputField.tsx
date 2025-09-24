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
    isrequired?: boolean;
};

export default function CustomInputField({
    label,
    name,
    type,
    placeholder,
    value,
    disabled = false,
    isrequired = false,
    ...props
}: InputHTMLAttributes<HTMLInputElement> & CustomProps) {
    return (
        <div className="w-full">
            <Label htmlFor={name} className={`tracking-wider text-gray-500 ${isrequired && "after:ml-0.5 after:text-red-500 after:content-['*']"} `}>
                {label}
            </Label>
            <Input
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                defaultValue={value}
                disabled={disabled}
                required={isrequired}
                className="size-full h-11 rounded border-2 border-gray-300 bg-white px-3 py-1 file:h-8 file:rounded file:bg-green-50 file:px-2 file:py-1 file:font-bold file:text-primary focus-visible:outline-3 focus-visible:outline-primary disabled:bg-gray-200"
                {...props}
            />
        </div>
    );
}
