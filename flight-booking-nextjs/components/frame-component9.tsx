import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent9Type = {
  // setIsEditing: () => void;
  profile?: string;
  basicInfoForAFasterBookin?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  profileBasicInfoContainerHeight?: CSSProperties["height"];
  profileBasicInfoContainerLineHeight?: CSSProperties["lineHeight"];
};

const FrameComponent9: NextPage<FrameComponent9Type> = ({
  // setIsEditing,
  profile,
  basicInfoForAFasterBookin,
  propMinWidth,
  profileBasicInfoContainerHeight,
  profileBasicInfoContainerLineHeight,
}) => {
  const profileBasicInfoContainerStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      height: profileBasicInfoContainerHeight,
      lineHeight: profileBasicInfoContainerLineHeight,
    };
  }, [
    propMinWidth,
    profileBasicInfoContainerHeight,
    profileBasicInfoContainerLineHeight,
  ]);

  return (
    <div className="self-stretch rounded-t-3xs rounded-b-none [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca] overflow-hidden flex flex-row flex-wrap items-start justify-start py-[18px] px-10 box-border gap-[1px] max-w-full text-left text-17xl text-blue-2 font-kanit">
      <div
        className="flex-1 relative inline-block min-w-[349px] max-w-full mq750:min-w-full mq450:text-lgi"
        style={profileBasicInfoContainerStyle}
      >
        <p className="m-0 font-medium">{profile}</p>
        <p className="m-0 text-5xl font-light text-chocolate">
          {basicInfoForAFasterBookin}
        </p>
      </div>
      <button className="cursor-pointer [border:none] py-2.5 px-[45px] bg-blue-2 rounded-3xs overflow-hidden flex flex-row items-start justify-start">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <img
            className="h-[18px] w-[18px] relative hidden"
            alt=""
            src="/linearsearch.svg"
          />
          <div className="w-[26px] relative text-sm leading-[20px] font-semibold font-kanit text-white text-center flex items-center justify-center min-w-[26px]">
            Edit
          </div>
          <div className="h-[19px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
            <img
              className="w-[18px] h-[18px] relative"
              alt=""
              src="/vuesaxlinearedit.svg"
            />
          </div>
        </div>
      </button>
    </div>
  );
};

export default FrameComponent9;
