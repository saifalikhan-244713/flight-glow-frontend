import type { NextPage } from "next";
import FlightMainContainer1 from "./flight-main-container1";

const FrameComponent5: NextPage = () => {
  return (
    <footer className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-5xl text-blue-2 font-kanit">
      <div className="w-[1240px] flex flex-row flex-wrap items-start justify-center gap-[15.1px] max-w-full">
        <FlightMainContainer1 />
        <FlightMainContainer1 />
        <FlightMainContainer1 />
      </div>
    </footer>
  );
};

export default FrameComponent5;
