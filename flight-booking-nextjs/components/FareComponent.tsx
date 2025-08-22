import { ConvertCapitalFirstLetter } from '@/utils/stringUtils';
import { Checkbox } from '@mui/material';
import React from 'react';

export type FareDetailsType = {
  className?: string;
  fareDetails: any;
  fareType?: string;
  fareAmount?: string;
  description?: string;
  iconSrc?: string;
  onFareSelect?: (fareDetail: any) => void;
  isChecked?: boolean;
};

const FareDetails: React.FC<FareDetailsType> = ({
  className = '',
  fareType,
  fareAmount,
  description,
  iconSrc,
  fareDetails,
  onFareSelect,
  isChecked,
}) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handleCheckboxChange = () => {
    onFareSelect?.(fareDetails);
  };

  return (
    <div
      className={`z-[1] box-border flex min-w-[202px] flex-1 flex-col items-start justify-start gap-5 overflow-hidden rounded-3xs border-[1px] border-solid border-grey-6 bg-white p-5 ${className}`}
    >
      <div className="flex flex-row items-start justify-between gap-[20px] self-stretch">
        <div className="box-border flex w-[121px] flex-col items-start justify-start px-0 pb-0 pt-px">
          <div className="flex flex-col items-start justify-start gap-[21px] self-stretch">
            <div className="relative inline-block min-w-[121px] text-lg font-normal leading-[110.3%] mq450:text-base mq450:leading-[18px]">
              {fareType ? ConvertCapitalFirstLetter(fareType) : fareType}
            </div>
            <div className="relative inline-block min-w-[96px] whitespace-nowrap !bg-clip-text text-9xl font-medium leading-[31px] text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] mq450:text-3xl mq450:leading-[25px]">
              {fareAmount}
            </div>
          </div>
        </div>
        <div className="box-border flex h-6 w-6 shrink-0 flex-row items-center justify-center overflow-hidden rounded p-[3px]">
          <Checkbox
            {...label}
            onChange={handleCheckboxChange}
            checked={isChecked}
          />
          {/* <img
            className="relative h-3 w-3 shrink-0 overflow-hidden"
            alt=""
            src={iconSrc}
          /> */}
        </div>
      </div>
      <div className="relative inline-block h-[108px] self-stretch text-base font-light leading-[110.3%] text-grey-3">
        <p className="m-0">{description}</p>
      </div>
    </div>
  );
};

export default FareDetails;
