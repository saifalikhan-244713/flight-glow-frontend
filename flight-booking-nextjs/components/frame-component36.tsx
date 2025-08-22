import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent36Type = {
  /** Style props */
  rectangleDivHeight?: CSSProperties["height"];
  rectangleDivMinWidth?: CSSProperties["minWidth"];
  rectangleDivLineHeight?: CSSProperties["lineHeight"];
};

const FrameComponent36: NextPage<FrameComponent36Type> = ({
  rectangleDivHeight,
  rectangleDivMinWidth,
  rectangleDivLineHeight,
}) => {
  const tripTypeStyle: CSSProperties = useMemo(() => {
    return {
      height: rectangleDivHeight,
      minWidth: rectangleDivMinWidth,
      lineHeight: rectangleDivLineHeight,
    };
  }, [rectangleDivHeight, rectangleDivMinWidth, rectangleDivLineHeight]);

  return (
    <div className="w-[331px] shrink-0 flex flex-row items-start justify-start gap-[10px] text-left text-sm text-grey-4 font-kanit">
      <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[5px] pl-0">
        <div className="self-stretch flex flex-col items-start justify-start pt-3.5 px-0 pb-[13px] gap-[11px] z-[1] border-b-[1px] border-solid border-grey-6">
          <div className="self-stretch h-[60px] relative box-border hidden border-b-[1px] border-solid border-grey-6" />
          <div
            className="h-[9px] relative inline-block min-w-[58px] z-[1]"
            style={tripTypeStyle}
          >
            Trip Type
          </div>
          <input
            className="w-[97px] [border:none] [outline:none] font-kanit text-xl bg-[transparent] h-[13px] relative text-blue text-left inline-block p-0 z-[1] mq450:text-base"
            placeholder="Round Trip"
            type="text"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-3.5 px-0 pb-[13px] gap-[11px] z-[1] border-b-[1px] border-solid border-grey-6">
        <div className="self-stretch h-[60px] relative box-border hidden border-b-[1px] border-solid border-grey-6" />
        <div className="h-[9px] relative inline-block min-w-[32px] z-[1]">
          From
        </div>
        <input
          className="w-[57px] [border:none] [outline:none] font-kanit text-xl bg-[transparent] h-[13px] relative text-blue text-left inline-block p-0 z-[1] mq450:text-base"
          placeholder="Rajkot"
          type="text"
        />
      </div>
      <div className="flex flex-col items-start justify-start pt-[17px] px-0 pb-0">
        <div className="w-[26px] h-[26px] rounded-31xl flex flex-row items-start justify-start p-[5px] box-border z-[1]">
          <img
            className="h-4 w-4 relative"
            alt=""
            src="/vuesaxbulkarrow2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent36;
