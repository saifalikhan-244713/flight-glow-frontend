import type { NextPage } from "next";

const Button2: NextPage = () => {
  return (
    <div className="self-stretch rounded-3xs bg-blue-2 overflow-hidden flex flex-col items-start justify-center py-4 px-[26px]">
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch h-7 flex flex-row items-center justify-center gap-[12px]">
        <img className="h-6 w-6 relative" alt="" src="/search_normal.svg" />
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
  );
};

export default Button2;
