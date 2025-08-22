import type { NextPage } from "next";
import GroupComponent4 from "../components/group-component4";
import Flights from "../components/flights";
import FrameComponent1 from "../components/frame-component1";
import GroupComponent3 from "../components/group-component3";
import GroupComponent2 from "../components/group-component2";
import FrameComponent from "../components/frame-component";
import GroupComponent1 from "../components/group-component1";
import GroupComponent from "../components/SelectCountryAndLanguage";
import FlightCard1 from "../components/flight-card1";
import FilterCardPair from "../components/filter-card-pair";
import ResultCount from "../components/result-count";
import FlightCard from "../components/flight-card";
import TopHeader from "../components/top-header";
const OneWay: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-49xl text-white font-kanit">
      <TopHeader />
      <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[98px] px-0 pb-[76px] box-border gap-[20px] leading-[normal] tracking-[normal] text-left text-5xl text-blue-2 font-kanit">
        {/* <GroupComponent4 /> */}
        <div className="w-[925px] h-[1417px] relative bg-white hidden max-w-full z-[1]" />
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[1240px] flex flex-row items-start justify-start gap-[20px] max-w-full">
            <Flights />
            <div className="flex-1 flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border max-w-[calc(100%_-_315px)] mq1050:max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[28px] max-w-full">
                  {/* <FrameComponent1 /> */}
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
                    <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[27px] max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-start gap-[10px] min-w-[289px] max-w-full mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
                          <img
                            className="w-6 h-6 relative z-[1]"
                            loading="lazy"
                            alt=""
                            src="/vuesaxlineararrowleft1.svg"
                          />
                        </div>
                        {/* <GroupComponent3 /> */}
                        {/* <GroupComponent3
                          propBorderRight="1px solid #e9ecef"
                          propBorderLeft="1px solid #e9ecef"
                          propBorderRight1="1px solid #e9ecef"
                          propBorderLeft1="1px solid #e9ecef"
                        /> */}
                        {/* <GroupComponent3
                          propBorderRight="1px solid #e9ecef"
                          propBorderLeft="unset"
                          propBorderRight1="1px solid #e9ecef"
                          propBorderLeft1="unset"
                        /> */}
                        <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
                          <img
                            className="w-6 h-6 relative z-[1]"
                            loading="lazy"
                            alt=""
                            src="/vuesaxlineararrowright1.svg"
                          />
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-start justify-start gap-[10px] min-w-[289px] max-w-full mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
                          <img
                            className="w-6 h-6 relative z-[1]"
                            alt=""
                            src="/vuesaxlineararrowleft1.svg"
                          />
                        </div>
                        {/* <GroupComponent3
                          // propBorderRight="unset"
                          propBorderLeft="1px solid #e9ecef"
                          propBorderRight1="unset"
                          propBorderLeft1="1px solid #e9ecef"
                        /> */}
                        {/* <GroupComponent3
                          propBorderRight="1px solid #e9ecef"
                          propBorderLeft="1px solid #e9ecef"
                          propBorderRight1="1px solid #e9ecef"
                          propBorderLeft1="1px solid #e9ecef"
                        />
                        <GroupComponent3
                          propBorderRight="1px solid #e9ecef"
                          propBorderLeft="unset"
                          propBorderRight1="1px solid #e9ecef"
                          propBorderLeft1="unset"
                        /> */}
                        <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
                          <img
                            className="w-6 h-6 relative z-[1]"
                            alt=""
                            src="/vuesaxlineararrowright1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[21px] max-w-full mq1050:flex-wrap">
                    <div className="flex-[0.9689] rounded-3xs bg-white box-border overflow-x-auto flex flex-row items-start justify-start py-2 pr-3.5 pl-0 gap-[31px] min-w-[294px] max-w-full z-[1] border-[1px] border-solid border-grey-6 mq450:gap-[15px] mq1050:flex-1">
                      <div className="h-[93px] w-[452px] relative rounded-3xs bg-white box-border shrink-0 hidden border-[1px] border-solid border-grey-6" />
                      <div className="w-[280px] shrink-0 flex flex-col items-start justify-start gap-[4.5px]">
                        <div className="self-stretch flex flex-row items-end justify-start gap-[33px] mq450:gap-[16px]">
                          <div className="w-[60px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border">
                            <img
                              className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/indigo.svg"
                            />
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start gap-[4px]">
                            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                              <div className="h-[15px] relative font-light inline-block min-w-[59px] whitespace-nowrap z-[1] mq450:text-lgi">
                                08:45
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-start justify-start gap-[10px] text-center text-sm text-grey-3">
                              <div className="h-[21px] flex-1 relative">
                                <div className="absolute top-[0px] left-[9px] font-light inline-block min-w-[39px] z-[1]">
                                  1h 15m
                                </div>
                                <div className="absolute top-[18px] left-[0px] box-border w-[57px] h-px z-[2] border-t-[1px] border-solid border-grey-5" />
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0 text-left text-5xl text-blue-2">
                                <div className="h-[15px] relative font-light inline-block min-w-[58px] whitespace-nowrap z-[1] mq450:text-lgi">
                                  09:55
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[218px] flex flex-row items-start justify-start py-0 px-[9px] box-border text-sm">
                          <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                              <div className="h-[9px] relative inline-block min-w-[40px] z-[1]">
                                Indigo
                              </div>
                            </div>
                            <div className="h-2 relative text-xs font-light text-grey-4 inline-block min-w-[49px] z-[1]">
                              Non-stop
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-[9px] text-xs text-grey-4">
                          <div className="h-2 relative font-light inline-block min-w-[42px] z-[1]">
                            6E-6132
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[29px] px-0 pb-0">
                        <div className="h-[15px] relative font-medium inline-block min-w-[70px] whitespace-nowrap z-[1] mq450:text-lgi">
                          ₹4,298
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[25px] px-0 pb-0">
                        <div className="w-6 h-6 rounded-81xl box-border overflow-hidden shrink-0 z-[1] border-[1px] border-solid border-grey-4" />
                      </div>
                    </div>
                    {/* <GroupComponent2
                      additionalDetails="08:35"
                      timesValues="07:25"
                    /> */}
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[21px] max-w-full">
                    <div className="flex-1 rounded-3xs bg-white box-border overflow-x-auto flex flex-row items-start justify-start py-2 pr-3.5 pl-0 gap-[29px] min-w-[294px] max-w-full z-[1] border-[1px] border-solid border-grey-6">
                      <div className="h-[93px] w-[452px] relative rounded-3xs bg-white box-border shrink-0 hidden border-[1px] border-solid border-grey-6" />
                      <div className="w-[283px] shrink-0 flex flex-col items-start justify-start py-0 pr-3.5 pl-0 box-border gap-[4.5px]">
                        <div className="self-stretch flex flex-row items-end justify-start gap-[33px] mq450:gap-[16px]">
                          <div className="w-[60px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border">
                            <img
                              className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/indigo.svg"
                            />
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start gap-[10px]">
                            <div className="flex-1 flex flex-row items-start justify-start gap-[1px]">
                              <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                                <div className="h-[15px] relative font-light inline-block min-w-[62px] whitespace-nowrap z-[1] mq450:text-lgi">
                                  09:05
                                </div>
                              </div>
                              <div className="h-[21px] flex-1 relative text-center text-sm text-grey-3">
                                <div className="absolute top-[0px] left-[9px] font-light inline-block min-w-[39px] z-[1]">
                                  1h 15m
                                </div>
                                <div className="absolute top-[18px] left-[0px] box-border w-[57px] h-px z-[2] border-t-[1px] border-solid border-grey-5" />
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                              <div className="h-[15px] relative font-light inline-block min-w-[47px] whitespace-nowrap z-[1] mq450:text-lgi">
                                10:15
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[218px] flex flex-row items-start justify-start py-0 px-[9px] box-border text-sm">
                          <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                              <div className="h-[9px] relative inline-block min-w-[40px] z-[1]">
                                Indigo
                              </div>
                            </div>
                            <div className="h-2 relative text-xs font-light text-grey-4 inline-block min-w-[49px] z-[1]">
                              Non-stop
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-[9px] text-xs text-grey-4">
                          <div className="h-2 relative font-light inline-block min-w-[42px] z-[1]">
                            6E-6132
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[29px] px-0 pb-0">
                        <div className="h-[15px] relative font-medium inline-block min-w-[71px] whitespace-nowrap z-[1] mq450:text-lgi">
                          ₹4,403
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[25px] px-0 pb-0">
                        <div className="w-6 h-6 rounded-81xl box-border overflow-hidden shrink-0 z-[1] border-[1px] border-solid border-grey-4" />
                      </div>
                    </div>
                    <div className="flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start py-2 pr-3.5 pl-0 gap-[10px] min-w-[294px] max-w-full z-[1] border-[1px] border-solid border-grey-6 mq450:flex-wrap mq450:pl-3.5 mq450:box-border">
                      <div className="h-[93px] w-[452px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-grey-6" />
                      {/* <FrameComponent stopLabel="10:50" /> */}
                      <div className="w-20 flex flex-col items-start justify-start pt-[29px] pb-0 pr-5 pl-0 box-border">
                        <div className="h-[15px] relative font-light inline-block min-w-[55px] whitespace-nowrap z-[1] mq450:text-lgi">
                          12:00
                        </div>
                      </div>
                      <div className="w-[124px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-right text-sm text-red">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <div className="flex flex-row items-start justify-start py-0 px-2">
                            <div className="relative inline-block min-w-[62px] z-[1]">
                              2 seat left
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-5xl text-blue-2">
                            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                              <div className="h-[15px] relative font-medium inline-block min-w-[70px] whitespace-nowrap z-[1] mq450:text-lgi">
                                ₹4,659
                              </div>
                            </div>
                            <div className="h-6 w-6 rounded-81xl box-border overflow-hidden shrink-0 z-[1] border-[1px] border-solid border-grey-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[21px] max-w-full mq1050:flex-wrap">
                    <div className="flex-[0.9689] rounded-3xs bg-white box-border flex flex-row items-start justify-start py-2 pr-3.5 pl-0 gap-[41px] min-w-[294px] max-w-full z-[1] border-[1px] border-solid border-grey-6 mq450:flex-wrap mq450:gap-[20px] mq450:pl-3.5 mq450:box-border mq1050:flex-1">
                      <div className="h-[93px] w-[452px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-grey-6" />
                      <div className="flex-1 flex flex-col items-start justify-start gap-[4.5px] min-w-[176px]">
                        <div className="self-stretch flex flex-row items-end justify-start gap-[33px] mq450:gap-[16px]">
                          <div className="w-[60px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border">
                            <img
                              className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/indigo.svg"
                            />
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start gap-[10.5px]">
                            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                              <div className="h-[15px] relative font-light inline-block min-w-[52px] whitespace-nowrap z-[1] mq450:text-lgi">
                                12:30
                              </div>
                            </div>
                            <div className="h-[21px] flex-1 relative text-center text-sm text-grey-3">
                              <div className="absolute top-[0px] left-[9px] font-light inline-block min-w-[39px] z-[1]">
                                1h 15m
                              </div>
                              <div className="absolute top-[18px] left-[0px] box-border w-[57px] h-px z-[2] border-t-[1px] border-solid border-grey-5" />
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                              <div className="h-[15px] relative font-light inline-block min-w-[49px] whitespace-nowrap z-[1] mq450:text-lgi">
                                13:35
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[218px] flex flex-row items-start justify-start py-0 px-[9px] box-border text-sm">
                          <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                              <div className="h-[9px] relative inline-block min-w-[40px] z-[1]">
                                Indigo
                              </div>
                            </div>
                            <div className="h-2 relative text-xs font-light text-grey-4 inline-block min-w-[49px] z-[1]">
                              Non-stop
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-[9px] text-xs text-grey-4">
                          <div className="h-2 relative font-light inline-block min-w-[42px] z-[1]">
                            6E-6132
                          </div>
                        </div>
                      </div>
                      <div className="w-[124px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-right text-sm text-red">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <div className="flex flex-row items-start justify-start py-0 px-[5px]">
                            <div className="relative inline-block min-w-[59px] z-[1]">
                              1 seat left
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-5xl text-blue-2">
                            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                              <div className="h-[15px] relative font-medium inline-block min-w-[64px] whitespace-nowrap z-[1] mq450:text-lgi">
                                ₹4,718
                              </div>
                            </div>
                            <div className="h-6 w-6 rounded-81xl box-border overflow-hidden shrink-0 z-[1] border-[1px] border-solid border-grey-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <GroupComponent2
                      additionalDetails="18:50"
                      timesValues="17:20"
                      propMinWidth="54px"
                      propGap="11px"
                      propMinWidth1="52px"
                    /> */}
                  </div>
                  <div className="self-stretch h-[93px] flex flex-row items-start justify-start gap-[21px] max-w-full">
                    <div className="flex-[0.9732] rounded-3xs [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#6c757d] box-border overflow-x-auto flex flex-row items-start justify-start py-2.5 pr-4 pl-0 gap-[33px] max-w-[calc(100%_-_477px)] z-[1] border-[0px] border-solid border-grey-3 mq450:gap-[16px]">
                      <img
                        className="h-[93px] w-[452px] relative rounded-3xs shrink-0 hidden"
                        alt=""
                        src="/rectangle-4654.svg"
                      />
                      <div className="w-[279px] shrink-0 flex flex-col items-start justify-start gap-[3px]">
                        <div className="self-stretch flex flex-row items-end justify-start gap-[33px] mq450:gap-[16px]">
                          <div className="w-[60px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border">
                            <img
                              className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/indigo.svg"
                            />
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start gap-[10px]">
                            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                              <div className="h-[15px] relative font-light inline-block min-w-[53px] whitespace-nowrap z-[1] mq450:text-lgi">
                                19:20
                              </div>
                            </div>
                            <div className="h-[21px] flex-1 relative text-center text-sm text-grey-3">
                              <div className="absolute top-[0px] left-[9px] font-light inline-block min-w-[39px] z-[1]">
                                1h 15m
                              </div>
                              <div className="absolute top-[18px] left-[0px] box-border w-[57px] h-px z-[2] border-t-[1px] border-solid border-grey-5" />
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                              <div className="h-[15px] relative font-light inline-block min-w-[57px] whitespace-nowrap z-[1] mq450:text-lgi">
                                20:25
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[218px] flex flex-row items-start justify-start py-0 px-[9px] box-border text-sm">
                          <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                              <div className="flex flex-col items-start justify-start gap-[6px]">
                                <div className="h-[9px] relative inline-block min-w-[40px] z-[1]">
                                  Indigo
                                </div>
                                <div className="h-2 relative text-xs font-light text-grey-4 inline-block min-w-[42px] z-[1]">
                                  6E-6132
                                </div>
                              </div>
                            </div>
                            <div className="h-2 relative text-xs font-light text-grey-4 inline-block min-w-[49px] z-[1]">
                              Non-stop
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[29px] px-0 pb-0">
                        <div className="h-[15px] relative font-medium inline-block min-w-[67px] whitespace-nowrap z-[1] mq450:text-lgi">
                          ₹5,453
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[25px] px-0 pb-0">
                        <div className="w-6 h-6 rounded-81xl bg-blue-2 overflow-hidden shrink-0 flex flex-row items-center justify-center p-[3px] box-border z-[1]">
                          <div className="h-2.5 w-[18px] relative rounded-[50%] bg-orange" />
                        </div>
                      </div>
                    </div>
                    <div className="h-[97px] flex-1 relative rounded-3xs [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#6c757d] box-border max-w-[calc(100%_-_473px)] z-[1] border-[2px] border-solid border-grey-3">
                      <div className="absolute top-[0px] left-[0px] rounded-3xs [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#6c757d] box-border w-full h-full hidden border-[2px] border-solid border-grey-3" />
                      <div className="absolute top-[39px] left-[222px] w-[157px] flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-row items-start justify-end">
                          <div className="h-[15px] relative font-medium inline-block min-w-[67px] whitespace-nowrap z-[1] mq450:text-lgi">
                            ₹5,453
                          </div>
                        </div>
                        <div className="h-[15px] relative font-light inline-block min-w-[53px] whitespace-nowrap z-[1] mt-[-15px] mq450:text-lgi">
                          19:20
                        </div>
                      </div>
                      <div className="absolute h-[calc(100%_-_20px)] top-[10px] bottom-[10px] left-[0px] w-[436px]">
                        <div className="absolute top-[25px] left-[412px] rounded-81xl bg-blue-2 w-6 h-6 overflow-hidden flex flex-row items-center justify-center p-[3px] box-border z-[1]">
                          <div className="h-2.5 w-[18px] relative rounded-[50%] bg-orange" />
                        </div>
                        {/* <FrameComponent
                          stopLabel="20:25"
                          propFlex="unset"
                          propMinWidth="unset"
                          propPosition="absolute"
                          propTop="0px"
                          propLeft="0px"
                          propWidth="212px"
                        /> */}
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[21px] max-w-full mq1050:flex-wrap">
                    {/* <GroupComponent1 prop="10:20" /> */}
                    <div className="h-[93px] flex-1 relative rounded-3xs bg-white box-border min-w-[294px] max-w-full z-[1] border-[1px] border-solid border-grey-6 mq1050:flex-1">
                      <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white box-border w-full h-full hidden border-[1px] border-solid border-grey-6" />
                      <div className="absolute top-[39px] left-[222px] w-[162px] flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-row items-start justify-end">
                          <div className="h-[15px] relative font-medium inline-block min-w-[72px] whitespace-nowrap z-[1] mq450:text-lgi">
                            ₹11,642
                          </div>
                        </div>
                        <div className="h-[15px] relative font-light inline-block min-w-[50px] whitespace-nowrap z-[1] mt-[-15px] mq450:text-lgi">
                          19:25
                        </div>
                      </div>
                      <div className="absolute h-[calc(100%_-_20px)] top-[10px] bottom-[10px] left-[0px] w-[436px]">
                        <div className="absolute top-[25px] left-[412px] rounded-81xl box-border w-6 h-6 overflow-hidden z-[1] border-[1px] border-solid border-grey-4" />
                        <div className="absolute top-[0px] left-[0px] w-[212px] flex flex-col items-start justify-start gap-[4.5px]">
                          <div className="flex flex-row items-end justify-start gap-[33px]">
                            <div className="w-[60px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border">
                              <img
                                className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0 z-[1]"
                                alt=""
                                src="/indigo.svg"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[8px]">
                              <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                                <div className="h-[15px] relative font-light inline-block min-w-[55px] whitespace-nowrap z-[1] mq450:text-lgi">
                                  13:00
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 px-1 relative text-center text-sm text-grey-3">
                                <div className="relative font-light inline-block min-w-[48px] z-[1]">
                                  8h 20m
                                </div>
                                <div className="w-[calc(100%_+_1px)] h-px absolute !m-[0] right-[-1px] bottom-[2px] left-[0px] box-border z-[2] border-t-[1px] border-solid border-grey-5" />
                                <div className="w-2 h-2 absolute !m-[0] bottom-[0px] left-[calc(50%_-_4px)] rounded-[50%] bg-orange z-[3]" />
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[13px] pl-[9px] text-sm">
                            <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                                <div className="h-[9px] relative inline-block min-w-[40px] z-[1]">
                                  Indigo
                                </div>
                              </div>
                              <div className="h-2 relative text-xs font-light text-grey-4 inline-block min-w-[30px] z-[1]">
                                1 stop
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 px-[9px] text-xs text-grey-4">
                            <div className="h-2 relative font-light inline-block min-w-[42px] z-[1]">
                              6E-6132
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[21px] max-w-full text-sm">
                    {/* <GroupComponent1
                      prop="10:55"
                      propFlex="1"
                      propWidth="281px"
                      propPadding="0px 7px 0px 0px"
                    /> */}
                    <div className="flex-1 rounded-3xs bg-white box-border flex flex-row items-end justify-between py-2 pr-4 pl-0 min-w-[294px] max-w-full gap-[20px] z-[1] border-[1px] border-solid border-grey-6">
                      <div className="h-[93px] w-[452px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-grey-6" />
                      <div className="h-[73px] w-[272px] flex flex-col items-start justify-start">
                        <div className="w-[60px] flex flex-col items-start justify-start gap-[8px]">
                          <img
                            className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0 z-[1]"
                            alt=""
                            src="/indigo.svg"
                          />
                          <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-[9px]">
                            <div className="h-[9px] relative inline-block min-w-[40px] z-[1]">
                              Indigo
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 px-[9px] text-xs text-grey-4">
                            <div className="h-2 relative font-light inline-block min-w-[42px] z-[1]">
                              6E-6132
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-end mt-[-55px] text-center text-grey-3">
                          <div className="flex flex-col items-start justify-start gap-[3px]">
                            <div className="flex flex-row items-start justify-start gap-[10px]">
                              <div className="flex flex-col items-start justify-start py-0 px-1 relative">
                                <div className="relative font-light inline-block min-w-[48px] z-[1]">
                                  8h 20m
                                </div>
                                <div className="w-[calc(100%_+_1px)] h-px absolute !m-[0] right-[-1px] bottom-[2px] left-[0px] box-border z-[2] border-t-[1px] border-solid border-grey-5" />
                                <div className="w-2 h-2 absolute !m-[0] bottom-[0px] left-[calc(50%_-_4px)] rounded-[50%] bg-orange z-[3]" />
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0 text-left text-5xl text-blue-2">
                                <div className="flex flex-row items-start justify-start relative">
                                  <div className="w-[289px] !m-[0] absolute h-full top-[0px] bottom-[0px] left-[-129px] flex flex-col items-start justify-start">
                                    <div className="self-stretch flex flex-row items-start justify-end">
                                      <div className="h-[15px] relative font-medium inline-block min-w-[70px] whitespace-nowrap z-[1] mq450:text-lgi">
                                        ₹12,167
                                      </div>
                                    </div>
                                    <div className="h-[15px] relative font-light inline-block min-w-[59px] whitespace-nowrap z-[1] mt-[-15px] mq450:text-lgi">
                                      10:00
                                    </div>
                                  </div>
                                  <div className="h-[15px] relative font-light inline-block min-w-[50px] whitespace-nowrap z-[1] mq450:text-lgi">
                                    19:25
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start py-0 px-[13px] text-left text-xs text-grey-4">
                              <div className="h-2 relative font-light inline-block min-w-[30px] z-[1]">
                                1 stop
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-6">
                        <div className="w-6 h-6 rounded-81xl box-border overflow-hidden shrink-0 z-[1] border-[1px] border-solid border-grey-4" />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[21px] max-w-full">
                    <div className="flex-1 rounded-3xs bg-white box-border overflow-x-auto flex flex-row items-start justify-start py-2 pr-3.5 pl-0 gap-[21px] min-w-[294px] max-w-full z-[1] border-[1px] border-solid border-grey-6">
                      <div className="h-[93px] w-[452px] relative rounded-3xs bg-white box-border shrink-0 hidden border-[1px] border-solid border-grey-6" />
                      <div className="w-[291px] shrink-0 flex flex-col items-start justify-start py-0 pr-[15px] pl-0 box-border gap-[4.5px]">
                        <div className="self-stretch flex flex-row items-end justify-start gap-[33px] mq450:gap-[16px]">
                          <div className="w-[60px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border">
                            <img
                              className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/indigo.svg"
                            />
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
                            <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                              <div className="h-[15px] relative font-light inline-block min-w-[60px] whitespace-nowrap z-[1] mq450:text-lgi">
                                20:05
                              </div>
                            </div>
                            <div className="h-[21px] w-[37px] relative text-center text-sm text-grey-3">
                              <div className="absolute top-[0px] left-[4px] font-light inline-block min-w-[23px] z-[1]">
                                22h
                              </div>
                              <div className="absolute top-[13px] left-[0px] flex flex-row items-start justify-start">
                                <div className="h-px w-[57px] absolute !m-[0] bottom-[2px] left-[calc(50%_-_28px)] box-border z-[2] border-t-[1px] border-solid border-grey-5" />
                                <img
                                  className="h-2 w-[30px] relative z-[3]"
                                  alt=""
                                  src="/group-1000002206.svg"
                                />
                              </div>
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                              <div className="h-[15px] relative font-light inline-block min-w-[54px] whitespace-nowrap z-[1] mq450:text-lgi">
                                18:05
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[211px] flex flex-row items-start justify-start py-0 px-[9px] box-border text-sm">
                          <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                              <div className="h-[9px] relative inline-block min-w-[40px] z-[1]">
                                Indigo
                              </div>
                            </div>
                            <div className="h-2 relative text-xs font-light text-grey-4 inline-block min-w-[33px] z-[1]">
                              2 stop
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-[9px] text-xs text-grey-4">
                          <div className="h-2 relative font-light inline-block min-w-[42px] z-[1]">
                            6E-6132
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[29px] px-0 pb-0">
                        <div className="h-[15px] relative font-medium inline-block min-w-[79px] whitespace-nowrap z-[1] mq450:text-lgi">
                          ₹22,726
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[25px] px-0 pb-0">
                        <div className="w-6 h-6 rounded-81xl box-border overflow-hidden shrink-0 z-[1] border-[1px] border-solid border-grey-4" />
                      </div>
                    </div>
                    <div className="flex-1 rounded-3xs bg-white box-border flex flex-row items-end justify-between py-2 pr-4 pl-0 min-w-[294px] max-w-full gap-[20px] z-[1] text-sm border-[1px] border-solid border-grey-6">
                      <div className="h-[93px] w-[452px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-grey-6" />
                      <div className="h-[73px] w-[276px] flex flex-col items-start justify-start">
                        <div className="w-[60px] flex flex-col items-start justify-start gap-[8px]">
                          <img
                            className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0 z-[1]"
                            alt=""
                            src="/indigo.svg"
                          />
                          <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-[9px]">
                            <div className="h-[9px] relative inline-block min-w-[40px] z-[1]">
                              Indigo
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 px-[9px] text-xs text-grey-4">
                            <div className="h-2 relative font-light inline-block min-w-[42px] z-[1]">
                              6E-6132
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-end mt-[-55px] text-center text-grey-3">
                          <div className="flex flex-col items-start justify-start gap-[3px]">
                            <div className="flex flex-row items-start justify-start gap-[23px]">
                              <div className="h-[21px] w-[30px] relative">
                                <div className="absolute top-[0px] left-[4px] font-light inline-block min-w-[23px] z-[1]">
                                  22h
                                </div>
                                <div className="absolute top-[13px] left-[0px] flex flex-row items-start justify-start">
                                  <div className="h-px w-[57px] absolute !m-[0] bottom-[2px] left-[calc(50%_-_28px)] box-border z-[2] border-t-[1px] border-solid border-grey-5" />
                                  <img
                                    className="h-2 w-[30px] relative z-[3]"
                                    alt=""
                                    src="/group-1000002206.svg"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0 text-left text-5xl text-blue-2">
                                <div className="flex flex-row items-start justify-start relative">
                                  <div className="w-[298px] !m-[0] absolute h-full top-[0px] bottom-[0px] left-[-129px] flex flex-col items-start justify-start">
                                    <div className="self-stretch flex flex-row items-start justify-end">
                                      <div className="h-[15px] relative font-medium inline-block min-w-[79px] whitespace-nowrap z-[1] mq450:text-lgi">
                                        ₹22,726
                                      </div>
                                    </div>
                                    <div className="h-[15px] relative font-light inline-block min-w-[60px] whitespace-nowrap z-[1] mt-[-15px] mq450:text-lgi">
                                      20:05
                                    </div>
                                  </div>
                                  <div className="h-[15px] relative font-light inline-block min-w-[54px] whitespace-nowrap z-[1] mq450:text-lgi">
                                    18:05
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="h-2 relative text-xs font-light text-grey-4 text-left inline-block min-w-[33px] z-[1]">
                              2 stop
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-6">
                        <div className="w-6 h-6 rounded-81xl box-border overflow-hidden shrink-0 z-[1] border-[1px] border-solid border-grey-4" />
                      </div>
                    </div>
                  </div>
                  {/* <div className="self-stretch flex flex-row items-start justify-start gap-[21px] max-w-full mq1050:flex-wrap">
                    <div className="flex-1 rounded-3xs bg-white box-border flex flex-col items-start justify-start py-2 pr-3.5 pl-0 gap-[6px] max-w-full z-[1] border-[1px] border-solid border-grey-6">
                      <div className="w-[452px] h-[93px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-grey-6" />
                      <div className="self-stretch flex flex-row items-end justify-start gap-[21px] max-w-full mq450:flex-wrap">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[3px] min-w-[254px] max-w-full">
                          <div className="self-stretch flex flex-row items-start justify-start gap-[34.5px] mq450:flex-wrap mq450:gap-[17px]">
                            <img
                              className="h-10 w-[60px] relative overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/indigo.svg"
                            />
                            <div className="flex-1 flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border min-w-[119px]">
                              <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                                <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                                  <div className="h-[15px] relative font-light inline-block min-w-[60px] whitespace-nowrap z-[1] mq450:text-lgi">
                                    20:05
                                  </div>
                                </div>
                                <div className="h-[21px] w-[37px] relative text-center text-sm text-grey-3">
                                  <div className="absolute top-[0px] left-[4px] font-light inline-block min-w-[23px] z-[1]">
                                    22h
                                  </div>
                                  <div className="absolute top-[13px] left-[0px] flex flex-row items-start justify-start">
                                    <div className="h-px w-[57px] absolute !m-[0] bottom-[2px] left-[calc(50%_-_28px)] box-border z-[2] border-t-[1px] border-solid border-grey-5" />
                                    <img
                                      className="h-2 w-[30px] relative z-[3]"
                                      alt=""
                                      src="/group-1000002206.svg"
                                    />
                                  </div>
                                </div>
                                <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                                  <div className="h-[15px] relative font-light inline-block min-w-[54px] whitespace-nowrap z-[1] mq450:text-lgi">
                                    18:05
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[29px] px-0 pb-0">
                              <div className="h-[15px] relative font-medium inline-block min-w-[79px] whitespace-nowrap z-[1] mq450:text-lgi">
                                ₹22,726
                              </div>
                            </div>
                          </div>
                          <div className="w-[211px] flex flex-row items-start justify-start py-0 px-[9px] box-border text-sm">
                            <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                                <div className="h-[9px] relative inline-block min-w-[40px] z-[1]">
                                  Indigo
                                </div>
                              </div>
                              <div className="h-2 relative text-xs font-light text-grey-4 inline-block min-w-[33px] z-[1]">
                                2 stop
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2.5">
                          <div className="w-6 h-6 rounded-81xl box-border overflow-hidden shrink-0 z-[1] border-[1px] border-solid border-grey-4" />
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-[9px] text-xs text-grey-4">
                        <div className="h-2 relative font-light inline-block min-w-[42px] z-[1]">
                          6E-6132
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 rounded-3xs bg-white box-border flex flex-col items-start justify-start py-2 pr-3.5 pl-0 gap-[6px] max-w-full z-[1] border-[1px] border-solid border-grey-6">
                      <div className="w-[452px] h-[93px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-grey-6" />
                      <div className="self-stretch flex flex-row items-end justify-start gap-[29px] max-w-full mq450:flex-wrap">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[3px] min-w-[249px] max-w-full">
                          <div className="self-stretch flex flex-row items-start justify-start gap-[33px] mq450:flex-wrap mq450:gap-[16px]">
                            <img
                              className="h-10 w-[60px] relative overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/indigo.svg"
                            />
                            <div className="flex-1 flex flex-col items-start justify-start pt-[18px] pb-0 pr-[7px] pl-0 box-border min-w-[121px]">
                              <div className="self-stretch flex flex-row items-start justify-start gap-[15px]">
                                <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                                  <div className="h-[15px] relative font-light inline-block min-w-[61px] whitespace-nowrap z-[1] mq450:text-lgi">
                                    07:40
                                  </div>
                                </div>
                                <div className="flex-1 flex flex-row items-start justify-between gap-[20px] text-center text-sm text-grey-3">
                                  <div className="h-[21px] w-[30px] relative">
                                    <div className="absolute top-[0px] left-[4px] font-light inline-block min-w-[23px] z-[1]">
                                      22h
                                    </div>
                                    <div className="absolute top-[13px] left-[0px] flex flex-row items-start justify-start">
                                      <div className="h-px w-[57px] absolute !m-[0] bottom-[2px] left-[calc(50%_-_28px)] box-border z-[2] border-t-[1px] border-solid border-grey-5" />
                                      <img
                                        className="h-2 w-[30px] relative z-[3]"
                                        alt=""
                                        src="/group-1000002206.svg"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0 text-left text-5xl text-blue-2">
                                    <div className="h-[15px] relative font-light inline-block min-w-[50px] whitespace-nowrap z-[1] mq450:text-lgi">
                                      19:25
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[29px] px-0 pb-0">
                              <div className="h-[15px] relative font-medium inline-block min-w-[71px] whitespace-nowrap z-[1] mq450:text-lgi">
                                ₹14,162
                              </div>
                            </div>
                          </div>
                          <div className="w-[211px] flex flex-row items-start justify-start py-0 px-[9px] box-border text-sm">
                            <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                                <div className="h-[9px] relative inline-block min-w-[40px] z-[1]">
                                  Indigo
                                </div>
                              </div>
                              <div className="h-2 relative text-xs font-light text-grey-4 inline-block min-w-[33px] z-[1]">
                                2 stop
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2.5">
                          <div className="w-6 h-6 rounded-81xl box-border overflow-hidden shrink-0 z-[1] border-[1px] border-solid border-grey-4" />
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-[9px] text-xs text-grey-4">
                        <div className="h-2 relative font-light inline-block min-w-[42px] z-[1]">
                          6E-6132
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                {/* <div className="self-stretch h-56 relative rounded-3xs bg-blue-2 max-w-full z-[1] text-white">
                  <div className="absolute top-[0px] left-[0px] rounded-3xs bg-blue-2 w-full h-full hidden" />
                  <div className="absolute top-[47px] left-[24px] text-xl font-semibold text-orange inline-block min-w-[93px] z-[1] mq450:text-base">
                    Departure
                  </div>
                  <div className="absolute top-[91px] left-[243px] font-semibold inline-block min-w-[68px] whitespace-nowrap z-[1] mq450:text-lgi">
                    ₹5,453
                  </div>
                  <div className="absolute top-[91px] left-[589px] font-semibold inline-block min-w-[68px] whitespace-nowrap z-[1] mq450:text-lgi">
                    ₹5,453
                  </div>
                  <div className="absolute top-[91px] left-[24px] inline-block min-w-[54px] whitespace-nowrap z-[1] mq450:text-lgi">
                    19:20
                  </div>
                  <div className="absolute top-[91px] left-[153px] inline-block min-w-[57px] whitespace-nowrap z-[1] mq450:text-lgi">
                    20:25
                  </div>
                  <div className="absolute top-[109px] left-[91px] text-xs font-light text-grey-5 inline-block min-w-[49px] z-[1]">
                    Non-stop
                  </div>
                  <div className="absolute top-[80px] left-[87px] w-14 h-[21px] text-center text-sm text-dodgerblue-100">
                    <div className="absolute top-[0px] left-[9px] font-light inline-block min-w-[39px] z-[1]">
                      1h 15m
                    </div>
                    <div className="absolute top-[18px] left-[0px] box-border w-[57px] h-px z-[2] border-t-[1px] border-solid border-gray-200" />
                  </div>
                  <div className="absolute top-[47px] left-[370px] text-xl font-semibold text-orange inline-block min-w-[62px] z-[1] mq450:text-base">
                    Return
                  </div>
                  <div className="absolute top-[91px] left-[370px] inline-block min-w-[54px] whitespace-nowrap z-[1] mq450:text-lgi">
                    19:20
                  </div>
                  <div className="absolute top-[91px] left-[499px] inline-block min-w-[57px] whitespace-nowrap z-[1] mq450:text-lgi">
                    20:25
                  </div>
                  <div className="absolute top-[109px] left-[437px] text-xs font-light text-grey-5 inline-block min-w-[49px] z-[1]">
                    Non-stop
                  </div>
                  <div className="absolute top-[80px] left-[433px] w-14 h-[21px] text-center text-sm text-dodgerblue-100">
                    <div className="absolute top-[0px] left-[9px] font-light inline-block min-w-[39px] z-[1]">
                      1h 15m
                    </div>
                    <div className="absolute top-[18px] left-[0px] box-border w-[57px] h-px z-[2] border-t-[1px] border-solid border-gray-200" />
                  </div>
                  <div className="absolute top-[47px] left-[340px] box-border w-px h-[71px] z-[1] border-r-[1px] border-solid border-grey-4" />
                  <div className="absolute top-[164px] left-[0px] rounded-t-none rounded-b-3xs [background:linear-gradient(rgba(0,_0,_0,_0.4),_rgba(0,_0,_0,_0.4)),_#001d3d] w-[925px] flex flex-row items-start justify-start py-[25px] px-6 box-border max-w-full z-[1] text-base">
                    <div className="h-[60px] w-[925px] relative rounded-t-none rounded-b-3xs [background:linear-gradient(rgba(0,_0,_0,_0.4),_rgba(0,_0,_0,_0.4)),_#001d3d] hidden max-w-full" />
                    <div className="h-2.5 relative [text-decoration:underline] font-light inline-block min-w-[93px] z-[2]">
                      Flight Details
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[680px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-blue flex flex-col items-start justify-start py-[33px] px-11 gap-[18px] z-[2] text-13xl">
                    <div className="w-[245px] h-56 relative rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-blue hidden" />
                    <div className="flex flex-row items-start justify-start py-0 pr-[23px] pl-6">
                      <div className="h-[21px] relative font-medium inline-block min-w-[110px] whitespace-nowrap z-[1] mq450:text-lgi mq750:text-7xl">
                        ₹10,906
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[9px] text-sm">
                      <div className="relative z-[1]">
                        Get ₹500 off with CTDOM
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-3">
                        <button className="cursor-pointer [border:none] py-2.5 px-[34px] bg-blue-2 rounded-3xs overflow-hidden flex flex-row items-start justify-start z-[1]">
                          <div className="flex flex-row items-start justify-start gap-[8px]">
                            <img
                              className="h-[18px] w-[18px] relative hidden"
                              alt=""
                              src="/vuesaxlinearsearchnormal3.svg"
                            />
                            <div className="relative text-sm leading-[20px] font-semibold font-kanit text-white text-center inline-block min-w-[65px]">
                              Book Now
                            </div>
                            <img
                              className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                              alt=""
                              src="/heroiconsoutlinearrowright4.svg"
                            />
                          </div>
                        </button>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-3">
                        <button className="cursor-pointer [border:none] py-2.5 px-[33px] bg-blue-2 rounded-3xs overflow-hidden flex flex-row items-start justify-start z-[1]">
                          <div className="flex flex-row items-start justify-start gap-[8px]">
                            <img
                              className="h-[18px] w-[18px] relative hidden"
                              alt=""
                              src="/vuesaxlinearsearchnormal3.svg"
                            />
                            <div className="relative text-sm leading-[20px] font-semibold font-kanit text-white text-center inline-block min-w-[67px]">
                              Lock Price
                            </div>
                            <img
                              className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                              alt=""
                              src="/heroiconsoutlinearrowright4.svg"
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <main className="w-full !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] left-[0px] flex flex-row items-start justify-start max-w-full z-[4] text-left text-base text-white font-kanit">
          <header className="h-[98px] w-[1440px] relative bg-blue-2 hidden max-w-full" />
          <div className="h-2.5 relative font-medium hidden min-w-[37px]">
            Offer
          </div>
          <div className="h-11 rounded-lg [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#001d3d] overflow-x-auto hidden flex-row items-center justify-center py-4 px-[17px] box-border gap-[10px]">
            <img
              className="h-6 w-6 relative shrink-0"
              alt=""
              src="/vuesaxlinearprofilecircle.svg"
            />
            <div className="h-2.5 relative font-medium inline-block min-w-[84px]">
              Jenny Shah
            </div>
            <img
              className="h-6 w-6 relative shrink-0"
              alt=""
              src="/vuesaxlineararrowdown.svg"
            />
          </div>
          <div className="h-11 rounded-lg [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#001d3d] overflow-x-auto hidden flex-row items-center justify-center py-4 px-5 box-border gap-[14px]">
            <div className="overflow-hidden shrink-0 flex flex-col items-start justify-start">
              <img
                className="w-[22px] h-4 relative rounded-sm overflow-hidden shrink-0"
                alt=""
                src="/artwork.svg"
              />
            </div>
            <div className="h-2.5 relative font-medium inline-block min-w-[90px]">
              IN | ENR | INR
            </div>
            <img
              className="h-6 w-6 relative shrink-0"
              alt=""
              src="/vuesaxlineararrowdown.svg"
            />
          </div>
          <div className="relative text-17xl font-semibold hidden mq450:text-3xl mq750:text-10xl">
            FlightGlow
          </div>
          <img className="h-6 w-12 relative hidden" alt="" src="/vector.svg" />
          <section className="flex-1 bg-white overflow-hidden flex flex-col items-start justify-start max-w-full z-[2] text-left text-xl text-grey-3 font-kanit">
            {/* <GroupComponent /> */}
            {/* <FlightCard1 /> */}
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="h-[1682px] w-[1240px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[22px] max-w-full mq1050:h-auto">
                <div className="self-stretch flex flex-row items-start justify-start gap-[18.4px] shrink-0 [debug_commit:bf4bc93] max-w-full">
                  <div className="h-[1682px] w-[296.6px] bg-white box-border flex flex-col items-start justify-start pt-[38px] px-0 pb-[254px] gap-[10px] border-r-[1px] border-solid border-grey-7 mq1050:hidden">
                    <div className="self-stretch h-[1682px] relative bg-white box-border hidden border-r-[1px] border-solid border-grey-7" />
                    <div className="w-[279px] flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border text-blue-2">
                      <div className="flex-1 relative z-[1] mq450:text-base">
                        <span className="font-medium">{`6 of 31 `}</span>
                        <span className="font-extralight">flights</span>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0 text-sm text-orange">
                        <div className="h-[9px] relative [text-decoration:underline] inline-block min-w-[54px] z-[1]">
                          Show All
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 text-blue-2">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                          <div className="flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
                            <div className="relative font-medium inline-block min-w-[107px] z-[1] mq450:text-base">
                              Price Range
                            </div>
                          </div>
                          <button className="cursor-pointer [border:none] p-2 bg-aliceblue-100 h-9 shadow-[0px_10px_8px_rgba(0,_0,_0,_0.04),_0px_4px_3px_rgba(0,_0,_0,_0.1)] rounded-advanced-forms-range-slider-tooltip-border-radius flex flex-col items-start justify-start box-border gap-[1.1px] z-[1]">
                            <div className="relative text-sm tracking-[0.01em] leading-[20px] font-kanit text-blue-2 text-left inline-block min-w-[47px]">
                              38,000
                            </div>
                            <div className="flex flex-row items-start justify-start py-0 pr-[13px] pl-[15px]">
                              <img
                                className="h-[11.9px] w-[19px] relative rounded-sm"
                                alt=""
                                src="/bottom-beak.svg"
                              />
                            </div>
                          </button>
                          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                            <img
                              className="w-6 h-6 relative z-[1]"
                              alt=""
                              src="/vuesaxlineararrowup1.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch h-6 relative rounded-advanced-forms-range-slider-border-radius z-[1]">
                          <div className="absolute top-[0px] left-[0px] w-[212px] flex flex-row items-start justify-start py-0 pr-2 pl-0 box-border">
                            <div className="h-6 flex-1 relative">
                              <div className="absolute top-[9px] left-[0px] rounded-advanced-forms-range-slider-bar-border-radius bg-chocolate w-[188px] h-advanced-forms-range-slider-bar-height" />
                              <div className="absolute top-[0px] left-[180px] shadow-[0px_3px_6px_rgba(156,_163,_175,_0.35),_0px_2px_2px_rgba(0,_0,_0,_0.06)] rounded-[50%] bg-white w-advanced-forms-range-slider-touch-area-height h-advanced-forms-range-slider-touch-area-height z-[1]" />
                            </div>
                          </div>
                          <div className="absolute top-[9px] left-[0px] rounded-advanced-forms-range-slider-bar-border-radius w-[295px] flex flex-row items-start justify-start pt-0 px-0 pb-advanced-forms-range-slider-default-bar-spacing-y box-border z-[2]">
                            <div className="h-advanced-forms-range-slider-bar-height flex-1 relative rounded-advanced-forms-range-slider-bar-border-radius bg-grey-7" />
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-sm">
                        <div className="relative tracking-[0.01em] leading-[20px] inline-block min-w-[37px] whitespace-nowrap z-[3]">
                          ₹4,134
                        </div>
                        <div className="relative tracking-[0.01em] leading-[20px] inline-block min-w-[52px] whitespace-nowrap z-[3]">
                          ₹46,500
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-blue-2">
                      <div className="flex flex-col items-start justify-start gap-[10px]">
                        <div className="relative font-medium z-[1] mq450:text-base">
                          Onward Journey
                        </div>
                        <div className="relative text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[51px] z-[1] mq450:text-base">
                          Stops
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                        <img
                          className="w-6 h-6 relative z-[1]"
                          alt=""
                          src="/vuesaxlineararrowup1.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 gap-[12px] text-base">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                        <input className="m-0 h-[22px] w-5" type="checkbox" />
                        <div className="flex-1 relative z-[1]">Non - Stops</div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                        <input className="m-0 h-[22px] w-5" type="checkbox" />
                        <div className="flex-1 relative z-[1]">1 Stop</div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                        <input className="m-0 h-[22px] w-5" type="checkbox" />
                        <div className="flex-1 relative z-[1]">2 Stop</div>
                      </div>
                    </div>
                    <FilterCardPair results="18 - 00" />
                    <div className="self-stretch h-[186px] relative shrink-0">
                      <img
                        className="absolute top-[3px] left-[270px] w-6 h-6 z-[1]"
                        alt=""
                        src="/vuesaxlineararrowup1.svg"
                      />
                      <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start gap-[10.7px]">
                        <div className="relative font-medium text-blue-2 z-[1] mq450:text-base">
                          Return Journey
                        </div>
                        <div className="relative text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[51px] z-[1] mq450:text-base">
                          Stops
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-base">
                          <div className="flex flex-row items-start justify-start gap-[16px]">
                            <input
                              className="m-0 h-[22px] w-5"
                              type="checkbox"
                            />
                            <div className="relative inline-block min-w-[85px] z-[1]">
                              Non - Stops
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                            <input
                              className="m-0 h-[22px] w-5"
                              type="checkbox"
                            />
                            <div className="flex-1 relative z-[1]">1 Stop</div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-base">
                          <input className="m-0 h-[22px] w-5" type="checkbox" />
                          <div className="flex-1 relative z-[1]">2 Stop</div>
                        </div>
                      </div>
                    </div>
                    <FilterCardPair results="12 - 18" />
                    <ResultCount results="Airlines" results1="Air India" />
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 gap-[12px] text-base">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                        <input className="m-0 h-[22px] w-5" type="checkbox" />
                        <div className="flex-1 relative z-[1]">
                          Air India Express
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                        <input className="m-0 h-[22px] w-5" type="checkbox" />
                        <div className="flex-1 relative z-[1]">AIX Connect</div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                        <input className="m-0 h-[22px] w-5" type="checkbox" />
                        <div className="flex-1 relative z-[1]">Akasa Air</div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                        <input className="m-0 h-[22px] w-5" type="checkbox" />
                        <div className="flex-1 relative z-[1]">Go First</div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                        <input className="m-0 h-[22px] w-5" type="checkbox" />
                        <div className="flex-1 relative z-[1]">IndiGo</div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                        <input className="m-0 h-[22px] w-5" type="checkbox" />
                        <div className="flex-1 relative z-[1]">SpiceJet</div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                        <input className="m-0 h-[22px] w-5" type="checkbox" />
                        <div className="flex-1 relative z-[1]">Vistara</div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                        <input className="m-0 h-[22px] w-5" type="checkbox" />
                        <div className="flex-1 relative z-[1]">Star Air</div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                        <input className="m-0 h-[22px] w-5" type="checkbox" />
                        <div className="flex-1 relative z-[1]">FlyBig</div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                        <input className="m-0 h-[22px] w-5" type="checkbox" />
                        <div className="flex-1 relative z-[1]">
                          IndiaOne Air
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                        <input className="m-0 h-[22px] w-5" type="checkbox" />
                        <div className="flex-1 relative z-[1]">SpiceXpress</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-base">
                      <ResultCount
                        results="Air Craft"
                        results1="ATR 42/72"
                        propMinWidth="75px"
                        propMinWidth1="73px"
                      />
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                        <input className="m-0 h-[22px] w-5" type="checkbox" />
                        <div className="flex-1 relative z-[1]">Airbus A320</div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                        <input className="m-0 h-[22px] w-5" type="checkbox" />
                        <div className="flex-1 relative z-[1]">
                          Airbus A320-100
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                        <input className="m-0 h-[22px] w-5" type="checkbox" />
                        <div className="flex-1 relative z-[1]">
                          Airbus A320-212
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                        <input className="m-0 h-[22px] w-5" type="checkbox" />
                        <div className="flex-1 relative z-[1]">Airbus A321</div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                          <div className="w-5 h-5 relative z-[1]">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-white box-border border-[1px] border-solid border-darkgray" />
                          </div>
                        </div>
                        <div className="flex-1 relative z-[1]">
                          Boeing 777-200LR
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[38px] px-0 pb-0 box-border max-w-[calc(100%_-_315px)] text-orange mq1050:max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[39.3px] max-w-full mq450:gap-[20px]">
                      <div className="self-stretch flex flex-row items-start justify-center gap-[15px] mq1050:flex-wrap">
                        <div className="flex gap-2.5 px-12 py-4 text-lg font-medium text-sky-600 whitespace-nowrap rounded-xl border-sky-600 border-solid bg-slate-100 border-b-[3px]">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/236b6f8aed84ce4d66d725923d176f71364822a7781b8189c4a2e6c77a251603?apiKey=4b8d58a8f6bc4837a443919b706ecbda&"
                            className="shrink-0 w-6 aspect-square"
                          />
                          <div className="my-auto">CHEAPEST</div>
                        </div>
                        <div className="flex gap-2.5 px-7 py-4 text-lg font-medium rounded-xl bg-zinc-100 text-sky-950">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5187662b6af33831fac3075d2513bfdc73c1da28c0a4e51a048a2820f3b8507?apiKey=4b8d58a8f6bc4837a443919b706ecbda&"
                            className="shrink-0 w-6 aspect-square"
                          />
                          <div className="flex-auto my-auto">
                            NON STOP FIRST
                          </div>
                        </div>
                        <button className="cursor-pointer [border:none] pt-4 px-[15px] pb-[15px] bg-whitesmoke-700 flex-1 rounded-3xs flex flex-row items-start justify-start box-border gap-[10px] min-w-[179px] max-w-[220px]">
                          <div className="h-[58px] w-[220px] relative rounded-3xs bg-whitesmoke-700 hidden" />
                          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                            <img
                              className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/flighttakeoffsvgrepocom.svg"
                            />
                          </div>
                          <div className="relative text-lg font-medium font-kanit text-blue-2 text-left z-[1]">
                            EARLY DEPARTURE
                          </div>
                        </button>
                        <button className="cursor-pointer [border:none] pt-4 px-7 pb-[15px] bg-whitesmoke-700 flex-[0.8632] rounded-3xs flex flex-row items-start justify-start box-border gap-[10px] min-w-[179px] max-w-[220px] mq450:flex-1">
                          <div className="h-[58px] w-[220px] relative rounded-3xs bg-whitesmoke-700 hidden" />
                          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                            <img
                              className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/flightlandsvgrepocom.svg"
                            />
                          </div>
                          <div className="relative text-lg font-medium font-kanit text-blue-2 text-left inline-block min-w-[129px] z-[1]">
                            EARLY ARRIVAL
                          </div>
                        </button>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[28px]">
                        <FlightCard />
                        <FlightCard />
                        <FlightCard />
                        <FlightCard />
                        <FlightCard />
                        <FlightCard />
                        <FlightCard />
                      </div>
                      {/* <div className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] mq1050:flex-wrap">
                        <div className="flex-1 flex flex-col items-start justify-start max-w-full mq750:min-w-full">
                          <div className="self-stretch rounded-tl-3xs rounded-tr-none rounded-b-none bg-blue-2 overflow-x-auto flex flex-row items-start justify-start py-[47px] px-6 gap-[28.5px]">
                            <div className="w-[287px] shrink-0 flex flex-col items-start justify-start gap-[3px]">
                              <div className="relative font-semibold inline-block min-w-[93px] mq450:text-base">
                                Departure
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start gap-[33px] text-5xl text-white mq450:flex-wrap mq450:gap-[16px]">
                                <div className="flex-1 flex flex-row items-start justify-start gap-[9.5px] min-w-[121px]">
                                  <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                                    <div className="h-[15px] relative inline-block min-w-[54px] whitespace-nowrap mq450:text-lgi">
                                      19:20
                                    </div>
                                  </div>
                                  <div className="flex-1 flex flex-col items-start justify-start gap-[8px] text-center text-sm text-dodgerblue-100">
                                    <div className="self-stretch h-[21px] relative">
                                      <div className="absolute top-[0px] left-[9px] font-light inline-block min-w-[39px]">
                                        1h 15m
                                      </div>
                                      <div className="absolute top-[18px] left-[0px] box-border w-[57px] h-px z-[1] border-t-[1px] border-solid border-gray-200" />
                                    </div>
                                    <div className="flex flex-row items-start justify-start py-0 pr-[3px] pl-1 text-left text-xs text-grey-5">
                                      <div className="h-2 relative font-light inline-block min-w-[49px]">
                                        Non-stop
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                                    <div className="h-[15px] relative inline-block min-w-[57px] whitespace-nowrap mq450:text-lgi">
                                      20:25
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                                  <div className="h-[15px] relative font-semibold inline-block min-w-[68px] whitespace-nowrap mq450:text-lgi">
                                    ₹5,453
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="h-[71px] w-px relative box-border shrink-0 border-r-[1px] border-solid border-grey-4" />
                            <div className="w-[287px] shrink-0 flex flex-col items-start justify-start gap-[3px]">
                              <div className="relative font-semibold inline-block min-w-[62px] mq450:text-base">
                                Return
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start gap-[33px] text-5xl text-white mq450:flex-wrap mq450:gap-[16px]">
                                <div className="flex-1 flex flex-row items-start justify-start gap-[9.5px] min-w-[121px]">
                                  <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                                    <div className="h-[15px] relative inline-block min-w-[54px] whitespace-nowrap mq450:text-lgi">
                                      19:20
                                    </div>
                                  </div>
                                  <div className="flex-1 flex flex-col items-start justify-start gap-[8px] text-center text-sm text-dodgerblue-100">
                                    <div className="self-stretch h-[21px] relative">
                                      <div className="absolute top-[0px] left-[9px] font-light inline-block min-w-[39px]">
                                        1h 15m
                                      </div>
                                      <div className="absolute top-[18px] left-[0px] box-border w-[57px] h-px z-[1] border-t-[1px] border-solid border-gray-200" />
                                    </div>
                                    <div className="flex flex-row items-start justify-start py-0 pr-[3px] pl-1 text-left text-xs text-grey-5">
                                      <div className="h-2 relative font-light inline-block min-w-[49px]">
                                        Non-stop
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                                    <div className="h-[15px] relative inline-block min-w-[57px] whitespace-nowrap mq450:text-lgi">
                                      20:25
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                                  <div className="h-[15px] relative font-semibold inline-block min-w-[68px] whitespace-nowrap mq450:text-lgi">
                                    ₹5,453
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <input
                            className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-[60px] rounded-t-none rounded-br-none rounded-bl-3xs [background:linear-gradient(rgba(0,_0,_0,_0.4),_rgba(0,_0,_0,_0.4)),_#001d3d] overflow-hidden shrink-0 flex flex-row items-start justify-start py-[25px] px-6 box-border font-kanit font-light text-base text-white min-w-[250px] z-[2]"
                            placeholder="Flight Details"
                            type="text"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-start min-w-[245px] z-[3] text-13xl text-white mq1050:flex-1">
                          <div className="rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-blue overflow-hidden flex flex-col items-center justify-start py-[33px] px-11 gap-[15px]">
                            <div className="flex flex-col items-center justify-start gap-[18px]">
                              <div className="h-[21px] relative font-medium inline-block min-w-[110px] whitespace-nowrap mq450:text-lgi mq750:text-7xl">
                                ₹10,906
                              </div>
                              <div className="h-[9px] relative text-sm inline-block">
                                Get ₹500 off with CTDOM
                              </div>
                            </div>
                            <button className="cursor-pointer [border:none] py-2.5 px-[34px] bg-blue-2 rounded-3xs overflow-hidden flex flex-col items-center justify-center">
                              <div className="flex flex-row items-center justify-center gap-[8px]">
                                <img
                                  className="h-[18px] w-[18px] relative hidden"
                                  alt=""
                                  src="/vuesaxlinearsearchnormal3.svg"
                                />
                                <div className="relative text-sm leading-[20px] font-semibold font-kanit text-white text-center inline-block min-w-[65px]">
                                  Book Now
                                </div>
                                <img
                                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                                  alt=""
                                  src="/heroiconsoutlinearrowright4.svg"
                                />
                              </div>
                            </button>
                            <button className="cursor-pointer [border:none] py-2.5 px-[33px] bg-blue-2 rounded-3xs overflow-hidden flex flex-col items-center justify-center">
                              <div className="flex flex-row items-center justify-center gap-[8px]">
                                <img
                                  className="h-[18px] w-[18px] relative hidden"
                                  alt=""
                                  src="/vuesaxlinearsearchnormal3.svg"
                                />
                                <div className="relative text-sm leading-[20px] font-semibold font-kanit text-white text-center inline-block min-w-[67px]">
                                  Lock Price
                                </div>
                                <img
                                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                                  alt=""
                                  src="/heroiconsoutlinearrowright4.svg"
                                />
                              </div>
                            </button>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* <div className="w-[296.6px] h-6 flex flex-row items-start justify-start gap-[16px] shrink-0 [debug_commit:bf4bc93] text-base">
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <div className="w-5 h-5 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-white box-border border-[1px] border-solid border-darkgray" />
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative">
                    Boeing 777-300ER
                  </div>
                </div> */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
};

export default OneWay;
