import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent20Type = {
  additional3KG?: string;
  placeholder?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const FrameComponent20: NextPage<FrameComponent20Type> = ({
  additional3KG,
  placeholder,
  propMinWidth,
  propWidth,
}) => {
  const additional3KGStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const inputStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="flex-1 rounded-8xs bg-white box-border flex flex-col items-start justify-start pt-3.5 px-[11px] pb-[13px] gap-[17px] min-w-[130px] text-left text-base text-grey-3 font-kanit border-[1px] border-solid border-grey-7">
      <div className="w-[200px] h-16 relative rounded-8xs bg-white box-border hidden border-[1px] border-solid border-grey-7" />
      <div
        className="h-2.5 relative font-medium inline-block min-w-[112px] z-[1]"
        style={additional3KGStyle}
      >
        {additional3KG}
      </div>
      <input
        className="w-[43px] [border:none] [outline:none] font-light font-kanit text-base bg-[transparent] h-2.5 relative text-blue-2 text-left inline-block whitespace-nowrap p-0 z-[1]"
        placeholder={placeholder}
        type="text"
        style={inputStyle}
      />
    </div>
  );
};

export default FrameComponent20;
