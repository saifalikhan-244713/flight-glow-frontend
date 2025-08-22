import type { NextPage } from "next";

const GroupComponent2: NextPage = () => {
  return (
    <div className="w-[104px] rounded-8xs bg-white box-border flex flex-col items-start justify-start pt-3.5 px-3 pb-[13px] gap-[17px] text-left text-base text-blue font-kanit border-[1px] border-solid border-grey-7">
      <div className="w-[104px] h-16 relative rounded-8xs bg-white box-border hidden border-[1px] border-solid border-grey-7" />
      <div className="h-2.5 relative font-medium inline-block min-w-[17px] z-[1]">
        +4
      </div>
      <div className="w-[58px] h-2.5 relative font-medium text-center inline-block min-w-[58px] z-[1]">
        Options
      </div>
    </div>
  );
};

export default GroupComponent2;
