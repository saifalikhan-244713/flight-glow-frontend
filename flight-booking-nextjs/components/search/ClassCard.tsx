// ClassCard.tsx
import React from 'react';

interface ClassCardProps {
    className: string;
    label: string;
    onClick: (className: string) => void;
}

const ClassCard: React.FC<ClassCardProps> = ({ className, label, onClick }) => {
    return (
        <div
            className=" cursor-pointer py-2.5 px-[18px] bg-white rounded-3xs overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-blue-2"
            onClick={() => onClick(className)}
        >
            <div className="w-[119px] relative text-sm leading-[20px] font-kanit text-blue-2 text-center flex items-center justify-center min-w-[119px]">
                {label}
            </div>
        </div>
    );
};

export default ClassCard;
