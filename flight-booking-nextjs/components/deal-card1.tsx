import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type DealCard1Type = {
  image?: string;

  /** Style props */
  propMarginLeft?: CSSProperties["marginLeft"];
};

const DealCard1: NextPage<DealCard1Type> = ({ image, propMarginLeft }) => {
  const dealCard1Style: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <div
      className="h-[444px] w-[308px] shrink-0 flex flex-row items-start justify-center py-0 px-3 box-border text-left text-lg text-blue-2 font-kanit"
      style={dealCard1Style}
    >
      <div className="self-stretch flex-1 rounded-3xs bg-white flex flex-col items-start justify-start py-[15px] px-3 gap-[23px] border-[1px] border-solid border-whitesmoke-400 hover:bg-gainsboro-300 hover:cursor-pointer">
        <img
          className="self-stretch h-[188px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src={image}
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch relative text-xl tracking-[-0.02em] leading-[28px] capitalize font-medium mq450:text-base mq450:leading-[22px]">
            <p className="m-0">{`Get up to 25% off on `}</p>
            <p className="m-0">Domestic Flights!</p>
          </div>
          <div className="self-stretch relative leading-[24px] text-grey-3">
            <span>Use Coupon Code :</span>
            <span className="text-orange">{` `}</span>
            <span className="text-blue">FGDOM</span>
          </div>
          <div className="w-[210px] h-3 relative leading-[24px] text-orange text-right inline-block">
            Offer valid till Dec 31, 2023
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-4 px-6 bg-blue-2 rounded-3xs overflow-hidden flex flex-col items-start justify-center">
          <div className="flex flex-row items-center justify-center py-0 px-[67.5px] gap-[10px]">
            <img
              className="h-5 w-5 relative hidden"
              alt=""
              src="/search_normal.svg"
            />
            <div className="w-[75px] relative text-base leading-[24px] font-semibold font-kanit text-white text-center flex items-center justify-center min-w-[75px]">
              Book Now
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/linearsearch.svg"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default DealCard1;
