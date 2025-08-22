import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent17Type = {
  iCICI1?: string;
  iCICINB?: string;
  applicableOnICICINetBanki?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent17: NextPage<FrameComponent17Type> = ({
  iCICI1,
  iCICINB,
  applicableOnICICINetBanki,
  propMinWidth,
}) => {
  const iCICINBStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-start py-5 px-[19px] gap-[12px] text-left text-sm text-blue font-kanit border-[1px] border-solid border-grey-6">
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-base">
        <button className="cursor-pointer [border:none] p-[5px] bg-grey-7 h-[34px] rounded-8xs flex flex-row items-center justify-start box-border gap-[10px] hover:bg-lightgray-100">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src={iCICI1}
          />
          <div
            className="h-2.5 relative text-base font-medium font-kanit text-grey text-left inline-block min-w-[53px]"
            style={iCICINBStyle}
          >
            {iCICINB}
          </div>
        </button>
        <div className="h-2.5 relative font-medium inline-block min-w-[44px]">
          Apply
        </div>
      </div>
      <div className="h-[9px] relative font-medium text-blue-2 inline-block min-w-[73px]">
        Flat 10% off
      </div>
      <div className="relative leading-[16px] font-light text-grey-3">
        <p className="m-0">{applicableOnICICINetBanki}</p>
        <p className="m-0 [text-decoration:underline]">Know more</p>
      </div>
    </div>
  );
};

export default FrameComponent17;
