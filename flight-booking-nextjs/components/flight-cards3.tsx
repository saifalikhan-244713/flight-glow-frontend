import type { NextPage } from "next";
import GroupComponent5 from "./group-component5";
import FrameComponent22 from "./frame-component22";

const FlightCards3: NextPage = () => {
  return (
    <div className="flex-1 rounded-3xs flex flex-col items-start justify-start gap-[40px] max-w-[calc(100%_-_310px)] text-left text-13xl text-blue-2 font-kanit mq1050:max-w-full mq450:gap-[20px_40px]">
      <h1 className="m-0 w-[882px] h-[21px] relative text-inherit leading-[110.3%] font-medium font-inherit inline-block max-w-full mq1050:text-7xl mq1050:leading-[28px] mq450:text-lgi mq450:leading-[21px]">
        Pay to complete your booking
      </h1>
      <div className="self-stretch rounded-3xs box-border flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-[20px] max-w-full text-xl text-blue border-[1px] border-solid border-grey-6">
        <div className="self-stretch rounded-t-3xs rounded-b-none box-border flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full border-[1px] border-solid border-grey-6">
          <GroupComponent5 />
          <div className="w-[315px] flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border text-grey-3">
            <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
              <h3 className="m-0 relative text-inherit leading-[110.3%] font-light font-inherit inline-block min-w-[104px] mq450:text-base mq450:leading-[18px]">
                Enter UPI ID
              </h3>
              <div className="self-stretch h-[60px] relative rounded-3xs box-border border-[1px] border-solid border-grey-6">
                <div className="absolute top-[0px] left-[0px] rounded-3xs box-border w-full h-full hidden border-[1px] border-solid border-grey-6" />
              </div>
              <div className="self-stretch relative text-base leading-[110.3%] font-light">
                Payment request will be sent to the phone no. linked to your UPI
                ID
              </div>
            </div>
          </div>
          <div className="h-[438px] flex-1 relative min-w-[214px] max-w-full text-5xl text-orange">
            <div className="absolute top-[196px] left-[0px] rounded bg-white flex flex-row items-start justify-start py-2.5 px-1 z-[1]">
              <h2 className="m-0 relative text-inherit leading-[110.3%] font-normal font-inherit inline-block min-w-[32px] mq450:text-lgi mq450:leading-[21px]">
                OR
              </h2>
            </div>
            <div className="absolute top-[0px] left-[26px] rounded-tl-none rounded-tr-3xs rounded-b-none box-border w-[303px] h-[438px] flex flex-col items-start justify-start pt-7 px-[17px] pb-10 gap-[48px] text-xl text-blue-2 border-[1px] border-solid border-grey-6">
              <div className="w-[303px] h-[438px] relative rounded-tl-none rounded-tr-3xs rounded-b-none box-border hidden border-[1px] border-solid border-grey-6" />
              <h3 className="m-0 relative text-inherit leading-[110.3%] font-medium font-inherit z-[1] mq450:text-base mq450:leading-[18px]">
                SCAN QR CODE
              </h3>
              <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-[11px] pl-2.5 text-base text-grey-3">
                <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[5px]">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-end py-0 pr-3.5 pl-4">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                      <div className="h-[33px] flex flex-row items-start justify-start py-0 px-[62px] box-border">
                        <img
                          className="h-[33px] w-[92px] relative overflow-hidden shrink-0 z-[1]"
                          loading="lazy"
                          alt=""
                          src="/upipaymenticon.svg"
                        />
                      </div>
                      <img
                        className="w-[216px] h-[216px] relative overflow-hidden shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src="/qrcodesvgrepocom-1-1.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-[46px] flex flex-row items-start justify-between gap-[20px]">
                    <div className="self-stretch w-[76px] flex flex-col items-start justify-start gap-[4px]">
                      <img
                        className="self-stretch h-6 relative max-w-full overflow-hidden shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src="/paytmicon.svg"
                      />
                      <div className="flex flex-row items-start justify-start py-0 px-[9px]">
                        <div className="relative leading-[18px] inline-block min-w-[47px] z-[1]">
                          Paytm
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                      <div className="h-6 flex flex-row items-start justify-start py-0 px-[5px] box-border">
                        <img
                          className="h-6 w-7 relative overflow-hidden shrink-0 object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/googlepayicon@2x.png"
                        />
                      </div>
                      <div className="relative leading-[18px] inline-block min-w-[38px] z-[1]">
                        Gpay
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                      <div className="h-6 flex flex-row items-start justify-start py-0 px-5 box-border">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
                          loading="lazy"
                          alt=""
                          src="/phonepelogoicon.svg"
                        />
                      </div>
                      <div className="relative leading-[18px] inline-block min-w-[64px] z-[1]">
                        Phonepe
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FrameComponent22 />
      </div>
    </div>
  );
};

export default FlightCards3;
