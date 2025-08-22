import type { NextPage } from "next";

const LoadingSpinner: NextPage = () => {
  return (
    <div className="w-[189px] h-24 flex flex-col items-start justify-start gap-[14px] text-left text-xl text-grey-3 font-kanit">
      <h3 className="m-0 relative text-inherit leading-[110.3%] font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-base mq450:leading-[18px]">
        All other wallets
      </h3>
      <div className="self-stretch flex-1 rounded-3xs flex flex-row items-start justify-between py-[18px] pr-[25px] pl-[23px] gap-[20px] z-[1] text-sm border-[1px] border-solid border-grey-6">
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
          <div className="relative leading-[110.3%] font-light inline-block min-w-[78px] z-[2]">
            Select wallet
          </div>
        </div>
        <div className="h-[60px] w-[189px] relative rounded-3xs box-border hidden border-[1px] border-solid border-grey-6" />
        <img
          className="h-6 w-6 relative"
          alt=""
          src="/vuesaxlineararrowdown-21.svg"
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
