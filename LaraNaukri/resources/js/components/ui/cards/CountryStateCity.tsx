import { ChangeEvent, useEffect, useState } from 'react';
import { Label } from '../UnusedUI/label';
import CustomSelectField from './CustomSelectField';

type Item = {
    id: number;
    name: string;
};

type Props = {
    countryID: string;
    stateID: number;
    cityID: number;
};

export default function CountryStateCity({ countryID, stateID, cityID }: Props) {
    const [states, setStates] = useState<Item[] | []>([]);
    const [cities, setCities] = useState<Item[] | []>([]);

    useEffect(() => {
        async function fetchStates(countryID: string) {
            const response = await fetch(
                route('related.states', {
                    countryID: countryID,
                }),
            );

            const data = await response.json();

            setStates(data);
        }

        async function fetchCities(stateID: string) {
            const response = await fetch(
                route('related.cities', {
                    stateID: stateID,
                }),
            );

            const data = await response.json();

            setCities(data);
        }

        if (countryID) {
            fetchStates(countryID);
            fetchCities(`${stateID}`);
        }
    }, []);

    async function countriesHandler(e: ChangeEvent<HTMLSelectElement>) {
        const response = await fetch(
            route('related.states', {
                countryID: e.target.value,
            }),
        );

        const data = await response.json();

        setStates(data);
        setCities([]);
    }

    async function statesHandler(e: ChangeEvent<HTMLSelectElement>) {
        const response = await fetch(
            route('related.cities', {
                stateID: e.target.value,
            }),
        );

        const data = await response.json();

        setCities(data);
    }

    return (
        <>
            <CustomSelectField
                label="Country"
                name="country_id"
                fetchTable="countries"
                selectedID={+countryID}
                onChange={(e) => countriesHandler(e)}
            />

            <div className="w-full">
                <Label htmlFor="" className="tracking-wider text-gray-500">
                    State
                </Label>
                <select
                    className="h-10 w-full rounded border-2 border-gray-300 bg-white focus-visible:outline-2 focus-visible:outline-primary"
                    onChange={(e) => statesHandler(e)}
                >
                    <option value="0">Select State</option>
                    {states.length > 0 &&
                        states.map((item) => (
                            <option value={item.id} className="hover:bg-primary hover:text-white" key={item.id} selected={item.id === stateID}>
                                {item.name}
                            </option>
                        ))}
                </select>
            </div>

            <div className="w-full">
                <Label htmlFor="" className="tracking-wider text-gray-500">
                    City
                </Label>
                <select className="h-10 w-full rounded border-2 border-gray-300 bg-white focus-visible:outline-2 focus-visible:outline-primary">
                    <option value="0">Select City</option>
                    {cities.length > 0 &&
                        cities.map((item) => (
                            <option value={item.id} className="hover:bg-primary hover:text-white" key={item.id} selected={item.id === cityID}>
                                {item.name}
                            </option>
                        ))}
                </select>
            </div>
        </>
    );
}
