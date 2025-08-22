import type { NextPage } from 'next';
import Lime from './l-i-m-e';
import { ShoppingBagIcon } from '@heroicons/react/20/solid';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/slices/store';

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
  price: string | number;
}

const FlightDetails: NextPage<ItineraryProps> = ({
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
  const currencyRates = {
    USD: 1.09,
    EUR: 1,
    INR: 95,
  };

  const selectedCurrency = useSelector(
    (state: RootState) => state.currency.selectedCurrency,
  ) as keyof typeof currencyRates;

  return (
    <>
      <div className="flex flex-col gap-[48px] self-stretch">
        <div className="flex items-center gap-2 border-b border-solid border-grey-6 pb-5">
          <div className="text-xl font-medium text-black">
            {departureCity} → {arrivalCity}
          </div>
          <span className="text-xl font-light text-gray-500">
            {departureDate}
          </span>
        </div>

        {/* <div className="relative box-border h-px self-stretch border-t-[1px] border-solid border-grey-6" /> */}

        <div className="flex w-full flex-row flex-wrap items-center justify-between gap-[18px] mq1050:gap-[34px] mq450:gap-[17px]">
          {/* <div className="flex min-w-[580px] max-w-full flex-1 flex-row items-center justify-start gap-[18px] mq750:min-w-full mq750:flex-wrap mq750:gap-[35px_17px]"> */}
          <Lime
            iconSrc={airlineLogo}
            buttonText={airlineName}
            flightNumber={`${airlineCode}`}
            aircraftType={airlineNumber}
          />
          <div className="flex w-[200px] items-start gap-3">
            {/* <h3 className="relative m-0 inline-block h-6 !bg-clip-text text-left font-kanit text-xl font-normal leading-[110.3%] text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] mq450:text-base mq450:leading-[18px]">
                {departureCity}
              </h3> */}
            {/* <div className="flex flex-row items-start justify-start self-stretch mq450:flex-wrap mq450:gap-[35px_17px]"> */}
            {/* <div className="flex flex-col items-start justify-start gap-[20px] mq450:flex-1"> */}
            <div className="relative inline-block whitespace-nowrap text-left font-kanit text-[24px] font-light text-blue-2 mq1050:text-7xl mq450:text-lgi">
              {departureTime}
            </div>
            {/* <div className="relative mt-5 inline-block h-5 min-w-[114px] !bg-clip-text text-left font-kanit text-base text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a]">
                    {departureDate}
                  </div> */}
            {/* <div className="relative inline-block h-[45px] self-stretch text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                    {departureAirport}
                    <br />{' '}
                    {departureTerminal && 'Terminal - ' + departureTerminal}
                  </div> */}
            {/* </div> */}
            {/* <div className="box-border flex min-w-[162px] flex-1 flex-col items-start justify-start px-0 pb-0 pt-[2.5px]">
                  <div className="flex h-[78px] flex-col items-start justify-start gap-[14px] self-stretch">
                    <div className="flex flex-row items-start justify-center self-stretch px-5 py-0">
                      <div className="relative inline-block h-2.5 min-w-[45px] text-center font-kanit text-base font-light text-grey-3">
                        {duration}
                      </div>
                    </div>
                    <img
                      className="relative h-[30px] max-w-full shrink-0 self-stretch overflow-hidden"
                      loading="lazy"
                      alt=""
                      src="/group-1000002555.svg"
                    />
                    <div className="flex flex-row items-start justify-center self-stretch px-5 py-0">
                      <div className="relative inline-block h-2.5 min-w-[66px] text-left font-kanit text-base font-light text-grey-3">
                        {flightType}
                      </div>
                    </div>
                  </div>
                </div> */}

            {/* <div className="box-border flex w-[56px] shrink-0 flex-col items-start justify-start text-center text-sm text-grey-3"> */}
            <div className="flex w-[49px] flex-col items-center">
              {/* <div className="flex flex-row items-start justify-start py-0 px-[62px]"> */}
              <div className="relative inline-block text-xs font-light">
                {duration}
              </div>
              {/* </div> */}
              <div className="relative box-border h-px self-stretch border-t-[1px] border-solid border-grey-5" />
              {/* <div className="flex flex-row items-start justify-start py-0 px-20 text-left text-xs text-grey-4"> */}
              {/* <Tooltip content={`Test | Hello`} className="px-3 py-2 text-sm font-bold  text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm"> */}
              <div className="relative inline-block text-xs font-light text-grey-4">
                0 stop
              </div>
              {/* </Tooltip> */}
              {/* </div> */}
            </div>
            {/* </div> */}

            <div className="flex flex-col items-start justify-start gap-[20px] self-stretch">
              {/* <h3 className="relative m-0 inline-block min-w-[99px] !bg-clip-text text-left font-kanit text-xl font-normal text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] mq450:text-base">
                  {arrivalCity}
                </h3> */}
              <div className="relative inline-block whitespace-nowrap text-left font-kanit text-[24px] font-light text-blue-2 mq1050:text-7xl mq450:text-lgi">
                {arrivalTime}
              </div>
              {/* <div className="relative mt-5 inline-block h-5 min-w-[108px] !bg-clip-text text-left font-kanit text-base text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a]">
                  {arrivalDate}
                </div>
                <div className="relative inline-block h-[27px] self-stretch text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                  {arrivalAirport}
                  <br /> {arrivalTerminal && 'Terminal - ' + arrivalTerminal}
                </div> */}
            </div>
            {/* </div> */}
          </div>
          {/* <div className="box-border flex min-w-[163px] flex-col items-start justify-start px-0 pb-0 pt-[10px] mq750:flex-1"> */}

          {/* </div> */}

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

          {/* <div className="w-[67px]"> */}
          <div className="text-5xl font-medium">
            {selectedCurrency}{' '}
            {typeof price === 'string'
              ? (Number(price) * currencyRates[selectedCurrency]).toFixed(2)
              : (price * currencyRates[selectedCurrency]).toFixed(2)}
          </div>
          {/* </div> */}
        </div>
        {/* </div> */}

        <div className="flex w-full justify-between">
          <div className="text-base font-light">
            <span className="font-semibold">Check in: </span>15 KG
          </div>
          <div className="text-base font-light">
            <span className="font-semibold">Cabin: </span>7 KG
          </div>
          <div className="text-base font-light">
            <span className="font-semibold">Meal </span>Free
          </div>
        </div>
        {/* <div className="relative box-border h-px self-stretch border-t-[1px] border-solid border-grey-6" /> */}
      </div>
    </>
  );
};

export default FlightDetails;
