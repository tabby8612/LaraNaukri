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
    isrequired?: boolean;
    setData?: (attribute: string, val: string) => void;
};

export default function CountryStateCity({ countryID, stateID, cityID, isrequired = false, setData }: Props) {
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
        if (setData) setData('country_id', e.target.value);

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
        if (setData) setData('state_id', e.target.value);

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
                value={countryID}
                onChange={(e) => countriesHandler(e)}
                isrequired={isrequired}
            />

            <div className="w-full">
                <Label
                    htmlFor="state_id"
                    className={`tracking-wider text-gray-500 ${isrequired && "after:ml-0.5 after:text-red-500 after:content-['*']"} `}
                >
                    State
                </Label>
                <select
                    id="state_id"
                    name="state_id"
                    className="h-10 w-full rounded border-2 border-gray-300 bg-white focus-visible:outline-2 focus-visible:outline-primary"
                    onChange={(e) => statesHandler(e)}
                    required={isrequired}
                    value={stateID}
                >
                    <option value="0">Select State</option>
                    {states.length > 0 &&
                        states.map((item) => (
                            <option value={item.id} className="hover:bg-primary hover:text-white" key={item.id}>
                                {item.name}
                            </option>
                        ))}
                </select>
            </div>

            <div className="w-full">
                <Label
                    htmlFor="city_id"
                    className={`tracking-wider text-gray-500 ${isrequired && "after:ml-0.5 after:text-red-500 after:content-['*']"} `}
                >
                    City
                </Label>
                <select
                    id="city_id"
                    name="city_id"
                    className="h-10 w-full rounded border-2 border-gray-300 bg-white focus-visible:outline-2 focus-visible:outline-primary"
                    required={isrequired}
                    value={cityID}
                    onChange={(e) => {
                        if (setData) setData('city_id', e.target.value);
                    }}
                >
                    <option value="0">Select City</option>
                    {cities.length > 0 &&
                        cities.map((item) => (
                            <option value={item.id} className="hover:bg-primary hover:text-white" key={item.id}>
                                {item.name}
                            </option>
                        ))}
                </select>
            </div>
        </>
    );
}
