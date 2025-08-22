import type { NextPage } from "next";
import GroupComponent6 from "../components/group-component6";
import FlightCards3 from "../components/flight-cards3";
import TravelItinerary from "../components/travel-itinerary";

const PayToCompleteYourBooking: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[340px] box-border gap-[40px] tracking-[normal] mq750:gap-[20px_40px]">
      <GroupComponent6 />
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <form className="m-0 w-[1240px] flex flex-row items-start justify-start gap-[15px] max-w-full">
          <FlightCards3 />
          <TravelItinerary />
        </form>
      </section>
    </div>
  );
};

export default PayToCompleteYourBooking;
