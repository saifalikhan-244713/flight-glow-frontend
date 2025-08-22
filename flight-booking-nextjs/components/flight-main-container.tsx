import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FlightMainContainerType = {
  /** Style props */
  propMargin?: CSSProperties["margin"];
  propMargin1?: CSSProperties["margin"];
};

const FlightMainContainer: NextPage<FlightMainContainerType> = ({
  propMargin,
  propMargin1,
}) => {
  const rajkotStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const mumbaiStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin1,
    };
  }, [propMargin1]);

  return (
    <div className="flex-1 rounded-lg bg-grey-7 box-border flex flex-col items-start justify-start py-5 px-[19px] gap-[16px] min-w-[302px] max-w-full text-left text-5xl text-blue-2 font-kanit border-[1px] border-solid border-whitesmoke-400">
      <div className="self-stretch flex flex-row items-start justify-start gap-[21.6px] mq450:flex-wrap">
        <div
          className="relative tracking-[0.04em] capitalize font-medium inline-block min-w-[76px] mq450:text-lgi"
          style={rajkotStyle}
        >
          Rajkot
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[97px]">
          <img
            className="self-stretch h-[30px] relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/group-1000002541.svg"
          />
        </div>
        <div
          className="w-[94px] relative tracking-[0.04em] capitalize font-medium text-right inline-block min-w-[94px] mq450:text-lgi"
          style={mumbaiStyle}
        >
          Mumbai
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-px pl-0 text-xl text-black">
        <div className="h-[30px] relative tracking-[0.04em] capitalize font-light inline-block min-w-[101px] mq450:text-base">
          Wed, 3 Jan
        </div>
      </div>
    </div>
  );
};

export default FlightMainContainer;
