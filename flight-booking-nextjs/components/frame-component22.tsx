import type { NextPage } from "next";
import { useState, useMemo, type CSSProperties } from "react";

export type FrameComponent22Type = {
  /** Style props */
  propDisplay?: CSSProperties["display"];
  checkboxesAccentColor?: CSSProperties["accentColor"];
};

const FrameComponent22: NextPage<FrameComponent22Type> = ({
  propDisplay,
  checkboxesAccentColor,
}) => {
  const [checkboxesChecked, setCheckboxesChecked] = useState(true);
  const totalInclusiveOfStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const checkboxesStyle: CSSProperties = useMemo(() => {
    return {
      accentColor: checkboxesAccentColor,
    };
  }, [checkboxesAccentColor]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[22px] pl-[22.5px] box-border max-w-full text-left text-sm text-grey-3 font-kanit">
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[27px] max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start gap-[10px] min-w-[320px] max-w-full mq750:flex-wrap">
          <input
            className="accent-blue m-0 h-6 w-6 rounded overflow-hidden shrink-0"
            checked={checkboxesChecked}
            type="checkbox"
            onChange={(event) => setCheckboxesChecked(event.target.checked)}
            style={checkboxesStyle}
          />
          <div className="flex-1 relative font-light inline-block min-w-[298px] max-w-full">
            I understand and agree to the rules and restrictions of this fare,
            the booking policy, the privacy policy and the terms and conditions
            of FlightGlow and confirm address details entered are correct
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[5px] text-13xl text-blue-2">
          <div className="flex flex-row items-start justify-start py-0 px-5">
            <div className="relative leading-[110.3%] font-medium inline-block min-w-[98px] whitespace-nowrap mq1050:text-7xl mq1050:leading-[28px] mq450:text-lgi mq450:leading-[21px]">
              ₹11,405
            </div>
          </div>
          <div
            className="relative text-xs font-light text-grey-3"
            style={totalInclusiveOfStyle}
          >
            Total, inclusive of all taxes
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-4 px-[26px] bg-blue-2 rounded-3xs overflow-hidden flex flex-row items-start justify-start">
          <div className="flex flex-row items-start justify-start py-0 px-[38.5px] gap-[12px]">
            <img
              className="h-6 w-6 relative hidden"
              alt=""
              src="/search_normal.svg"
            />
            <div className="w-[71px] relative text-lg leading-[28px] font-medium font-kanit text-white text-center flex items-center justify-center min-w-[71px]">
              Pay Now
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/ararrow_right.svg"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent22;
