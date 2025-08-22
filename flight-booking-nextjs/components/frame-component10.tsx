import type { NextPage } from "next";
import FrameComponent9 from "./frame-component9";

const FrameComponent10: NextPage = () => {
  return (
    <section className="w-[1440px] flex flex-row items-start justify-center py-0 px-5 box-border text-left text-base text-grey-3 font-kanit">
      <div className="w-[1240px] rounded-3xs bg-aliceblue-100 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border max-w-full">
        <FrameComponent9
          profile="Login Details"
          basicInfoForAFasterBookin="Manage your email address mobile number and password"
          propMinWidth="482px"
          profileBasicInfoContainerHeight="64px"
          profileBasicInfoContainerLineHeight="110.3%"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-full">
            <div className="flex-1 rounded-3xs bg-aliceblue-100 box-border flex flex-col items-start justify-start min-w-[435px] max-w-full border-b-[1px] border-solid border-grey-6 mq750:min-w-full">
              <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-between py-2.5 px-[25px] [row-gap:20px] max-w-full gap-[0px] border-b-[1px] border-solid border-grey-6 mq750:flex-wrap">
                <div className="h-9 w-[200px] relative flex items-center shrink-0">
                  EMAIL ID
                </div>
                <h3 className="m-0 w-[330px] relative text-5xl font-normal font-inherit text-blue-2 flex items-center shrink-0 whitespace-nowrap max-w-full mq450:text-lgi">
                  Jenny@gmail.com
                </h3>
              </div>
            </div>
            <div className="flex-1 rounded-3xs bg-aliceblue-100 box-border flex flex-col items-start justify-start min-w-[435px] max-w-full border-b-[1px] border-solid border-grey-6 mq750:min-w-full">
              <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-between py-2.5 px-[25px] [row-gap:20px] max-w-full gap-[0px] border-b-[1px] border-solid border-grey-6 mq750:flex-wrap">
                <div className="h-9 w-[200px] relative flex items-center shrink-0">
                  PASSWORD
                </div>
                <h3 className="m-0 w-[330px] relative text-5xl font-normal font-inherit text-blue-2 flex items-center shrink-0 max-w-full mq450:text-lgi">
                  *****
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent10;
