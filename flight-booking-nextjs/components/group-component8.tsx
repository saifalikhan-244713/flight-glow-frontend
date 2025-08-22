import type { NextPage } from "next";

const GroupComponent8: NextPage = () => {
  return (
    <div className="h-[334px] w-[266px] flex flex-col items-start justify-start py-6 px-5 box-border relative gap-[14px] min-w-[266px] text-left text-xl text-blue font-kanit mq1050:flex-1">
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs" />
      <div className="w-[217px] flex-1 rounded [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca] flex flex-row items-start justify-between py-[11px] px-2.5 box-border gap-[20px] z-[1] text-blue-2">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="relative leading-[110.3%] inline-block min-w-[30px] mq450:text-base mq450:leading-[18px]">
            UPI
          </div>
        </div>
        <img
          className="h-6 w-6 relative min-h-[24px]"
          alt=""
          src="/ararrow_right.svg"
        />
      </div>
      <div className="w-[217px] rounded bg-white flex flex-row items-start justify-start py-3 px-2.5 box-border whitespace-nowrap z-[1]">
        <div className="relative leading-[110.3%]">Debit/Credit card</div>
      </div>
      <div className="w-[217px] rounded bg-white flex flex-row items-start justify-start py-3 px-2.5 box-border whitespace-nowrap z-[1]">
        <div className="relative leading-[110.3%] inline-block min-w-[109px]">
          Net banking
        </div>
      </div>
      <div className="w-[217px] rounded bg-white flex flex-row items-start justify-start py-3 px-2.5 box-border z-[1]">
        <div className="relative leading-[110.3%] inline-block min-w-[31px] mq450:text-base mq450:leading-[18px]">
          EMI
        </div>
      </div>
      <div className="w-[217px] rounded bg-white flex flex-row items-start justify-start py-3 px-2.5 box-border z-[1]">
        <div className="relative leading-[110.3%] inline-block min-w-[65px] mq450:text-base mq450:leading-[18px]">
          Wallets
        </div>
      </div>
    </div>
  );
};

export default GroupComponent8;
