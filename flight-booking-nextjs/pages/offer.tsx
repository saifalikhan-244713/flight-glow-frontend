import type { NextPage } from "next";
import TopHeader from "../components/top-header";
import StarShaper from "../components/star-shaper";
import FormField from "../components/form-field";
import FooterContents from "../components/footer-contents";

const Offer: NextPage = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start tracking-[normal] text-left text-base text-white font-kanit">
      <TopHeader
        frameDivAlignSelf="stretch"
        frameDivWidth="unset"
        frameDivMargin="unset"
        frameDivRight="unset"
        frameDivLeft="unset"
      />
      <section className="self-stretch flex flex-row items-start justify-start bg-[url('/frame2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-17xl text-blue-2 font-kanit">
        <img
          className="h-[276px] w-[1440px] relative object-cover hidden min-h-[276px] max-w-full"
          alt=""
          src="/frame2x.png"
        />
        <div className="flex-1 flex flex-row items-start justify-center py-[126.5px] px-5 box-border max-w-full z-[1]">
          <h1 className="m-0 h-[23px] relative text-inherit font-medium font-inherit inline-block mq450:text-3xl mq750:text-10xl">{`Great Offers & Amazing Deals`}</h1>
        </div>
      </section>
      <section className="self-stretch bg-white flex flex-row items-start justify-center py-0 px-5 box-border gap-[18.4px] max-w-full mq1225:flex-wrap">
        <StarShaper />
        <div className="h-[988px] flex flex-col items-start justify-start pt-[60px] px-0 pb-0 box-border max-w-full mq750:pt-[25px] mq750:box-border mq1050:pt-[39px] mq1050:box-border">
          <FormField />
        </div>
      </section>
      <FooterContents />
      <div className="self-stretch bg-orange overflow-hidden flex flex-row items-start justify-center py-[26px] pr-5 pl-[21px]">
        <div className="h-2.5 relative inline-block">
          Copyright@ FlightGlow 2023. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Offer;
