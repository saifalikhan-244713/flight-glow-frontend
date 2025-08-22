import type { NextPage } from "next";
import { format } from "date-fns";
import Image from "next/image";

const SearchResultRowSelected: NextPage = () => {
  return (
    <>
      <div className="self-stretch h-56 relative rounded-3xs bg-blue-2 max-w-full z-[1] text-white">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-blue-2 w-full h-full hidden" />
        <div className="absolute top-[47px] left-[24px] text-xl font-semibold text-orange inline-block min-w-[93px] z-[1] mq450:text-base">
          Departure
        </div>
        <div className="absolute top-[91px] left-[243px] font-semibold inline-block min-w-[68px] whitespace-nowrap z-[1] mq450:text-lgi">
          ₹5,453
        </div>
        <div className="absolute top-[91px] left-[589px] font-semibold inline-block min-w-[68px] whitespace-nowrap z-[1] mq450:text-lgi">
          ₹5,453
        </div>
        <div className="absolute top-[91px] left-[24px] inline-block min-w-[54px] whitespace-nowrap z-[1] mq450:text-lgi">
          19:20
        </div>
        <div className="absolute top-[91px] left-[153px] inline-block min-w-[57px] whitespace-nowrap z-[1] mq450:text-lgi">
          20:25
        </div>
        <div className="absolute top-[109px] left-[91px] text-xs font-light text-grey-5 inline-block min-w-[49px] z-[1]">
          Non-stop
        </div>
        <div className="absolute top-[80px] left-[87px] w-14 h-[21px] text-center text-sm text-dodgerblue-100">
          <div className="absolute top-[0px] left-[9px] font-light inline-block min-w-[39px] z-[1]">
            1h 15m
          </div>
          <div className="absolute top-[18px] left-[0px] box-border w-[57px] h-px z-[2] border-t-[1px] border-solid border-gray-200" />
        </div>
        <div className="absolute top-[47px] left-[370px] text-xl font-semibold text-orange inline-block min-w-[62px] z-[1] mq450:text-base">
          Return
        </div>
        <div className="absolute top-[91px] left-[370px] inline-block min-w-[54px] whitespace-nowrap z-[1] mq450:text-lgi">
          19:20
        </div>
        <div className="absolute top-[91px] left-[499px] inline-block min-w-[57px] whitespace-nowrap z-[1] mq450:text-lgi">
          20:25
        </div>
        <div className="absolute top-[109px] left-[437px] text-xs font-light text-grey-5 inline-block min-w-[49px] z-[1]">
          Non-stop
        </div>
        <div className="absolute top-[80px] left-[433px] w-14 h-[21px] text-center text-sm text-dodgerblue-100">
          <div className="absolute top-[0px] left-[9px] font-light inline-block min-w-[39px] z-[1]">
            1h 15m
          </div>
          <div className="absolute top-[18px] left-[0px] box-border w-[57px] h-px z-[2] border-t-[1px] border-solid border-gray-200" />
        </div>
        <div className="absolute top-[47px] left-[340px] box-border w-px h-[71px] z-[1] border-r-[1px] border-solid border-grey-4" />
        <div className="absolute top-[164px] left-[0px] rounded-t-none rounded-b-3xs [background:linear-gradient(rgba(0,_0,_0,_0.4),_rgba(0,_0,_0,_0.4)),_#001d3d] w-[925px] flex flex-row items-start justify-start py-[25px] px-6 box-border max-w-full z-[1] text-base">
          <div className="h-[60px] w-[925px] relative rounded-t-none rounded-b-3xs [background:linear-gradient(rgba(0,_0,_0,_0.4),_rgba(0,_0,_0,_0.4)),_#001d3d] hidden max-w-full" />
          <div className="h-2.5 relative [text-decoration:underline] font-light inline-block min-w-[93px] z-[2]">
            Flight Details
          </div>
        </div>
        <div className="absolute top-[0px] left-[680px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-blue flex flex-col items-start justify-start py-[33px] px-11 gap-[18px] z-[2] text-13xl">
          <div className="w-[245px] h-56 relative rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-blue hidden" />
          <div className="flex flex-row items-start justify-start py-0 pr-[23px] pl-6">
            <div className="h-[21px] relative font-medium inline-block min-w-[110px] whitespace-nowrap z-[1] mq450:text-lgi mq750:text-7xl">
              ₹10,906
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[9px] text-sm">
            <div className="relative z-[1]">Get ₹500 off with CTDOM</div>
            <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-3">
              <button className="cursor-pointer [border:none] py-2.5 px-[34px] bg-blue-2 rounded-3xs overflow-hidden flex flex-row items-start justify-start z-[1]">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-[18px] w-[18px] relative hidden"
                    alt=""
                    src="/vuesaxlinearsearchnormal3.svg"
                  />
                  <div className="relative text-sm leading-[20px] font-semibold font-kanit text-white text-center inline-block min-w-[65px]">
                    Book Now
                  </div>
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/heroiconsoutlinearrowright4.svg"
                  />
                </div>
              </button>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-3">
              <button className="cursor-pointer [border:none] py-2.5 px-[33px] bg-blue-2 rounded-3xs overflow-hidden flex flex-row items-start justify-start z-[1]">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-[18px] w-[18px] relative hidden"
                    alt=""
                    src="/vuesaxlinearsearchnormal3.svg"
                  />
                  <div className="relative text-sm leading-[20px] font-semibold font-kanit text-white text-center inline-block min-w-[67px]">
                    Lock Price
                  </div>
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/heroiconsoutlinearrowright4.svg"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResultRowSelected;
