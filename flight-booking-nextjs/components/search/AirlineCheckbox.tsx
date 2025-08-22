// components/AirlineCheckbox.tsx
import React from 'react';

interface AirlineCheckboxProps {
  label: string;
  value: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AirlineCheckbox: React.FC<AirlineCheckboxProps> = ({ label, value, name, checked, onChange }) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-5 w-5 relative z-[0]"
      />
      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
        <div className="h-2.5 relative inline-block z-[0]">
          {label}
        </div>
      </div>
    </div>
  );
};

export default AirlineCheckbox;
