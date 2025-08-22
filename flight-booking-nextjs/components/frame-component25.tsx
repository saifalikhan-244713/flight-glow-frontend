import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent25Type = {
  flightTakeoffSvgrepoCom?: string;
  flyingFrom?: string;

  /** Style props */
  propOverflow?: CSSProperties["overflow"];
};

const FrameComponent25: NextPage<FrameComponent25Type> = ({
  flightTakeoffSvgrepoCom,
  flyingFrom,
  propOverflow,
}) => {
  const flightTakeoffSvgrepoComIconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div className="flex-1 flex flex-row items-start justify-start min-w-[166px] text-center text-xs text-grey-grey-700 font-components-chip mq750:flex-1">
      <div className="h-[60px] flex-1 rounded-3xs box-border overflow-hidden flex flex-col items-start justify-start py-[3px] px-[7px] border-[1px] border-solid border-grey-7">
        <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start py-[15px] px-0 gap-[8px]">
          <div className="h-8 hidden flex-row items-start justify-start gap-[8px]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="w-[71px] flex-1 rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                <div className="w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                  <div className="h-6 flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                    F
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start py-[3px] px-1.5 text-left text-smi text-text-primary">
                  <div className="self-stretch h-[18px] relative tracking-[0.16px] leading-[18px] inline-block">
                    Chip
                  </div>
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/cancel.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="w-[71px] flex-1 rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                <div className="w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                  <div className="h-6 flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                    F
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start py-[3px] px-1.5 text-left text-smi text-text-primary">
                  <div className="self-stretch h-[18px] relative tracking-[0.16px] leading-[18px] inline-block">
                    Chip
                  </div>
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/cancel.svg"
                />
              </div>
            </div>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src={flightTakeoffSvgrepoCom}
            style={flightTakeoffSvgrepoComIconStyle}
          />
          <div className="flex-1 relative text-base font-light font-kanit text-grey-4 text-left">
            {flyingFrom}
          </div>
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/vuesaxlineararrowdown-23.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent25;
