import type { NextPage } from "next";

const FrameComponent11: NextPage = () => {
  return (
    <div className="w-[1440px] flex flex-row items-start justify-center py-0 pr-[22px] pl-5 box-border">
      <div className="w-[1238px] flex flex-row items-start justify-start max-w-full">
        <button className="cursor-pointer [border:none] pt-[26px] pb-[25px] pr-5 pl-[21px] bg-[transparent] flex-1 box-border flex flex-row items-start justify-center min-w-[402px] max-w-full border-b-[3px] border-solid border-blue hover:bg-dodgerblue-200">
          <div className="h-[66px] w-[619px] relative box-border hidden max-w-full border-b-[3px] border-solid border-blue" />
          <div className="h-[15px] w-[286px] relative text-5xl font-medium font-kanit text-blue text-center inline-block z-[1] mq450:text-lgi">{`PROFILE & OTHER DETAILS`}</div>
        </button>
        <button className="cursor-pointer [border:none] pt-[26px] px-5 pb-[25px] bg-[transparent] flex-1 box-border flex flex-row items-start justify-center min-w-[402px] max-w-full z-[1] border-b-[1px] border-solid border-grey-3">
          <div className="h-[15px] relative text-5xl font-kanit text-grey-3 text-left inline-block mq450:text-lgi">{`SAVE TRAVELLER(S) & GST DETAILS`}</div>
          <div className="h-[66px] w-[619px] relative box-border hidden max-w-full border-b-[1px] border-solid border-grey-3" />
        </button>
      </div>
    </div>
  );
};

export default FrameComponent11;
