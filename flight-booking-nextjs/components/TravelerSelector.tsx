import React from "react";

interface TravelerSelectorProps {
  label: string;
  description: string;
  value: number;
  minValue: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  increment: (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => void;
  decrement: (setter: React.Dispatch<React.SetStateAction<number>>, value: number, min: number) => void;
}

const TravelerSelector: React.FC<TravelerSelectorProps> = ({
  label,
  description,
  value,
  minValue,
  setValue,
  increment,
  decrement,
}) => {
  return (
    <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-center py-0 px-4 gap-3 mq450:gap-[20px]">
      <div className="flex-1 relative text-left inline-block min-w-[55px]">
        <p className="m-0">{label}</p>
        <p className="m-0 text-sm text-grey-3">{description}</p>
      </div>
      <div className="h-[50px] w-24 flex flex-row items-center justify-center gap-[8px]">
        <img
          loading="lazy"
          src="minus-square.svg"
          className="shrink-0 self-stretch my-auto w-6 aspect-square cursor-pointer"
          onClick={() => decrement(setValue, value, minValue)}
        />
        <div className="flex-1 rounded-3xs bg-white flex flex-row items-center justify-start p-1">
          <div className="flex-1 relative mq450:text-base">{value}</div>
        </div>
        <img
          className="h-6 w-6 relative cursor-pointer"
          loading="lazy"
          alt=""
          src="/square-imge.svg"
          onClick={() => increment(setValue, value)}
        />
      </div>
    </div>
  );
};

export default TravelerSelector;
