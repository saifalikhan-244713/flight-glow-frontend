import type { NextPage } from "next";
import TopHeader4 from "../components/top-header4";
import FormInputsRow9 from "../components/form-inputs-row9";
import FormInputsRow8 from "../components/form-inputs-row8";
import FlyingFrom from "../components/flying-from";
import ButtonGroup2 from "../components/button-group2";
import FlightMainContainer3 from "../components/flight-main-container3";

const DateDropdown: NextPage = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start tracking-[normal] text-left text-17xl text-blue-2 font-kanit">
      <TopHeader4 dataRowsHeight="unset" />
      <main className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-20 box-border max-w-full mq750:pb-[52px] mq750:box-border">
        <section className="flex-1 flex flex-row items-start justify-start max-w-full text-left text-49xl text-white font-kanit">
          <img
            className="self-stretch w-[1440px] relative max-h-full object-cover hidden min-h-[640px] max-w-full"
            alt=""
            src="/banner--background@2x.png"
          />
          <div className="h-[640px] flex-1 flex flex-col items-end justify-start pt-[299px] px-[120px] pb-0 box-border max-w-full z-[1] mq750:h-auto mq750:gap-[21px_43px] mq750:pl-[30px] mq750:pt-[194px] mq750:pr-[30px] mq750:box-border mq1050:pl-[60px] mq1050:pr-[60px] mq1050:box-border">
            <div className="w-[692px] flex flex-row items-start justify-start relative max-w-full shrink-0 mq750:h-auto">
              <h1 className="!m-[0] h-[180px] w-[599px] absolute top-[-69px] left-[-528px] text-inherit leading-[68px] font-medium font-inherit inline-block mq450:text-22xl mq450:leading-[41px] mq1050:text-35xl mq1050:leading-[54px]">
                <p className="m-0">{`Book your next Adventure `}</p>
                <p className="m-0">With Flight Glow</p>
              </h1>
              <div className="w-[598px] !m-[0] absolute top-[-214px] right-[-20px] rounded-xl bg-white flex flex-col items-center justify-start p-5 box-border gap-[20px] max-w-full text-base text-blue-2">
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
                <FormInputsRow9
                  vuesaxlineararrowDown="/vuesaxlineararrowdown-23.svg"
                  vuesaxlineararrowDown1="/vuesaxlineararrowdown-23.svg"
                  propAlignSelf="stretch"
                  propRowGap="20px"
                  propWidth="unset"
                  propHeight="unset"
                  propMinWidth="166px"
                  propAlignSelf1="unset"
                  propHeight1="60px"
                  propAlignSelf2="unset"
                  propMinWidth1="166px"
                  propAlignSelf3="unset"
                  propHeight2="54px"
                  propFlex="unset"
                />
                <FormInputsRow8
                  vuesaxlinearcalendar="/vuesaxlinearcalendar.svg"
                  departure="Departure"
                  vuesaxlineararrowDown="/vuesaxlineararrowup1.svg"
                  vuesaxlinearcalendar1="/vuesaxlinearcalendar.svg"
                  return1="Return"
                  vuesaxlineararrowDown1="/vuesaxlineararrowup1.svg"
                  propAlignSelf="stretch"
                  propWidth="unset"
                  propHeight="unset"
                  propMinWidth="166px"
                  propAlignSelf1="unset"
                  propHeight1="60px"
                  propAlignSelf2="unset"
                  propOverflow="unset"
                  propMinWidth1="166px"
                  propAlignSelf3="unset"
                  propHeight2="54px"
                  propFlex="unset"
                  propOverflow1="unset"
                />
                <div className="self-stretch flex flex-row items-center justify-start gap-[48px] mq750:flex-wrap">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-row items-start justify-start min-w-[166px] mq750:flex-1">
                    <FlyingFrom
                      vuesaxlinearprofile2user="/vuesaxlinearprofile2user.svg"
                      travellers="Travellers"
                      vuesaxlineararrowDown="/vuesaxlineararrowdown-23.svg"
                    />
                  </button>
                  <FlyingFrom
                    vuesaxlinearprofile2user="/vuesaxlinearlayer.svg"
                    travellers="Class"
                    vuesaxlineararrowDown="/vuesaxlineararrowup1.svg"
                    propHeight="unset"
                    propFlex="0.9373"
                    propMinWidth="166px"
                    propFlex1="unset"
                    propHeight1="54px"
                  />
                </div>
                <ButtonGroup2 />
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
              <div className="flex-1 rounded-3xs bg-lightblue flex flex-col items-start justify-start gap-[6px] max-w-full z-[1] text-xl text-blue">
                <div className="self-stretch rounded-t-3xs rounded-b-none bg-lightblue shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-start justify-start py-[18px] px-10 gap-[10px] mq450:flex-wrap">
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    alt=""
                    src="/vuesaxlinearcalendar-2.svg"
                  />
                  <div className="relative leading-[110.3%] inline-block min-w-[103px] mq450:text-base mq450:leading-[18px]">
                    14/03/2024
                  </div>
                  <div className="relative leading-[110.3%] font-medium text-blue-2 inline-block min-w-[10px] mq450:text-base mq450:leading-[18px] mq450:w-full mq450:h-2.5">
                    -
                  </div>
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    alt=""
                    src="/vuesaxlinearcalendar-2.svg"
                  />
                  <div className="relative leading-[110.3%] inline-block min-w-[105px] mq450:text-base mq450:leading-[18px]">
                    10/04/2024
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[6px] max-w-full text-center text-base text-blue-2">
                  <div className="flex-1 bg-lightblue flex flex-row items-start justify-start p-8 box-border min-w-[221px] max-w-full [row-gap:20px] mq450:flex-wrap">
                    <img
                      className="h-6 w-6 relative"
                      loading="lazy"
                      alt=""
                      src="/vuesaxlineararrowleft11.svg"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[247px]">
                      <div className="self-stretch h-[21px] flex flex-row items-end justify-start py-0 px-[97.4px] box-border">
                        <div className="mb-[-1px] w-11 relative flex items-center justify-center min-w-[44px]">
                          March
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] text-3xs text-blue mq450:flex-wrap">
                        <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                          <div className="h-7 flex-1 relative flex items-center justify-center">
                            Mon
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                          <div className="h-7 flex-1 relative flex items-center justify-center">
                            Tue
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                          <div className="h-7 flex-1 relative flex items-center justify-center">
                            Wed
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                          <div className="h-7 flex-1 relative flex items-center justify-center">
                            Thu
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                          <div className="h-7 flex-1 relative flex items-center justify-center">
                            Fri
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                          <div className="h-7 flex-1 relative flex items-center justify-center">
                            Sat
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                          <div className="h-7 flex-1 relative flex items-center justify-center">
                            Sun
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] text-lightslategray-100 mq450:flex-wrap">
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex flex-row items-end justify-start py-0 pr-0.5 pl-0 box-border">
                                <div className="mb-[-1px] w-[18px] relative inline-block min-w-[18px]">
                                  26
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-px box-border">
                                <div className="mb-[-1px] w-[17px] relative flex items-center justify-center min-w-[17px]">
                                  27
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex flex-row items-end justify-start py-0 pr-0.5 pl-0 box-border">
                                <div className="mb-[-1px] w-[18px] relative inline-block min-w-[18px]">
                                  28
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex flex-row items-end justify-start py-0 pr-0.5 pl-0 box-border">
                                <div className="mb-[-1px] w-[18px] relative inline-block min-w-[18px]">
                                  29
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px] text-blue-2">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-1.5 box-border">
                                <div className="mb-[-1px] w-1.5 relative flex items-center justify-center min-w-[6px]">
                                  1
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px] text-blue-2">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-[5px] box-border">
                                <div className="mb-[-1px] w-[9px] relative flex items-center justify-center min-w-[9px]">
                                  2
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px] text-blue-2">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-[5px] box-border">
                                <div className="mb-[-1px] w-[9px] relative flex items-center justify-center min-w-[9px]">
                                  3
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] mq450:flex-wrap">
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-[5px] box-border">
                                <div className="mb-[-1px] w-[9px] relative flex items-center justify-center min-w-[9px]">
                                  4
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-[5px] box-border">
                                <div className="mb-[-1px] w-[9px] relative flex items-center justify-center min-w-[9px]">
                                  5
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-1 box-border">
                                <div className="mb-[-1px] w-2.5 relative flex items-center justify-center min-w-[10px]">
                                  6
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-[5px] box-border">
                                <div className="mb-[-1px] w-2 relative flex items-center justify-center min-w-[8px]">
                                  7
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-1 box-border">
                                <div className="mb-[-1px] w-2.5 relative flex items-center justify-center min-w-[10px]">
                                  8
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-1 box-border">
                                <div className="mb-[-1px] w-2.5 relative flex items-center justify-center min-w-[10px]">
                                  9
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-px box-border">
                                <div className="mb-[-1px] w-4 relative flex items-center justify-center min-w-[16px]">
                                  10
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] mq450:flex-wrap">
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-1 box-border">
                                <div className="mb-[-1px] w-[11px] relative flex items-center justify-center min-w-[11px]">
                                  11
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-0.5 box-border">
                                <div className="mb-[-1px] w-3.5 relative flex items-center justify-center min-w-[14px]">
                                  12
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-0.5 box-border">
                                <div className="mb-[-1px] w-3.5 relative flex items-center justify-center min-w-[14px]">
                                  13
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 rounded-md bg-white flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-0.5 box-border">
                                <div className="mb-[-1px] w-3.5 relative flex items-center justify-center min-w-[14px]">
                                  14
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-0.5 box-border">
                                <div className="mb-[-1px] w-3.5 relative flex items-center justify-center min-w-[14px]">
                                  15
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-0.5 box-border">
                                <div className="mb-[-1px] w-[15px] relative flex items-center justify-center min-w-[15px]">
                                  16
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-0.5 box-border">
                                <div className="mb-[-1px] w-3.5 relative flex items-center justify-center min-w-[14px]">
                                  17
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] mq450:flex-wrap">
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-0.5 box-border">
                                <div className="mb-[-1px] w-[15px] relative flex items-center justify-center min-w-[15px]">
                                  18
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-0.5 box-border">
                                <div className="mb-[-1px] w-[15px] relative flex items-center justify-center min-w-[15px]">
                                  19
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex flex-row items-end justify-start py-0 pr-px pl-0 box-border">
                                <div className="mb-[-1px] w-[19px] relative inline-block min-w-[19px]">
                                  20
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-0.5 box-border">
                                <div className="mb-[-1px] w-3.5 relative flex items-center justify-center min-w-[14px]">
                                  21
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-px box-border">
                                <div className="mb-[-1px] w-[17px] relative flex items-center justify-center min-w-[17px]">
                                  22
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-px box-border">
                                <div className="mb-[-1px] w-[17px] relative flex items-center justify-center min-w-[17px]">
                                  23
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-px box-border">
                                <div className="mb-[-1px] w-[17px] relative flex items-center justify-center min-w-[17px]">
                                  24
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] mq450:flex-wrap">
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-px box-border">
                                <div className="mb-[-1px] w-[17px] relative flex items-center justify-center min-w-[17px]">
                                  25
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex flex-row items-end justify-start py-0 pr-0.5 pl-0 box-border">
                                <div className="mb-[-1px] w-[18px] relative inline-block min-w-[18px]">
                                  26
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-px box-border">
                                <div className="mb-[-1px] w-[17px] relative flex items-center justify-center min-w-[17px]">
                                  27
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex flex-row items-end justify-start py-0 pr-0.5 pl-0 box-border">
                                <div className="mb-[-1px] w-[18px] relative inline-block min-w-[18px]">
                                  28
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex flex-row items-end justify-start py-0 pr-0.5 pl-0 box-border">
                                <div className="mb-[-1px] w-[18px] relative inline-block min-w-[18px]">
                                  29
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex flex-row items-end justify-start py-0 pr-px pl-0 box-border">
                                <div className="mb-[-1px] w-[19px] relative inline-block min-w-[19px]">
                                  30
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-0.5 box-border">
                                <div className="mb-[-1px] w-3.5 relative flex items-center justify-center min-w-[14px]">
                                  31
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch hidden flex-row items-start justify-center [row-gap:20px] text-grey-grey-300 font-sm-medium mq450:flex-wrap">
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-center justify-center p-2">
                              <div className="h-[21px] flex-1 relative">
                                <div className="absolute top-[4.76%] left-[20%]">
                                  7
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-center justify-center p-2">
                              <div className="h-[21px] flex-1 relative">
                                <div className="absolute top-[4.76%] left-[20%]">
                                  8
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-center justify-center p-2">
                              <div className="h-[21px] flex-1 relative">
                                <div className="absolute top-[4.76%] left-[20%]">
                                  9
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-center justify-center p-2">
                              <div className="h-[21px] flex-1 relative">
                                <div className="absolute top-[4.76%] left-[0%]">
                                  10
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-center justify-center p-2">
                              <div className="h-[21px] flex-1 relative">
                                <div className="absolute top-[4.76%] left-[10%]">
                                  11
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-center justify-center p-2">
                              <div className="h-[21px] flex-1 relative">
                                <div className="absolute top-[4.76%] left-[0%]">
                                  12
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-center justify-center p-2">
                              <div className="h-[21px] flex-1 relative">
                                <div className="absolute top-[4.76%] left-[0%]">
                                  13
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 bg-lightblue flex flex-row items-start justify-start p-8 box-border min-w-[221px] max-w-full [row-gap:20px] mq450:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[247px]">
                      <div className="self-stretch h-[21px] flex flex-row items-end justify-start py-0 px-[101.4px] box-border">
                        <div className="mb-[-1px] w-9 relative flex items-center justify-center min-w-[36px]">
                          April
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] text-3xs text-blue mq450:flex-wrap">
                        <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                          <div className="h-7 flex-1 relative flex items-center justify-center">
                            Mon
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                          <div className="h-7 flex-1 relative flex items-center justify-center">
                            Tue
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                          <div className="h-7 flex-1 relative flex items-center justify-center">
                            Wed
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                          <div className="h-7 flex-1 relative flex items-center justify-center whitespace-nowrap">
                            Thu
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                          <div className="h-7 flex-1 relative flex items-center justify-center whitespace-nowrap">
                            Fri
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                          <div className="h-7 flex-1 relative flex items-center justify-center whitespace-nowrap">
                            Sat
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                          <div className="h-7 flex-1 relative flex items-center justify-center whitespace-nowrap">
                            Sun
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] mq450:flex-wrap">
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-1.5 box-border">
                                <div className="mb-[-1px] h-6 w-1.5 relative flex items-center justify-center min-w-[6px] whitespace-nowrap">
                                  1
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-[5px] box-border">
                                <div className="mb-[-1px] h-6 w-[9px] relative flex items-center justify-center min-w-[9px] whitespace-nowrap">
                                  2
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-[5px] box-border">
                                <div className="mb-[-1px] h-6 w-[9px] relative flex items-center justify-center min-w-[9px] whitespace-nowrap">
                                  3
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-[5px] box-border">
                                <div className="mb-[-1px] h-6 w-[9px] relative flex items-center justify-center min-w-[9px] whitespace-nowrap">
                                  4
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-[5px] box-border">
                                <div className="mb-[-1px] h-6 w-[9px] relative flex items-center justify-center min-w-[9px] whitespace-nowrap">
                                  5
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-1 box-border">
                                <div className="mb-[-1px] h-6 w-2.5 relative flex items-center justify-center min-w-[10px] whitespace-nowrap">
                                  6
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-[5px] box-border">
                                <div className="mb-[-1px] h-6 w-2 relative flex items-center justify-center min-w-[8px] whitespace-nowrap">
                                  7
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] mq450:flex-wrap">
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-1 box-border">
                                <div className="mb-[-1px] h-6 w-2.5 relative flex items-center justify-center min-w-[10px] whitespace-nowrap">
                                  8
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-1 box-border">
                                <div className="mb-[-1px] h-6 w-2.5 relative flex items-center justify-center min-w-[10px] whitespace-nowrap">
                                  9
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 rounded-md bg-white flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-px box-border">
                                <div className="mb-[-1px] h-6 w-4 relative flex items-center justify-center whitespace-nowrap">
                                  10
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-1 box-border">
                                <div className="mb-[-1px] h-6 w-[11px] relative flex items-center justify-center min-w-[11px] whitespace-nowrap">
                                  11
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-0.5 box-border">
                                <div className="mb-[-1px] h-6 w-3.5 relative flex items-center justify-center whitespace-nowrap">
                                  12
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-0.5 box-border">
                                <div className="mb-[-1px] h-6 w-3.5 relative flex items-center justify-center whitespace-nowrap">
                                  13
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-0.5 box-border">
                                <div className="mb-[-1px] h-6 w-3.5 relative flex items-center justify-center whitespace-nowrap">
                                  14
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] mq450:flex-wrap">
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-0.5 box-border">
                                <div className="mb-[-1px] h-6 w-3.5 relative flex items-center justify-center whitespace-nowrap">
                                  15
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-0.5 box-border">
                                <div className="mb-[-1px] h-6 w-[15px] relative flex items-center justify-center whitespace-nowrap">
                                  16
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-0.5 box-border">
                                <div className="mb-[-1px] h-6 w-3.5 relative flex items-center justify-center whitespace-nowrap">
                                  17
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-0.5 box-border">
                                <div className="mb-[-1px] h-6 w-[15px] relative flex items-center justify-center whitespace-nowrap">
                                  18
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-0.5 box-border">
                                <div className="mb-[-1px] h-6 w-[15px] relative flex items-center justify-center whitespace-nowrap">
                                  19
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex flex-row items-end justify-start py-0 pr-px pl-0 box-border">
                                <div className="mb-[-1px] h-6 w-[19px] relative flex items-center justify-center whitespace-nowrap">
                                  20
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-0.5 box-border">
                                <div className="mb-[-1px] h-6 w-3.5 relative flex items-center justify-center whitespace-nowrap">
                                  21
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] mq450:flex-wrap">
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-px box-border">
                                <div className="mb-[-1px] h-6 w-[17px] relative flex items-center justify-center whitespace-nowrap">
                                  22
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-px box-border">
                                <div className="mb-[-1px] h-6 w-[17px] relative flex items-center justify-center whitespace-nowrap">
                                  23
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-px box-border">
                                <div className="mb-[-1px] h-6 w-[17px] relative flex items-center justify-center whitespace-nowrap">
                                  24
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-px box-border">
                                <div className="mb-[-1px] h-6 w-[17px] relative flex items-center justify-center whitespace-nowrap">
                                  25
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex flex-row items-end justify-start py-0 pr-0.5 pl-0 box-border">
                                <div className="mb-[-1px] h-6 w-[18px] relative flex items-center justify-center whitespace-nowrap">
                                  26
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-px box-border">
                                <div className="mb-[-1px] h-6 w-[17px] relative flex items-center justify-center whitespace-nowrap">
                                  27
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex flex-row items-end justify-start py-0 pr-0.5 pl-0 box-border">
                                <div className="mb-[-1px] h-6 w-[18px] relative flex items-center justify-center whitespace-nowrap">
                                  28
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] text-lightslategray-100 mq450:flex-wrap">
                          <div className="flex flex-row items-start justify-start text-blue-2">
                            <div className="flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex flex-row items-end justify-start py-0 pr-0.5 pl-0 box-border">
                                <div className="mb-[-1px] h-6 w-[18px] relative flex items-center justify-center whitespace-nowrap">
                                  29
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start text-blue-2">
                            <div className="flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex flex-row items-end justify-start py-0 pr-px pl-0 box-border">
                                <div className="mb-[-1px] h-6 w-[19px] relative flex items-center justify-center whitespace-nowrap">
                                  30
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-1.5 box-border">
                                <div className="mb-[-1px] h-6 w-1.5 relative flex items-center justify-center min-w-[6px] whitespace-nowrap">
                                  1
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-[5px] box-border">
                                <div className="mb-[-1px] h-6 w-[9px] relative flex items-center justify-center min-w-[9px] whitespace-nowrap">
                                  2
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-[5px] box-border">
                                <div className="mb-[-1px] h-6 w-[9px] relative flex items-center justify-center min-w-[9px] whitespace-nowrap">
                                  3
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-[5px] box-border">
                                <div className="mb-[-1px] h-6 w-[9px] relative flex items-center justify-center min-w-[9px] whitespace-nowrap">
                                  4
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start min-w-[23px]">
                            <div className="flex-1 flex flex-row items-start justify-start p-2">
                              <div className="h-[21px] flex-1 flex flex-row items-end justify-start py-0 px-[5px] box-border">
                                <div className="mb-[-1px] h-6 w-[9px] relative flex items-center justify-center min-w-[9px] whitespace-nowrap">
                                  5
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch hidden flex-row items-start justify-center [row-gap:20px] text-grey-grey-300 font-sm-medium mq450:flex-wrap">
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-center justify-center p-2">
                              <div className="h-[21px] flex-1 relative">
                                <div className="absolute top-[4.76%] left-[20%]">
                                  7
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-center justify-center p-2">
                              <div className="h-[21px] flex-1 relative">
                                <div className="absolute top-[4.76%] left-[20%]">
                                  8
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-center justify-center p-2">
                              <div className="h-[21px] flex-1 relative">
                                <div className="absolute top-[4.76%] left-[20%]">
                                  9
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-center justify-center p-2">
                              <div className="h-[21px] flex-1 relative">
                                <div className="absolute top-[4.76%] left-[0%]">
                                  10
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-center justify-center p-2">
                              <div className="h-[21px] flex-1 relative">
                                <div className="absolute top-[4.76%] left-[10%]">
                                  11
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-center justify-center p-2">
                              <div className="h-[21px] flex-1 relative">
                                <div className="absolute top-[4.76%] left-[0%]">
                                  12
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[35px] max-w-[36px]">
                            <div className="flex-1 flex flex-row items-center justify-center p-2">
                              <div className="h-[21px] flex-1 relative">
                                <div className="absolute top-[4.76%] left-[0%]">
                                  13
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="h-6 w-6 relative"
                      alt=""
                      src="/ararrow_right.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-10 box-border max-w-full">
        <h1 className="m-0 w-[1240px] relative text-inherit leading-[23px] font-medium font-inherit inline-block shrink-0 max-w-full whitespace-nowrap mq450:text-3xl mq1050:text-10xl">
          Recent Searches
        </h1>
      </div>
      <footer className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1240px] flex flex-row flex-wrap items-start justify-center gap-[15.1px] max-w-full">
          <FlightMainContainer3
            propMinWidth="unset"
            propHeight="36px"
            propMinWidth1="unset"
            propHeight1="36px"
            propPadding="unset"
            propMinWidth2="unset"
          />
          <FlightMainContainer3
            propMinWidth="unset"
            propHeight="36px"
            propMinWidth1="unset"
            propHeight1="36px"
            propPadding="unset"
            propMinWidth2="unset"
          />
          <FlightMainContainer3
            propMinWidth="unset"
            propHeight="36px"
            propMinWidth1="unset"
            propHeight1="36px"
            propPadding="unset"
            propMinWidth2="unset"
          />
        </div>
      </footer>
    </div>
  );
};

export default DateDropdown;
