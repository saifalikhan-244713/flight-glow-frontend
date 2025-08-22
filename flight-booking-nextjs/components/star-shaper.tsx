import type { NextPage } from "next";

const StarShaper: NextPage = () => {
  return (
    <div className="w-[296.6px] bg-white box-border flex flex-col items-start justify-start pt-[60px] px-0 pb-[292px] gap-[39px] text-left text-xl text-blue-2 font-kanit border-r-[1px] border-solid border-grey-6 mq450:gap-[19px_39px] mq750:pt-[25px] mq750:pb-[123px] mq750:box-border mq1050:pt-[39px] mq1050:pb-[190px] mq1050:box-border">
      <div className="self-stretch h-[1015px] relative bg-white box-border hidden border-r-[1px] border-solid border-grey-6" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <div className="w-[278px] flex flex-col items-start justify-start gap-[39px] mq450:gap-[19px_39px]">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="flex-1 relative font-medium z-[1] mq450:text-base">
              Filters
            </div>
            <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0 text-sm text-orange">
              <div className="h-[9px] relative [text-decoration:underline] inline-block min-w-[53px] z-[1]">
                Clear All
              </div>
            </div>
          </div>
          <div className="relative font-medium z-[1] mq450:text-base">
            Choose route type
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-base text-grey-3">
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <input className="m-0 h-[22px] w-5" type="checkbox" />
            <div className="relative inline-block min-w-[98px] z-[1]">
              Domestic (25)
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <input className="m-0 h-[22px] w-5" type="checkbox" />
            <div className="flex-1 relative z-[1]">International (15)</div>
          </div>
        </div>
      </div>
      <div className="w-[189px] flex flex-col items-start justify-start gap-[20px]">
        <div className="self-stretch relative font-medium z-[1] mq450:text-base">
          Preferred Banks
        </div>
        <div className="flex flex-col items-start justify-start gap-[12px] text-base text-grey-3">
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <div className="flex flex-col items-start justify-start gap-[12px]">
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <input className="m-0 h-[22px] w-5" type="checkbox" />
                <div className="relative inline-block min-w-[57px] z-[1]">
                  AXIS (2)
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <input className="m-0 w-5 h-5 relative" type="checkbox" />
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="relative inline-block min-w-[54px] z-[1]">
                    ICICI (4)
                  </div>
                  <div className="relative inline-block min-w-[54px] z-[2] ml-[-54px]">
                    ICICI (4)
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <input className="m-0 h-[22px] w-5" type="checkbox" />
              <div className="relative inline-block min-w-[23px] z-[1]">
                SBI
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <input className="m-0 h-[22px] w-5" type="checkbox" />
            <div className="relative inline-block min-w-[47px] z-[1]">
              Citi (2)
            </div>
          </div>
          <div className="h-[9px] relative text-sm [text-decoration:underline] text-orange inline-block min-w-[53px] z-[1]">
            Clear All
          </div>
        </div>
      </div>
      <div className="w-[189px] flex flex-col items-start justify-start gap-[20px]">
        <div className="self-stretch relative font-medium z-[1] mq450:text-base">
          Airlines
        </div>
        <div className="flex flex-col items-start justify-start gap-[12px] text-base text-grey-3">
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <input className="m-0 h-[22px] w-5" type="checkbox" />
            <div className="relative inline-block min-w-[45px] z-[1]">
              Indigo
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <input className="m-0 h-[22px] w-5" type="checkbox" />
            <div className="relative inline-block min-w-[64px] z-[1]">
              Spice Jet
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <input className="m-0 h-[22px] w-5" type="checkbox" />
            <div className="relative inline-block min-w-[51px] z-[1]">
              Vistara
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <input className="m-0 h-[22px] w-5" type="checkbox" />
            <div className="relative inline-block min-w-[60px] z-[1]">
              Air India
            </div>
          </div>
          <div className="h-[9px] relative text-sm [text-decoration:underline] text-orange inline-block min-w-[53px] z-[1]">
            Clear All
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarShaper;
