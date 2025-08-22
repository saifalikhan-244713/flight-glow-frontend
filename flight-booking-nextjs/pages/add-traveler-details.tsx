import type { NextPage } from "next";
import FlightCards1 from "../components/AddTravelerDetails";
import ICICIApplication from "../components/i-c-i-c-i-application";
import TopHeader from "@/components/top-header";
import FooterComponent from "../components/footerComponent";

import TotalPrice from "@/components/TotalPrice";
import ApplyCoupon from "@/components/ApplyCoupon";

const AddTravelerDetails: NextPage = () => {
  return (
    <>
      <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[40px] tracking-[normal] mq750:gap-[20px_40px]">
        <TopHeader />
        <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <section className="h-full w-[1240px] flex flex-row items-start justify-start pt-0 px-0 pb-[60px] box-border gap-[24px] max-w-full text-left text-xl text-grey-3 font-kanit lg:pb-[39px] lg:box-border mq750:pb-[25px] mq750:box-border mq1050:h-auto">
            <FlightCards1 />
            <div className="w-[295px] flex flex-col items-start justify-start gap-[40px] text-xl text-grey-3 mq1050:hidden mq450:gap-[20px]">
              <TotalPrice />
              <ApplyCoupon />
            </div>
          </section>
        </main>{" "}
        <FooterComponent />
      </div>
    </>
  );
};

export default AddTravelerDetails;
