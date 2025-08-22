import type { NextPage } from "next";
import Button1 from "./button1";

const FormInputsRow4: NextPage = () => {
  return (
    <form className="m-0 w-[678px] rounded-xl bg-white flex flex-col items-center justify-start p-[60px] box-border gap-[20px] max-w-full z-[1] mq750:pl-[30px] mq750:pr-[30px] mq750:box-border">
      <div className="self-stretch flex flex-row items-center justify-start max-w-full mq750:gap-[48px_24px]">
        <div className="flex-1 rounded-3xs box-border overflow-hidden flex flex-col items-start justify-start py-[3px] px-2 max-w-full border-[1px] border-solid border-grey-7">
          <input
            className="w-[239px] [border:none] [outline:none] bg-[transparent] h-[54px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[15px] px-0 box-border font-kanit font-light text-base text-grey-3"
            placeholder="Email Id*"
            type="text"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start max-w-full mq750:gap-[48px_24px]">
        <div className="flex-1 rounded-3xs box-border overflow-hidden flex flex-col items-start justify-start py-[3px] px-2 max-w-full border-[1px] border-solid border-grey-7">
          <input
            className="w-[239px] [border:none] [outline:none] bg-[transparent] h-[54px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[15px] px-0 box-border font-kanit font-light text-base text-grey-3"
            placeholder="Password*"
            type="text"
          />
        </div>
      </div>
      <Button1 button="Login" propWidth="46px" propMinWidth="46px" />
    </form>
  );
};

export default FormInputsRow4;
