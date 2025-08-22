import type { NextPage } from "next";
import FrameComponent1 from "./frame-component1";

const FrameComponent: NextPage = () => {
  return (
    <footer className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-17xl text-white font-kanit">
      <div className="self-stretch bg-blue-2 flex flex-col items-center justify-start py-[60px] px-5 box-border gap-[43.5px] max-w-full mq750:gap-[22px_43.5px]">
        <FrameComponent1 />
        <div className="w-[1241px] h-px relative box-border opacity-[0.3] max-w-full border-t-[1px] border-solid border-white" />
        <div className="w-[1240px] flex flex-row items-start justify-between max-w-full gap-[20px] text-xl text-orange mq1050:flex-wrap">
          <div className="flex flex-row items-start justify-center gap-[20px] max-w-full mq750:flex-wrap">
            <img
              className="h-10 w-[62px] relative rounded-3xl min-h-[40px]"
              loading="lazy"
              alt=""
              src="/dark-mode.svg"
            />
            <img
              className="h-10 w-[62px] relative rounded-3xl min-h-[40px]"
              alt=""
              src="/dark-mode-1.svg"
            />
            <img
              className="h-10 w-[62px] relative rounded-3xl min-h-[40px]"
              alt=""
              src="/dark-mode-2.svg"
            />
            <img
              className="h-10 w-[62px] relative rounded-3xl min-h-[40px]"
              alt=""
              src="/dark-mode-3.svg"
            />
            <img
              className="h-10 w-[62px] relative rounded-3xl min-h-[40px]"
              alt=""
              src="/dark-mode-4.svg"
            />
            <img
              className="h-10 w-[62px] relative rounded-3xl min-h-[40px]"
              alt=""
              src="/dark-mode-5.svg"
            />
            <img
              className="h-10 w-[62px] relative rounded-3xl min-h-[40px]"
              alt=""
              src="/dark-mode-6.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-full">
            <div className="flex flex-row items-start justify-center gap-[20px] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                <div className="h-[13px] relative inline-block mq450:text-base">
                  Connect With Us:
                </div>
              </div>
              <img
                className="h-8 w-8 relative object-cover min-h-[32px]"
                loading="lazy"
                alt=""
                src="/mask-group@2x.png"
              />
              <img
                className="h-8 w-8 relative object-cover min-h-[32px]"
                alt=""
                src="/mask-group-1@2x.png"
              />
              <img
                className="h-8 w-8 relative object-cover min-h-[32px]"
                alt=""
                src="/mask-group-2@2x.png"
              />
              <img
                className="h-8 w-8 relative object-cover min-h-[32px]"
                alt=""
                src="/mask-group-3@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-orange overflow-hidden flex flex-row items-start justify-center py-[26px] pr-5 pl-[21px] z-[1] text-base">
        <div className="h-2.5 relative inline-block">
          Copyright@ FlightGlow 2023. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
