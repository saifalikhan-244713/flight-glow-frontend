import type { NextPage } from "next";

const DataRow1: NextPage = () => {
  return (
    <div className="self-stretch bg-oldlace overflow-hidden flex flex-row items-center justify-start py-2.5 px-[25px] box-border gap-[20px] max-w-full text-left text-base text-grey-3 font-kanit mq1050:flex-wrap">
      <div className="w-[440px] relative flex items-center shrink-0 max-w-full">
        <span className="w-full">
          <p className="m-0 font-light">Flat ₹1000 Instant Discount</p>
          <p className="m-0 font-medium">{`Minimum Transaction Amount - > ₹7,500`}</p>
        </span>
      </div>
      <button className="cursor-pointer [border:none] py-2.5 px-[34.5px] bg-blue-2 rounded-3xs overflow-hidden flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-[8px]">
          <img
            className="h-[18px] w-[18px] relative hidden"
            alt=""
            src="/linearsearch.svg"
          />
          <div className="w-[65px] relative text-sm leading-[20px] font-semibold font-kanit text-white text-center flex items-center justify-center min-w-[65px]">
            Book Now
          </div>
          <img
            className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/linearsearch.svg"
          />
        </div>
      </button>
      <div className="h-12 w-[278px] relative font-medium flex items-center min-w-[181px] mq1050:flex-1">
        HDFCEMI
      </div>
      <div className="h-12 w-[278px] relative font-medium flex items-center min-w-[181px] mq1050:flex-1">
        Domestic Flights
      </div>
    </div>
  );
};

export default DataRow1;
