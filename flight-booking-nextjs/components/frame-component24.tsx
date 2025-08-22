import type { NextPage } from "next";

type FrameComponent24Props = {
  bookedBy: string;
  date?: string | null;
};

const FrameComponent24: NextPage<FrameComponent24Props> = ({ bookedBy, date }) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-base text-grey-3 font-kanit">
      <div className="w-[1235px] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-center py-[18px] px-[23px] gap-[24px] max-w-full border-[1px] border-solid border-grey-6 cursor-pointer">
        <img
          className="h-6 w-6 relative"
          loading="lazy"
          alt=""
          src="/vuesaxlineararrowleft.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start px-0 pb-0 box-border min-w-[740px] max-w-full mq1050:min-w-full">
          <div className="self-stretch h-2.5 relative inline-block whitespace-nowrap">
            Booked by {bookedBy} on {date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent24;
