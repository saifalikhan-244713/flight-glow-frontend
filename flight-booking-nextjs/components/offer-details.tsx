import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type OfferDetailsType = {
  className?: string;
  uPI?: string;
  cTUPI?: string;
  applicableOnUPIPayment?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const OfferDetails: NextPage<OfferDetailsType> = ({
  className = "",
  uPI,
  cTUPI,
  applicableOnUPIPayment,
  propMinWidth,
}) => {
  const cTUPIStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-start pt-[18px] px-[19px] pb-2.5 gap-[12px] text-left text-sm text-grey font-kanit border-[1px] border-solid border-grey-6 ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-base">
        <div className="rounded-8xs bg-grey-7 flex flex-row items-center justify-start p-[5px] gap-[10px]">
          <img
            className="h-[25px] w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={uPI}
          />
          <div
            className="h-2.5 relative font-medium inline-block min-w-[44px]"
            style={cTUPIStyle}
          >
            {cTUPI}
          </div>
        </div>
        <div className="h-2.5 relative font-medium text-blue inline-block min-w-[44px]">
          Apply
        </div>
      </div>
      <div className="h-[9px] relative font-medium text-blue-2 inline-block min-w-[73px]">
        Flat 10% off
      </div>
      <div className="relative leading-[16px] font-light text-grey-3">
        <p className="m-0">{applicableOnUPIPayment}</p>
        <p className="m-0 [text-decoration:underline]">Know more</p>
      </div>
    </div>
  );
};

export default OfferDetails;
