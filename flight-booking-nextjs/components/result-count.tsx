import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ResultCountType = {
  className?: string;
  results?: string;
  results1?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const ResultCount: NextPage<ResultCountType> = ({
  className = "",
  results,
  results1,
  propMinWidth,
  propMinWidth1,
}) => {
  const resultsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const results1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-xl text-blue-2 font-kanit ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[10px]">
        <div
          className="relative font-medium inline-block min-w-[70px] z-[1] mq450:text-base"
          style={resultsStyle}
        >
          {results}
        </div>
        <div className="flex flex-row items-start justify-start gap-[16px] text-base text-grey-3">
          <input className="m-0 h-[22px] w-5" type="checkbox" />
          <div
            className="relative inline-block min-w-[60px] z-[1]"
            style={results1Style}
          >
            {results1}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
        <img
          className="w-6 h-6 relative z-[1]"
          alt=""
          src="/vuesaxlineararrowup1.svg"
        />
      </div>
    </div>
  );
};

export default ResultCount;
