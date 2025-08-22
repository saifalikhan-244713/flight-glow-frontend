import type { NextPage } from "next";
import TopHeader4 from "../components/top-header4";
import FormInputsRow9 from "../components/form-inputs-row9";
import FormInputsRow8 from "../components/form-inputs-row8";
import ButtonGroup2 from "../components/button-group2";
import FlightMainContainer3 from "../components/flight-main-container3";

const ClassDropdown: NextPage = () => {
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
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-[85px] px-[100px] box-border gap-[43px] max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[21px] mq750:py-[55px] mq750:px-[50px] mq750:box-border">
            <div className="flex-1 flex flex-col items-start justify-start pt-[145px] px-0 pb-0 box-border min-w-[389px] max-w-full mq750:min-w-full">
              <h1 className="m-0 self-stretch h-[180px] relative text-inherit leading-[68px] font-medium font-inherit inline-block mq450:text-22xl mq450:leading-[41px] mq1050:text-35xl mq1050:leading-[54px]">
                <p className="m-0">{`Book your next Adventure `}</p>
                <p className="m-0">With Flight Glow</p>
              </h1>
            </div>
            <form className="m-0 h-[470px] flex-1 relative min-w-[389px] max-w-full mq750:h-auto mq750:min-h-[470] mq750:min-w-full">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-white w-full flex flex-col items-center justify-start p-5 box-border gap-[20px] max-w-full h-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[57px] mq750:flex-wrap mq750:gap-[57px_28px]">
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
                        <div className="self-stretch relative text-base font-medium font-kanit text-blue-2 text-left">
                          ONE WAY
                        </div>
                        <div className="self-stretch h-5 relative text-sm tracking-[0.01em] leading-[20px] font-medium font-sm-medium text-basic-forms-checkbox-secondary-text-color text-left hidden">
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
                        <div className="self-stretch relative text-base font-medium font-kanit text-blue-2 text-left">
                          ROUND TRIP
                        </div>
                        <div className="self-stretch h-5 relative text-sm tracking-[0.01em] leading-[20px] font-medium font-sm-medium text-basic-forms-checkbox-secondary-text-color text-left hidden">
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
                        <div className="self-stretch relative text-base font-medium font-kanit text-blue-2 text-left">
                          MULTI - CITY
                        </div>
                        <div className="self-stretch h-5 relative text-sm tracking-[0.01em] leading-[20px] font-medium font-sm-medium text-basic-forms-checkbox-secondary-text-color text-left hidden">
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
                />
                <FormInputsRow8
                  vuesaxlinearcalendar="/vuesaxlinearcalendar.svg"
                  departure="Departure"
                  vuesaxlineararrowDown="/vuesaxlineararrowdown-23.svg"
                  vuesaxlinearcalendar1="/vuesaxlinearcalendar.svg"
                  return1="Return"
                  vuesaxlineararrowDown1="/vuesaxlineararrowdown-23.svg"
                />
                <FormInputsRow8
                  vuesaxlinearcalendar="/vuesaxlinearprofile2user.svg"
                  departure="Travellers"
                  vuesaxlineararrowDown="/vuesaxlineararrowdown-23.svg"
                  vuesaxlinearcalendar1="/vuesaxlinearlayer.svg"
                  return1="Class"
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
                <ButtonGroup2 />
                <div className="self-stretch rounded-3xs bg-blue-2 overflow-hidden flex flex-col items-start justify-center py-4 px-[26px]">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch h-7 flex flex-row items-center justify-center gap-[12px]">
                    <input className="m-0 h-6 w-6 relative" type="checkbox" />
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
              <div className="absolute top-[294px] left-[190px] rounded-3xs bg-lightblue shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)] overflow-hidden flex flex-col items-center justify-start p-7 z-[1]">
                <div className="flex flex-col items-start justify-start gap-[16px]">
                  <div className="flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap">
                    <button className="cursor-pointer py-2.5 px-[18px] bg-white rounded-3xs overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-blue-2">
                      <div className="flex flex-row items-center justify-center gap-[8px]">
                        <img
                          className="h-[18px] w-[18px] relative hidden"
                          alt=""
                          src="/linearsearch.svg"
                        />
                        <div className="w-[119px] relative text-sm leading-[20px] font-kanit text-blue-2 text-center flex items-center justify-center min-w-[119px]">
                          Premium Economy
                        </div>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/linearsearch.svg"
                        />
                      </div>
                    </button>
                    <button className="cursor-pointer py-2.5 px-12 bg-white rounded-3xs overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-blue-2">
                      <div className="flex flex-row items-center justify-center gap-[8px]">
                        <img
                          className="h-[18px] w-[18px] relative hidden"
                          alt=""
                          src="/linearsearch.svg"
                        />
                        <div className="w-[59px] relative text-sm leading-[20px] font-kanit text-blue-2 text-center flex items-center justify-center min-w-[59px]">
                          Economy
                        </div>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/linearsearch.svg"
                        />
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap">
                    <button className="cursor-pointer py-2.5 px-8 bg-white rounded-3xs overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-blue-2">
                      <div className="flex flex-row items-center justify-center gap-[8px]">
                        <img
                          className="h-[18px] w-[18px] relative hidden"
                          alt=""
                          src="/linearsearch.svg"
                        />
                        <div className="w-[92px] relative text-sm leading-[20px] font-kanit text-blue-2 text-center flex items-center justify-center min-w-[92px]">
                          Business Class
                        </div>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/linearsearch.svg"
                        />
                      </div>
                    </button>
                    <button className="cursor-pointer py-2.5 px-[46px] bg-white rounded-3xs overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-blue-2">
                      <div className="flex flex-row items-center justify-center gap-[8px]">
                        <img
                          className="h-[18px] w-[18px] relative hidden"
                          alt=""
                          src="/linearsearch.svg"
                        />
                        <div className="w-16 relative text-sm leading-[20px] font-kanit text-blue-2 text-center flex items-center justify-center min-w-[64px]">
                          First Class
                        </div>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/linearsearch.svg"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </form>
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
          <FlightMainContainer3 />
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

export default ClassDropdown;
