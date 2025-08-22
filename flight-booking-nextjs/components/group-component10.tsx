import type { NextPage } from "next";

const GroupComponent10: NextPage = () => {
  return (
    <div className="w-[720px] rounded-xl bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)] flex flex-col items-center justify-start py-[55px] pr-5 pl-[21px] box-border gap-[40px] max-w-full z-[1] text-left text-21xl text-blue-2 font-kanit mq450:gap-[20px_40px]">
      <div className="w-[720px] h-[400px] relative rounded-xl bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)] hidden max-w-full" />
      <div className="w-[363px] h-[106px] flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
        <img
          className="h-[106px] w-[106px] relative z-[1]"
          loading="lazy"
          alt=""
          src="/vuesaxlinearcalendartick.svg"
        />
      </div>
      <h1 className="m-0 relative text-inherit leading-[110.3%] font-medium font-inherit inline-block max-w-full z-[1] mq1050:text-13xl mq1050:leading-[35px] mq450:text-5xl mq450:leading-[26px]">
        Booking Successfull
      </h1>
      <div className="flex flex-row items-start justify-start py-0 px-[68px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
        <button className="cursor-pointer [border:none] py-4 px-[26px] bg-blue-2 rounded-3xs overflow-hidden flex flex-row items-start justify-start z-[1]">
          <div className="flex flex-row items-start justify-start py-0 px-[31px] gap-[12px]">
            <img
              className="h-6 w-6 relative hidden"
              alt=""
              src="/search_normal.svg"
            />
            <div className="w-[113px] relative text-lg leading-[28px] font-medium font-kanit text-white text-center flex items-center justify-center min-w-[113px]">
              Back to Home
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/heroiconsoutlinearrowright.svg"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default GroupComponent10;
