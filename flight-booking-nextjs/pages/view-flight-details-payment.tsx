import type { NextPage } from "next";
import TopHeader3 from "../components/top-header3";
import FrameComponent24 from "../components/frame-component24";
import FrameComponent23 from "../components/FlightOrderItenery";
import ControlFlowSplit from "../components/control-flow-split";
import ContactDetail from "../components/contact-detail";
import IconSet from "../components/icon-set";

const ViewFlightDetailsPayment: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[60px] tracking-[normal] mq750:gap-[30px_60px]">
      <TopHeader3 />
      <FrameComponent24 bookedBy="Jenny Shah" date="Saturday, 30 Dec 2023"/>
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-xl text-blue-2 font-kanit">
        <div className="w-[1242px] rounded-3xs bg-white box-border flex flex-col items-end justify-start gap-[33px] max-w-full shrink-0 border-[1px] border-solid border-grey-6 mq750:gap-[16px_33px]">
          <div className="rounded-t-3xs rounded-b-none [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca] overflow-hidden flex flex-row items-start justify-start py-[18px] px-10 box-border gap-[10px] max-w-full mq1225:flex-wrap">
            <div className="flex flex-row items-center justify-start py-0 pr-[514px] pl-0 box-border gap-[20px] max-w-full mq1050:flex-wrap mq1050:pr-[257px] mq1050:box-border mq450:pr-5 mq450:box-border">
              <div className="relative leading-[110.3%] font-medium inline-block min-w-[59px] mq450:text-base mq450:leading-[18px]">
                Rajkot
              </div>
              <img
                className="h-[7.4px] w-[78px] relative"
                alt=""
                src="/arrow-4.svg"
              />
              <div className="h-[13px] relative inline-block mq450:text-base">
                <span className="font-medium">{`Mumbai `}</span>
                <span className="font-light">Wed, 3 Jan</span>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[40px] text-base text-blue mq450:flex-wrap mq450:gap-[40px_20px]">
              <div className="h-5 flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="h-5 w-5 relative"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearminuscirlce.svg"
                />
                <div className="h-2.5 relative inline-block min-w-[90px]">
                  Cancellation
                </div>
              </div>
              <div className="h-5 flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="h-5 w-5 relative"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlineararrowswaphorizontal.svg"
                />
                <div className="h-2.5 relative inline-block min-w-[99px]">
                  Change Flight
                </div>
              </div>
            </div>
          </div>
          <div className="w-[314px] flex flex-row items-start justify-end py-0 px-20 box-border text-center text-lg text-forestgreen mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[10px]">
              <div className="flex-1 relative leading-[28px] font-medium inline-block min-w-[120px]">
                Payment Done
              </div>
              <div className="h-[26px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <img
                  className="w-6 h-6 relative"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlineartickcircle.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px] box-border max-w-full">
            <div className="w-[856px] flex flex-row items-start justify-between gap-[20px] max-w-full mq1050:flex-wrap mq1050:justify-center">
              <div className="w-[76px] flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border text-xs text-grey-4">
                <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
                  <div className="h-10 flex flex-row items-start justify-start py-0 px-2 box-border">
                    <img
                      className="h-10 w-[60px] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/indigo.svg"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-[18px] text-sm text-blue-2">
                    <div className="h-[9px] relative inline-block min-w-[40px]">
                      Indigo
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-[17px]">
                    <div className="h-2 relative font-light inline-block min-w-[42px]">
                      6E-6132
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl flex flex-row items-start justify-start py-[5px] px-1 whitespace-nowrap border-[1px] border-solid border-grey-4">
                    <div className="h-2 relative font-light inline-block min-w-[66px]">
                      Airbus A320
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[163px] flex flex-col items-start justify-start gap-[20px]">
                <div className="relative leading-[110.3%] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[84px] mq450:text-base mq450:leading-[18px]">
                  Rajkot, IN
                </div>
                <div className="h-[21px] relative text-13xl font-medium inline-block min-w-[73px] whitespace-nowrap mq750:text-7xl mq450:text-lgi">
                  19:20
                </div>
                <div className="h-2.5 relative text-base text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[114px]">
                  Wed, 3 Jan 2024
                </div>
                <div className="self-stretch h-[45px] relative text-sm leading-[18px] font-light text-grey-3 inline-block">
                  Rajkot Greenfield International Airport, Hirasar, Terminal
                </div>
              </div>
              <div className="h-[118px] w-[250px] flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border text-center text-base text-grey-3">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[14px]">
                  <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                    <div className="h-2.5 w-[45px] relative font-light inline-block min-w-[45px]">
                      1h 15m
                    </div>
                  </div>
                  <img
                    className="self-stretch h-[30px] relative max-w-full overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/group-1000002555.svg"
                  />
                  <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left">
                    <div className="h-2.5 relative font-light inline-block min-w-[66px]">
                      Non-stop
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[163px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                  <div className="relative leading-[110.3%] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[99px] mq450:text-base mq450:leading-[18px]">
                    Mumbai, IN
                  </div>
                  <div className="h-[21px] relative text-13xl font-medium inline-block min-w-[77px] whitespace-nowrap mq750:text-7xl mq450:text-lgi">
                    20:25
                  </div>
                  <div className="h-2.5 relative text-base text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[114px]">
                    Wed, 3 Jan 2024
                  </div>
                  <div className="self-stretch h-[27px] relative text-sm leading-[18px] font-light text-grey-3 inline-block">
                    Chatrapati Shivaji Airport, Mumbai, Terminal 2
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <FrameComponent23 /> */}
          <div className="self-stretch rounded-t-none rounded-b-3xs box-border flex flex-row items-start justify-center py-2.5 px-0 max-w-full text-right text-lg text-blue border-t-[1px] border-solid border-grey-6">
            <div className="h-20 w-[1240px] relative rounded-t-none rounded-b-3xs box-border hidden max-w-full border-t-[1px] border-solid border-grey-6" />
            <div className="w-[378.6px] rounded-3xs overflow-hidden shrink-0 flex flex-row items-start justify-start py-4 px-[26px] box-border max-w-full z-[1]">
              <div className="flex-1 flex flex-row items-start justify-center py-0 px-5 box-border gap-[12px] max-w-full">
                <img
                  className="h-6 w-6 relative hidden"
                  alt=""
                  src="/vuesaxlinearsearchnormal4.svg"
                />
                <div className="w-[135px] relative leading-[28px] font-medium flex items-center">
                  Download Ticket
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/heroiconsoutlinearrowright3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-xl text-blue-2 font-kanit">
        <div className="w-[1242px] rounded-3xs bg-white box-border flex flex-col items-end justify-start gap-[33px] max-w-full shrink-0 border-[1px] border-solid border-grey-6 mq750:gap-[16px_33px]">
          <div className="rounded-t-3xs rounded-b-none [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca] overflow-hidden flex flex-row items-start justify-start py-[18px] px-10 box-border gap-[10px] max-w-full mq1225:flex-wrap">
            <div className="flex flex-row items-center justify-start py-0 pr-[514px] pl-0 box-border gap-[20px] max-w-full mq1050:flex-wrap mq1050:pr-[257px] mq1050:box-border mq450:pr-5 mq450:box-border">
              <div className="relative leading-[110.3%] font-medium inline-block min-w-[59px] mq450:text-base mq450:leading-[18px]">
                Rajkot
              </div>
              <img
                className="h-[7.4px] w-[78px] relative"
                alt=""
                src="/arrow-4.svg"
              />
              <div className="h-[13px] relative inline-block mq450:text-base">
                <span className="font-medium">{`Mumbai `}</span>
                <span className="font-light">Wed, 3 Jan</span>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[40px] text-base text-blue mq450:flex-wrap mq450:gap-[40px_20px]">
              <div className="h-5 flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="h-5 w-5 relative"
                  alt=""
                  src="/vuesaxlinearminuscirlce.svg"
                />
                <div className="h-2.5 relative inline-block min-w-[90px]">
                  Cancellation
                </div>
              </div>
              <div className="h-5 flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="h-5 w-5 relative"
                  alt=""
                  src="/vuesaxlineararrowswaphorizontal.svg"
                />
                <div className="h-2.5 relative inline-block min-w-[99px]">
                  Change Flight
                </div>
              </div>
            </div>
          </div>
          <div className="w-[314px] flex flex-row items-start justify-end py-0 px-20 box-border text-center text-lg text-forestgreen mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[10px]">
              <div className="flex-1 relative leading-[28px] font-medium inline-block min-w-[120px]">
                Payment Done
              </div>
              <div className="h-[26px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <img
                  className="w-6 h-6 relative"
                  alt=""
                  src="/vuesaxlineartickcircle.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px] box-border max-w-full">
            <div className="w-[856px] flex flex-row items-start justify-between gap-[20px] max-w-full mq1050:flex-wrap mq1050:justify-center">
              <div className="w-[76px] flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border text-xs text-grey-4">
                <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
                  <div className="h-10 flex flex-row items-start justify-start py-0 px-2 box-border">
                    <img
                      className="h-10 w-[60px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/indigo.svg"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-[18px] text-sm text-blue-2">
                    <div className="h-[9px] relative inline-block min-w-[40px]">
                      Indigo
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-[17px]">
                    <div className="h-2 relative font-light inline-block min-w-[42px]">
                      6E-6132
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl flex flex-row items-start justify-start py-[5px] px-1 whitespace-nowrap border-[1px] border-solid border-grey-4">
                    <div className="h-2 relative font-light inline-block min-w-[66px]">
                      Airbus A320
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[163px] flex flex-col items-start justify-start gap-[20px]">
                <div className="relative leading-[110.3%] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[99px] mq450:text-base mq450:leading-[18px]">
                  Mumbai, IN
                </div>
                <div className="h-[21px] relative text-13xl font-medium inline-block min-w-[77px] whitespace-nowrap mq750:text-7xl mq450:text-lgi">
                  20:25
                </div>
                <div className="h-2.5 relative text-base text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[114px]">
                  Wed, 3 Jan 2024
                </div>
                <div className="self-stretch h-[27px] relative text-sm leading-[18px] font-light text-grey-3 inline-block">
                  Chatrapati Shivaji Airport, Mumbai, Terminal 2
                </div>
              </div>
              <div className="h-[118px] w-[250px] flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border text-center text-base text-grey-3">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[14px]">
                  <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                    <div className="h-2.5 w-[45px] relative font-light inline-block min-w-[45px]">
                      1h 15m
                    </div>
                  </div>
                  <img
                    className="self-stretch h-[30px] relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/group-1000002555.svg"
                  />
                  <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left">
                    <div className="h-2.5 relative font-light inline-block min-w-[66px]">
                      Non-stop
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[163px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                  <div className="relative leading-[110.3%] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[84px] mq450:text-base mq450:leading-[18px]">
                    Rajkot, IN
                  </div>
                  <div className="h-[21px] relative text-13xl font-medium inline-block min-w-[77px] whitespace-nowrap mq750:text-7xl mq450:text-lgi">
                    20:25
                  </div>
                  <div className="h-2.5 relative text-base text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[114px]">
                    Wed, 3 Jan 2024
                  </div>
                  <div className="self-stretch h-[45px] relative text-sm leading-[18px] font-light text-grey-3 inline-block">
                    Rajkot Greenfield International Airport, Hirasar, Terminal
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <FrameComponent23 /> */}
          <div className="self-stretch rounded-t-none rounded-b-3xs box-border flex flex-row items-start justify-center py-2.5 px-0 max-w-full text-right text-lg text-blue border-t-[1px] border-solid border-grey-6">
            <div className="h-20 w-[1240px] relative rounded-t-none rounded-b-3xs box-border hidden max-w-full border-t-[1px] border-solid border-grey-6" />
            <div className="w-[378.6px] rounded-3xs overflow-hidden shrink-0 flex flex-row items-start justify-start py-4 px-[26px] box-border max-w-full z-[1]">
              <div className="flex-1 flex flex-row items-start justify-center py-0 px-5 box-border gap-[12px] max-w-full">
                <img
                  className="h-6 w-6 relative hidden"
                  alt=""
                  src="/vuesaxlinearsearchnormal4.svg"
                />
                <div className="w-[135px] relative leading-[28px] font-medium flex items-center">
                  Download Ticket
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/heroiconsoutlinearrowright3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ControlFlowSplit />
      <ContactDetail propDisplay="block"
        name={"Krishna Patel"}
        phone={"+91 9722845575"}
        email={"krishnapatel1310@gmail.com"} />
      <IconSet />
    </div>
  );
};

export default ViewFlightDetailsPayment;
