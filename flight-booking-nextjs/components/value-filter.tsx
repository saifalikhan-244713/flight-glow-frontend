import type { NextPage } from "next";

const ValueFilter: NextPage = () => {
  return (
    <div className="w-[295px] flex flex-col items-start justify-start gap-[40px] text-left text-xl text-grey-3 font-kanit mq1050:hidden mq450:gap-[20px_40px]">
      <div className="self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-start py-5 px-0 gap-[14.5px] border-[1px] border-solid border-grey-6">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-5">
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <h3 className="m-0 relative text-inherit leading-[110.3%] font-light font-inherit inline-block min-w-[93px] mq450:text-base mq450:leading-[18px]">
                  Total price
                </h3>
                <div className="relative text-sm leading-[110.3%] font-light inline-block min-w-[41px]">
                  1 Adult
                </div>
              </div>
            </div>
            <div className="relative text-5xl leading-[110.3%] font-medium text-blue-2 inline-block min-w-[74px] whitespace-nowrap mq450:text-lgi mq450:leading-[21px]">
              ₹11,405
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-grey-6" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 text-sm">
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
            <div className="flex flex-col items-start justify-start gap-[15px]">
              <div className="relative leading-[110.3%] font-light inline-block min-w-[127px]">
                Base fare (1 traveller)
              </div>
              <div className="relative leading-[110.3%] font-light inline-block min-w-[91px]">
                Taxes and fees
              </div>
              <div className="relative leading-[110.3%] font-light inline-block min-w-[102px]">
                Convenience fee
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[15px]">
              <div className="relative leading-[110.3%] inline-block min-w-[43px] whitespace-nowrap">
                ₹8,906
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
                <div className="relative leading-[110.3%] inline-block min-w-[41px] whitespace-nowrap">
                  ₹2000
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[13px]">
                <div className="relative leading-[110.3%] inline-block min-w-[30px] whitespace-nowrap">
                  ₹499
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-start py-[22px] pr-2.5 pl-[11px] gap-[16px] text-sm border-[1px] border-solid border-grey-6">
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[13px] text-xl text-blue-2">
          <h3 className="m-0 relative text-inherit leading-[110.3%] font-medium font-inherit mq450:text-base mq450:leading-[18px]">
            Booking Summary
          </h3>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
          <div className="w-[255px] flex flex-col items-start justify-start">
            <div className="flex flex-row items-start justify-start gap-[17px]">
              <div className="h-[25.5px] flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0 box-border">
                <img
                  className="w-[26px] h-[13px] relative"
                  alt=""
                  src="/vector-11.svg"
                />
              </div>
              <div className="relative leading-[110.3%] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap inline-block min-w-[112px]">{`Rajkot  → Mumbai `}</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end mt-[-2.5px]">
              <div className="relative leading-[110.3%] font-light whitespace-nowrap">
                19:20, Wed 3 Jan - 20:25, Wed 3 Jan
              </div>
            </div>
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-grey-6" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
          <div className="w-[244px] flex flex-col items-start justify-start">
            <div className="flex flex-row items-start justify-start gap-[14px]">
              <div className="h-[25.5px] flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0 box-border">
                <img
                  className="w-[26px] h-[13px] relative"
                  alt=""
                  src="/vector-11.svg"
                />
              </div>
              <div className="relative leading-[110.3%] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap inline-block min-w-[115px]">
                Mumbai → Rajkot
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end mt-[-2.5px]">
              <div className="relative leading-[110.3%] font-light whitespace-nowrap">
                20:25, Sat 6 Jan - 19:20, Sat 6 Jan
              </div>
            </div>
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-grey-6" />
        </div>
        <div className="flex flex-row items-start justify-start gap-[17px]">
          <div className="h-8 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
            <img
              className="w-[26px] h-[26px] relative"
              loading="lazy"
              alt=""
              src="/vuesaxbulkprofile2user.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[110.3%] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[61px]">
              1 traveller
            </div>
            <div className="relative leading-[110.3%] font-light inline-block min-w-[91px]">
              Jenny Shah (F)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueFilter;
