import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Button1Type = {
  button?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Button1: NextPage<Button1Type> = ({
  button,
  propWidth,
  propMinWidth,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  return (
    <>
      <button className="button-2  common-button-hover cursor-pointer [border:none] py-2 px-5 bg-blue-2 self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-center">
        <div className="self-stretch flex flex-row items-center justify-center gap-[12px]">
          <img
            className="h-6 w-6 relative hidden"
            alt=""
            src="/search_normal.svg"
          />
          <div
            className="w-[100px] relative text-lg leading-[28px] font-medium font-kanit text-white text-center flex items-center justify-center min-w-[100px]"
            style={buttonStyle}
          >
            {button}
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/heroiconsoutlinearrowright.svg"
          />
        </div>
      </button>

    </>
  );
};

export default Button1;
