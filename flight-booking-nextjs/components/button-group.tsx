import type { NextPage } from "next";

const ButtonGroup: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-center p-[5px] gap-[4px] mq750:flex-wrap">
      <button className="cursor-pointer [border:none] py-[11px] px-6 bg-blue-2 flex-[0.7049] rounded-3xs overflow-hidden flex flex-col items-center justify-center box-border min-w-[122px] max-w-[134px] whitespace-nowrap hover:bg-darkslategray mq450:flex-1">
        <div className="self-stretch relative text-base leading-[17px] font-kanit text-white text-center">
          Regular Fares
        </div>
      </button>
      <button className="cursor-pointer [border:none] py-[11px] px-1.5 bg-gainsboro-100 flex-1 rounded-3xs overflow-hidden flex flex-row items-center justify-center box-border min-w-[122px] max-w-[134px] whitespace-nowrap hover:bg-lightgray-200">
        <div className="flex-1 relative text-base leading-[17px] font-kanit text-blue-2 text-center">
          Armed Forces Fares
        </div>
      </button>
      <button className="cursor-pointer [border:none] py-[11px] px-[30px] bg-gainsboro-100 flex-[0.6066] rounded-3xs overflow-hidden flex flex-row items-center justify-center box-border min-w-[122px] max-w-[134px] whitespace-nowrap hover:bg-lightgray-200 mq450:flex-1">
        <div className="flex-1 relative text-base leading-[17px] font-kanit text-blue-2 text-center">
          Student Fares
        </div>
      </button>
      <button className="cursor-pointer [border:none] py-[11px] px-3.5 bg-gainsboro-100 flex-[0.8689] rounded-3xs overflow-hidden flex flex-row items-center justify-center box-border min-w-[122px] max-w-[134px] whitespace-nowrap hover:bg-lightgray-200 mq450:flex-1">
        <div className="flex-1 relative text-base leading-[17px] font-kanit text-blue-2 text-center">
          Senior Citizen Fares
        </div>
      </button>
    </div>
  );
};

export default ButtonGroup;
