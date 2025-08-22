import React from 'react';

interface ButtonProps {
  text: string;
  customClasses: string;
  minWidth: string;
  onClick: () => void;
}

const ButtonMyTrip: React.FC<ButtonProps> = ({ text, customClasses, minWidth, onClick }) => {
  return (
    <button
      className={`h-[66px] cursor-pointer py-[25px] px-5 bg-[transparent] flex-1 box-border flex flex-row items-center justify-center ${minWidth} max-w-full ${customClasses}`}
      onClick={onClick}
    >
      <div className="w-[410px] relative box-border hidden max-w-full border-b-[1px] border-solid border-grey-3" />
      <div className={`relative text-5xl font-kanit text-left inline-block z-[1] mq450:text-lgi`}>
        {text}
      </div>
    </button>
  );
};

export default ButtonMyTrip;
