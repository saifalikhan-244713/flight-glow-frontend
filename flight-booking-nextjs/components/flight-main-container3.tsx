import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FlightMainContainer3Type = {
  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propHeight?: CSSProperties["height"];
  propMinWidth1?: CSSProperties["minWidth"];
  propHeight1?: CSSProperties["height"];
  propPadding?: CSSProperties["padding"];
  propMinWidth2?: CSSProperties["minWidth"];
};

const FlightMainContainer3: NextPage<FlightMainContainer3Type> = ({
  propMinWidth,
  propHeight,
  propMinWidth1,
  propHeight1,
  propPadding,
  propMinWidth2,
}) => {
  const rajkot1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      height: propHeight,
    };
  }, [propMinWidth, propHeight]);

  const mumbai1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      height: propHeight1,
    };
  }, [propMinWidth1, propHeight1]);

  const dateRangeContainerStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const wed3Jan1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className="flex-1 rounded-lg bg-grey-7 box-border flex flex-col items-start justify-start py-5 px-[19px] gap-[16px] min-w-[302px] max-w-full text-left text-5xl text-blue-2 font-kanit border-[1px] border-solid border-whitesmoke-400">
      <div className="self-stretch flex flex-row items-start justify-start gap-[21.6px] mq450:flex-wrap">
        <h3
          className="m-0 relative text-inherit tracking-[0.04em] capitalize font-medium font-inherit inline-block min-w-[76px] mq450:text-lgi"
          style={rajkot1Style}
        >
          Rajkot
        </h3>
        <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[97px]">
          <img
            className="self-stretch h-[30px] relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/group-1000002541.svg"
          />
        </div>
        <h3
          className="m-0 w-[94px] relative text-inherit tracking-[0.04em] capitalize font-medium font-inherit text-right inline-block min-w-[94px] mq450:text-lgi"
          style={mumbai1Style}
        >
          Mumbai
        </h3>
      </div>
      <div
        className="self-stretch flex flex-row items-start justify-center py-0 pr-px pl-0 text-xl text-black"
        style={dateRangeContainerStyle}
      >
        <div
          className="h-[30px] relative tracking-[0.04em] capitalize font-light inline-block min-w-[101px] mq450:text-base"
          style={wed3Jan1Style}
        >
          Wed, 3 Jan
        </div>
      </div>
    </div>
  );
};

export default FlightMainContainer3;
