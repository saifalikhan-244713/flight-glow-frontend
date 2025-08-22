import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent29Type = {
  prop?: string;
  prop1?: string;
  prop2?: string;

  /** Style props */
  propOverflowX?: CSSProperties["overflowX"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propFlex1?: CSSProperties["flex"];
  propHeight1?: CSSProperties["height"];
  propGap?: CSSProperties["gap"];
  propFlex2?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const FrameComponent29: NextPage<FrameComponent29Type> = ({
  prop,
  prop1,
  prop2,
  propOverflowX,
  propHeight,
  propWidth,
  propFlex,
  propMinWidth,
  propFlex1,
  propHeight1,
  propGap,
  propFlex2,
  propAlignSelf,
}) => {
  const groupDiv4Style: CSSProperties = useMemo(() => {
    return {
      overflowX: propOverflowX,
    };
  }, [propOverflowX]);

  const frameDiv5Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propHeight, propWidth, propFlex, propMinWidth]);

  const frameDiv6Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      height: propHeight1,
    };
  }, [propFlex1, propHeight1]);

  const frameDiv7Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameDiv8Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex2,
    };
  }, [propFlex2]);

  const frameDiv9Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[21px] max-w-full text-left text-5xl text-blue-2 font-kanit">
      <div
        className="flex-1 rounded-3xs bg-white box-border overflow-x-auto flex flex-row items-start justify-start py-2.5 pr-3.5 pl-0 gap-[16px] min-w-[294px] max-w-full z-[1] border-[1px] border-solid border-grey-6"
        style={groupDiv4Style}
      >
        <div className="h-[93px] w-[452px] relative rounded-3xs bg-white box-border shrink-0 hidden border-[1px] border-solid border-grey-6" />
        <div
          className="h-[73px] w-[153px] shrink-0 flex flex-col items-start justify-start gap-[6px]"
          style={frameDiv5Style}
        >
          <div
            className="self-stretch flex-1 flex flex-row items-start justify-between gap-[20px]"
            style={frameDiv6Style}
          >
            <img
              className="h-10 w-[60px] relative overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/indigo.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[29px] px-0 pb-0">
              <div className="h-[15px] relative font-light inline-block min-w-[60px] whitespace-nowrap z-[1] mq450:text-lgi">
                20:05
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[9px] text-sm">
            <div className="h-[9px] relative inline-block min-w-[40px] z-[1]">
              Indigo
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[9px] text-xs text-grey-4">
            <div className="h-2 relative font-light inline-block min-w-[42px] z-[1]">
              6E-6132
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[18px] pb-0 pr-1 pl-0 text-center text-sm text-grey-3">
          <div className="flex flex-col items-start justify-start gap-[6px]">
            <div className="flex flex-row items-start justify-start py-0 pr-1.5 pl-1">
              <div className="h-[9px] w-[23px] relative font-light inline-block min-w-[23px] z-[1]">
                22h
              </div>
            </div>
            <div className="h-2 flex flex-row items-start justify-start relative">
              <div className="h-px w-[57px] absolute !m-[0] bottom-[2px] left-[calc(50%_-_28px)] box-border z-[1] border-t-[1px] border-solid border-grey-5" />
              <img
                className="h-2 w-[30px] relative z-[2]"
                alt=""
                src="/group-1000002206.svg"
              />
            </div>
            <div className="h-2 relative text-xs font-light text-grey-4 text-left inline-block min-w-[33px] z-[1]">
              2 stop
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[29px] pb-0 pr-5 pl-0">
          <div className="h-[15px] relative font-light inline-block min-w-[54px] whitespace-nowrap z-[1] mq450:text-lgi">
            18:05
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[29px] pb-0 pr-[5px] pl-0">
          <div className="h-[15px] relative font-medium inline-block min-w-[79px] whitespace-nowrap z-[1] mq450:text-lgi">
            ₹22,726
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[25px] px-0 pb-0">
          <div className="w-6 h-6 rounded-81xl box-border overflow-hidden shrink-0 z-[1] border-[1px] border-solid border-grey-4" />
        </div>
      </div>
      <div className="flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start py-2.5 pr-3.5 pl-0 gap-[16px] min-w-[294px] max-w-full z-[1] border-[1px] border-solid border-grey-6 mq450:flex-wrap mq450:pl-3.5 mq450:box-border">
        <div className="h-[93px] w-[452px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-grey-6" />
        <div className="h-[73px] w-[153px] flex flex-col items-start justify-start gap-[6px]">
          <div className="self-stretch flex-1 flex flex-row items-start justify-between gap-[20px]">
            <img
              className="h-10 w-[60px] relative overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/indigo.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[29px] px-0 pb-0">
              <div className="h-[15px] relative font-light inline-block min-w-[60px] whitespace-nowrap z-[1] mq450:text-lgi">
                {prop}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[9px] text-sm">
            <div className="h-[9px] relative inline-block min-w-[40px] z-[1]">
              Indigo
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[9px] text-xs text-grey-4">
            <div className="h-2 relative font-light inline-block min-w-[42px] z-[1]">
              6E-6132
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border min-w-[174px] text-center text-sm text-grey-3">
          <div
            className="self-stretch flex flex-row items-end justify-start gap-[36px] mq450:gap-[36px_18px]"
            style={frameDiv7Style}
          >
            <div className="flex flex-row items-start justify-start gap-[20px]">
              <div className="flex flex-col items-start justify-start gap-[6px]">
                <div className="flex flex-row items-start justify-start py-0 pr-1.5 pl-1">
                  <div className="h-[9px] w-[23px] relative font-light inline-block min-w-[23px] z-[1]">
                    22h
                  </div>
                </div>
                <div className="h-2 flex flex-row items-start justify-start relative">
                  <div className="h-px w-[57px] absolute !m-[0] bottom-[2px] left-[calc(50%_-_28px)] box-border z-[1] border-t-[1px] border-solid border-grey-5" />
                  <img
                    className="h-2 w-[30px] relative z-[2]"
                    alt=""
                    src="/group-1000002206.svg"
                  />
                </div>
                <div className="h-2 relative text-xs font-light text-grey-4 text-left inline-block min-w-[33px] z-[1]">
                  2 stop
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0 text-left text-5xl text-blue-2">
                <div className="h-[15px] relative font-light inline-block min-w-[54px] whitespace-nowrap z-[1] mq450:text-lgi">
                  {prop1}
                </div>
              </div>
            </div>
            <div
              className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5 text-left text-5xl text-blue-2"
              style={frameDiv8Style}
            >
              <div
                className="flex flex-row items-start justify-start gap-[21px]"
                style={frameDiv9Style}
              >
                <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                  <div className="h-[15px] relative font-medium inline-block min-w-[79px] whitespace-nowrap z-[1] mq450:text-lgi">
                    {prop2}
                  </div>
                </div>
                <div className="h-6 w-6 rounded-81xl box-border overflow-hidden shrink-0 z-[1] border-[1px] border-solid border-grey-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent29;
