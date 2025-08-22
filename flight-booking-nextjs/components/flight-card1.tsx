import type { NextPage } from "next";
import RoundTripInfo from "./round-trip-info";
import MumbaiTravellersEconomyRegu from "./mumbai-travellers-economy-regu";

export type FlightCard1Type = {
  className?: string;
};

const FlightCard1: NextPage<FlightCard1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca] overflow-hidden flex flex-row items-start justify-center p-5 box-border gap-[10px] max-w-full text-left text-sm text-grey-4 font-kanit mq1225:flex-wrap ${className}`}
    >
      <RoundTripInfo roundTripPlaceholder="One Way" fromWidth="79px" />
      <div className="w-[145px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border">
        <div className="self-stretch flex flex-col items-start justify-start pt-3.5 px-0 pb-[11px] gap-[11px] border-b-[1px] border-solid border-grey-6">
          <div className="self-stretch h-[60px] relative box-border hidden border-b-[1px] border-solid border-grey-6" />
          <div className="h-[9px] relative inline-block min-w-[15px] z-[1]">
            To
          </div>
          <input
            className="w-[73px] [border:none] [outline:none] font-kanit text-xl bg-[transparent] h-[13px] relative text-blue text-left inline-block p-0 z-[1] mq450:text-base"
            placeholder="Mumbai"
            type="text"
          />
        </div>
      </div>
      <div className="w-[225px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border">
        <div className="self-stretch flex flex-col items-start justify-start pt-3.5 px-0 pb-[11px] gap-[11px] border-b-[1px] border-solid border-grey-6">
          <div className="self-stretch h-[60px] relative box-border hidden border-b-[1px] border-solid border-grey-6" />
          <div className="h-[9px] relative inline-block min-w-[63px] z-[1]">
            Departure
          </div>
          <input
            className="w-[60px] [border:none] [outline:none] font-kanit text-xl bg-[transparent] h-[13px] relative text-blue text-left inline-block p-0 z-[1] mq450:text-base"
            placeholder="03 Jan"
            type="text"
          />
        </div>
      </div>
      <div className="w-[145px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border">
        <div className="self-stretch flex flex-col items-start justify-start pt-3.5 pb-[11px] pr-[30px] pl-0 gap-[11px] border-b-[1px] border-solid border-grey-6">
          <div className="w-[140px] h-[60px] relative box-border hidden border-b-[1px] border-solid border-grey-6" />
          <div className="h-[9px] relative inline-block min-w-[69px] z-[1]">
            Traveler(s)
          </div>
          <input
            className="w-full [border:none] [outline:none] font-kanit text-xl bg-[transparent] self-stretch h-[13px] relative text-blue text-left inline-block min-w-[66px] p-0 z-[1] mq450:text-base"
            placeholder="1 Traveler(s)"
            type="text"
          />
        </div>
      </div>
      <div className="w-[145px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border">
        <div className="self-stretch flex flex-col items-start justify-start pt-3.5 px-0 pb-[11px] gap-[11px] border-b-[1px] border-solid border-grey-6">
          <div className="self-stretch h-[60px] relative box-border hidden border-b-[1px] border-solid border-grey-6" />
          <div className="h-[9px] relative inline-block min-w-[33px] z-[1]">
            Class
          </div>
          <input
            className="w-[84px] [border:none] [outline:none] font-kanit text-xl bg-[transparent] h-[13px] relative text-blue text-left inline-block p-0 z-[1] mq450:text-base"
            placeholder="Economy"
            type="text"
          />
        </div>
      </div>
      <MumbaiTravellersEconomyRegu />
      <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
        <div className="rounded-3xs bg-blue flex flex-row items-start justify-start p-2.5">
          <img
            className="h-6 w-6 relative"
            alt=""
            src="/vuesaxlinearsearchnormal5.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FlightCard1;
