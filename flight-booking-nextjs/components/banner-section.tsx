import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type BannerSectionType = {
  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
};

const BannerSection: NextPage<BannerSectionType> = ({
  propAlignSelf,
  propFlex,
}) => {
  const bannerSectionStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  return (
    <div
      className="self-stretch flex flex-row items-start justify-start bg-[url('/frame2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-17xl text-blue-2 font-kanit"
      style={bannerSectionStyle}
    >
      <img
        className="h-[276px] w-[1440px] relative object-cover hidden min-h-[276px] max-w-full"
        alt=""
        src="/frame2x.png"
      />
      <div className="flex-1 flex flex-row items-start justify-center py-[126.5px] px-5 box-border max-w-full z-[1]">
        <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[24px] font-medium font-inherit mq750:text-10xl mq750:leading-[19px] mq450:text-3xl mq450:leading-[14px]">
          My Account
        </h1>
      </div>
    </div>
  );
};

export default BannerSection;
