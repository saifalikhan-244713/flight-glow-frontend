import type { NextPage } from "next";

const ControlFlowSplit: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-xl text-blue-2 font-kanit">
      <div className="w-[1242px] rounded-3xs bg-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-[33px] gap-[33px] max-w-full shrink-0 border-[1px] border-solid border-grey-6 mq750:gap-[16px_33px]">
        <div className="self-stretch rounded-t-3xs rounded-b-none [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca] overflow-hidden flex flex-row items-start justify-start py-[18px] px-10">
          <div className="relative leading-[110.3%] font-medium mq450:text-base mq450:leading-[18px]">
            Payment details
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[22px] pl-5 box-border max-w-full text-mini text-grey-3">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
            <div className="flex-1 rounded-3xs bg-white box-border flex flex-col items-start justify-start gap-[10px] min-w-[435px] max-w-full border-[1px] border-solid border-grey-6 mq750:min-w-full">
              <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-between py-2.5 px-[25px] [row-gap:20px] max-w-full gap-[0px] border-b-[1px] border-solid border-grey-6 mq750:flex-wrap">
                <div className="w-[200px] relative flex items-center shrink-0">
                  Base fare
                </div>
                <input
                  className="w-[330px] [border:none] [outline:none] font-kanit text-mini bg-[transparent] h-[22px] relative text-blue-2 text-left flex items-center whitespace-nowrap max-w-full p-0"
                  placeholder="₹6,187"
                  type="text"
                />
              </div>
              <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-between py-2.5 px-[25px] [row-gap:20px] max-w-full gap-[0px] border-b-[1px] border-solid border-grey-6 mq750:flex-wrap">
                <div className="w-[200px] relative flex items-center shrink-0">
                  GST (Airline)
                </div>
                <input
                  className="w-[330px] [border:none] [outline:none] font-kanit text-mini bg-[transparent] h-[22px] relative text-blue-2 text-left flex items-center whitespace-nowrap max-w-full p-0"
                  placeholder="₹335"
                  type="text"
                />
              </div>
              <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-between py-2.5 px-[25px] [row-gap:20px] max-w-full gap-[0px] border-b-[1px] border-solid border-grey-6 mq750:flex-wrap">
                <div className="w-[200px] relative flex items-center shrink-0">
                  Meals
                </div>
                <div className="w-[330px] relative text-blue-2 flex items-center shrink-0 whitespace-nowrap max-w-full">
                  ₹500
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-2.5 px-[25px] box-border [row-gap:20px] max-w-full gap-[0px] mq750:flex-wrap">
                <div className="w-[200px] relative flex items-center shrink-0">
                  Additional Baggage
                </div>
                <div className="w-[330px] relative text-blue-2 flex items-center shrink-0 whitespace-nowrap max-w-full">
                  ₹4,500
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-3xs bg-white box-border flex flex-col items-start justify-start gap-[10px] min-w-[435px] max-w-full border-[1px] border-solid border-grey-6 mq750:min-w-full">
              <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-between py-2.5 px-[25px] [row-gap:20px] max-w-full gap-[0px] border-b-[1px] border-solid border-grey-6 mq750:flex-wrap">
                <div className="w-[200px] relative flex items-center shrink-0">
                  Seats
                </div>
                <input
                  className="w-[330px] [border:none] [outline:none] font-kanit text-mini bg-[transparent] h-[22px] relative text-blue-2 text-left flex items-center whitespace-nowrap max-w-full p-0"
                  placeholder="₹350"
                  type="text"
                />
              </div>
              <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-between py-2.5 px-[25px] [row-gap:20px] max-w-full gap-[0px] border-b-[1px] border-solid border-grey-6 mq750:flex-wrap">
                <div className="w-[200px] relative flex items-center shrink-0">
                  Taxes and fees
                </div>
                <input
                  className="w-[330px] [border:none] [outline:none] font-kanit text-mini bg-[transparent] h-[22px] relative text-blue-2 text-left flex items-center whitespace-nowrap max-w-full p-0"
                  placeholder="₹2,311"
                  type="text"
                />
              </div>
              <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-between py-2.5 px-[25px] [row-gap:20px] max-w-full gap-[0px] border-b-[1px] border-solid border-grey-6 mq750:flex-wrap">
                <div className="w-[200px] relative flex items-center shrink-0">
                  Medi-cancel benefit
                </div>
                <div className="w-[330px] relative flex items-center shrink-0 max-w-full text-blue-2">
                  <span className="w-full">
                    <span className="text-orange">Free</span>
                    <span>{` `}</span>
                    <span>
                      <span className="[text-decoration:line-through]">
                        ₹199
                      </span>
                    </span>
                  </span>
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-2.5 px-[25px] box-border [row-gap:20px] max-w-full gap-[0px] mq750:flex-wrap">
                <div className="w-[200px] relative flex items-center shrink-0">
                  Total
                </div>
                <div className="w-[330px] relative text-blue-2 flex items-center shrink-0 whitespace-nowrap max-w-full">
                  ₹14,183
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlFlowSplit;
