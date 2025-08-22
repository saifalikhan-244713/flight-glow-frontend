import type { NextPage } from "next";
import FlightCards from "../components/flight-cards";
import ICICIApplication from "../components/i-c-i-c-i-application";
import TopHeader from "@/components/top-header";
const AddContactDetails: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[40px] tracking-[normal] mq750:gap-[20px_40px]">
      <TopHeader />
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="h-[942px] w-[1240px] flex flex-row items-start justify-start pt-0 px-0 pb-[278px] box-border gap-[24px] max-w-full text-left text-xl text-grey-3 font-kanit lg:pb-[181px] lg:box-border mq750:pb-[118px] mq750:box-border mq1050:h-auto">
          <FlightCards />
          <div className="w-[295px] flex flex-col items-start justify-start gap-[40px] mq1050:hidden mq450:gap-[20px_40px]">
            <div className="self-stretch h-[220px] rounded-3xs box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-5 px-0 gap-[19.5px] border-[1px] border-solid border-grey-6">
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
                  <div className="relative text-5xl leading-[110.3%] font-medium text-blue-2 inline-block min-w-[63px] mq450:text-lgi mq450:leading-[21px]">
                    11,405
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-grey-6" />
              <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-5 text-sm">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10px]">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                    <div className="relative leading-[110.3%] font-light inline-block min-w-[127px]">
                      Base fare (1 traveller)
                    </div>
                    <div className="relative leading-[110.3%] inline-block min-w-[43px] whitespace-nowrap">
                      ₹8,906
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                    <div className="relative leading-[110.3%] font-light inline-block min-w-[91px]">
                      Taxes and fees
                    </div>
                    <div className="relative leading-[110.3%] inline-block min-w-[41px] whitespace-nowrap">
                      ₹2000
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                    <div className="relative leading-[110.3%] font-light inline-block min-w-[102px]">
                      Convenience fee
                    </div>
                    <div className="relative leading-[110.3%] inline-block min-w-[30px] whitespace-nowrap">
                      ₹499
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-row items-start justify-between gap-[20px]">
                    <div className="self-stretch flex flex-row items-end justify-start gap-[10px]">
                      <div className="relative leading-[110.3%] font-light inline-block min-w-[51px]">
                        Add ons
                      </div>
                      <img
                        className="h-4 w-4 relative min-h-[16px]"
                        alt=""
                        src="/vuesaxlineararrowdown-6.svg"
                      />
                    </div>
                    <div className="relative leading-[110.3%] inline-block min-w-[27px]">
                      Free
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-start py-5 px-[19px] gap-[20px] text-sm text-blue border-[1px] border-solid border-grey-6">
              <div className="flex flex-row items-start justify-start py-0 px-3 text-xl text-blue-2">
                <h3 className="m-0 relative text-inherit leading-[110.3%] font-medium font-inherit mq450:text-base mq450:leading-[18px]">
                  Apply coupon or gift card
                </h3>
              </div>
              <div className="self-stretch rounded-3xs overflow-hidden flex flex-row items-start justify-between py-[25px] pr-[21px] pl-[19px] gap-[20px] text-base text-grey-3 border-[1px] border-solid border-grey-6">
                <div className="h-2.5 relative font-extralight inline-block min-w-[122px]">
                  Coupon/Gift Card
                </div>
                <div className="h-2.5 relative font-medium text-blue inline-block min-w-[44px]">
                  Apply
                </div>
              </div>
              <div className="self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-start py-5 px-[19px] gap-[12px] border-[1px] border-solid border-grey-6">
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-base">
                  <button className="cursor-pointer [border:none] p-[5px] bg-grey-7 h-[34px] rounded-8xs flex flex-row items-center justify-start box-border gap-[10px] hover:bg-lightgray-100">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/icici-1.svg"
                    />
                    <div className="h-2.5 relative text-base font-medium font-kanit text-grey text-left inline-block min-w-[53px]">
                      ICICINB
                    </div>
                  </button>
                  <div className="h-2.5 relative font-medium inline-block min-w-[44px]">
                    Apply
                  </div>
                </div>
                <div className="h-[9px] relative font-medium text-blue-2 inline-block min-w-[73px]">
                  Flat 10% off
                </div>
                <div className="relative leading-[16px] font-light text-grey-3">
                  <p className="m-0">{`Applicable on ICICI Net Banking `}</p>
                  <p className="m-0 [text-decoration:underline]">Know more</p>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start relative text-blue-2">
                <div className="h-[9px] absolute !m-[0] bottom-[57px] left-[20px] font-medium inline-block min-w-[73px]">
                  Flat 10% off
                </div>
                <div className="flex-1 rounded-3xs overflow-hidden flex flex-col items-start justify-start py-5 px-[19px] gap-[33px] z-[1] text-base text-blue border-[1px] border-solid border-grey-6 mq450:gap-[16px_33px]">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                    <button className="cursor-pointer [border:none] p-[5px] bg-grey-7 h-[34px] rounded-8xs flex flex-row items-center justify-start box-border gap-[10px] hover:bg-lightgray-100">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/bankofbaroda.svg"
                      />
                      <div className="h-2.5 relative text-base font-medium font-kanit text-grey text-left inline-block min-w-[52px]">
                        BOBDC
                      </div>
                    </button>
                    <div className="h-2.5 relative font-medium inline-block min-w-[44px]">
                      Apply
                    </div>
                  </div>
                  <div className="relative text-sm tracking-[-0.04em] leading-[16px] font-light text-grey-3">
                    <p className="m-0">Applicable on Bank of Baroda Debit</p>
                    <p className="m-0 [text-decoration:underline]">Know more</p>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-start pt-5 px-[19px] pb-[19px] gap-[12px] border-[1px] border-solid border-grey-6">
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-base">
                  <button className="cursor-pointer [border:none] p-[5px] bg-grey-7 h-[35px] rounded-8xs flex flex-row items-center justify-start box-border gap-[10px] hover:bg-lightgray-100">
                    <img
                      className="h-[25px] w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/upi.svg"
                    />
                    <div className="h-2.5 relative text-base font-medium font-kanit text-grey text-left inline-block min-w-[44px]">
                      CTUPI
                    </div>
                  </button>
                  <div className="h-2.5 relative font-medium inline-block min-w-[44px]">
                    Apply
                  </div>
                </div>
                <div className="h-[9px] relative font-medium text-blue-2 inline-block min-w-[73px]">
                  Flat 10% off
                </div>
                <div className="relative leading-[16px] font-light text-grey-3">
                  <p className="m-0">Applicable on UPI payment</p>
                  <p className="m-0 [text-decoration:underline]">Know more</p>
                </div>
              </div>
              <div className="self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-start pt-5 px-[19px] pb-[19px] gap-[12px] border-[1px] border-solid border-grey-6">
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-base">
                  <button className="cursor-pointer [border:none] p-[5px] bg-grey-7 h-[35px] rounded-8xs flex flex-row items-center justify-start box-border gap-[10px] hover:bg-lightgray-100">
                    <img
                      className="h-[25px] w-6 relative overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/yes-bank@2x.png"
                    />
                    <div className="h-2.5 relative text-base font-medium font-kanit text-grey text-left inline-block min-w-[54px]">
                      YESEMI
                    </div>
                  </button>
                  <div className="h-2.5 relative font-medium inline-block min-w-[44px]">
                    Apply
                  </div>
                </div>
                <div className="h-[9px] relative font-medium text-blue-2 inline-block min-w-[73px]">
                  Flat 10% off
                </div>
                <div className="w-[196px] h-[25px] relative leading-[16px] font-light text-grey-3 inline-block">
                  {`Applicable on Yes Bank Credit `}
                  <span className="[text-decoration:underline]">Know more</span>
                </div>
              </div>
              <div className="self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-start pt-5 px-[19px] pb-[19px] gap-[12px] text-grey border-[1px] border-solid border-grey-6">
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-base">
                  <div className="h-[35px] w-[109px] rounded-8xs bg-grey-7 flex flex-row items-center justify-start p-[5px] box-border gap-[10px]">
                    <img
                      className="h-[25px] w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/hdfc-1.svg"
                    />
                    <div className="h-2.5 flex-1 relative font-medium inline-block">
                      HDFCEMI
                    </div>
                  </div>
                  <div className="h-2.5 w-11 relative font-medium text-blue inline-block">
                    Apply
                  </div>
                </div>
                <div className="w-[73px] h-[9px] relative font-medium text-blue-2 inline-block">
                  Flat 10% off
                </div>
                <div className="w-[196px] h-[25px] relative leading-[16px] font-light text-grey-3 inline-block">
                  <p className="m-0">{`Applicable on ICICI Net Banking `}</p>
                  <p className="m-0 [text-decoration:underline]">Know more</p>
                </div>
              </div>
              <ICICIApplication />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AddContactDetails;
