import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TopHeader2Type = {
  /** Style props */
  topHeaderAlignSelf?: CSSProperties["alignSelf"];
  topHeaderWidth?: CSSProperties["width"];
  topHeaderMargin?: CSSProperties["margin"];
  topHeaderRight?: CSSProperties["right"];
  topHeaderLeft?: CSSProperties["left"];
};

const TopHeader2: NextPage<TopHeader2Type> = ({
  topHeaderAlignSelf,
  topHeaderWidth,
  topHeaderMargin,
  topHeaderRight,
  topHeaderLeft,
}) => {
  const topHeader1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: topHeaderAlignSelf,
      width: topHeaderWidth,
      margin: topHeaderMargin,
      right: topHeaderRight,
      left: topHeaderLeft,
    };
  }, [
    topHeaderAlignSelf,
    topHeaderWidth,
    topHeaderMargin,
    topHeaderRight,
    topHeaderLeft,
  ]);

  return (
    <header
      className="self-stretch bg-blue-2 overflow-hidden flex flex-row items-start justify-center pt-[18px] px-5 pb-[17px] box-border gap-[573px] top-[0] z-[99] sticky max-w-full text-left text-17xl text-white font-kanit mq450:gap-[573px_72px] mq750:gap-[573px_143px] mq1225:gap-[573px_286px]"
      style={topHeader1Style}
    >
      <div className="w-[178px] flex flex-col items-start justify-start">
        <div className="self-stretch h-6 flex flex-row items-start justify-end">
          <img
            className="h-6 w-12 relative shrink-0 [debug_commit:f6aba90]"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className="h-[39px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
          <h2 className="mt-[-15px] m-0 relative text-inherit font-semibold font-inherit shrink-0 [debug_commit:f6aba90]">
            FlightGlow
          </h2>
        </div>
      </div>
      <div className="h-[53.5px] flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0 box-border max-w-full text-base">
        <div className="flex-1 flex flex-row items-start justify-start gap-[30px]">
          <div className="flex flex-col items-start justify-start pt-[17px] px-0 pb-0">
            <div className="h-2.5 relative font-medium inline-block min-w-[37px]">
              Offer
            </div>
          </div>
          <div className="self-stretch rounded-lg [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#001d3d] flex flex-row items-start justify-start py-2.5 px-[17px] gap-[10px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/profile_circle.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
              <div className="h-2.5 relative font-medium inline-block min-w-[84px] whitespace-nowrap">
                Jenny Shah
              </div>
            </div>
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/arrow-down.svg"
            />
          </div>
          <button className="cursor-pointer [border:none] py-2.5 px-[21px] bg-[transparent] self-stretch rounded-lg [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#001d3d] flex flex-row items-start justify-start gap-[14px]">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <div className="h-4 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <img
                  className="w-[22px] h-4 relative rounded-sm overflow-hidden shrink-0"
                  alt=""
                  src="/artwork.svg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 mq750:hidden">
              <div className="h-2.5 relative text-base font-medium font-kanit text-white text-left inline-block min-w-[90px] whitespace-nowrap mq750:hidden">
                IN | ENR | INR
              </div>
            </div>
            <img className="h-6 w-6 relative" alt="" src="/arrow-down.svg" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopHeader2;
