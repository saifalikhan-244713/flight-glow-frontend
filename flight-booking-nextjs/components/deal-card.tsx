import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type DealCardType = {
  image?: string;
  getUpTo25OffOnDomesticFli?: string;
  fGDOM?: string;
  offerValidTillDec312023?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const DealCard: NextPage<DealCardType> = ({
  image,
  getUpTo25OffOnDomesticFli,
  fGDOM,
  offerValidTillDec312023,
  propWidth,
}) => {
  const offerValidTillDecStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="flex flex-row items-start justify-center py-0 px-3.5 box-border max-w-full text-left text-lg text-blue-2 font-kanit">
      <div className="flex-1 rounded-3xs bg-white box-border flex flex-col items-center justify-start py-[15px] px-2.5 gap-[23px] max-w-full border-[1px] border-solid border-whitesmoke-400 hover:bg-gainsboro-300 hover:cursor-pointer">
        <img
          className="self-stretch h-[188px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src={image}
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full">
            <h3 className="m-0 self-stretch relative text-9xl tracking-[-0.02em] leading-[28px] capitalize font-medium font-inherit mq450:text-3xl mq450:leading-[22px]">
              {getUpTo25OffOnDomesticFli}
            </h3>
            <div className="self-stretch relative leading-[24px] text-grey-3">
              <span>Use Coupon Code :</span>
              <span className="text-orange">{` `}</span>
              <span className="text-blue">{fGDOM}</span>
            </div>
            <div
              className="w-[210px] h-3 relative leading-[24px] text-orange text-right inline-block"
              style={offerValidTillDecStyle}
            >
              {offerValidTillDec312023}
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-4 px-6 bg-blue-2 self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-center">
          <div className="self-stretch flex flex-row items-center justify-center gap-[10px]">
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

export default DealCard;
