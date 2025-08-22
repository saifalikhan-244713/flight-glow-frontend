import type { NextPage } from "next";
import { useState } from "react";
import GroupComponent4 from "../components/group-component4";
import FrameComponent21 from "../components/frame-component21";

const PayToCompleteYourBooking1: NextPage = () => {
  const [checkboxesChecked, setCheckboxesChecked] = useState(true);
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[382px] box-border gap-[40px] tracking-[normal] mq750:gap-[20px_40px]">
      <GroupComponent4 />
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-13xl text-blue-2 font-kanit">
        <div className="w-[1240px] flex flex-row items-start justify-start gap-[15px] max-w-full">
          <div className="flex-1 rounded-3xs flex flex-col items-start justify-start gap-[40px] max-w-[calc(100%_-_310px)] mq1050:max-w-full mq450:gap-[20px_40px]">
            <h1 className="m-0 w-[882px] h-[21px] relative text-inherit leading-[110.3%] font-medium font-inherit inline-block max-w-full mq1050:text-7xl mq1050:leading-[28px] mq450:text-lgi mq450:leading-[21px]">
              Pay to complete your booking
            </h1>
            <form className="m-0 self-stretch rounded-3xs box-border flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-[20px] max-w-full border-[1px] border-solid border-grey-6">
              <div className="self-stretch rounded-t-3xs rounded-b-none box-border flex flex-row items-start justify-start pt-0 pb-6 pr-[33px] pl-0 gap-[10px] max-w-full border-[1px] border-solid border-grey-6 mq1050:flex-wrap mq1050:pl-5 mq1050:pt-5 mq1050:pr-5 mq1050:box-border">
                <div className="h-[334px] w-[266px] flex flex-col items-start justify-start py-6 px-5 box-border relative gap-[14px] min-w-[266px] mq1050:flex-1">
                  <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs" />
                  <div className="w-[217px] flex-1 rounded [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca] flex flex-row items-start justify-between py-[11px] px-2.5 box-border gap-[20px] z-[1]">
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <div className="relative text-xl leading-[110.3%] font-kanit text-blue-2 text-left inline-block min-w-[30px] mq450:text-base mq450:leading-[18px]">
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
                    <div className="relative text-xl leading-[110.3%] font-kanit text-blue text-left">
                      Debit/Credit card
                    </div>
                  </div>
                  <div className="w-[217px] rounded bg-white flex flex-row items-start justify-start py-3 px-2.5 box-border whitespace-nowrap z-[1]">
                    <div className="relative text-xl leading-[110.3%] font-kanit text-blue text-left inline-block min-w-[109px]">
                      Net banking
                    </div>
                  </div>
                  <div className="w-[217px] rounded bg-white flex flex-row items-start justify-start py-3 px-2.5 box-border z-[1]">
                    <div className="relative text-xl leading-[110.3%] font-kanit text-blue text-left inline-block min-w-[31px] mq450:text-base mq450:leading-[18px]">
                      EMI
                    </div>
                  </div>
                  <div className="w-[217px] rounded bg-white flex flex-row items-start justify-start py-3 px-2.5 box-border z-[1]">
                    <div className="relative text-xl leading-[110.3%] font-kanit text-blue text-left inline-block min-w-[65px] mq450:text-base mq450:leading-[18px]">
                      Wallets
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border min-w-[402px] max-w-full mq750:min-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
                    <h3 className="m-0 relative text-xl leading-[110.3%] font-medium font-kanit text-blue-2 text-left inline-block min-w-[107px] mq450:text-base mq450:leading-[18px]">
                      Select Bank
                    </h3>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
                      <h3 className="m-0 relative text-xl leading-[110.3%] font-medium font-kanit text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left mq450:text-base mq450:leading-[18px]">
                        Popular banks
                      </h3>
                      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[14px_24px] min-h-[134px]">
                        <div className="h-[60px] w-[189px] rounded-3xs box-border flex flex-row items-start justify-start py-4 px-2.5 gap-[24px] z-[1] border-[1px] border-solid border-grey-6">
                          <img
                            className="h-7 w-[107px] relative object-cover min-h-[28px] z-[2]"
                            loading="lazy"
                            alt=""
                            src="/download-1@2x.png"
                          />
                          <div className="h-[60px] w-[189px] relative rounded-3xs box-border hidden border-[1px] border-solid border-grey-6" />
                          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                            <div className="w-6 h-6 rounded-81xl bg-white shadow-[0px_2px_5px_rgba(103,_110,_118,_0.08),_0px_0px_0px_1px_rgba(103,_110,_118,_0.16),_0px_1px_1px_rgba(0,_0,_0,_0.12)] overflow-hidden shrink-0" />
                          </div>
                        </div>
                        <div className="h-[60px] w-[189px] rounded-3xs box-border flex flex-row items-start justify-start py-4 px-2.5 gap-[24px] z-[1] border-[1px] border-solid border-grey-6">
                          <img
                            className="h-7 w-[107px] relative object-cover min-h-[28px] z-[2]"
                            loading="lazy"
                            alt=""
                            src="/download-2@2x.png"
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
                            src="/download-2-1@2x.png"
                          />
                          <div className="h-[60px] w-[189px] relative rounded-3xs box-border hidden border-[1px] border-solid border-grey-6" />
                          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                            <div className="w-6 h-6 rounded-81xl bg-white shadow-[0px_2px_5px_rgba(103,_110,_118,_0.08),_0px_0px_0px_1px_rgba(103,_110,_118,_0.16),_0px_1px_1px_rgba(0,_0,_0,_0.12)] overflow-hidden shrink-0" />
                          </div>
                        </div>
                        <div className="h-[60px] w-[189px] rounded-3xs box-border flex flex-row items-start justify-start py-4 px-2.5 gap-[63px] z-[1] border-[1px] border-solid border-grey-6">
                          <img
                            className="h-7 w-[68px] relative object-cover min-h-[28px] z-[2]"
                            alt=""
                            src="/download-1-1@2x.png"
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
                            src="/download-2-2@2x.png"
                          />
                          <div className="h-[60px] w-[189px] relative rounded-3xs box-border hidden border-[1px] border-solid border-grey-6" />
                          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                            <div className="w-6 h-6 rounded-81xl bg-white shadow-[0px_2px_5px_rgba(103,_110,_118,_0.08),_0px_0px_0px_1px_rgba(103,_110,_118,_0.16),_0px_1px_1px_rgba(0,_0,_0,_0.12)] overflow-hidden shrink-0" />
                          </div>
                        </button>
                        <div className="h-[60px] w-[189px] rounded-3xs box-border flex flex-row items-start justify-start py-4 px-2.5 gap-[24px] z-[1] border-[1px] border-solid border-grey-6">
                          <img
                            className="h-7 w-[107px] relative object-cover min-h-[28px] z-[2]"
                            alt=""
                            src="/download-2-3@2x.png"
                          />
                          <div className="h-[60px] w-[189px] relative rounded-3xs box-border hidden border-[1px] border-solid border-grey-6" />
                          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                            <div className="w-6 h-6 rounded-81xl bg-white shadow-[0px_2px_5px_rgba(103,_110,_118,_0.08),_0px_0px_0px_1px_rgba(103,_110,_118,_0.16),_0px_1px_1px_rgba(0,_0,_0,_0.12)] overflow-hidden shrink-0" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <FrameComponent21
                      allOtherBanks="All other banks"
                      selectBank="Select bank"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[22px] pl-[22.5px] box-border max-w-full">
                <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[27px] max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[10px] min-w-[320px] max-w-full mq750:flex-wrap">
                    <input
                      className="accent-blue m-0 h-6 w-6 rounded overflow-hidden shrink-0"
                      checked={checkboxesChecked}
                      type="checkbox"
                      onChange={(event) =>
                        setCheckboxesChecked(event.target.checked)
                      }
                    />
                    <div className="flex-1 relative text-sm font-light font-kanit text-grey-3 text-left inline-block min-w-[298px] max-w-full">
                      I understand and agree to the rules and restrictions of
                      this fare, the booking policy, the privacy policy and the
                      terms and conditions of FlightGlow and confirm address
                      details entered are correct
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <div className="flex flex-row items-start justify-start py-0 px-5">
                      <div className="relative text-13xl leading-[110.3%] font-medium font-kanit text-blue-2 text-left inline-block min-w-[98px] whitespace-nowrap mq1050:text-7xl mq1050:leading-[28px] mq450:text-lgi mq450:leading-[21px]">
                        ₹11,405
                      </div>
                    </div>
                    <div className="relative text-xs font-light font-kanit text-grey-3 text-left">
                      Total, inclusive of all taxes
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-4 px-[26px] bg-blue-2 rounded-3xs overflow-hidden flex flex-row items-start justify-start">
                    <div className="flex flex-row items-start justify-start py-0 px-[38.5px] gap-[12px]">
                      <img
                        className="h-6 w-6 relative hidden"
                        alt=""
                        src="/search_normal.svg"
                      />
                      <div className="w-[71px] relative text-lg leading-[28px] font-medium font-kanit text-white text-center flex items-center justify-center min-w-[71px]">
                        Pay Now
                      </div>
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/ararrow_right.svg"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="w-[295px] flex flex-col items-start justify-start gap-[40px] text-xl text-grey-3 mq1050:hidden mq450:gap-[20px_40px]">
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
        </div>
      </section>
    </div>
  );
};

export default PayToCompleteYourBooking1;
