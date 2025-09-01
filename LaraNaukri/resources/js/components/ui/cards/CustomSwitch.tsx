import { useState } from 'react';

const CustomSwitch = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
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
