import type { NextPage } from "next";
import ReviewCards from "./review-cards";

const FrameComponent3: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-17xl text-blue-2 font-kanit">
      <div className="w-[1240px] flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px_40px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
          <div className="flex-1 flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border min-w-[755px] max-w-full mq1050:min-w-full">
            <h2 className="m-0 self-stretch h-[23px] relative text-inherit font-medium font-inherit inline-block mq450:text-3xl mq750:text-10xl">
              Customer’s Review
            </h2>
          </div>
          <div className="h-[34px] flex flex-row items-start justify-start gap-[10px]">
            <img
              className="h-[34px] w-[34px] relative min-h-[34px]"
              alt=""
              src="/vuesaxbulkarrowleft.svg"
            />
            <img
              className="h-[34px] w-[34px] relative min-h-[34px]"
              alt=""
              src="/vuesaxbulkarrowright.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full text-xl">
          <ReviewCards />
          <ReviewCards />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
