import type { NextPage } from 'next';
import Lime from './l-i-m-e';
import { ShoppingBagIcon } from '@heroicons/react/20/solid';

interface ItineraryProps {
  airlineLogo: string;
  airlineName: string;
  airlineCode: string;
  airlineNumber: string;
  departureCity: string;
  departureTime: string;
  departureDate: string;
  departureAirport: string;
  departureTerminal: string;
  arrivalCity: string;
  arrivalTime: string;
  arrivalDate: string;
  arrivalAirport: string;
  arrivalTerminal: string;
  duration: string;
  flightType: string;
  includedCheckedBags?: string;
  price?: string | number;
}

const ReviewItineraryFromTo: NextPage<ItineraryProps> = ({
  airlineLogo,
  airlineName,
  airlineCode,
  airlineNumber,
  departureCity,
  departureTime,
  departureDate,
  departureAirport,
  departureTerminal,
  arrivalCity,
  arrivalTime,
  arrivalDate,
  arrivalAirport,
  arrivalTerminal,
  duration,
  flightType,
  includedCheckedBags,
  price,
}) => {
  return (
    <>
      <div className="flex max-w-full flex-col items-center justify-center gap-[20px] self-stretch">
        <div className="flex w-full max-w-full flex-row flex-wrap items-center justify-start gap-[68px] mq1050:gap-[34px] mq450:gap-[17px]">
          <div className="flex flex-col items-center text-xs font-light text-gray-400 gap-3">
            {/* <div className="flex flex-row items-center justify-between gap-[18px]"> */}
            <div className="w-[60px]">
              <img
                loading="lazy"
                src={airlineLogo}
                className="aspect-[2.08] w-[60px]"
              />
              <div className="text-sm text-sky-950">{airlineName}</div>
            </div>

            <div className="flex flex-col items-center text-xs font-light text-gray-400 gap-3">
              <div className="text-xs font-light">{airlineCode}</div>
              <div className="rounded-3xl border border-solid border-gray-400 bg-white text-xs font-light p-1">
                {airlineNumber}
              </div>
            </div>
            {/* </div> */}
          </div>

          <div className="flex max-w-[646px] flex-1 flex-row items-center justify-start gap-5 mq750:min-w-full mq750:flex-wrap mq750:gap-[35px_17px]">
            <div className="flex w-[163px] flex-col items-start justify-start gap-5">
              <h3 className="relative m-0 inline-block h-6 !bg-clip-text text-left font-kanit text-xl font-normal leading-[110.3%] text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] mq450:text-base mq450:leading-[18px]">
                {departureCity}
              </h3>
              {/* <div className="flex flex-row items-start justify-start self-stretch mq450:flex-wrap mq450:gap-[35px_17px]"> */}
              {/* <div className="flex flex-col items-start justify-start gap-[20px] mq450:flex-1"> */}
              <div className="relative inline-block whitespace-nowrap text-left font-kanit text-13xl font-medium text-blue-2 mq1050:text-7xl mq450:text-lgi">
                {departureTime}
              </div>
              <div className="relative inline-block h-5 min-w-[114px] !bg-clip-text text-left font-kanit text-base font-normal text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a]">
                {departureDate}
              </div>
              <div className="relative inline-block self-stretch text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                {departureAirport}
                <br /> {departureTerminal && 'Terminal - ' + departureTerminal}
              </div>
              {/* </div> */}
              {/* </div> */}
            </div>

            <div className="box-border flex min-w-[162px] flex-1 flex-col items-center justify-start gap-4 px-0 pb-0 pt-[2.5px]">
              {/* <div className="flex h-[78px] flex-col items-start justify-start gap-[14px] self-stretch"> */}
              {/* <div className="flex flex-row items-start justify-center self-stretch px-5 py-0"> */}
              <div className="relative inline-block min-w-[45px] text-center font-kanit text-base font-light text-grey-3">
                {duration}
              </div>
              {/* </div> */}
              <img
                className="relative h-[30px] max-w-full shrink-0 self-stretch overflow-hidden"
                loading="lazy"
                alt=""
                src="/group-1000002555.svg"
              />
              {/* <div className="flex flex-row items-start justify-center self-stretch px-5 py-0"> */}
              <div className="relative inline-block min-w-[45px] text-center font-kanit text-base font-light text-grey-3">
                {flightType}
              </div>
              {/* </div> */}
              {/* </div> */}
            </div>

            <div className="flex w-[163px] flex-col items-start justify-start gap-5">
              <h3 className="relative m-0 inline-block h-6 !bg-clip-text text-left font-kanit text-xl font-normal leading-[110.3%] text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] mq450:text-base mq450:leading-[18px]">
                {arrivalCity}
              </h3>
              {/* <div className="flex flex-row items-start justify-start self-stretch mq450:flex-wrap mq450:gap-[35px_17px]"> */}
              {/* <div className="flex flex-col items-start justify-start gap-[20px] mq450:flex-1"> */}
              <div className="relative inline-block whitespace-nowrap text-left font-kanit text-13xl font-medium text-blue-2 mq1050:text-7xl mq450:text-lgi">
                {arrivalTime}
              </div>
              <div className="relative inline-block h-5 min-w-[114px] !bg-clip-text text-left font-kanit text-base font-normal text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a]">
                {arrivalDate}
              </div>
              <div className="relative inline-block self-stretch text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                {arrivalAirport}
                <br /> {arrivalTerminal && 'Terminal - ' + arrivalTerminal}
              </div>
              {/* </div> */}
              {/* </div> */}
            </div>

            {/* {includedCheckedBags && (
              <div className="flex max-w-full flex-col items-start justify-start pt-[10px]">
                <div className="flex max-w-full items-center pt-[10px]">
                  <img
                    className="relative mt-1 h-5 overflow-hidden"
                    loading="lazy"
                    alt=""
                    src="/checkin_baggage_icon.png"
                  />
                  <div className="ml-2 inline-block min-w-[108px] !bg-clip-text text-left font-kanit text-base text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a]">
                    Check-in baggage
                  </div>
                </div>

                <div className="pl-5 font-kanit text-sm font-light leading-4 text-grey-3">
                  <br /> {includedCheckedBags} / adult
                </div>
              </div>
            )} */}
          </div>
        </div>

        <div className="relative box-border h-px self-stretch border-t-[1px] border-solid border-grey-6" />
      </div>
    </>
  );
};

export default ReviewItineraryFromTo;
