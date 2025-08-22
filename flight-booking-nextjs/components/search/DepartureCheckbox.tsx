// components/search/DepartureCheckbox.tsx
import React from 'react';

interface DepartureCheckboxProps {
    label: string;
    value: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DepartureCheckbox: React.FC<DepartureCheckboxProps> = ({ label, value, checked, onChange }) => {
    return (
        <div className="self-stretch flex flex-row items-start justify-start gap-4">
            <input
                type="checkbox"
                name="departure_time[]"
                value={value}
                checked={checked}
                onChange={onChange}
                className="h-5 w-5 relative z-[0]"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="h-2.5 relative inline-block z-[0]">{label}</div>
            </div>
        </div>
    );
};

export default DepartureCheckbox;
