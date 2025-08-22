import type { NextPage } from "next";
import FAQ1To from "./f-a-q1-to";

const PathPassagewayPassagePath: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-17xl text-blue-2 font-kanit">
      <div className="w-[1240px] flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px_40px]">
        <h2 className="m-0 self-stretch h-[23px] relative text-inherit font-medium font-inherit inline-block mq450:text-3xl mq750:text-10xl">{`Booking Flight with FlightGlow `}</h2>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full text-xl text-grey-3">
          <FAQ1To />
          <FAQ1To />
        </div>
      </div>
    </section>
  );
};

export default PathPassagewayPassagePath;
