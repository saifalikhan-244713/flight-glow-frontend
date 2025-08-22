import type { NextPage } from "next";
import GroupComponent6 from "../components/group-component6";
import FlightCards4 from "../components/flight-cards4";
import TravelItinerary from "../components/travel-itinerary";

const PayToCompleteYourBooking1: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[200px] box-border gap-[40px] tracking-[normal] mq750:gap-[20px_40px]">
      <GroupComponent6 />
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1240px] flex flex-row items-start justify-start gap-[15px] max-w-full">
          <FlightCards4 />
          <TravelItinerary
            propDisplay="inline-block"
            propDisplay1="inline-block"
            propDisplay2="inline-block"
          />
        </div>
      </section>
    </div>
  );
};

export default PayToCompleteYourBooking1;
