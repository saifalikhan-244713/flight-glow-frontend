import type { NextPage } from "next";
import GroupComponent8 from "./group-component8";
import LoadingSpinner from "./loading-spinner";
import TreemapParent from "./treemap-parent";
import ValueFilter from "./value-filter";

const TotalAmountLabel: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-13xl text-blue-2 font-kanit">
      <div className="w-[1240px] flex flex-row items-start justify-start gap-[15px] max-w-full">
        <div className="flex-1 rounded-3xs flex flex-col items-start justify-start gap-[40px] max-w-[calc(100%_-_310px)] mq1050:max-w-full mq450:gap-[20px_40px]">
          <h1 className="m-0 w-[882px] h-[21px] relative text-inherit leading-[110.3%] font-medium font-inherit inline-block max-w-full mq1050:text-7xl mq1050:leading-[28px] mq450:text-lgi mq450:leading-[21px]">
            Pay to complete your booking
          </h1>
          <div className="self-stretch rounded-3xs box-border flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-[20px] max-w-full text-xl border-[1px] border-solid border-grey-6">
            <div className="self-stretch rounded-t-3xs rounded-b-none box-border flex flex-row items-start justify-start pt-0 pb-6 pr-[33px] pl-0 gap-[10px] max-w-full border-[1px] border-solid border-grey-6 mq1050:flex-wrap mq1050:pl-5 mq1050:pt-5 mq1050:pr-5 mq1050:box-border">
              <GroupComponent8 />
              <div className="flex-1 flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border min-w-[402px] max-w-full mq750:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
                  <h3 className="m-0 relative text-inherit leading-[110.3%] font-medium font-inherit inline-block min-w-[107px] mq450:text-base mq450:leading-[18px]">
                    Select Bank
                  </h3>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
                    <h3 className="m-0 relative text-inherit leading-[110.3%] font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-base mq450:leading-[18px]">
                      Available wallets
                    </h3>
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[14px_24px] min-h-[134px]">
                      <div className="h-[60px] w-[189px] rounded-3xs box-border flex flex-row items-start justify-start py-4 px-2.5 gap-[24px] z-[1] border-[1px] border-solid border-grey-6">
                        <img
                          className="h-7 w-[107px] relative object-cover min-h-[28px] z-[2]"
                          loading="lazy"
                          alt=""
                          src="/download-11@2x.png"
                        />
                        <div className="h-[60px] w-[189px] relative rounded-3xs box-border hidden border-[1px] border-solid border-grey-6" />
                        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                          <div className="w-6 h-6 rounded-81xl bg-white shadow-[0px_2px_5px_rgba(103,_110,_118,_0.08),_0px_0px_0px_1px_rgba(103,_110,_118,_0.16),_0px_1px_1px_rgba(0,_0,_0,_0.12)] overflow-hidden shrink-0" />
                        </div>
                      </div>
                      <div className="h-[60px] w-[189px] rounded-3xs box-border flex flex-row items-start justify-start py-4 px-2.5 gap-[24px] z-[1] border-[1px] border-solid border-grey-6">
                        <img
                          className="h-7 w-[107px] relative object-cover min-h-[28px] z-[2]"
                          alt=""
                          src="/download-21@2x.png"
                        />
                        <div className="h-[60px] w-[189px] relative rounded-3xs box-border hidden border-[1px] border-solid border-grey-6" />
                        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                          <div className="w-6 h-6 rounded-81xl bg-white shadow-[0px_2px_5px_rgba(103,_110,_118,_0.08),_0px_0px_0px_1px_rgba(103,_110,_118,_0.16),_0px_1px_1px_rgba(0,_0,_0,_0.12)] overflow-hidden shrink-0" />
                        </div>
                      </div>
                      <button className="cursor-pointer py-4 px-2.5 bg-[transparent] h-[60px] w-[189px] rounded-3xs box-border flex flex-row items-start justify-start gap-[24px] z-[1] border-[1px] border-solid border-grey-6">
                        <img
                          className="h-7 w-[107px] relative object-cover min-h-[28px] z-[2]"
                          alt=""
                          src="/download-2-11@2x.png"
                        />
                        <div className="h-[60px] w-[189px] relative rounded-3xs box-border hidden border-[1px] border-solid border-grey-6" />
                        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                          <div className="w-6 h-6 rounded-81xl bg-white shadow-[0px_2px_5px_rgba(103,_110,_118,_0.08),_0px_0px_0px_1px_rgba(103,_110,_118,_0.16),_0px_1px_1px_rgba(0,_0,_0,_0.12)] overflow-hidden shrink-0" />
                        </div>
                      </button>
                      <div className="h-[60px] w-[189px] rounded-3xs box-border flex flex-row items-start justify-start py-4 px-2.5 gap-[63px] z-[1] border-[1px] border-solid border-grey-6">
                        <img
                          className="h-7 w-[68px] relative object-cover min-h-[28px] z-[2]"
                          alt=""
                          src="/download-1-11@2x.png"
                        />
                        <div className="h-[60px] w-[189px] relative rounded-3xs box-border hidden border-[1px] border-solid border-grey-6" />
                        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                          <div className="w-6 h-6 rounded-81xl bg-white shadow-[0px_2px_5px_rgba(103,_110,_118,_0.08),_0px_0px_0px_1px_rgba(103,_110,_118,_0.16),_0px_1px_1px_rgba(0,_0,_0,_0.12)] overflow-hidden shrink-0" />
                        </div>
                      </div>
                      <div className="h-[60px] w-[189px] rounded-3xs box-border flex flex-row items-start justify-start py-4 px-2.5 gap-[24px] z-[1] border-[1px] border-solid border-grey-6">
                        <img
                          className="h-7 w-[107px] relative object-cover min-h-[28px] z-[2]"
                          alt=""
                          src="/download-2-21@2x.png"
                        />
                        <div className="h-[60px] w-[189px] relative rounded-3xs box-border hidden border-[1px] border-solid border-grey-6" />
                        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                          <div className="w-6 h-6 rounded-81xl bg-white shadow-[0px_2px_5px_rgba(103,_110,_118,_0.08),_0px_0px_0px_1px_rgba(103,_110,_118,_0.16),_0px_1px_1px_rgba(0,_0,_0,_0.12)] overflow-hidden shrink-0" />
                        </div>
                      </div>
                      <div className="h-[60px] w-[189px] rounded-3xs box-border flex flex-row items-start justify-start py-4 px-2.5 gap-[24px] z-[1] border-[1px] border-solid border-grey-6">
                        <img
                          className="h-7 w-[107px] relative object-cover min-h-[28px] z-[2]"
                          alt=""
                          src="/download-2-31@2x.png"
                        />
                        <div className="h-[60px] w-[189px] relative rounded-3xs box-border hidden border-[1px] border-solid border-grey-6" />
                        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                          <div className="w-6 h-6 rounded-81xl bg-white shadow-[0px_2px_5px_rgba(103,_110,_118,_0.08),_0px_0px_0px_1px_rgba(103,_110,_118,_0.16),_0px_1px_1px_rgba(0,_0,_0,_0.12)] overflow-hidden shrink-0" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <LoadingSpinner />
                </div>
              </div>
            </div>
            <TreemapParent propAccentColor="#0065ca" />
          </div>
        </div>
        <ValueFilter />
      </div>
    </section>
  );
};

export default TotalAmountLabel;
