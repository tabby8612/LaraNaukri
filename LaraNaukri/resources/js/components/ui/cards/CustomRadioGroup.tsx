import { Field, Radio, RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import { Label } from '../UnusedUI/label';

type Props = {
    options: string[];
    label: string;
    selectedText: string;
    onChangeFn: (selectedValue: string) => void;
    layout?: 'vertical' | 'horizontal';
};

export default function CustomRadioGroup({ options, label, selectedText, onChangeFn, layout = 'vertical' }: Props) {
    const [selected, setSelected] = useState(selectedText);

    function changeHandler(val: string) {
        setSelected(val);
        onChangeFn(val);
    }

    return (
        <>
            <Label className="text-gray-500">{label}</Label>
            <RadioGroup value={selected} onChange={(val) => changeHandler(val)} aria-label="default option">
                <div className={`flex ${layout === 'vertical' ? 'flex-col gap-1' : 'gap-5'}`}>
                    {options.map((option) => (
                        <Field className="mt-2 flex gap-2" key={option}>
                            <Radio
                                id={option}
                                value={option}
                                className="group flex size-5 items-center justify-center rounded-full border bg-white data-checked:bg-primary"
                            >
                                <span className="invisible size-2 rounded-full bg-white group-data-checked:visible" />
                            </Radio>
                            <Label htmlFor={option}>{option}</Label>
                        </Field>
                    ))}
                </div>
            </RadioGroup>
        </>
    );
}
