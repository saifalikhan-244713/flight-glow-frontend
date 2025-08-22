import React from "react";
import TravelerSelector from "./TravelerSelector"; // Import the TravelerSelector component

// Define the interface for the props
interface TravelerDropdownProps {
    isVisible: boolean;
    adult: number;
    children: number;
    infants: number;
    setAdults: React.Dispatch<React.SetStateAction<number>>;
    setChildren: React.Dispatch<React.SetStateAction<number>>;
    setInfants: React.Dispatch<React.SetStateAction<number>>;
    increment: (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => void;
    decrement: (setter: React.Dispatch<React.SetStateAction<number>>, value: number, min: number) => void;
    toggleDropdownTraveller: () => void;
}

const TravelerDropdown: React.FC<TravelerDropdownProps> = ({
    isVisible,
    adult,
    children,
    infants,
    setAdults,
    setChildren,
    setInfants,
    increment,
    decrement,
    toggleDropdownTraveller,
}) => {
    if (!isVisible) return null; // Return null if not visible

    return (
        <div id="travellerDropHome" className="top-[60px] absolute rounded-3xs  bg-lightblue shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)] flex flex-col items-center justify-start py-4 px-0 box-border gap-4 max-w-full z-[1] text-center text-base font-medium font-kanit text-blue-2">
            {/* Adult Selector */}
            <TravelerSelector
                label="ADULTS"
                description="(12 + Years)"
                value={adult}
                minValue={1}
                setValue={setAdults}
                increment={increment}
                decrement={decrement}
            />

            {/* Children Selector */}
            <TravelerSelector
                label="CHILDREN"
                description="(2 - 12 Years)"
                value={children}
                minValue={0}
                setValue={setChildren}
                increment={increment}
                decrement={decrement}
            />
            {/* Infants Selector */}
            <TravelerSelector
                label="INFANTS"
                description="(Below 2 Years)"
                value={infants}
                minValue={0}
                setValue={setInfants}
                increment={increment}
                decrement={decrement}
            />

            {/* Done Button */}
            <button className="primaryBtn" onClick={toggleDropdownTraveller}>
                DONE
            </button>
        </div>
    );
};

export default TravelerDropdown;
