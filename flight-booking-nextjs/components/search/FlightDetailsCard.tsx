// FlightDetailsCard.tsx

import React from 'react';
import {
    ConvertCapitalFirstLetter,
    ConvertCapitalFirstLetterWithSpace,
} from "@/utils/stringUtils";
import { ExtractTimeFromISO, FormatDuration } from "@/utils/dateUtils";


interface FlightDetailsCardProps {
    resultData: any; // Replace 'any' with the specific type of resultData
    resultRow: any; // Replace 'any' with the specific type of resultRow
    handleRadioChange: (id: string) => void;
    name: string;
}

const FlightDetailsCard: React.FC<FlightDetailsCardProps> = ({
    resultData,
    resultRow,
    handleRadioChange,
    name,

}) => {
    return (
        <div className="flex-1 rounded-3xs bg-white box-border overflow-x-auto flex flex-row items-start justify-start py-2.5 pr-3.5 pl-0 gap-[1px] min-w-[294px] max-w-full z-[0] border-[1px] border-solid border-grey-6">
            <div className="h-[93px] w-[452px] relative rounded-3xs bg-white box-border shrink-0 hidden border-[1px] border-solid border-grey-6" />
            <div className="h-[73px] w-[155px] shrink-0 flex flex-col items-start justify-start gap-[6px]">
                <div className="self-stretch flex-1 flex flex-row items-start justify-between gap-[20px]">
                    
                    <img
                        className="h-10 w-[60px] relative overflow-hidden shrink-0 z-[1] pl-1"
                        alt=""
                        src={resultData.airlinesFrom.logo}
                    />
                    <div className="flex flex-col items-start justify-start pt-[29px] px-0 pb-0">
                        <div className="h-[15px] relative font-light inline-block min-w-[62px] whitespace-nowrap z-[1] ">
                            {ExtractTimeFromISO(
                                resultData.itineraries[0].segments[0].departure.at
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-[9px] text-sm">
                    <div className="h-[9px] relative inline-block min-w-[40px] z-[1]">
                        {ConvertCapitalFirstLetter(
                            resultData.airlinesFrom.businessName
                        )}
                    </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-[9px] text-xs text-grey-4">
                    <div className="h-2 relative font-light inline-block min-w-[42px] z-[1]">
                        {(resultData.itineraries[0].segments[0].carrierCode) ? resultData.itineraries[0].segments[0].carrierCode : ''} -
                        {(resultData.itineraries[0].segments[0].number) ? resultData.itineraries[0].segments[0].number : ''}
                    </div>
                </div>
            </div>
            <div className="w-[155px] shrink-0 flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border text-center text-sm text-grey-3">
                <div className="w-[113px] flex flex-row items-start justify-start gap-[10px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                        <div className="self-stretch flex flex-col items-end justify-start gap-[9px]">
                            <div className="flex flex-row items-start justify-end py-0 pr-2 pl-[9px]">
                                <div className="h-[9px] w-11 relative font-light inline-block min-w-[39px] z-[1]">
                                    {FormatDuration(
                                        resultData.itineraries[0].duration
                                    )}
                                </div>
                            </div>
                            <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-grey-5" />
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-[3px] pl-1 text-left text-xs text-grey-4">
                            <div className="h-2 relative font-light inline-block min-w-[55px] z-[1]">
                                {resultData.itineraries[0].segments[0]
                                    .numberOfStops
                                    ? resultData.itineraries[0].segments[0]
                                        .numberOfStops + " Stop"
                                    : "Non stop"}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0 text-left text-5xl text-blue-2">
                        <div className="h-[15px] relative font-light inline-block min-w-[47px] whitespace-nowrap z-[1] ">
                            {ExtractTimeFromISO(
                                resultData.itineraries[0].segments[0].arrival.at
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[29px] pb-0 pr-4 pl-0">
                <div className="h-[15px] relative font-medium inline-block min-w-[71px] whitespace-nowrap z-[1]  text-sm">
                    {resultData.price.currency +
                        " " +
                        resultData.price.total}
                </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0 text-base text-basic-forms-checkbox-check-icon-soft-active-color">
                <input
                    type="radio"
                    // name="flightDetails[]"
                    name={name}
                    className="h-5 w-5 relative z-[0]"
                    checked={resultRow?.id === resultData.id}
                    onChange={() => handleRadioChange(resultData.id)}
                />
            </div>
        </div>
    );
};

export default FlightDetailsCard;
