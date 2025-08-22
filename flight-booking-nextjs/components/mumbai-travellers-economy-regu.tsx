import type { NextPage } from "next";

export type MumbaiTravellersEconomyReguType = {
  className?: string;
};

const MumbaiTravellersEconomyRegu: NextPage<
  MumbaiTravellersEconomyReguType
> = ({ className = "" }) => {
  return (
    <div
      className={`w-[145px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border text-left text-sm text-grey-4 font-kanit ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start pt-3.5 px-0 pb-[11px] gap-[11px] z-[1] border-b-[1px] border-solid border-grey-6">
        <div className="self-stretch h-[60px] relative box-border hidden border-b-[1px] border-solid border-grey-6" />
        <div className="h-[9px] relative inline-block min-w-[60px] z-[1]">
          Fare Type
        </div>
        <div className="h-[13px] relative text-xl text-blue inline-block min-w-[70px] z-[1] mq450:text-base">
          Regular
        </div>
      </div>
    </div>
  );
};

export default MumbaiTravellersEconomyRegu;
