import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FormInputsRow8Type = {
  vuesaxlinearcalendar?: string;
  departure?: string;
  vuesaxlineararrowDown?: string;
  vuesaxlinearcalendar1?: string;
  return1?: string;
  vuesaxlineararrowDown1?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propHeight1?: CSSProperties["height"];
  propAlignSelf2?: CSSProperties["alignSelf"];
  propOverflow?: CSSProperties["overflow"];
  propMinWidth1?: CSSProperties["minWidth"];
  propAlignSelf3?: CSSProperties["alignSelf"];
  propHeight2?: CSSProperties["height"];
  propFlex?: CSSProperties["flex"];
  propOverflow1?: CSSProperties["overflow"];
};

const FormInputsRow8: NextPage<FormInputsRow8Type> = ({
  vuesaxlinearcalendar,
  departure,
  vuesaxlineararrowDown,
  vuesaxlinearcalendar1,
  return1,
  vuesaxlineararrowDown1,
  propAlignSelf,
  propWidth,
  propHeight,
  propMinWidth,
  propAlignSelf1,
  propHeight1,
  propAlignSelf2,
  propOverflow,
  propMinWidth1,
  propAlignSelf3,
  propHeight2,
  propFlex,
  propOverflow1,
}) => {
  const formInputsRow2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      height: propHeight,
    };
  }, [propAlignSelf, propWidth, propHeight]);

  const frameDiv11Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      alignSelf: propAlignSelf1,
    };
  }, [propMinWidth, propAlignSelf1]);

  const flyingFrom1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      alignSelf: propAlignSelf2,
    };
  }, [propHeight1, propAlignSelf2]);

  const vuesaxlineararrowDownIconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const flyingTo1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      alignSelf: propAlignSelf3,
    };
  }, [propMinWidth1, propAlignSelf3]);

  const active1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight2,
      flex: propFlex,
    };
  }, [propHeight2, propFlex]);

  const vuesaxlineararrowDownIcon1Style: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow1,
    };
  }, [propOverflow1]);

  return (
    <div
      className="self-stretch flex flex-row items-center justify-start gap-[48px] text-center text-xs text-grey-grey-700 font-components-chip mq750:flex-wrap mq750:gap-[48px_24px]"
      style={formInputsRow2Style}
    >
      <div
        className="flex-1 flex flex-row items-start justify-start min-w-[166px]"
        style={frameDiv11Style}
      >
        <div
          className="h-[60px] flex-1 rounded-3xs box-border overflow-hidden flex flex-col items-start justify-start py-[3px] px-[7px] border-[1px] border-solid border-grey-7"
          style={flyingFrom1Style}
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
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src={vuesaxlinearcalendar}
            />
            <div className="flex-1 relative text-base font-light font-kanit text-grey-4 text-left">
              {departure}
            </div>
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src={vuesaxlineararrowDown}
              style={vuesaxlineararrowDownIconStyle}
            />
          </div>
        </div>
      </div>
      <div
        className="flex-[0.9373] rounded-3xs box-border overflow-hidden flex flex-col items-start justify-start py-[3px] px-[7px] min-w-[166px] border-[1px] border-solid border-grey-7 mq450:flex-1"
        style={flyingTo1Style}
      >
        <div
          className="self-stretch h-[54px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[15px] px-0 box-border gap-[8px]"
          style={active1Style}
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
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src={vuesaxlinearcalendar1}
          />
          <div className="flex-1 relative text-base font-light font-kanit text-grey-4 text-left">
            {return1}
          </div>
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src={vuesaxlineararrowDown1}
            style={vuesaxlineararrowDownIcon1Style}
          />
        </div>
      </div>
    </div>
  );
};

export default FormInputsRow8;
