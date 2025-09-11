import { Label } from '@radix-ui/react-label';
import { InputHTMLAttributes } from 'react';

export default function CustomDatePicker({
    label,
    date,
    ...props
}: {
    label: string;
    date: string;
} & InputHTMLAttributes<HTMLDataElement>) {
    return (
        <div className="flex w-full flex-col">
            <Label htmlFor="" className="tracking-wider text-gray-500">
                {label}
            </Label>
            <input
                type="date"
                className="h-10 rounded border-2 border-gray-300 bg-white px-2 focus-within:ring-primary"
                defaultValue={date}
                // onChange={(e) => onChangeFn('date_of_birth', e.target.value)}
                {...props}
            />
            {/* <Input id="dateOfBirth" name="dateOfBirth" type="date" className="h-9 focus-within:ring-primary" /> */}
            {/* <DatePicker day={day} month={month} year={year} /> */}
        </div>
    );
}
