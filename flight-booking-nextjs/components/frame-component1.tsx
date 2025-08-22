import type { NextPage } from "next";

const FrameComponent1: NextPage = () => {
  return (
    <div className="w-[1240px] h-[63px] relative max-w-full text-left text-17xl text-white font-kanit mq1225:h-auto mq1225:min-h-[63]">
      <img
        className="absolute top-[0px] left-[130px] w-12 h-6"
        alt=""
        src="/vector.svg"
      />
      <div className="absolute top-[9px] left-[0px] w-full flex flex-row items-start justify-between max-w-full gap-[20px] mq1225:flex-wrap">
        <h2 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-3xl mq750:text-10xl">
          FlightGlow
        </h2>
        <div className="w-[981px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border max-w-full text-xl text-orange">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq1050:flex-wrap">
            <div className="h-[13px] relative inline-block min-w-[57px] mq450:text-base">
              About
            </div>
            <div className="h-[13px] relative inline-block min-w-[54px] mq450:text-base">
              Offers
            </div>
            <div className="h-[13px] relative inline-block min-w-[72px] mq450:text-base">
              Support
            </div>
            <div className="h-[13px] relative inline-block min-w-[127px] mq450:text-base">
              Privacy Policy
            </div>
            <div className="h-[13px] relative inline-block mq450:text-base">{`Terms & Conditions`}</div>
            <div className="h-[13px] relative inline-block mq450:text-base">
              Customer Care
            </div>
            <div className="h-[13px] relative inline-block min-w-[77px] mq450:text-base">
              Site Map
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
