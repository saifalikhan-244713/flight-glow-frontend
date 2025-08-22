import type { NextPage } from "next";

const GroupComponent: NextPage = () => {
  return (
    <div className="h-[314px] w-[340px] !m-[0] fixed right-20  rounded-3xs bg-aliceblue-200 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start py-7 px-6 box-border gap-[28.5px]  z-[2] text-left text-base text-grey-3 font-kanit">
      <div className="w-[340px] h-[314px] relative rounded-3xs bg-aliceblue-200 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)] hidden max-w-full" />
      <div className="self-stretch h-11 rounded-lg bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)] flex flex-row items-start justify-between py-2.5 px-5 box-border gap-[20px] z-[1]">
        <div className="flex flex-col items-start justify-start  px-0 pb-0">
          <div className="flex flex-row items-center gap-x-4">
            <div className="flex items-center justify-start">
              <img
                className="w-[22px] h-4 relative rounded-sm overflow-hidden shrink-0"
                alt=""
                src="/artwork.svg"
              />
            </div>
            <div className="flex items-center justify-start">
              <div className="relative font-medium inline-block min-w-[90px]">
                IN | ENR | INR
              </div>
            </div>
          </div>
        </div>

        <img
          className="h-6 w-6 relative"
          alt=""
          src="/vuesaxlineararrowdown-21.svg"
        />
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[17.7px] text-sm text-blue-2">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base">
          <div className="h-2.5 relative inline-block min-w-[118px] z-[1]">
            Select Language
          </div>
          <div className="h-2.5 relative inline-block min-w-[112px] z-[1]">
            Select Currency
          </div>
        </div>
        <div className="w-[230px] flex-1 flex flex-row items-start justify-between gap-[20px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
            <input
              className="border-aliceblue-200 accent-aliceblue-200 cursor-pointer m-0 h-[18px] w-[18px] relative z-[1]"
              checked={true}
              type="radio"
              name="radioGroup-1"
            />
            <div className="flex flex-col items-start justify-start  px-0 pb-0">
              <div className="h-[9px] relative inline-block min-w-[46px] z-[1]">
                English
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
            <input
              className="border-aliceblue-200 accent-aliceblue-200 cursor-pointer m-0 h-[18px] w-[18px] relative z-[1]"
              checked={true}
              type="radio"
              name="radioGroup-2"
            />
            <div className="flex flex-col items-start justify-start mt-[-2px] px-0 pb-0">
              <div className="h-[9px] relative inline-block min-w-[22px] z-[1]">
                INR
              </div>
            </div>
          </div>
        </div>
        <div className="w-[235px] flex-1 flex flex-row items-start justify-between gap-[20px] text-grey-3">
          <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
            <input
              className="cursor-pointer m-0 h-[18px] w-[18px] relative z-[1]"
              type="radio"
              name="radioGroup-1"
            />
            <div className="flex flex-col items-start justify-start mt-[-2px]  px-0 pb-0">
              <div className="h-[9px] relative inline-block min-w-[33px] z-[1]">
                Hindi
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
            <input
              className="cursor-pointer m-0 h-[18px] w-[18px] relative z-[1]"
              type="radio"
              name="radioGroup-2"
            />
            <div className="flex flex-col items-start justify-start mt-[0px] px-0 pb-0">
              <div className="h-[9px] relative inline-block min-w-[27px] z-[1]">
                USD
              </div>
            </div>
          </div>
        </div>
        <div className="w-[234px] flex-1 flex flex-row items-start justify-between gap-[20px] text-grey-3">
          <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
            <input
              className="cursor-pointer m-0 h-[18px] w-[18px] relative min-h-[18px] z-[1]"
              type="radio"
              name="radioGroup-1"
            />
            <div className="flex flex-col items-start justify-start mt-[-1px] px-0 pb-0">
              <div className="h-[9px] relative inline-block min-w-[51px] z-[1]">
                Gujarati
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
            <input
              className="cursor-pointer m-0 h-[18px] w-[18px] relative min-h-[18px] z-[1]"
              type="radio"
              name="radioGroup-2"
            />
            <div className="flex flex-col items-start justify-start px-0 pb-0">
              <div className="h-[9px] relative inline-block min-w-[26px] z-[1]">
                EUR
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-2.5 px-5 bg-blue-2 self-stretch rounded-3xs overflow-hidden flex flex-row items-start justify-center z-[1]">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <img
            className="h-[18px] w-[18px] relative hidden"
            alt=""
            src="/linearsearch.svg"
          />
          <div className="w-10 relative text-sm leading-[20px] font-semibold font-kanit text-white text-center flex items-center justify-center min-w-[40px]">
            Apply
          </div>
          <img
            className="h-[18px] w-[18px] relative hidden"
            alt=""
            src="/vuesaxlinearedit.svg"
          />
        </div>
      </button>
    </div>
  );
};

export default GroupComponent;
