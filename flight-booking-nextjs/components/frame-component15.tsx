import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent15Type = {
  gender?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent15: NextPage<FrameComponent15Type> = ({
  gender,
  propMinWidth,
}) => {
  const genderStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[283px] max-w-full text-left text-xl text-grey-3 font-kanit">
      <h3
        className="m-0 relative text-inherit leading-[110.3%] font-light font-inherit inline-block min-w-[64px] mq450:text-base mq450:leading-[18px]"
        style={genderStyle}
      >
        {gender}
      </h3>
      <div className="self-stretch h-[60px] rounded-3xs box-border flex flex-row items-start justify-end py-[18px] px-6 max-w-full z-[1] border-[1px] border-solid border-grey-6">
        <img
          className="h-6 w-6 relative"
          alt=""
          src="/vuesaxlineararrowdown-61.svg"
        />
        <div className="h-[60px] w-[436px] relative rounded-3xs box-border hidden max-w-full border-[1px] border-solid border-grey-6" />
      </div>
    </div>
  );
};

export default FrameComponent15;
