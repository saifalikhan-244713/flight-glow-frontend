// components/search/StopsCheckbox.tsx
import React from 'react';

interface CheckboxProps {
    label: string;
    value: number;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StopsCheckbox: React.FC<CheckboxProps> = ({ label, value, checked, onChange }) => {
    return (
        <div className="self-stretch flex flex-row items-start justify-start gap-4">
            <input
                type="checkbox"
                name="stops[]"
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

export default StopsCheckbox;
