import type { NextPage } from "next";

export type ComparisonCollectorType = {
  indiaByIndiGoRoti?: string;
  prop?: string;
  pxVegSymbol1?: string;
};

const ComparisonCollector: NextPage<ComparisonCollectorType> = ({
  indiaByIndiGoRoti,
  prop,
  pxVegSymbol1,
}) => {
  return (
    <div className="flex-1 rounded-8xs bg-white box-border flex flex-col items-start justify-start pt-3.5 pb-1 pr-[3px] pl-2.5 gap-[16px] min-w-[130px] text-left text-base text-grey-3 font-kanit border-[1px] border-solid border-grey-7">
      <div className="w-[200px] h-16 relative rounded-8xs bg-white box-border hidden border-[1px] border-solid border-grey-7" />
      <div className="h-2.5 relative font-medium inline-block z-[1]">
        {indiaByIndiGoRoti}
      </div>
      <div className="self-stretch h-5 flex flex-row items-start justify-between gap-[20px] text-blue-2">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="h-2.5 relative font-light inline-block min-w-[37px] whitespace-nowrap z-[1]">
            {prop}
          </div>
        </div>
        <img
          className="h-5 w-5 relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src={pxVegSymbol1}
        />
      </div>
    </div>
  );
};

export default ComparisonCollector;
