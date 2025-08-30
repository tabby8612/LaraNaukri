import { City, Country } from '@/types';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../UnusedUI/dropdown-menu';

type FilterProps = {
    countries: Country[];
};

export default function FilterDropDown({ countries }: FilterProps) {
    const [selectedCountry, setSelectedCountry] = useState(``);
    const [selectedCity, setSelectedCity] = useState(``);

    const [cities, setCities] = useState<City[] | null>(null);

    async function getCities(id: string) {
        const response = await fetch(
            route('related.cities', {
                country_id: id,
            }),
        );
        const data = await response.json();

        setCities(data);
    }

    return (
        <>
            <div className="flex flex-col gap-2">
                <p className="mt-3 font-semibold">Select Country</p>
                <DropdownMenu>
                    <DropdownMenuTrigger
                        className="relative flex w-full justify-between rounded-lg border-2 border-stone-200 bg-white px-2 py-2 text-left"
                        name="country"
                        datatype="country"
                        value={selectedCountry}
                    >
                        <p>{selectedCountry ? selectedCountry : 'Select Country'}</p>
                        <ChevronDown />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-2xs translate-y-[-5px] bg-white">
                        {countries.map((country) => (
                            <DropdownMenuItem
                                className={`hover:bg-primary/10 hover:text-black ${selectedCountry === country.name && 'bg-primary text-white'} `}
                                data-selected={selectedCountry === country.name ? 'true' : 'false'}
                                datatype="country"
                                onClick={() => {
                                    setSelectedCountry(country.name);
                                    getCities(country.id);
                                    setSelectedCity('');
                                }}
                                key={country.id}
                            >
                                {country.name}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="flex flex-col gap-2">
                <p className="mt-3 font-semibold">Select City</p>
                <DropdownMenu>
                    <DropdownMenuTrigger
                        className="relative flex w-full justify-between rounded-lg border-2 border-stone-200 bg-white px-2 py-2 text-left"
                        name="city"
                        datatype="city"
                        value={selectedCity ? selectedCity : ''}
                    >
                        <p>{selectedCity ? selectedCity : 'Select City'}</p>
                        <ChevronDown />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-2xs translate-y-[-5px] bg-white">
                        {cities &&
                            cities.map((city) => (
                                <DropdownMenuItem
                                    className="hover:bg-primary/10"
                                    onClick={() => {
                                        setSelectedCity(city.name);
                                    }}
                                    key={city.id}
                                >
                                    {city.name}
                                </DropdownMenuItem>
                            ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    );
}
