import type { NextPage } from "next";

export type FilterCardPairType = {
  className?: string;
  results?: string;
};

const FilterCardPair: NextPage<FilterCardPairType> = ({
  className = "",
  results,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 gap-[10px] text-left text-xl text-grey-3 font-kanit ${className}`}
    >
      <div className="relative text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1] mq450:text-base">
        Departure from Rajkot
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-base">
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <input className="m-0 w-5 h-5 relative z-[1]" type="checkbox" />
            <input className="m-0 w-5 h-5 relative z-[1]" type="checkbox" />
            <input className="m-0 w-5 h-5 relative z-[1]" type="checkbox" />
            <input className="m-0 w-5 h-5 relative z-[1]" type="checkbox" />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
          <div className="relative inline-block min-w-[56px] z-[1]">
            00 - 06
          </div>
          <div className="self-stretch relative z-[1]">06 - 12</div>
          <div className="self-stretch relative z-[1]">12 - 18</div>
          <div className="self-stretch relative z-[1]">{results}</div>
        </div>
      </div>
    </div>
  );
};

export default FilterCardPair;
