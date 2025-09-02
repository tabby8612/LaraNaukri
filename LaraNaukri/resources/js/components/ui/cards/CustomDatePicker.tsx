import { Label } from '../UnusedUI/label';
import { DatePicker } from './DatePicker';

export default function CustomDatePicker({ label, year, month, day }: { label: string; year: number; month: number; day: number }) {
    return (
        <div className="mt-1 flex w-full flex-col gap-1">
            <Label htmlFor="dateOfBirth" className="tracking-wider text-gray-500">
                {label}
            </Label>
            {/* <Input id="dateOfBirth" name="dateOfBirth" type="date" className="h-9 focus-within:ring-primary" /> */}
            <DatePicker day={day} month={month} year={year} />
        </div>
    );
}
