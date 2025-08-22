import type { NextPage } from 'next';
import {
  ConvertCapitalFirstLetter,
  ConvertCapitalFirstLetterWithSpace,
  ConvertSmall,
} from '@/utils/stringUtils';

export type AmenitiesType = {
  description: string;
  isChargeable: string;
  amenityType: string;
};

const Amenities: NextPage<AmenitiesType> = ({
  description,
  isChargeable,
  amenityType,
}) => {
  return (
    <div className="box-border flex min-w-[130px] flex-1 flex-col items-start justify-start gap-[16px] rounded-8xs border-[1px] border-solid border-grey-7 bg-white p-3 text-left font-kanit text-base ">
      {/* <div className="relative box-border hidden h-16 w-[200px] rounded-8xs border-[1px] border-solid border-grey-7 bg-white" /> */}
      <div className="relative z-[1] text-black inline-block font-medium text-base">
        {ConvertCapitalFirstLetter(description)}
      </div>
      <div className="flex h-5 flex-row items-start justify-between gap-[20px] self-stretch text-blue-2">
        <div className="flex flex-col items-start justify-start">
          <div className="relative z-[1] inline-block h-2.5 min-w-[37px] whitespace-nowrap font-light">
            {isChargeable}
          </div>
        </div>
        <div> {ConvertCapitalFirstLetterWithSpace(amenityType)}</div>
      </div>
    </div>
  );
};

export default Amenities;
