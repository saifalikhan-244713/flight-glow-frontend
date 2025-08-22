import type { NextPage } from "next";
import FlightMainContainer1 from "./flight-main-container1";

const FrameComponent6: NextPage = () => {
  return (
    <footer className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-17xl text-blue-2 font-kanit">
      <div className="w-[1240px] flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px_40px]">
        <h1 className="m-0 self-stretch h-[23px] relative text-inherit font-medium font-inherit inline-block mq450:text-3xl mq1050:text-10xl">
          Recent Searches
        </h1>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[15.1px] max-w-full">
          <FlightMainContainer1 />
          <FlightMainContainer1 />
          <FlightMainContainer1 />
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent6;
