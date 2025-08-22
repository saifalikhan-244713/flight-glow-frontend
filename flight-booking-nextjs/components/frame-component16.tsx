import type { NextPage } from "next";

const FrameComponent16: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start relative text-left text-sm text-blue-2 font-kanit">
      <div className="h-[9px] absolute !m-[0] bottom-[57px] left-[20px] font-medium inline-block min-w-[73px]">
        Flat 10% off
      </div>
      <div className="flex-1 rounded-3xs overflow-hidden flex flex-col items-start justify-start py-5 px-[19px] gap-[33px] z-[1] text-base text-blue border-[1px] border-solid border-grey-6 mq450:gap-[16px_33px]">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
          <button className="cursor-pointer [border:none] p-[5px] bg-grey-7 h-[34px] rounded-8xs flex flex-row items-center justify-start box-border gap-[10px] hover:bg-lightgray-100">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/bankofbaroda.svg"
            />
            <div className="h-2.5 relative text-base font-medium font-kanit text-grey text-left inline-block min-w-[52px]">
              BOBDC
            </div>
          </button>
          <div className="h-2.5 relative font-medium inline-block min-w-[44px]">
            Apply
          </div>
        </div>
        <div className="relative text-sm tracking-[-0.04em] leading-[16px] font-light text-grey-3">
          <p className="m-0">Applicable on Bank of Baroda Debit</p>
          <p className="m-0 [text-decoration:underline]">Know more</p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent16;
