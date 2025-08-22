// components/SortButton.tsx
import React from 'react';

interface SortButtonProps {
  label: string;
  selected: boolean;
  imgSrc: string;
  imgSrcSelected: string;
  onClick: () => void;
}

const SortButton: React.FC<SortButtonProps> = ({
  label,
  selected,
  imgSrc,
  imgSrcSelected,
  onClick,
}) => {
  return (
    <button
      className={`flex cursor-pointer gap-1 whitespace-nowrap rounded-lg border-solid px-8 py-3 font-inherit mq750:px-2 ${
        selected
          ? 'border-b-[3px] border-sky-600 bg-slate-100 text-sky-600'
          : ''
      }`}
      onClick={onClick}
    >
      <img
        loading="lazy"
        src={selected ? imgSrcSelected : imgSrc}
        className="aspect-square w-6 shrink-0"
      />
      <div className="my-auto text-lg font-medium">{label}</div>
    </button>
  );
};

export default SortButton;
