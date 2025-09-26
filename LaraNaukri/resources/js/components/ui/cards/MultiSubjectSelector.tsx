'use client';

import { Subject } from '@/types';
import { Label } from '@radix-ui/react-label';
import { useEffect, useRef, useState } from 'react';

type Props = {
    data: Subject[] | [];
    setData: (attribute: string, val: Subject[]) => void;
};

export function MultiSubjectSelector({ data, setData }: Props) {
    const [subjects, setSubjects] = useState<Subject[] | []>([]);
    const [suggestions, setSuggestions] = useState<Subject[] | []>([]);
    const [selectedSubjects, setSelectedSubjects] = useState<Subject[] | []>(data);
    const searchRef = useRef<HTMLInputElement | null>(null);

    async function fetchData() {
        const response = await fetch(route('candidate.subjects'));
        const data = await response.json();

        setSubjects(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    function selectSubject(selectedSubject: Subject) {
        if (selectedSubjects.find((subject) => subject.id === selectedSubject.id)) return;

        setSelectedSubjects((prevSubjects) => {
            setData('subjects', [...prevSubjects, selectedSubject]);
            return [...prevSubjects, selectedSubject];
        });
    }

    function removeHandler(removeSubject: Subject) {
        const filteredSubjects = selectedSubjects.filter((subject) => subject.id !== removeSubject.id);

        setData('subjects', filteredSubjects);
        setSelectedSubjects(filteredSubjects);
    }

    return (
        <div
            className="relative flex flex-col"
            onClick={() => {
                if (suggestions) setSuggestions([]);
            }}
        >
            <Label className="tracking-wider text-gray-500">Select Major Subjects</Label>
            <div className="flex min-h-10 rounded border border-gray-400 focus-within:outline-2 focus-within:outline-primary">
                <ul className="flex flex-row flex-wrap overflow-x-hidden whitespace-nowrap">
                    {selectedSubjects.map((subject) => (
                        <li
                            className="m-1 flex items-center justify-between gap-3 rounded-full bg-gray-400 px-2 py-1 text-xs whitespace-nowrap"
                            key={subject.id}
                        >
                            <span className="">{subject.name}</span>{' '}
                            <span className="cursor-pointer hover:text-white" onClick={() => removeHandler(subject)}>
                                x
                            </span>{' '}
                        </li>
                    ))}
                    <li>
                        <input
                            type="input"
                            className="m-1 w-20 rounded border-0 border-gray-400 px-2 py-1 text-sm focus-visible:outline-0"
                            ref={searchRef}
                            onChange={(e) => {
                                const tempSuggestions = subjects.filter((subject) =>
                                    subject.name.toLowerCase().includes(e.target.value.toLowerCase()),
                                );
                                setSuggestions(tempSuggestions);
                            }}
                        />
                    </li>
                </ul>

                {suggestions.length > 0 && (
                    <ul className="absolute top-full max-h-56 w-full overflow-y-scroll rounded border-2 border-gray-300 bg-white">
                        {suggestions.length < 0 && <li className="p-2">No Related Subject Found</li>}
                        {suggestions.length > 0 &&
                            suggestions.map((subject) => (
                                <li
                                    className="cursor-pointer items-center rounded px-1 py-1 text-gray-500 hover:bg-primary hover:text-white"
                                    key={subject.id}
                                    onClick={() => {
                                        selectSubject(subject);
                                        setSuggestions([]);
                                        searchRef.current!.value = '';
                                        searchRef.current?.focus();
                                    }}
                                >
                                    {subject.name}
                                </li>
                            ))}
                    </ul>
                )}
                <div className=""></div>
            </div>
        </div>
    );
}
