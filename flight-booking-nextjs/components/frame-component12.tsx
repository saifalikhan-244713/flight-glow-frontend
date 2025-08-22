import type { NextPage } from "next";
import TopHeader2 from "./top-header2";
import BannerSection from "./banner-section";
import TopHeader from "./top-header";

const FrameComponent12: NextPage = () => {
  return (
    <section className="w-[1440px] flex flex-col items-start justify-start text-left text-17xl text-blue-2 font-kanit">
      <TopHeader />
      <BannerSection />
    </section>
  );
};

export default FrameComponent12;
