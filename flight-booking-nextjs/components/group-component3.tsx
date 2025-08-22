import type { NextPage } from "next";

const GroupComponent3: NextPage = () => {
  return (
    <div className="w-[104px] rounded-8xs bg-white box-border flex flex-col items-start justify-start pt-3.5 px-3 pb-[13px] gap-[17px] text-center text-base text-blue-2 font-kanit border-[2px] border-solid border-blue">
      <div className="w-[104px] h-16 relative rounded-8xs bg-white box-border hidden border-[2px] border-solid border-blue" />
      <div className="w-[59px] h-2.5 relative font-medium inline-block min-w-[59px] z-[1]">
        No Meal
      </div>
      <div className="h-2.5 relative font-light text-left inline-block min-w-[18px] whitespace-nowrap z-[1]">
        ₹0
      </div>
    </div>
  );
};

export default GroupComponent3;
