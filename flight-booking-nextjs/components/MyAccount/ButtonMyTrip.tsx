import React from 'react';

interface ButtonProps {
  text: string;
  customClasses: string;
  minWidth: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, customClasses, minWidth, onClick }) => {
  return (
    <button
      className={`cursor-pointer pt-[26px] px-5 pb-[25px] bg-[transparent] flex-1 box-border flex flex-row items-start justify-center ${minWidth} max-w-full ${customClasses}`}
      onClick={onClick}
    >
      <div className="h-[66px] w-[410px] relative box-border hidden max-w-full border-b-[1px] border-solid border-grey-3" />
      <div className={`h-[15px] relative text-5xl font-kanit text-left inline-block z-[1] mq450:text-lgi`}>
        {text}
      </div>
    </button>
  );
};

export default Button;
