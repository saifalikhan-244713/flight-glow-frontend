import type { NextPage } from "next";

export type ChangePolicyType = {
  className?: string;
};

const ChangePolicy: NextPage<ChangePolicyType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start py-[18px] px-[19px] gap-[13px] text-left text-base text-grey-3 font-kanit border-[1px] border-solid border-grey-6 ${className}`}
    >
      <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq750:flex-wrap">
        <div className="w-[201px] flex flex-col items-start justify-start py-0 pr-[11px] pl-0 box-border gap-[23px] text-xl text-blue-2">
          <div className="relative leading-[110.3%] font-medium mq450:text-base mq450:leading-[18px]">
            Date change policy
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base text-grey-3">
            <div className="relative leading-[18px] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[113px]">
              Cancel between
            </div>
            <div className="relative leading-[18px] inline-block min-w-[32px]">
              Now
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[17px]">
          <div className="relative leading-[18px] inline-block min-w-[44px]">
            31 Dec
          </div>
          <div className="relative leading-[18px] inline-block min-w-[42px] whitespace-nowrap">
            09:05
          </div>
        </div>
        <div className="w-[279px] flex flex-row items-end justify-start gap-[76px] mq450:gap-[38px]">
          <div className="flex flex-row items-start justify-start gap-[17px]">
            <div className="relative leading-[18px] inline-block min-w-[48px]">
              03 Jan
            </div>
            <div className="relative leading-[18px] inline-block min-w-[42px] whitespace-nowrap">
              06:05
            </div>
          </div>
          <div className="w-24 flex flex-col items-start justify-start gap-[23px]">
            <div className="self-stretch flex flex-row items-start justify-end">
              <img
                className="h-6 w-6 relative"
                alt=""
                src="/vuesaxlineararrowdown-23.svg"
              />
            </div>
            <div className="relative leading-[18px] inline-block min-w-[96px] whitespace-nowrap">
              03 Jan, 09:05
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[18.7px] text-center">
        <div className="flex flex-col items-start justify-start pt-[21px] px-0 pb-0 text-left">
          <div className="relative leading-[18px] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Amount refundable
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[136px]">
          <div className="self-stretch h-2 relative rounded-3xs bg-lightgreen" />
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[23px]">
            <div className="relative leading-[18px]">
              ₹3,150 + Fare Difference
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[136px]">
          <div className="self-stretch h-2 relative rounded-3xs bg-gold" />
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[21px]">
            <div className="relative leading-[18px]">
              ₹3,507 + Fare Difference
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[136px]">
          <div className="self-stretch h-2 relative rounded-3xs bg-crimson" />
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[47px]">
            <div className="relative leading-[18px] inline-block min-w-[116px]">
              Non changeable
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePolicy;
