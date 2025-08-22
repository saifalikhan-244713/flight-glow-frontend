import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type OnwardOptionsType = {
  className?: string;
  onwardJourney?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const OnwardOptions: NextPage<OnwardOptionsType> = ({
  className = "",
  onwardJourney,
  propWidth,
}) => {
  const onwardStopsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-xl text-blue-2 font-kanit ${className}`}
    >
      <div
        className="w-[147px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border"
        style={onwardStopsStyle}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[25px]">
          <div className="h-[13px] relative font-medium inline-block z-[0] mq450:text-base">
            {onwardJourney}
          </div>
          <div className="relative text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[51px] z-[1] mq450:text-base">
            Stops
          </div>
        </div>
      </div>
      <img
        className="h-6 w-6 relative z-[1]"
        alt=""
        src="/vuesaxlineararrowup1.svg"
      />
    </div>
  );
};

export default OnwardOptions;
