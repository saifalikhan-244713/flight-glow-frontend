import React from 'react';

interface ButtonComponentProps {
  buttonLabel: string;
  buttonColor: string;
  buttonWidth: string;
  onClick: () => void;
}

const ReviewItineraryContinueButton: React.FC<ButtonComponentProps> = ({
  buttonLabel,
  buttonColor,
  buttonWidth,
  onClick
}) => {
  return (
    <div className="self-stretch rounded-t-3xs rounded-b-none overflow-hidden flex flex-row items-start justify-start box-border gap-[1px] max-w-full">
      <button
        className={`cursor-pointer [border:none] py-2.5 px-[44.5px] ${buttonColor} ${buttonWidth} rounded-3xs overflow-hidden shrink-0 flex flex-row items-center justify-center box-border`}
        onClick={onClick}
      >
        <div className="flex-1 relative text-sm leading-[20px] font-semibold font-kanit text-white text-center inline-block min-w-[27px]">
          {"Continue"}
        </div>
      </button>
    </div>
  );
};

export default ReviewItineraryContinueButton;
