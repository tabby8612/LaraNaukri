import { Label } from '@radix-ui/react-label';
import { InputHTMLAttributes } from 'react';

export default function CustomDatePicker({
    label,
    date,
    isrequired = false,
    ...props
}: {
    label: string;
    date: string;
    isrequired?: boolean;
} & InputHTMLAttributes<HTMLDataElement>) {
    return (
        <div className="flex w-full flex-col">
            <Label
                htmlFor="date_of_birth"
                className={`tracking-wider text-gray-500 ${isrequired && "after:ml-0.5 after:text-red-500 after:content-['*']"} `}
            >
                {label}
            </Label>
            <input
                id="date_of_birth"
                name="date_of_birth"
                type="date"
                className="h-10 rounded border-2 border-gray-300 bg-white px-2 focus-within:ring-primary"
                defaultValue={date}
                required={isrequired}
                // onChange={(e) => onChangeFn('date_of_birth', e.target.value)}
                {...props}
            />
            {/* <Input id="dateOfBirth" name="dateOfBirth" type="date" className="h-9 focus-within:ring-primary" /> */}
            {/* <DatePicker day={day} month={month} year={year} /> */}
        </div>
    );
}
