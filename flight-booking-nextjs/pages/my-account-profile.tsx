import type { NextPage } from "next";
import FrameComponent12 from "../components/frame-component12";
import FrameComponent11 from "../components/frame-component11";
import FrameComponent10 from "../components/frame-component10";
import FrameComponent8 from "../components/frame-component8";
import FrameComponent7 from "../components/frame-component7";
import FooterContents1 from "../components/footer-contents1";

const MyAccountProfileLogin: NextPage = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start tracking-[normal] text-left text-base text-white font-kanit">
      <div className="w-[1440px] m-auto bg-white overflow-x-auto flex flex-col items-start justify-start pt-0 px-0 pb-[60px] box-border gap-[60px] max-w-full mq1050:pb-[25px] mq1050:box-border mq1225:pb-[39px] mq1225:box-border mq750:gap-[30px_60px] mq450:pb-5 mq450:box-border">
        <FrameComponent12 />
        <FrameComponent11 />
        <FrameComponent10 />
        <FrameComponent8 />
        <FrameComponent7 />
      </div>
      <FooterContents1 />
      <div className="self-stretch bg-orange overflow-hidden flex flex-row items-start justify-center py-[26px] pr-5 pl-[21px]">
        <div className="h-2.5 relative inline-block">
          Copyright@ FlightGlow 2023. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default MyAccountProfileLogin;
