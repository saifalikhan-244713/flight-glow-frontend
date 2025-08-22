import type { NextPage } from "next";
import DealSection from "@/components/MyTrip/DealSection";
import TopHeader from "@/components/top-header";
import FooterComponent from "@/components/footerComponent";


const MyTrips: NextPage = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start tracking-[normal] text-left text-base text-white font-kanit">
      <TopHeader />
      <section className="self-stretch flex flex-row items-start justify-start bg-[url('/frame2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-17xl text-blue-2 font-kanit">
        <img
          className="h-[276px] w-[1440px] relative object-cover hidden min-h-[276px] max-w-full"
          alt=""
          src="/frame2x.png"
        />
        <div className="flex-1 flex flex-row items-start justify-center py-[126.5px] px-5 box-border max-w-full z-[1]">
          <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[24px] font-medium font-inherit mq450:text-3xl mq450:leading-[14px] mq750:text-10xl mq750:leading-[19px]">
            My Trips
          </h2>
        </div>
      </section>
      <DealSection />
      <FooterComponent />
    </div>
  );
};

export default MyTrips;
