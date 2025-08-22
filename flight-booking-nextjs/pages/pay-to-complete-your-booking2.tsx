import type { NextPage } from "next";
import GroupComponent9 from "../components/group-component9";
import GroupComponent8 from "../components/group-component8";
import TreemapParent from "../components/treemap-parent";
import ValueFilter from "../components/value-filter";

const PayToCompleteYourBooking: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[122px] box-border gap-[40px] tracking-[normal] mq750:gap-[20px_40px]">
      <GroupComponent9 />
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="w-[1240px] flex flex-row items-start justify-start gap-[15px] max-w-full text-left text-13xl text-blue-2 font-kanit">
          <div className="flex-1 rounded-3xs flex flex-col items-start justify-start gap-[40px] max-w-[calc(100%_-_310px)] mq1050:max-w-full mq450:gap-[20px_40px]">
            <h1 className="m-0 w-[882px] h-[21px] relative text-inherit leading-[110.3%] font-medium font-inherit inline-block max-w-full mq1050:text-7xl mq1050:leading-[28px] mq450:text-lgi mq450:leading-[21px]">
              Pay to complete your booking
            </h1>
            <div className="self-stretch rounded-3xs box-border flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-[20px] max-w-full text-xl text-grey-3 border-[1px] border-solid border-grey-6">
              <div className="self-stretch rounded-t-3xs rounded-b-none box-border flex flex-row items-start justify-start pt-0 pb-6 pr-[34px] pl-0 gap-[10px] max-w-full border-[1px] border-solid border-grey-6 mq1050:flex-wrap mq1050:pl-5 mq1050:pt-5 mq1050:pr-5 mq1050:box-border">
                <GroupComponent8 />
                <div className="flex-1 flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border min-w-[402px] max-w-full mq750:min-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
                    <h3 className="m-0 relative text-inherit leading-[110.3%] font-medium font-inherit text-blue-2 mq450:text-base mq450:leading-[18px]">
                      Choose an EMI option
                    </h3>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[10px] max-w-full text-center text-xs text-white mq750:flex-wrap">
                      <div className="w-[60px] rounded-3xs bg-tomato overflow-hidden shrink-0 flex flex-row items-start justify-start py-[17px] px-0 box-border [transform:_rotate(-90deg)]">
                        <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
                          <img
                            className="h-[18px] w-[18px] relative [transform:_rotate(90deg)] hidden"
                            alt=""
                            src="/linearsearch.svg"
                          />
                          <div className="flex-1 relative leading-[20px] font-medium">
                            Note
                          </div>
                          <img
                            className="h-[18px] w-[18px] relative [transform:_rotate(90deg)] hidden"
                            alt=""
                            src="/vuesaxlinearadd.svg"
                          />
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[382px] max-w-full text-left text-sm text-grey-3 mq750:min-w-full">
                        <div className="self-stretch relative leading-[18px] font-light">
                          FlightGlow does not levy any charges for availing EMI.
                          Charges, if any, are levied by the bank. Please check
                          with your bank for charges related to interest,
                          processing fees, refund or pre-closure
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
                      <h3 className="m-0 relative text-inherit leading-[110.3%] font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-base mq450:leading-[18px]">
                        Select Credit Card EMI Plans
                      </h3>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-sm">
                        <div className="flex flex-row items-start justify-start gap-[10px]">
                          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                            <div className="relative leading-[110.3%] font-light">
                              Show banks with No Cost EMI
                            </div>
                          </div>
                          <div className="w-6 rounded-2xl bg-grey-5 flex flex-row items-center justify-start p-0.5 box-border">
                            <div className="h-3 w-3 relative rounded-[50%] bg-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-sm">
                      <div className="flex flex-row items-start justify-start gap-[40px] max-w-[calc(100%_-_44px)] mq450:flex-wrap mq450:gap-[40px_20px]">
                        <div className="h-[34px] flex flex-row items-start justify-start gap-[10px] text-base">
                          <img
                            className="h-[34px] w-[34px] relative object-cover"
                            loading="lazy"
                            alt=""
                            src="/rectangle-4683@2x.png"
                          />
                          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                            <div className="relative leading-[18px] font-medium">
                              State Bank Of India
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                          <div className="relative leading-[110.3%] font-light inline-block min-w-[68px]">
                            from ₹1,337
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                          <div className="relative leading-[110.3%] font-light inline-block min-w-[72px]">
                            15% interest
                          </div>
                        </div>
                      </div>
                      <div className="h-[29px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                        <img
                          className="w-6 h-6 relative"
                          loading="lazy"
                          alt=""
                          src="/ararrow_up.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-end justify-start gap-[9.5px] max-w-full text-base mq750:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full mq750:min-w-full">
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[33.5px] box-border max-w-full text-mini">
                          <div className="flex-1 rounded-lg box-border overflow-hidden flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-grey-6">
                            <div className="w-[551px] h-[52px] overflow-x-auto shrink-0 flex flex-row items-center justify-start py-0 px-0 box-border max-w-full text-base text-blue-2">
                              <input
                                className="w-[191px] [border:none] [outline:none] bg-[transparent] h-[68px] [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca] flex flex-row items-center justify-start py-[22px] px-3 box-border font-kanit text-base text-blue-2 opacity-[0.8]"
                                placeholder="Months"
                                type="text"
                              />
                              <div className="w-[120px] [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca] shrink-0 flex flex-row items-center justify-start py-[22px] px-3 box-border gap-[10px] opacity-[0.8]">
                                <div className="relative inline-block min-w-[25px]">
                                  EMI
                                </div>
                                <img
                                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                                  alt=""
                                  src="/feather-iconsfichevrondown.svg"
                                />
                              </div>
                              <div className="w-[120px] [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca] shrink-0 flex flex-row items-center justify-start py-[22px] px-3 box-border gap-[10px] opacity-[0.8]">
                                <div className="relative inline-block min-w-[55px]">
                                  Interest
                                </div>
                                <img
                                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                                  alt=""
                                  src="/feather-iconsfichevrondown.svg"
                                />
                              </div>
                              <div className="w-[120px] [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca] shrink-0 flex flex-row items-center justify-start py-[22px] px-3 box-border gap-[10px] opacity-[0.8]">
                                <div className="relative inline-block min-w-[36px]">
                                  Total
                                </div>
                                <img
                                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                                  alt=""
                                  src="/feather-iconsfichevrondown.svg"
                                />
                              </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-center py-[0.5px] px-0 [row-gap:20px] mq750:flex-wrap">
                              <div className="flex-1 bg-white box-border overflow-hidden flex flex-row items-center justify-start py-[18px] pr-[127px] pl-[22px] gap-[10px] min-w-[32px] border-b-[1px] border-solid border-grey-6">
                                <div className="h-6 w-6 rounded-81xl bg-white shadow-[0px_2px_5px_rgba(103,_110,_118,_0.08),_0px_0px_0px_1px_rgba(103,_110,_118,_0.16),_0px_1px_1px_rgba(0,_0,_0,_0.12)] overflow-hidden shrink-0" />
                                <div className="relative inline-block min-w-[8px]">
                                  3
                                </div>
                              </div>
                              <div className="w-[120px] bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-[19px] px-3 opacity-[0.8] whitespace-nowrap border-b-[1px] border-solid border-grey-6">
                                <div className="relative inline-block min-w-[43px]">
                                  {" "}
                                  ₹5073
                                </div>
                              </div>
                              <div className="w-[120px] bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-[19px] px-3 opacity-[0.8] border-b-[1px] border-solid border-grey-6">
                                <div className="relative inline-block min-w-[35px]">
                                  16.5%
                                </div>
                              </div>
                              <div className="w-[120px] bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-[19px] px-3 opacity-[0.8] whitespace-nowrap border-b-[1px] border-solid border-grey-6">
                                <div className="relative inline-block min-w-[40px]">
                                  {" "}
                                  ₹15211
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-center py-[0.5px] px-0 [row-gap:20px] mq750:flex-wrap">
                              <div className="flex-1 bg-white box-border overflow-hidden flex flex-row items-center justify-start py-[18px] pr-[126px] pl-[22px] gap-[10px] min-w-[33px] border-b-[1px] border-solid border-grey-6">
                                <div className="h-6 w-6 rounded-81xl bg-white shadow-[0px_2px_5px_rgba(103,_110,_118,_0.08),_0px_0px_0px_1px_rgba(103,_110,_118,_0.16),_0px_1px_1px_rgba(0,_0,_0,_0.12)] overflow-hidden shrink-0" />
                                <div className="relative inline-block min-w-[9px]">
                                  6
                                </div>
                              </div>
                              <div className="w-[120px] bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-[19px] px-3 opacity-[0.8] whitespace-nowrap border-b-[1px] border-solid border-grey-6">
                                <div className="relative inline-block min-w-[42px]">
                                  {" "}
                                  ₹2578
                                </div>
                              </div>
                              <div className="w-[120px] bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-[19px] px-3 opacity-[0.8] border-b-[1px] border-solid border-grey-6">
                                <div className="relative inline-block min-w-[24px]">
                                  15%
                                </div>
                              </div>
                              <div className="w-[120px] bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-[19px] px-3 opacity-[0.8] whitespace-nowrap border-b-[1px] border-solid border-grey-6">
                                <div className="relative inline-block min-w-[49px]">
                                  {" "}
                                  ₹15466
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-center py-px px-0 [row-gap:20px] mq750:flex-wrap">
                              <div className="flex-1 bg-white box-border overflow-hidden flex flex-row items-center justify-start py-[18px] pr-[126px] pl-[22px] gap-[10px] min-w-[33px] border-b-[1px] border-solid border-grey-6">
                                <div className="h-6 w-6 rounded-81xl bg-white shadow-[0px_2px_5px_rgba(103,_110,_118,_0.08),_0px_0px_0px_1px_rgba(103,_110,_118,_0.16),_0px_1px_1px_rgba(0,_0,_0,_0.12)] overflow-hidden shrink-0" />
                                <div className="relative inline-block min-w-[9px]">
                                  9
                                </div>
                              </div>
                              <div className="w-[120px] bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-[19px] px-3 opacity-[0.8] whitespace-nowrap border-b-[1px] border-solid border-grey-6">
                                <div className="relative inline-block min-w-[40px]">
                                  {" "}
                                  ₹1750
                                </div>
                              </div>
                              <div className="w-[120px] bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-[19px] px-3 opacity-[0.8] border-b-[1px] border-solid border-grey-6">
                                <div className="relative inline-block min-w-[24px]">
                                  15%
                                </div>
                              </div>
                              <div className="w-[120px] bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-[19px] px-3 opacity-[0.8] whitespace-nowrap border-b-[1px] border-solid border-grey-6">
                                <div className="relative inline-block min-w-[46px]">
                                  {" "}
                                  ₹15753
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-center py-px px-0 [row-gap:20px] mq750:flex-wrap">
                              <div className="flex-1 bg-white overflow-hidden flex flex-row items-center justify-start py-[18px] pr-[122px] pl-[22px] box-border gap-[10px] min-w-[37px]">
                                <div className="h-6 w-6 rounded-81xl bg-white shadow-[0px_2px_5px_rgba(103,_110,_118,_0.08),_0px_0px_0px_1px_rgba(103,_110,_118,_0.16),_0px_1px_1px_rgba(0,_0,_0,_0.12)] overflow-hidden shrink-0" />
                                <div className="relative inline-block min-w-[13px]">
                                  12
                                </div>
                              </div>
                              <div className="w-[120px] bg-white overflow-hidden shrink-0 flex flex-row items-center justify-start py-[19px] px-3 box-border opacity-[0.8] whitespace-nowrap">
                                <div className="relative inline-block min-w-[39px]">
                                  {" "}
                                  ₹1337
                                </div>
                              </div>
                              <div className="w-[120px] bg-white overflow-hidden shrink-0 flex flex-row items-center justify-start py-[19px] px-3 box-border opacity-[0.8]">
                                <div className="relative inline-block min-w-[24px]">
                                  15%
                                </div>
                              </div>
                              <div className="w-[120px] bg-white overflow-hidden shrink-0 flex flex-row items-center justify-start py-[19px] px-3 box-border opacity-[0.8] whitespace-nowrap">
                                <div className="relative inline-block min-w-[50px]">
                                  {" "}
                                  ₹16042
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[404px] flex flex-row items-end justify-between max-w-full gap-[20px] mq450:flex-wrap">
                          <div className="h-[34px] flex flex-row items-start justify-start gap-[10px]">
                            <img
                              className="h-[34px] w-[34px] relative object-cover"
                              alt=""
                              src="/rectangle-4683-1@2x.png"
                            />
                            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                              <div className="relative leading-[18px] font-medium inline-block min-w-[32px]">
                                Axis
                              </div>
                            </div>
                          </div>
                          <div className="w-[180px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border text-sm">
                            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                              <div className="relative leading-[110.3%] font-light inline-block min-w-[68px]">
                                from ₹1,337
                              </div>
                              <div className="relative leading-[110.3%] font-light inline-block min-w-[72px]">
                                15% interest
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[404px] flex flex-row items-end justify-between max-w-full gap-[20px] mq450:flex-wrap">
                          <div className="h-[34px] flex flex-row items-start justify-start gap-[10px]">
                            <img
                              className="h-[34px] w-[34px] relative object-cover"
                              alt=""
                              src="/rectangle-4683-2@2x.png"
                            />
                            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                              <div className="relative leading-[18px] font-medium inline-block min-w-[32px]">
                                ICICI
                              </div>
                            </div>
                          </div>
                          <div className="w-[180px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border text-sm">
                            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                              <div className="relative leading-[110.3%] font-light inline-block min-w-[68px]">
                                from ₹1,337
                              </div>
                              <div className="relative leading-[110.3%] font-light inline-block min-w-[72px]">
                                15% interest
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[404px] flex flex-row items-end justify-between max-w-full gap-[20px] mq450:flex-wrap">
                          <div className="h-[34px] flex flex-row items-start justify-start gap-[10px]">
                            <img
                              className="h-[34px] w-[34px] relative object-cover"
                              alt=""
                              src="/rectangle-4683-3@2x.png"
                            />
                            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                              <div className="relative leading-[18px] font-medium inline-block min-w-[40px]">
                                HDFC
                              </div>
                            </div>
                          </div>
                          <div className="w-[180px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border text-sm">
                            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                              <div className="relative leading-[110.3%] font-light inline-block min-w-[68px]">
                                from ₹1,337
                              </div>
                              <div className="relative leading-[110.3%] font-light inline-block min-w-[72px]">
                                15% interest
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[404px] flex flex-row items-end justify-start gap-[66px] max-w-full mq450:flex-wrap mq450:gap-[66px_33px]">
                          <div className="h-[34px] flex flex-row items-start justify-start gap-[9px]">
                            <img
                              className="h-[34px] w-[34px] relative object-cover"
                              alt=""
                              src="/rectangle-4683-4@2x.png"
                            />
                            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                              <div className="relative leading-[18px] font-medium inline-block min-w-[115px]">
                                Kotak Mahindra
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border min-w-[117px] text-sm">
                            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                              <div className="relative leading-[110.3%] font-light inline-block min-w-[68px]">
                                from ₹1,337
                              </div>
                              <div className="relative leading-[110.3%] font-light inline-block min-w-[72px]">
                                15% interest
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[191px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[30px]">
                          <img
                            className="w-6 h-6 relative"
                            alt=""
                            src="/vuesaxlineararrowdown-2.svg"
                          />
                          <img
                            className="w-6 h-6 relative"
                            alt=""
                            src="/vuesaxlineararrowdown-2.svg"
                          />
                          <img
                            className="w-6 h-6 relative"
                            alt=""
                            src="/vuesaxlineararrowdown-2.svg"
                          />
                          <img
                            className="w-6 h-6 relative"
                            alt=""
                            src="/vuesaxlineararrowdown-2.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <TreemapParent />
            </div>
          </div>
          <ValueFilter />
        </section>
      </main>
    </div>
  );
};

export default PayToCompleteYourBooking;
