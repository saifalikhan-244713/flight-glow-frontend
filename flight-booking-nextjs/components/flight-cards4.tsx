import type { NextPage } from "next";
import { useState } from "react";
import GroupComponent5 from "./group-component5";
import GroupComponent7 from "./group-component7";

const FlightCards4: NextPage = () => {
  const [checkboxes1Checked, setCheckboxes1Checked] = useState(true);
  return (
    <div className="flex-1 rounded-3xs flex flex-col items-start justify-start gap-[40px] max-w-[calc(100%_-_310px)] text-left text-13xl text-blue-2 font-kanit mq1050:max-w-full mq450:gap-[20px_40px]">
      <h1 className="m-0 w-[882px] h-[21px] relative text-inherit leading-[110.3%] font-medium font-inherit inline-block max-w-full mq1050:text-7xl mq1050:leading-[28px] mq450:text-lgi mq450:leading-[21px]">
        Pay to complete your booking
      </h1>
      <form className="m-0 self-stretch rounded-3xs box-border flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-[20px] max-w-full border-[1px] border-solid border-grey-6">
        <div className="self-stretch rounded-t-3xs rounded-b-none box-border flex flex-row items-start justify-start pt-0 px-0 pb-6 gap-[10px] max-w-full border-[1px] border-solid border-grey-6 mq750:flex-wrap">
          <GroupComponent5 propMinWidth="266px" propDisplay="inline-block" />
          <div className="w-[436px] flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border min-w-[436px] max-w-full mq750:flex-1 mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <h3 className="m-0 relative text-xl leading-[110.3%] font-medium font-kanit text-blue-2 text-left mq450:text-base mq450:leading-[18px]">
                Enter card details
              </h3>
              <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
                <div className="relative text-xl leading-[110.3%] font-light font-kanit text-grey-3 text-left inline-block min-w-[115px] mq450:text-base mq450:leading-[18px]">
                  Card number
                </div>
                <input
                  className="[outline:none] bg-[transparent] self-stretch h-[60px] relative rounded-3xs box-border min-w-[250px] border-[1px] border-solid border-grey-6"
                  type="text"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
                <h3 className="m-0 relative text-xl leading-[110.3%] font-light font-kanit text-grey-3 text-left inline-block min-w-[101px] mq450:text-base mq450:leading-[18px]">
                  Expiry date
                </h3>
                <div className="self-stretch flex flex-row items-start justify-start gap-[36px] mq450:flex-wrap mq450:gap-[36px_18px]">
                  <GroupComponent7 month="Month" />
                  <GroupComponent7 month="Year" propMinWidth="28px" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
                <div className="relative text-xl leading-[110.3%] font-light font-kanit text-grey-3 text-left mq450:text-base mq450:leading-[18px]">
                  Card holder name
                </div>
                <input
                  className="[outline:none] bg-[transparent] self-stretch h-[60px] relative rounded-3xs box-border min-w-[250px] border-[1px] border-solid border-grey-6"
                  type="text"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
                <h3 className="m-0 relative text-xl leading-[110.3%] font-light font-kanit text-grey-3 text-left inline-block min-w-[39px] mq450:text-base mq450:leading-[18px]">
                  CVV
                </h3>
                <div className="self-stretch h-[60px] relative rounded-3xs box-border border-[1px] border-solid border-grey-6">
                  <div className="absolute top-[0px] left-[0px] rounded-3xs box-border w-full h-full hidden border-[1px] border-solid border-grey-6" />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[10px]">
                <input
                  className="m-0 h-6 w-6 rounded shadow-[0px_2px_5px_rgba(103,_110,_118,_0.08),_0px_0px_0px_1px_rgba(103,_110,_118,_0.16),_0px_1px_1px_rgba(0,_0,_0,_0.12)] overflow-hidden shrink-0"
                  type="checkbox"
                />
                <div className="relative text-base font-light font-kanit text-grey-3 text-left">
                  Save my card as per the RBI guidelines.
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="self-stretch flex flex-row items-start justify-start py-0 pr-[22px] pl-[22.5px] box-border max-w-full">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[27px] max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[10px] min-w-[320px] max-w-full mq750:flex-wrap">
              <input
                className="accent-blue m-0 h-6 w-6 rounded overflow-hidden shrink-0"
                checked={checkboxes1Checked}
                type="checkbox"
                onChange={(event) =>
                  setCheckboxes1Checked(event.target.checked)
                }
              />
              <div className="flex-1 relative text-sm font-light font-kanit text-grey-3 text-left inline-block min-w-[298px] max-w-full">
                I understand and agree to the rules and restrictions of this
                fare, the booking policy, the privacy policy and the terms and
                conditions of FlightGlow and confirm address details entered are
                correct
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[5px]">
              <div className="flex flex-row items-start justify-start py-0 px-5">
                <div className="relative text-13xl leading-[110.3%] font-medium font-kanit text-blue-2 text-left inline-block min-w-[98px] whitespace-nowrap mq1050:text-7xl mq1050:leading-[28px] mq450:text-lgi mq450:leading-[21px]">
                  ₹11,405
                </div>
              </div>
              <div className="relative text-xs font-light font-kanit text-grey-3 text-left">
                Total, inclusive of all taxes
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-4 px-[26px] bg-blue-2 rounded-3xs overflow-hidden flex flex-row items-start justify-start">
              <div className="flex flex-row items-start justify-start py-0 px-[38.5px] gap-[12px]">
                <img
                  className="h-6 w-6 relative hidden"
                  alt=""
                  src="/search_normal.svg"
                />
                <div className="w-[71px] relative text-lg leading-[28px] font-medium font-kanit text-white text-center flex items-center justify-center min-w-[71px]">
                  Pay Now
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/ararrow_right.svg"
                />
              </div>
            </button>
          </div>
        </footer>
      </form>
    </div>
  );
};

export default FlightCards4;
