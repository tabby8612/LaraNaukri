'use client';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export function DatePicker({ year, month, day }: { year: number; month: number; day: number }) {
    const nowDate = new Date(year, month - 1, day, 17, 0, 0, 0);
    const [date, setDate] = React.useState<Date | undefined>(nowDate);
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    data-empty={!date}
                    className="data-[empty=true]:text-muted-foreground w-full justify-start bg-white text-left font-normal"
                >
                    <CalendarIcon />
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-white p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    defaultMonth={new Date(year, month - 1, day)}
                    required={false}
                    className="w-full px-4 data-[selected-single=true]:text-white data-[selected='true']:text-white"
                    captionLayout="dropdown"
                />
            </PopoverContent>
        </Popover>
    );
}
