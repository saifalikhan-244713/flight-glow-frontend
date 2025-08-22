import type { NextPage } from "next";

export type FlightCardType = {
  className?: string;
};

const FlightCard: NextPage<FlightCardType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-3xs bg-white overflow-x-auto flex flex-row items-start justify-start py-[10px] pr-[38px] pl-[39px] gap-[30px] text-left text-5xl text-blue-2 font-kanit border-[0.7px] border-solid border-grey-6 ${className}`}
    >
      <div className="w-[156px] shrink-0 flex flex-col items-start justify-start gap-[6px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <img
            className="h-10 w-[60px] relative overflow-hidden shrink-0"
            alt=""
            src="/indigo.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[29px] px-0 pb-0">
            <div className="h-[15px] relative font-light inline-block min-w-[59px] whitespace-nowrap mq450:text-lgi">
              08:45
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[9px] text-sm">
          <div className="h-[9px] relative inline-block min-w-[40px]">
            Indigo
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[9px] text-xs text-grey-4">
          <div className="h-2 relative font-light inline-block min-w-[42px]">
            6E-6132
          </div>
        </div>
      </div>
      <div className="w-[164px] shrink-0 flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border text-center text-sm text-grey-3">
        <div className="self-stretch flex flex-col items-start justify-start gap-[9.5px]">
          <div className="flex flex-row items-start justify-start py-0 px-[62px]">
            <div className="h-[9px] relative font-light inline-block min-w-[39px]">
              1h 15m
            </div>
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-grey-5" />
          <div className="flex flex-row items-start justify-start py-0 px-20 text-left text-xs text-grey-4">
            <div className="h-2 relative font-light inline-block min-w-[49px]">
              Non-stop
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[29px] pb-0 pr-[7px] pl-0">
        <div className="h-[15px] relative font-light inline-block min-w-[58px] whitespace-nowrap mq450:text-lgi">
          09:55
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[29px] pb-0 pr-[7px] pl-0">
        <div className="relative font-medium inline-block min-w-[70px] whitespace-nowrap mq450:text-lgi">
          ₹4,298
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[17px] pb-0 pr-[7px] pl-0">
        <button className="cursor-pointer [border:none] py-2.5 px-[34px] bg-blue-2 rounded-3xs overflow-hidden flex flex-row items-start justify-start">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="relative text-sm leading-[20px] font-semibold font-kanit text-white text-center inline-block min-w-[65px]">
              Book Now
            </div>
          </div>
        </button>
      </div>
      <div className="flex flex-col items-start justify-start pt-8 px-0 pb-0 text-base text-basic-forms-checkbox-check-icon-soft-active-color">
        <div className="relative [text-decoration:underline] font-light inline-block min-w-[93px]">
          Flight Detail
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
