import type { NextPage } from "next";

const ICICIApplication: NextPage = () => {
  return (
    <div className="self-stretch h-[132px] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-start p-5 relative gap-[12px_28px] text-left text-base text-grey font-kanit border-[1px] border-solid border-grey-6">
      <div className="h-[34px] w-[141px] !m-[0] absolute top-[20px] left-[20px] rounded-8xs bg-grey-7 flex flex-row items-start justify-start p-[5px] box-border gap-[10px]">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/onecard-2.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
          <div className="self-stretch h-2.5 relative font-medium inline-block">
            ONECARDEMI
          </div>
        </div>
      </div>
      <div className="h-2.5 w-11 absolute !m-[0] top-[20px] left-[191px] font-medium text-blue inline-block">
        Apply
      </div>
      <div className="h-[9px] w-[73px] absolute !m-[0] top-[66px] left-[20px] text-sm font-medium text-blue-2 inline-block">
        Flat 10% off
      </div>
      <div className="h-[25px] w-[211px] absolute !m-[0] top-[87px] left-[20px] text-sm leading-[16px] font-light text-grey-3 inline-block">
        <p className="m-0">Applicable on one card credit card</p>
        <p className="m-0 [text-decoration:underline]">Know more</p>
      </div>
    </div>
  );
};

export default ICICIApplication;
