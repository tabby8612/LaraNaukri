import { DegreeType } from '@/types';
import { useEffect, useState } from 'react';
import { Label } from '../UnusedUI/label';
import CustomSelectField from './CustomSelectField';

type Props = {
    setData: (attribute: string, value: string) => void;
    DegreeLevelID: string;
    DegreeTypeID: string;
};

export default function DegreeLevelsTypes({ setData, DegreeLevelID, DegreeTypeID }: Props) {
    const [degreeTypes, setDegreeTypes] = useState<DegreeType[] | []>([]);

    async function DegreeLevelHandler(id: string) {
        if (setData) setData('degree_level_id', id);

        const response = await fetch(
            route('candidate.degreeTypes', {
                degreeLevelID: id,
            }),
        );

        const data = await response.json();
        console.log(data);

        setDegreeTypes(data);
    }

    useEffect(() => {
        DegreeLevelHandler(DegreeLevelID);
    }, []);

    return (
        <>
            <CustomSelectField
                label="Degree Level"
                name="degree_level_id"
                fetchTable="degree_levels"
                selectedID={+DegreeLevelID}
                onChange={(e) => DegreeLevelHandler(e.target.value)}
            />

            <div className="w-full">
                <Label htmlFor="degree_type_id" className="tracking-wider text-gray-500">
                    Degree Type
                </Label>
                <select
                    id="degree_type_id"
                    value={DegreeTypeID}
                    className="h-10 w-full rounded border-2 border-gray-300 bg-white focus-visible:outline-2 focus-visible:outline-primary"
                    onChange={(e) => setData('degree_type_id', e.target.value)}
                >
                    <option value="0">Select Degree Type</option>
                    {degreeTypes.length > 0 &&
                        degreeTypes.map((item) => (
                            <option value={item.id} className="hover:bg-primary hover:text-white" key={item.id}>
                                {item.name}
                            </option>
                        ))}
                </select>
            </div>
        </>
    );
}
