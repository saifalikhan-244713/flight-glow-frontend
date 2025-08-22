import type { NextPage } from "next";

const ReviewCards: NextPage = () => {
  return (
    <div className="flex-1 rounded-xl bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)] overflow-hidden flex flex-col items-start justify-start p-5 box-border min-w-[396px] max-w-full text-left text-xl text-blue-2 font-kanit mq750:min-w-full">
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="h-[13px] relative leading-[22px] font-semibold inline-block min-w-[109px] mq450:text-base mq450:leading-[18px]">
          Rohan Dave
        </div>
        <div className="self-stretch h-[79px] relative leading-[22px] font-light text-grey-3 inline-block mq450:text-base mq450:leading-[18px]">
          Lorem ipsum dolor sit amet consectetur. Bibendum odio nibh morbi nisl
          dui elit. Condimentum quis placerat potenti faucibus enim augue
          consequat. Elementum pulvinar aliquet tortor vel. At dapibus lobortis
          est pellentesque arcu elit dis nulla nec.
        </div>
      </div>
    </div>
  );
};

export default ReviewCards;
