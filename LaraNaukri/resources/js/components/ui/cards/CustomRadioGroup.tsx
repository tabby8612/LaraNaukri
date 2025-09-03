import { Field, Radio, RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import { Label } from '../UnusedUI/label';

export default function CustomRadioGroup({ options, label }: { options: string[]; label: string }) {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Label className="text-gray-500">{label}</Label>
            <RadioGroup value={selected} onChange={setSelected} aria-label="default option">
                {options.map((option) => (
                    <Field className="mt-2 flex gap-2" key={option}>
                        <Radio
                            value={option}
                            className="group flex size-5 items-center justify-center rounded-full border bg-white data-checked:bg-primary"
                        >
                            <span className="invisible size-2 rounded-full bg-white group-data-checked:visible" />
                        </Radio>
                        <Label>{option}</Label>
                    </Field>
                ))}
            </RadioGroup>
        </div>
    );
}
