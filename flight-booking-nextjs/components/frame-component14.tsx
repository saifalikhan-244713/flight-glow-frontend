import type { NextPage } from "next";

export type FrameComponent14Type = {
  reviewYourItinerary?: string;
  vuesaxlineararrowDown?: string;
};

const FrameComponent14: NextPage<FrameComponent14Type> = ({
  reviewYourItinerary,
  vuesaxlineararrowDown,
}) => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-[50px] box-border gap-[4px] max-w-full text-left text-5xl text-blue-2 font-kanit">
      <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[573px] max-w-full mq750:min-w-full">
        <h2 className="m-0 self-stretch h-[15px] relative text-inherit leading-[110.3%] font-medium font-inherit inline-block mq450:text-lgi mq450:leading-[21px]">
          <ol className="m-0 font-inherit text-inherit pl-8">
            <li>{reviewYourItinerary}</li>
          </ol>
        </h2>
      </div>
      <img
        className="h-6 w-6 relative object-contain"
        alt=""
        src={vuesaxlineararrowDown}
      />
    </div>
  );
};

export default FrameComponent14;
