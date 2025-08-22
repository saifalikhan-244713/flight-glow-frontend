import type { NextPage } from "next";
import TopHeader2 from "../components/top-header2";
import FormInputsRow7 from "../components/form-inputs-row7";
import FormInputsRow6 from "../components/form-inputs-row6";
import FormInputsRow5 from "../components/form-inputs-row5";
import ButtonGroup1 from "../components/button-group1";
import Button2 from "../components/button2";
import GroupComponent from "../components/SelectCountryAndLanguage";
import FrameComponent6 from "../components/frame-component6";

const SelectLaguageCurrency: NextPage = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start gap-[80px] tracking-[normal] mq450:gap-[20px_80px] mq750:gap-[40px_80px]">
      <main className="self-stretch flex flex-col items-start justify-end pt-[98px] px-0 pb-0 box-border max-w-full mq750:pt-16 mq750:box-border">
        <TopHeader2
          topHeaderAlignSelf="unset"
          topHeaderWidth="100%"
          topHeaderMargin="0 !important"
          topHeaderRight="0px"
          topHeaderLeft="0px"
        />
        <section className="self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-49xl text-white font-kanit">
          <img
            className="self-stretch w-[1440px] relative max-h-full object-cover hidden min-h-[640px] max-w-full z-[0]"
            alt=""
            src="/banner--background@2x.png"
          />
          <div className="flex-1 flex flex-row items-center justify-center py-[85px] px-[100px] box-border gap-[43px] max-w-full z-[1] lg:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[43px_21px] mq750:py-[55px] mq750:px-[50px] mq750:box-border">
            <div className="flex-1 flex flex-col items-center justify-start min-w-[389px] max-w-full lg:flex-1 mq750:min-w-full">
              <h1 className="m-0 self-stretch h-[180px] relative text-inherit leading-[68px] font-medium font-inherit inline-block mq450:text-22xl mq450:leading-[41px] mq1050:text-35xl mq1050:leading-[54px]">
                <p className="m-0">{`Book your next Adventure `}</p>
                <p className="m-0">With Flight Glow</p>
              </h1>
            </div>
            <div className="flex-[0.9331] rounded-xl bg-white flex flex-col items-center justify-start p-5 box-border gap-[20px] min-w-[389px] max-w-full text-base text-blue-2 lg:flex-1 mq750:min-w-full">
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
                    <input
                      className="border-basic-forms-checkbox-check-icon-border-border-active-color accent-basic-forms-checkbox-check-icon-border-border-active-color cursor-pointer m-0 h-5 w-4 flex flex-row items-start justify-start pt-basic-forms-checkbox-inline-y px-0 pb-0 box-border"
                      checked={true}
                      type="radio"
                      name="radioGroup-1"
                    />
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
              <FormInputsRow7 />
              <FormInputsRow6 />
              <FormInputsRow5 />
              <ButtonGroup1 />
              <Button2 />
            </div>
          </div>
          <GroupComponent />
        </section>
      </main>
      <FrameComponent6 />
    </div>
  );
};

export default SelectLaguageCurrency;
