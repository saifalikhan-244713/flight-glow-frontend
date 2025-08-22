import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupComponent7Type = {
  month?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const GroupComponent7: NextPage<GroupComponent7Type> = ({
  month,
  propMinWidth,
}) => {
  const monthStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="flex-1 rounded-3xs box-border flex flex-row items-start justify-between py-[18px] pr-[25px] pl-[23px] min-w-[130px] gap-[20px] z-[1] text-left text-sm text-grey-3 font-kanit border-[1px] border-solid border-grey-6">
      <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
        <div
          className="relative leading-[110.3%] font-light inline-block min-w-[40px]"
          style={monthStyle}
        >
          {month}
        </div>
      </div>
      <img
        className="h-6 w-6 relative"
        alt=""
        src="/vuesaxlineararrowdown-61.svg"
      />
      <div className="h-[60px] w-[200px] relative rounded-3xs box-border hidden border-[1px] border-solid border-grey-6" />
    </div>
  );
};

export default GroupComponent7;
