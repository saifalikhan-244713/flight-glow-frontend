import type { NextPage } from "next";

const GroupComponent4: NextPage = () => {
  return (
    <header className="self-stretch bg-blue-2 flex flex-row items-start justify-center pt-[18px] px-5 pb-[17px] box-border gap-[573px] top-[0] z-[99] sticky max-w-full text-left text-17xl text-white font-kanit lg:gap-[573px_286px] mq750:gap-[573px_143px] mq450:gap-[573px_72px]">
      <div className="h-[98px] w-[1440px] relative bg-blue-2 hidden max-w-full" />
      <div className="w-[178px] flex flex-col items-start justify-start">
        <div className="self-stretch h-6 flex flex-row items-start justify-end">
          <img
            className="h-6 w-12 relative shrink-0 [debug_commit:f6aba90] z-[1]"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className="h-[39px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
          <h1 className="mt-[-15px] m-0 relative text-inherit font-semibold font-inherit shrink-0 [debug_commit:f6aba90] z-[1]">
            FlightGlow
          </h1>
        </div>
      </div>
      <div className="h-[53px] w-[489px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border max-w-full text-base">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[40px] max-w-full mq750:gap-[40px_20px]">
          <div className="flex flex-col items-start justify-start pt-[17px] px-0 pb-0">
            <div className="h-2.5 relative font-medium inline-block min-w-[37px] z-[1]">
              Offer
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[20px] max-w-full">
            <div className="self-stretch rounded-lg [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#001d3d] flex flex-row items-start justify-start py-2.5 px-[17px] gap-[10px] z-[1]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/profile_circle.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                <div className="h-2.5 relative font-medium inline-block min-w-[84px] whitespace-nowrap">
                  Jenny Shah
                </div>
              </div>
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/arrow-down.svg"
              />
            </div>
            <button className="cursor-pointer [border:none] py-2.5 px-[21px] bg-[transparent] self-stretch flex-1 rounded-lg [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#001d3d] flex flex-row items-start justify-start gap-[14px] z-[1]">
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="h-4 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                  <img
                    className="w-[22px] h-4 relative rounded-sm overflow-hidden shrink-0"
                    alt=""
                    src="/artwork.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 mq750:hidden">
                <div className="h-2.5 relative text-base font-medium font-kanit text-white text-left inline-block min-w-[90px] whitespace-nowrap mq750:hidden">
                  IN | ENR | INR
                </div>
              </div>
              <img className="h-6 w-6 relative" alt="" src="/arrow-down.svg" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GroupComponent4;
