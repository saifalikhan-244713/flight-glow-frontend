import type { NextPage } from "next";
import TopHeader4 from "../components/top-header4";
import FormInputsRow9 from "../components/form-inputs-row9";
import FormInputsRow8 from "../components/form-inputs-row8";
import FrameComponent37 from "../components/frame-component37";
import FlightMainContainer3 from "../components/flight-main-container3";

const FlyingToDropdown: NextPage = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start tracking-[normal] text-left text-17xl text-blue-2 font-kanit">
      <TopHeader4 dataRowsHeight="unset" />
      <main className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-20 box-border max-w-full mq750:pb-[52px] mq750:box-border">
        <section className="flex-1 flex flex-row items-start justify-start relative max-w-full text-left text-49xl text-white font-kanit">
          <img
            className="h-full w-full absolute !m-[0] right-[0px] bottom-[-0.4px] left-[0px] max-w-full overflow-hidden object-cover"
            alt=""
            src="/banner--background@2x.png"
          />
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-[85px] px-[100px] box-border gap-[43px] max-w-full z-[1] mq750:gap-[21px] mq750:py-[55px] mq750:px-[50px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="flex-1 flex flex-col items-start justify-start pt-[145px] px-0 pb-0 box-border min-w-[389px] max-w-full mq750:min-w-full">
              <h1 className="m-0 self-stretch h-[180px] relative text-inherit leading-[68px] font-medium font-inherit inline-block mq1050:text-35xl mq1050:leading-[54px] mq450:text-22xl mq450:leading-[41px]">
                <p className="m-0">{`Book your next Adventure `}</p>
                <p className="m-0">With Flight Glow</p>
              </h1>
            </div>
            <div className="flex-1 flex flex-col items-end justify-start min-w-[389px] min-h-[470px] max-w-full text-base text-blue-2 mq750:min-w-full">
              <div className="w-[598px] rounded-xl bg-white overflow-x-auto flex flex-col items-center justify-start p-5 box-border gap-[20px] max-w-full">
                <div className="w-[558px] flex flex-row items-start justify-start gap-[57px]">
                  <div className="flex-1 flex flex-row items-start justify-start">
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
                  <div className="flex-1 flex flex-row items-start justify-start">
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
                  <div className="flex-1 flex flex-row items-start justify-start">
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
                  vuesaxlineararrowDown1="/vuesaxlineararrowup1.svg"
                  propAlignSelf="unset"
                  propRowGap="unset"
                  propWidth="558px"
                  propHeight="60px"
                  propMinWidth="unset"
                  propAlignSelf1="stretch"
                  propHeight1="unset"
                  propAlignSelf2="stretch"
                  propMinWidth1="unset"
                  propAlignSelf3="stretch"
                  propHeight2="unset"
                  propFlex="1"
                />
                <FormInputsRow8
                  vuesaxlinearcalendar="/vuesaxlinearcalendar.svg"
                  departure="Departure"
                  vuesaxlineararrowDown="/vuesaxlineararrowdown-23.svg"
                  vuesaxlinearcalendar1="/vuesaxlinearcalendar.svg"
                  return1="Return"
                  vuesaxlineararrowDown1="/vuesaxlineararrowdown-23.svg"
                  propAlignSelf="unset"
                  propWidth="558px"
                  propHeight="60px"
                  propMinWidth="unset"
                  propAlignSelf1="stretch"
                  propHeight1="unset"
                  propAlignSelf2="stretch"
                  propOverflow="hidden"
                  propMinWidth1="unset"
                  propAlignSelf3="stretch"
                  propHeight2="unset"
                  propFlex="1"
                  propOverflow1="hidden"
                />
                <FormInputsRow8
                  vuesaxlinearcalendar="/vuesaxlinearprofile2user.svg"
                  departure="Travellers"
                  vuesaxlineararrowDown="/vuesaxlineararrowdown-23.svg"
                  vuesaxlinearcalendar1="/vuesaxlinearlayer.svg"
                  return1="Class"
                  vuesaxlineararrowDown1="/vuesaxlineararrowup1.svg"
                  propAlignSelf="unset"
                  propWidth="558px"
                  propHeight="60px"
                  propMinWidth="unset"
                  propAlignSelf1="stretch"
                  propHeight1="unset"
                  propAlignSelf2="stretch"
                  propOverflow="unset"
                  propMinWidth1="unset"
                  propAlignSelf3="stretch"
                  propHeight2="unset"
                  propFlex="1"
                  propOverflow1="unset"
                />
                <div className="w-[558px] flex flex-row items-center justify-center p-[5px] box-border gap-[4px]">
                  <button className="cursor-pointer [border:none] py-[11px] px-6 bg-blue-2 flex-[0.7049] rounded-3xs overflow-hidden flex flex-col items-center justify-center whitespace-nowrap hover:bg-darkslategray">
                    <div className="self-stretch relative text-base leading-[17px] font-kanit text-white text-center">
                      Regular Fares
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-[11px] px-1.5 bg-gainsboro-100 flex-1 rounded-3xs overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-lightgray-200">
                    <div className="flex-1 relative text-base leading-[17px] font-kanit text-blue-2 text-center">
                      Armed Forces Fares
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-[11px] px-[30px] bg-gainsboro-100 flex-[0.6066] rounded-3xs overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-lightgray-200">
                    <div className="flex-1 relative text-base leading-[17px] font-kanit text-blue-2 text-center">
                      Student Fares
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-[11px] px-3.5 bg-gainsboro-100 flex-[0.8689] rounded-3xs overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-lightgray-200">
                    <div className="flex-1 relative text-base leading-[17px] font-kanit text-blue-2 text-center">
                      Senior Citizen Fares
                    </div>
                  </button>
                </div>
                <div className="w-[558px] rounded-3xs bg-blue-2 overflow-hidden flex flex-col items-start justify-center py-4 px-[26px] box-border">
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
              <FrameComponent37 />
            </div>
          </div>
        </section>
      </main>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-10 box-border max-w-full">
        <h1 className="m-0 h-[23px] w-[1240px] relative text-inherit font-medium font-inherit inline-block shrink-0 max-w-full mq1050:text-10xl mq450:text-3xl">
          Recent Searches
        </h1>
      </div>
      <footer className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1240px] flex flex-row flex-wrap items-start justify-center gap-[15.1px] max-w-full">
          <FlightMainContainer3
            propMinWidth="76px"
            propHeight="unset"
            propMinWidth1="94px"
            propHeight1="unset"
            propPadding="0px 1px 0px 0px"
            propMinWidth2="101px"
          />
          <FlightMainContainer3
            propMinWidth="76px"
            propHeight="unset"
            propMinWidth1="94px"
            propHeight1="unset"
            propPadding="0px 1px 0px 0px"
            propMinWidth2="101px"
          />
          <FlightMainContainer3
            propMinWidth="76px"
            propHeight="unset"
            propMinWidth1="94px"
            propHeight1="unset"
            propPadding="0px 1px 0px 0px"
            propMinWidth2="101px"
          />
        </div>
      </footer>
    </div>
  );
};

export default FlyingToDropdown;
