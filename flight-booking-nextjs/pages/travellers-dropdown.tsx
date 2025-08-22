import type { NextPage } from "next";
import TopHeader3 from "../components/top-header3";
import FrameComponent25 from "../components/frame-component25";
import FlyingTo from "../components/flying-to";
import FlightMainContainer2 from "../components/flight-main-container2";

const TravellersDropdown: NextPage = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start tracking-[normal] text-left text-17xl text-blue-2 font-kanit">
      <TopHeader3 frameDivHeight="unset" frameDivDisplay="inline-block" />
      <main className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-20 box-border max-w-full mq750:pb-[52px] mq750:box-border">
        <section className="flex-1 flex flex-row items-start justify-start relative max-w-full text-left text-49xl text-white font-kanit">
          <img
            className="h-full w-full absolute !m-[0] right-[0px] bottom-[-0.4px] left-[0px] max-w-full overflow-hidden object-cover"
            alt=""
            src="/banner--background@2x.png"
          />
          <div className="flex-1 flex flex-col items-end justify-end pt-[377px] px-[423px] pb-[9px] box-border max-w-full z-[1] lg:pl-[211px] lg:pr-[211px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[21px_43px] mq750:pt-[245px] mq750:px-[105px] mq750:pb-5 mq750:box-border">
            <div className="w-[387px] flex flex-row items-start justify-start relative max-w-full">
              <h1 className="!m-[0] h-[180px] w-[599px] absolute top-[-147px] left-[-530px] text-inherit leading-[68px] font-medium font-inherit inline-block mq450:text-22xl mq450:leading-[41px] mq1050:text-35xl mq1050:leading-[54px]">
                <p className="m-0">{`Book your next Adventure `}</p>
                <p className="m-0">With Flight Glow</p>
              </h1>
              <div className="w-[598px] !m-[0] absolute top-[-292px] right-[-323px] rounded-xl bg-white flex flex-col items-center justify-start p-5 box-border gap-[20px] text-base text-blue-2">
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[57px]">
                  <div className="flex-1 flex flex-row items-start justify-start min-w-[111px]">
                    <div className="flex-1 rounded-basic-forms-checkbox-border-radius flex flex-row items-start justify-start gap-[16px]">
                      <div className="flex flex-row items-start justify-start pt-basic-forms-checkbox-inline-y px-0 pb-0 gap-[10px]">
                        <img
                          className="h-basic-forms-checkbox-check-icon-size w-basic-forms-checkbox-check-icon-size relative overflow-hidden shrink-0 hidden min-h-[16px]"
                          alt=""
                          src="/alignverticaldistributestart.svg"
                        />
                        <div className="h-basic-forms-checkbox-check-icon-size w-basic-forms-checkbox-check-icon-size rounded-basic-forms-checkbox-border-radius-circled bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-basic-forms-checkbox-check-icon-border-border-color">
                          <div className="h-[7px] w-[7px] relative rounded-[50%] bg-white hidden" />
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative font-medium">
                          ONE WAY
                        </div>
                        <div className="self-stretch h-5 relative text-sm tracking-[0.01em] leading-[20px] font-medium font-sm-medium text-basic-forms-checkbox-secondary-text-color hidden">
                          Description text
                        </div>
                      </div>
                      <div className="h-basic-forms-checkbox-check-icon-size w-basic-forms-checkbox-check-icon-size rounded-basic-forms-checkbox-border-radius-circled bg-white box-border overflow-hidden shrink-0 hidden flex-row items-center justify-center border-[1px] border-solid border-basic-forms-checkbox-check-icon-border-border-color">
                        <div className="h-[7px] w-[7px] relative rounded-[50%] bg-white hidden" />
                      </div>
                      <img
                        className="h-basic-forms-checkbox-check-icon-size w-basic-forms-checkbox-check-icon-size relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/table.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start min-w-[111px]">
                    <div className="flex-1 rounded-basic-forms-checkbox-border-radius flex flex-row items-start justify-start gap-[16px]">
                      <div className="flex flex-row items-start justify-start pt-basic-forms-checkbox-inline-y px-0 pb-0 gap-[10px]">
                        <img
                          className="h-basic-forms-checkbox-check-icon-size w-basic-forms-checkbox-check-icon-size relative overflow-hidden shrink-0 hidden min-h-[16px]"
                          alt=""
                          src="/alignverticaldistributestart.svg"
                        />
                        <div className="h-basic-forms-checkbox-check-icon-size w-basic-forms-checkbox-check-icon-size rounded-basic-forms-checkbox-border-radius-circled bg-basic-forms-checkbox-check-icon-background-bg-soft-active-color box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[4.5px] px-[3px] border-[1px] border-solid border-basic-forms-checkbox-check-icon-border-border-active-color">
                          <div className="h-[7px] w-2 relative rounded-[50%] bg-basic-forms-checkbox-check-icon-border-border-active-color" />
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative font-medium">
                          ROUND TRIP
                        </div>
                        <div className="self-stretch h-5 relative text-sm tracking-[0.01em] leading-[20px] font-medium font-sm-medium text-basic-forms-checkbox-secondary-text-color hidden">
                          Description text
                        </div>
                      </div>
                      <div className="h-basic-forms-checkbox-check-icon-size w-basic-forms-checkbox-check-icon-size rounded-basic-forms-checkbox-border-radius-circled bg-basic-forms-checkbox-check-icon-background-bg-soft-active-color box-border overflow-hidden shrink-0 hidden flex-row items-center justify-center border-[1px] border-solid border-basic-forms-checkbox-check-icon-border-border-active-color">
                        <div className="h-[7px] w-3.5 relative rounded-[50%] bg-basic-forms-checkbox-check-icon-border-border-active-color" />
                      </div>
                      <img
                        className="h-basic-forms-checkbox-check-icon-size w-basic-forms-checkbox-check-icon-size relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/table.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start min-w-[111px]">
                    <div className="flex-1 rounded-basic-forms-checkbox-border-radius flex flex-row items-start justify-start gap-[16px]">
                      <div className="flex flex-row items-start justify-start pt-basic-forms-checkbox-inline-y px-0 pb-0 gap-[10px]">
                        <img
                          className="h-basic-forms-checkbox-check-icon-size w-basic-forms-checkbox-check-icon-size relative overflow-hidden shrink-0 hidden min-h-[16px]"
                          alt=""
                          src="/alignverticaldistributestart.svg"
                        />
                        <div className="h-basic-forms-checkbox-check-icon-size w-basic-forms-checkbox-check-icon-size rounded-basic-forms-checkbox-border-radius-circled bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-basic-forms-checkbox-check-icon-border-border-color">
                          <div className="h-[7px] w-[7px] relative rounded-[50%] bg-white hidden" />
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative font-medium">
                          MULTI - CITY
                        </div>
                        <div className="self-stretch h-5 relative text-sm tracking-[0.01em] leading-[20px] font-medium font-sm-medium text-basic-forms-checkbox-secondary-text-color hidden">
                          Description text
                        </div>
                      </div>
                      <div className="h-basic-forms-checkbox-check-icon-size w-basic-forms-checkbox-check-icon-size rounded-basic-forms-checkbox-border-radius-circled bg-white box-border overflow-hidden shrink-0 hidden flex-row items-center justify-center border-[1px] border-solid border-basic-forms-checkbox-check-icon-border-border-color">
                        <div className="h-[7px] w-[7px] relative rounded-[50%] bg-white hidden" />
                      </div>
                      <img
                        className="h-basic-forms-checkbox-check-icon-size w-basic-forms-checkbox-check-icon-size relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/table.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start [row-gap:20px] mq750:flex-wrap">
                  <FrameComponent25
                    flightTakeoffSvgrepoCom="/flighttakeoffsvgrepocom.svg"
                    flyingFrom="Flying From"
                  />
                  <img
                    className="h-12 w-12 relative"
                    loading="lazy"
                    alt=""
                    src="/swap.svg"
                  />
                  <FlyingTo
                    flightLandSvgrepoCom="/flightlandsvgrepocom.svg"
                    flyingTo="Flying To"
                  />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[48px] mq750:flex-wrap">
                  <FrameComponent25
                    flightTakeoffSvgrepoCom="/vuesaxlinearcalendar.svg"
                    flyingFrom="Departure"
                    propOverflow="unset"
                  />
                  <FlyingTo
                    flightLandSvgrepoCom="/vuesaxlinearcalendar.svg"
                    flyingTo="Return"
                    propOverflow="unset"
                  />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[48px] text-center text-xs text-grey-grey-700 font-components-chip mq750:flex-wrap">
                  <div className="flex-1 flex flex-row items-start justify-start min-w-[166px] mq750:flex-1">
                    <div className="h-[60px] flex-1 rounded-3xs box-border overflow-hidden flex flex-col items-start justify-start py-[3px] px-[7px] border-[1px] border-solid border-grey-7">
                      <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start py-[15px] px-0 gap-[8px]">
                        <div className="h-8 hidden flex-row items-start justify-start gap-[8px]">
                          <div className="self-stretch flex flex-col items-start justify-start">
                            <div className="w-[71px] flex-1 rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                              <div className="w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                                <div className="h-6 flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                                  F
                                </div>
                              </div>
                              <div className="flex-1 flex flex-col items-start justify-start py-[3px] px-1.5 text-left text-smi text-text-primary">
                                <div className="self-stretch h-[18px] relative tracking-[0.16px] leading-[18px] inline-block">
                                  Chip
                                </div>
                              </div>
                              <input
                                className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                                type="checkbox"
                              />
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start">
                            <div className="w-[71px] flex-1 rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                              <div className="w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                                <div className="h-6 flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                                  F
                                </div>
                              </div>
                              <div className="flex-1 flex flex-col items-start justify-start py-[3px] px-1.5 text-left text-smi text-text-primary">
                                <div className="self-stretch h-[18px] relative tracking-[0.16px] leading-[18px] inline-block">
                                  Chip
                                </div>
                              </div>
                              <input
                                className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                                type="checkbox"
                              />
                            </div>
                          </div>
                        </div>
                        <img
                          className="h-6 w-6 relative min-h-[24px]"
                          alt=""
                          src="/vuesaxlinearprofile2user.svg"
                        />
                        <div className="flex-1 relative text-base font-light font-kanit text-grey-4 text-left">
                          Travellers
                        </div>
                        <img
                          className="h-6 w-6 relative min-h-[24px]"
                          alt=""
                          src="/vuesaxlineararrowup1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <FlyingTo
                    flightLandSvgrepoCom="/vuesaxlinearlayer.svg"
                    flyingTo="Class"
                    propOverflow="unset"
                  />
                </div>
                <div className="self-stretch flex flex-row items-center justify-center p-[5px] gap-[4px] mq750:flex-wrap">
                  <button className="cursor-pointer [border:none] py-[11px] px-6 bg-blue-2 flex-[0.7049] rounded-3xs overflow-hidden flex flex-col items-center justify-center box-border min-w-[122px] max-w-[134px] whitespace-nowrap hover:bg-darkslategray mq450:flex-1">
                    <div className="self-stretch relative text-base leading-[17px] font-kanit text-white text-center">
                      Regular Fares
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-[11px] px-1.5 bg-gainsboro-100 flex-1 rounded-3xs overflow-hidden flex flex-row items-center justify-center box-border min-w-[122px] max-w-[134px] whitespace-nowrap hover:bg-lightgray-200">
                    <div className="flex-1 relative text-base leading-[17px] font-kanit text-blue-2 text-center">
                      Armed Forces Fares
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-[11px] px-[30px] bg-gainsboro-100 flex-[0.6066] rounded-3xs overflow-hidden flex flex-row items-center justify-center box-border min-w-[122px] max-w-[134px] whitespace-nowrap hover:bg-lightgray-200 mq450:flex-1">
                    <div className="flex-1 relative text-base leading-[17px] font-kanit text-blue-2 text-center">
                      Student Fares
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-[11px] px-3.5 bg-gainsboro-100 flex-[0.8689] rounded-3xs overflow-hidden flex flex-row items-center justify-center box-border min-w-[122px] max-w-[134px] whitespace-nowrap hover:bg-lightgray-200 mq450:flex-1">
                    <div className="flex-1 relative text-base leading-[17px] font-kanit text-blue-2 text-center">
                      Senior Citizen Fares
                    </div>
                  </button>
                </div>
                <div className="self-stretch rounded-3xs bg-blue-2 overflow-hidden flex flex-col items-start justify-center py-4 px-[26px]">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch h-7 flex flex-row items-center justify-center gap-[12px]">
                    <img
                      className="h-6 w-6 relative"
                      alt=""
                      src="/search_normal.svg"
                    />
                    <div className="w-14 relative text-lg leading-[28px] font-medium font-kanit text-white text-center flex items-center justify-center min-w-[56px]">
                      Search
                    </div>
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/heroiconsoutlinearrowright.svg"
                    />
                  </button>
                </div>
              </div>
              <div className="flex-1 rounded-3xs bg-lightblue shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)] overflow-hidden flex flex-col items-center justify-start py-7 px-0 box-border gap-[24px] max-w-full z-[1] text-center text-xl text-black">
                <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-center py-0 px-[19.5px] gap-[40px] mq450:gap-[20px]">
                  <div className="h-8 hidden flex-row items-start justify-start gap-[8px] text-xs text-grey-grey-700 font-components-chip">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="w-[71px] flex-1 rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                        <div className="w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                          <div className="h-6 flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                            F
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start py-[3px] px-1.5 text-left text-smi text-text-primary">
                          <div className="self-stretch h-[18px] relative tracking-[0.16px] leading-[18px] inline-block">
                            Chip
                          </div>
                        </div>
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/cancel.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="w-[71px] flex-1 rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                        <div className="w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                          <div className="h-6 flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                            F
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start py-[3px] px-1.5 text-left text-smi text-text-primary">
                          <div className="self-stretch h-[18px] relative tracking-[0.16px] leading-[18px] inline-block">
                            Chip
                          </div>
                        </div>
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/cancel.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 relative text-left inline-block min-w-[55px]">
                    <p className="m-0">{`ADULTS `}</p>
                    <p className="m-0 text-sm text-grey-3">(12 + Years)</p>
                  </div>
                  <div className="h-[50px] w-[124px] flex flex-row items-center justify-center gap-[8px]">
                    <img
                      loading="lazy"
                      src="minus-square.svg"
                      className="shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div className="flex-1 rounded-3xs bg-white flex flex-row items-center justify-start p-2.5">
                      <div className="flex-1 relative mq450:text-base">1</div>
                    </div>
                    <img
                      className="h-6 w-6 relative"
                      loading="lazy"
                      alt=""
                      src="/square-imge.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-center py-0 px-[19.5px] gap-[40px] mq450:gap-[20px]">
                  <div className="h-8 hidden flex-row items-start justify-start gap-[8px] text-xs text-grey-grey-700 font-components-chip">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="w-[71px] flex-1 rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                        <div className="w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                          <div className="h-6 flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                            F
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start py-[3px] px-1.5 text-left text-smi text-text-primary">
                          <div className="self-stretch h-[18px] relative tracking-[0.16px] leading-[18px] inline-block">
                            Chip
                          </div>
                        </div>
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/cancel.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="w-[71px] flex-1 rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                        <div className="w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                          <div className="h-6 flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                            F
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start py-[3px] px-1.5 text-left text-smi text-text-primary">
                          <div className="self-stretch h-[18px] relative tracking-[0.16px] leading-[18px] inline-block">
                            Chip
                          </div>
                        </div>
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/cancel.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 relative text-left inline-block min-w-[70px]">
                    <p className="m-0">CHILDREN</p>
                    <p className="m-0 text-sm text-grey-3">(2 + 12 Years)</p>
                  </div>
                  <div className="h-[50px] w-[124px] flex flex-row items-center justify-center gap-[8px]">
                    <img
                      loading="lazy"
                      src="minus-square.svg"
                      className="shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div className="flex-1 rounded-3xs bg-white flex flex-row items-center justify-start p-2.5">
                      <div className="flex-1 relative mq450:text-base">1</div>
                    </div>
                    <img
                      className="h-6 w-6 relative"
                      alt=""
                      src="/square-imge.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-center py-0 px-[19.5px] gap-[40px] mq450:gap-[20px]">
                  <div className="h-8 hidden flex-row items-start justify-start gap-[8px] text-xs text-grey-grey-700 font-components-chip">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="w-[71px] flex-1 rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                        <div className="w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                          <div className="h-6 flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                            F
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start py-[3px] px-1.5 text-left text-smi text-text-primary">
                          <div className="self-stretch h-[18px] relative tracking-[0.16px] leading-[18px] inline-block">
                            Chip
                          </div>
                        </div>
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/cancel.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="w-[71px] flex-1 rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                        <div className="w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                          <div className="h-6 flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                            F
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start py-[3px] px-1.5 text-left text-smi text-text-primary">
                          <div className="self-stretch h-[18px] relative tracking-[0.16px] leading-[18px] inline-block">
                            Chip
                          </div>
                        </div>
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/cancel.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 relative text-left inline-block min-w-[75px]">
                    <p className="m-0">INFANTS</p>
                    <p className="m-0 text-sm text-grey-3">(Below 2 Years)</p>
                  </div>
                  <div className="h-[50px] w-[124px] flex flex-row items-center justify-center gap-[8px]">
                    <img
                      loading="lazy"
                      src="minus-square.svg"
                      className="shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div className="flex-1 rounded-3xs bg-white flex flex-row items-center justify-start p-2.5">
                      <div className="flex-1 relative mq450:text-base">1</div>
                    </div>
                    <img
                      className="h-6 w-6 relative"
                      alt=""
                      src="/square-imge.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-10 box-border max-w-full">
        <h1 className="m-0 h-[23px] w-[1240px] relative text-inherit font-medium font-inherit inline-block shrink-0 max-w-full mq450:text-3xl mq1050:text-10xl">
          Recent Searches
        </h1>
      </div>
      <footer className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1240px] flex flex-row flex-wrap items-start justify-center gap-[15.1px] max-w-full">
          <FlightMainContainer2 />
          <FlightMainContainer2 />
          <FlightMainContainer2 />
        </div>
      </footer>
    </div>
  );
};

export default TravellersDropdown;
