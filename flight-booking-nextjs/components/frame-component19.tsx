import type { NextPage } from "next";

interface FrameComponent19Props {
  iconSrc: string;
  buttonText: string;
  flightNumber: string;
  aircraftType: string;
}

const FrameComponent19: NextPage<FrameComponent19Props> = ({
  iconSrc,
  buttonText,
  flightNumber,
  aircraftType
}) => {
  return (
    <div className="w-[530px] flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border max-w-full">
      <div className="flex flex-row items-center justify-start w-full mb-3">
        <img className="h-6 w-6 relative mr-2" alt="" src={iconSrc} />
        <div className="text-lg font-medium font-kanit text-gray-800">{buttonText}</div>
      </div>
      <div className="flex flex-row items-start justify-between w-full">
        <div className="flex-1">
          <div className="text-md font-medium text-gray-700">Flight Number:</div>
          <div className="text-md text-gray-600">{flightNumber}</div>
        </div>
        <div className="flex-1">
          <div className="text-md font-medium text-gray-700">Aircraft Type:</div>
          <div className="text-md text-gray-600">{aircraftType}</div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-4 px-[26px] bg-blue-2 flex-1 rounded-3xs overflow-hidden flex flex-row items-center justify-center box-border mt-3">
        <div className="text-lg leading-[28px] font-medium font-kanit text-white text-center">
          Continue
        </div>
      </button>
    </div>
  );
};

export default FrameComponent19;
