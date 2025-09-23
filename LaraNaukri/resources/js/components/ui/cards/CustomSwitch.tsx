import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const CustomSwitch = () => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        async function getStatus() {
            const response = await fetch(route('candidate.work.status'));
            const data = await response.json();
            setIsChecked(data.status);
        }

        getStatus();
    }, []);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);

        router.put(
            route('candidate.update.status'),
            {
                status: !isChecked,
            },
            {
                preserveScroll: true,
                preserveState: true,
                showProgress: false,
            },
        );
    };

    return (
        <>
            <label className="mt-2 flex cursor-pointer items-center select-none">
                <div className="relative">
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} className="sr-only" />
                    <div className={`box block h-8 w-20 rounded-full ${isChecked ? 'bg-primary' : 'bg-gray-300'}`}></div>
                    <div
                        className={`absolute top-1 left-1 flex h-6 w-6 items-center rounded-full bg-white transition ${
                            isChecked ? 'translate-x-12' : ''
                        }`}
                    ></div>
                    {isChecked ? (
                        <div className="absolute top-1 left-1 ml-2 text-white">
                            <p>Yes</p>
                        </div>
                    ) : (
                        <div className="absolute top-1 right-1 mr-2 text-black">
                            <p>No</p>
                        </div>
                    )}
                </div>
            </label>
        </>
    );
};

export default CustomSwitch;
