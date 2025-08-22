import type { NextPage } from "next";
import GroupComponent4 from "../components/group-component4";
import FlightCards2 from "../components/flight-cards2";
import FrameComponent18 from "../components/frame-component18";
import FrameComponent17 from "../components/frame-component17";
import FrameComponent16 from "../components/frame-component16";

const ChooseAddOns: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-[40px] tracking-[normal] mq750:gap-[20px_40px]">
      <GroupComponent4 />
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="w-[1240px] flex flex-row items-start justify-start gap-[24px] max-w-full text-left text-sm text-blue font-kanit">
          <FlightCards2 />
          <div className="w-[295px] flex flex-col items-start justify-start gap-[40px] mq1050:hidden mq450:gap-[20px_40px]">
            <FrameComponent18 />
            <div className="self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-start py-5 px-[19px] gap-[20px] border-[1px] border-solid border-grey-6">
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
              <FrameComponent17
                iCICI1="/icici-1.svg"
                iCICINB="ICICINB"
                applicableOnICICINetBanki="Applicable on ICICI Net Banking "
              />
              <FrameComponent16 />
              <FrameComponent17
                iCICI1="/upi.svg"
                iCICINB="CTUPI"
                applicableOnICICINetBanki="Applicable on UPI payment"
                propMinWidth="44px"
              />
              <div className="self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-start pt-5 px-[19px] pb-[19px] gap-[12px] border-[1px] border-solid border-grey-6">
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-base">
                  <button className="cursor-pointer [border:none] p-[5px] bg-grey-7 h-[35px] rounded-8xs flex flex-row items-center justify-start box-border gap-[10px] hover:bg-lightgray-100">
                    <img
                      className="h-[25px] w-6 relative overflow-hidden shrink-0 object-contain"
                      alt=""
                      src="/yes-bank1@2x.png"
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
                <div className="w-[196px] relative leading-[16px] font-light text-grey-3 inline-block">
                  {`Applicable on Yes Bank Credit `}
                  <span className="[text-decoration:underline]">Know more</span>
                </div>
              </div>
              <div className="self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-start pt-5 px-[19px] pb-[19px] gap-[12px] text-grey border-[1px] border-solid border-grey-6">
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-base">
                  <div className="h-[35px] rounded-8xs bg-grey-7 flex flex-row items-center justify-start p-[5px] box-border gap-[10px]">
                    <img
                      className="h-[25px] w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/hdfc-1.svg"
                    />
                    <div className="h-2.5 relative font-medium inline-block min-w-[65px]">
                      HDFCEMI
                    </div>
                  </div>
                  <div className="h-2.5 relative font-medium text-blue inline-block min-w-[44px]">
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
              <div className="self-stretch h-[132px] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-start p-5 relative gap-[12px_28px] border-[1px] border-solid border-grey-6">
                <button className="cursor-pointer [border:none] p-[5px] bg-grey-7 h-[34px] !m-[0] absolute top-[20px] left-[20px] rounded-8xs flex flex-row items-start justify-start box-border gap-[10px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/onecard-2.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                    <div className="h-2.5 relative text-base font-medium font-kanit text-grey text-left inline-block min-w-[97px]">
                      ONECARDEMI
                    </div>
                  </div>
                </button>
                <div className="h-2.5 absolute !m-[0] top-[20px] left-[191px] text-base font-medium inline-block min-w-[44px]">
                  Apply
                </div>
                <div className="h-[9px] absolute !m-[0] top-[66px] left-[20px] font-medium text-blue-2 inline-block min-w-[73px]">
                  Flat 10% off
                </div>
                <div className="absolute !m-[0] top-[87px] left-[20px] leading-[16px] font-light text-grey-3">
                  <p className="m-0">Applicable on one card credit card</p>
                  <p className="m-0 [text-decoration:underline]">Know more</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ChooseAddOns;
