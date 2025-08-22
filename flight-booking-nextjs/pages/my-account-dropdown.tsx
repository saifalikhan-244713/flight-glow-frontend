import type { NextPage } from "next";
import TopHeader1 from "../components/top-header1";
import FormInputsRow7 from "../components/form-inputs-row7";
import FormInputsRow6 from "../components/form-inputs-row6";
import FormInputsRow5 from "../components/form-inputs-row5";
import ButtonGroup1 from "../components/button-group1";
import Button2 from "../components/button2";
import FrameComponent5 from "../components/frame-component5";

const MyAccountDropdown: NextPage = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start tracking-[normal] text-left text-17xl text-blue-2 font-kanit">
      <TopHeader1 />
      <main className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-20 box-border max-w-full mq750:pb-[52px] mq750:box-border">
        <section className="flex-1 flex flex-row items-start justify-start relative max-w-full text-left text-49xl text-white font-kanit">
          <img
            className="self-stretch w-[1440px] relative max-h-full object-cover hidden min-h-[640px] max-w-full z-[0]"
            alt=""
            src="/banner--background@2x.png"
          />
          <div className="flex-1 flex flex-row items-center justify-center py-[85px] px-[100px] box-border gap-[43px] max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[43px_21px] mq750:py-[55px] mq750:px-[50px] mq750:box-border mq1125:flex-wrap">
            <div className="flex-1 flex flex-col items-center justify-start min-w-[389px] max-w-full mq750:min-w-full mq1125:flex-1">
              <h1 className="m-0 self-stretch h-[180px] relative text-inherit leading-[68px] font-medium font-inherit inline-block mq450:text-22xl mq450:leading-[41px] mq1050:text-35xl mq1050:leading-[54px]">
                <p className="m-0">{`Book your next Adventure `}</p>
                <p className="m-0">With Flight Glow</p>
              </h1>
            </div>
            <form className="m-0 flex-[0.9331] rounded-xl bg-white flex flex-col items-center justify-start p-5 box-border gap-[20px] min-w-[389px] max-w-full mq750:min-w-full mq1125:flex-1">
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
              <FormInputsRow7 />
              <FormInputsRow6 />
              <FormInputsRow5 />
              <ButtonGroup1 />
              <Button2 />
            </form>
          </div>
          <div className="h-[164px] w-[186px] !m-[0] absolute top-[-11.5px] right-[336px] rounded-3xs bg-lightblue shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)] overflow-hidden shrink-0 flex flex-col items-start justify-start p-7 box-border gap-[24px] z-[3] text-base text-blue-2">
            <div className="flex-1 flex flex-row items-start justify-start gap-[14px]">
              <img
                className="h-5 w-5 relative"
                loading="lazy"
                alt=""
                src="/vuesaxlinearprofile.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="h-2.5 relative inline-block min-w-[84px]">
                  My Account
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[14px]">
              <img
                className="h-5 w-5 relative"
                loading="lazy"
                alt=""
                src="/vuesaxlinearshoppingbag.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="h-2.5 relative inline-block min-w-[60px]">
                  My Trips
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[14px]">
              <img
                className="h-5 w-5 relative"
                loading="lazy"
                alt=""
                src="/vuesaxlinearwallet2.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="h-2.5 relative inline-block min-w-[70px]">
                  My Wallet
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
      <FrameComponent5 />
    </div>
  );
};

export default MyAccountDropdown;
