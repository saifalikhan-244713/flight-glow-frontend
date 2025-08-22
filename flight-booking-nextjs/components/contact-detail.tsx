import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ChartCollectionType = {
  /** Style props */
  propDisplay?: CSSProperties["display"];
  name: string;
  phone: string;
  email: string;
};

const ChartCollection: NextPage<ChartCollectionType> = ({
  propDisplay,
  name,
  phone,
  email,
}) => {
  const contactDetailsStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-xl text-blue-2 font-kanit">
      <div className="w-[1242px] rounded-3xs bg-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-[33px] gap-[33px] max-w-full border-[1px] border-solid border-grey-6 mq750:gap-[16px_33px]">
        <div className="self-stretch rounded-t-3xs rounded-b-none [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca] overflow-hidden flex flex-row items-start justify-start py-[18px] px-10">
          <div
            className="relative leading-[110.3%] font-medium mq450:text-base mq450:leading-[18px]"
            style={contactDetailsStyle}
          >
            Contact Details
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-8 pl-[30px] box-border max-w-full text-mini text-grey-3">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
            <div className="flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start min-w-[285px] max-w-full border-[1px] border-solid border-grey-6">
              <div className="flex-1 box-border overflow-hidden flex flex-row items-start justify-start py-2.5 px-[25px] max-w-full [row-gap:20px] border-b-[1px] border-solid border-grey-6 mq450:flex-wrap">
                <div className="w-[100px] relative flex items-center shrink-0">
                  Name
                </div>
                <div className="w-[180px] relative text-blue-2 flex items-center shrink-0">
                  {name}
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start min-w-[285px] max-w-full border-[1px] border-solid border-grey-6">
              <div className="flex-1 box-border overflow-hidden flex flex-row items-start justify-start py-2.5 px-[25px] max-w-full [row-gap:20px] border-b-[1px] border-solid border-grey-6 mq450:flex-wrap">
                <div className="w-[100px] relative flex items-center shrink-0">
                  Phone
                </div>
                <div className="w-[180px] relative text-blue-2 flex items-center shrink-0 whitespace-nowrap">
                  {phone}
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start min-w-[285px] max-w-full border-[1px] border-solid border-grey-6">
              <div className="flex-1 box-border overflow-hidden flex flex-row items-start justify-start py-2.5 px-[25px] max-w-full [row-gap:20px] border-b-[1px] border-solid border-grey-6 mq450:flex-wrap">
                <div className="w-[100px] relative flex items-center shrink-0">
                  Email
                </div>
                <div className="w-[180px] relative text-blue-2 flex items-center shrink-0 whitespace-nowrap">
                  {email}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartCollection;
