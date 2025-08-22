import type { NextPage } from "next";
import FrameComponent14 from "./frame-component14";

const FlightCards: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start py-3 pr-[11px] pl-0 box-border gap-[14px] max-w-[calc(100%_-_319px)] shrink-0 text-left text-5xl text-grey-3 font-kanit mq1050:max-w-full">
      <FrameComponent14
        reviewYourItinerary="Review your itinerary"
        vuesaxlineararrowDown="/rightArrowdown.png"
      />
      <FrameComponent14
        reviewYourItinerary="Choose add-ons"
        vuesaxlineararrowDown="/rightArrowdown.png"
      />
      <FrameComponent14
        reviewYourItinerary="Add contact details"
        vuesaxlineararrowDown="/vuesaxlineararrowdown-2.svg"
      />
      <h3 className="m-0 relative text-xl leading-[110.3%] font-medium font-inherit mq450:text-base mq450:leading-[18px]">
        Mobile Number
      </h3>
      <div className="w-[530px] h-[66px] flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border max-w-full">
        <div className="self-stretch flex-1 rounded-3xs box-border flex flex-row items-start justify-start py-0 px-[34px] gap-[34px] max-w-full border-[1px] border-solid border-grey-6">
          <div className="self-stretch w-[530px] relative rounded-3xs box-border hidden max-w-full border-[1px] border-solid border-grey-6" />
          <input
            className="w-[22px] [border:none] [outline:none] bg-[transparent] h-[35px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border font-kanit text-base text-grey-3"
            placeholder="+91"
            type="text"
          />
          <div className="self-stretch w-px relative box-border z-[1] border-r-[1px] border-solid border-grey-6" />
        </div>
      </div>
      <h3 className="m-0 relative text-xl leading-[110.3%] font-medium font-inherit inline-block min-w-[129px] mq450:text-base mq450:leading-[18px]">
        Email Address
      </h3>
      <div className="w-[530px] h-[86px] flex flex-row items-start justify-start pt-0 px-0 pb-[26px] box-border max-w-full">
        <img
          className="h-[60px] flex-1 relative rounded-3xs max-w-full overflow-hidden"
          loading="lazy"
          alt=""
          src="/rectangle-4672.svg"
        />
      </div>
      <div className="w-[530px] flex flex-row items-start justify-start pt-0 px-0 pb-[38px] box-border max-w-full">
        <button className="cursor-pointer [border:none] py-4 px-[26px] bg-blue-2 flex-1 rounded-3xs overflow-hidden flex flex-row items-start justify-start box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-center gap-[12px] max-w-full">
            <img
              className="h-6 w-6 relative hidden"
              alt=""
              src="/search_normal.svg"
            />
            <div className="w-[75px] relative text-lg leading-[28px] font-medium font-kanit text-white text-center flex items-center justify-center min-w-[75px]">
              Continue
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/ararrow_right.svg"
            />
          </div>
        </button>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[4px] max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[573px] max-w-full mq750:min-w-full">
          <h2 className="m-0 self-stretch h-[15px] relative text-inherit leading-[110.3%] font-medium font-inherit inline-block mq450:text-lgi mq450:leading-[21px]">
            <ol className="m-0 font-inherit text-inherit pl-8">
              <li>Add traveler details</li>
            </ol>
          </h2>
        </div>
        <img
          className="h-6 w-6 relative object-contain"
          alt=""
          src="/rightArrowdown.png"
        />
      </div>
    </div>
  );
};

export default FlightCards;
