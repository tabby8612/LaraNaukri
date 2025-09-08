import { Label } from '@radix-ui/react-label';

export default function CustomDatePicker({
    label,
    date,
    onChangeFn,
}: {
    label: string;
    date: string;
    onChangeFn: (column: string, val: string) => void;
}) {
    return (
        <div className="flex w-full flex-col">
            <Label htmlFor="date_of_birth" className="tracking-wider text-gray-500">
                {label}
            </Label>
            <input
                id={'date_of_birth'}
                name={'date_of_birth'}
                type="date"
                className="h-10 rounded border-2 border-gray-300 bg-white px-2 focus-within:ring-primary"
                value={date}
                onChange={(e) => onChangeFn('date_of_birth', e.target.value)}
            />
            {/* <Input id="dateOfBirth" name="dateOfBirth" type="date" className="h-9 focus-within:ring-primary" /> */}
            {/* <DatePicker day={day} month={month} year={year} /> */}
        </div>
    );
}
