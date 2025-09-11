import { Field, Radio, RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import { Label } from '../UnusedUI/label';

type Props = {
    options: string[];
    label: string;
    selectedText: string;
    onChangeFn: (selectedValue: string) => void;
};

export default function CustomRadioGroup({ options, label, selectedText, onChangeFn }: Props) {
    const [selected, setSelected] = useState(selectedText);

    function changeHandler(val: string) {
        setSelected(val);
        onChangeFn(val);
    }

    return (
        <div>
            <Label className="text-gray-500">{label}</Label>
            <RadioGroup value={selected} onChange={(val) => changeHandler(val)} aria-label="default option">
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
