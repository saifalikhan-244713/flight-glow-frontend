import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FormInputsRow9Type = {
  vuesaxlineararrowDown?: string;
  vuesaxlineararrowDown1?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propRowGap?: CSSProperties["rowGap"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propHeight1?: CSSProperties["height"];
  propAlignSelf2?: CSSProperties["alignSelf"];
  propMinWidth1?: CSSProperties["minWidth"];
  propAlignSelf3?: CSSProperties["alignSelf"];
  propHeight2?: CSSProperties["height"];
  propFlex?: CSSProperties["flex"];
};

const FormInputsRow9: NextPage<FormInputsRow9Type> = ({
  vuesaxlineararrowDown,
  vuesaxlineararrowDown1,
  propAlignSelf,
  propRowGap,
  propWidth,
  propHeight,
  propMinWidth,
  propAlignSelf1,
  propHeight1,
  propAlignSelf2,
  propMinWidth1,
  propAlignSelf3,
  propHeight2,
  propFlex,
}) => {
  const formInputsRow1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      rowGap: propRowGap,
      width: propWidth,
      height: propHeight,
    };
  }, [propAlignSelf, propRowGap, propWidth, propHeight]);

  const frameDiv10Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      alignSelf: propAlignSelf1,
    };
  }, [propMinWidth, propAlignSelf1]);

  const flyingFromStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      alignSelf: propAlignSelf2,
    };
  }, [propHeight1, propAlignSelf2]);

  const flyingToStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      alignSelf: propAlignSelf3,
    };
  }, [propMinWidth1, propAlignSelf3]);

  const activeStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight2,
      flex: propFlex,
    };
  }, [propHeight2, propFlex]);

  return (
    <div
      className="self-stretch flex flex-row items-center justify-start [row-gap:20px] text-center text-xs text-grey-grey-700 font-components-chip mq750:flex-wrap"
      style={formInputsRow1Style}
    >
      <div
        className="flex-1 flex flex-row items-start justify-start min-w-[166px]"
        style={frameDiv10Style}
      >
        <div
          className="h-[60px] flex-1 rounded-3xs box-border overflow-hidden flex flex-col items-start justify-start py-[3px] px-[7px] border-[1px] border-solid border-grey-7"
          style={flyingFromStyle}
        >
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
              src="/flighttakeoffsvgrepocom.svg"
            />
            <div className="flex-1 relative text-base font-light font-kanit text-grey-4 text-left">
              Flying From
            </div>
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src={vuesaxlineararrowDown}
            />
          </div>
        </div>
      </div>
      <img
        className="h-12 w-12 relative"
        loading="lazy"
        alt=""
        src="/swap.svg"
      />
      <div
        className="flex-[0.9373] rounded-3xs box-border overflow-hidden flex flex-col items-start justify-start py-[3px] px-[7px] min-w-[166px] border-[1px] border-solid border-grey-7 mq450:flex-1"
        style={flyingToStyle}
      >
        <div
          className="self-stretch h-[54px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[15px] px-0 box-border gap-[8px]"
          style={activeStyle}
        >
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
            src="/flightlandsvgrepocom.svg"
          />
          <div className="flex-1 relative text-base font-light font-kanit text-grey-4 text-left">
            Flying To
          </div>
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src={vuesaxlineararrowDown1}
          />
        </div>
      </div>
    </div>
  );
};

export default FormInputsRow9;
