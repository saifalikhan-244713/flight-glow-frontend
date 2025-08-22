import { ConvertCapitalFirstLetter } from '@/utils/stringUtils';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { fetchFlightOrderDetail } from '@/utils/orderUtils';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

interface FlightData {
  order_id: string;
  airline_logo: string;
  airline: string;
  carrierCode: string;
  aircraft: string;
  departure_location: string;
  departure_country_code: string;
  departure_time: string;
  departure_at: string;
  departure_address: string;
  departure_terminal: string;
  duration: string;
  number_of_stops: number;
  arrival_location: string;
  arrival_country_code: string;
  arrival_time: string;
  arrival_at: string;
  arrival_address: string;
  arrival_terminal: string;
  currency: string;
  price_total: number;
}

interface FlightCardsProps {
  data: FlightData;
}

function FlightCards({ data }: FlightCardsProps) {
  const dispatch = useDispatch();
  const { data: session } = useSession();

  const router = useRouter();
  return (
    <div className="box-border flex w-[1240px] max-w-full flex-row items-center justify-between gap-5 rounded-3xs border-[1px] border-solid border-grey-6 p-5 text-left font-kanit text-xl text-blue-2 mq1050:flex-wrap mq750:w-full mq750:flex-col mq750:items-center mq750:justify-start mq750:gap-5 mq450:p-3">
      <div className="box-border flex h-[115px] w-[76px] flex-col items-center justify-between gap-1 text-sm mq450:h-auto">
        <div className="box-border flex h-10 flex-row items-start justify-start px-2 py-0">
          <img
            className="relative h-10 w-[60px] shrink-0 overflow-hidden"
            loading="lazy"
            alt=""
            src={data.airline_logo}
          />
        </div>
        <div className="relative inline-block min-w-20 text-center">
          {data.airline}
        </div>
        <div className="relative inline-block font-light">
          {data.carrierCode}
        </div>
        <div className="relative inline-block w-20 rounded-xl border-[1px] border-solid border-grey-4 p-1 font-light">
          {ConvertCapitalFirstLetter(data.airline)} {data.aircraft}
        </div>
      </div>

      <div className="mq450:w-full flex flex-row items-center justify-between gap-[68px] text-left text-base text-grey-3 mq450:flex-col">
        <div className="box-border flex w-[163px] flex-col items-center justify-center gap-5 text-chocolate mq750:w-[120px] mq450:w-full">
          <div className="relative inline-block min-w-[84px] text-base leading-[18px]">
            {ConvertCapitalFirstLetter(data.departure_location)},{' '}
            {data.departure_country_code}
          </div>
          <div className="relative inline-block min-w-[73px] whitespace-nowrap text-13xl font-medium text-blue-2 mq750:text-7xl mq450:text-lgi">
            {data.departure_time}
          </div>
          <div className="relative inline-block min-w-[114px] text-base">
            {data.departure_at}
          </div>
          <div className="relative inline-block text-center text-sm font-light leading-[18px] text-grey-3">
            {ConvertCapitalFirstLetter(data.departure_address)}, Terminal{' '}
            {data.departure_terminal}
          </div>
        </div>
        <div className="box-border flex w-[125px] flex-col items-center justify-center text-center text-base text-grey-3 mq750:w-[100px] mq450:w-[80px]">
          <div className="relative inline-block w-16 min-w-[45px] font-light">
            {data.duration}
          </div>
          <div className="flex flex-row items-start justify-start px-[18px] py-0">
            <div className="relative flex flex-row items-start justify-start">
              <div className="absolute bottom-[14px] left-[calc(50%_-_125px)] !m-[0] box-border h-px w-[251px] border-t-[1px] border-dashed border-lightskyblue mq750:w-[200px]" />
              <img
                className="relative z-[1] w-[30px] shrink-0 overflow-hidden"
                loading="lazy"
                alt=""
                src="/flight-2-1.svg"
              />
            </div>
          </div>
          <div className="relative inline-block min-w-[66px] text-left font-light">
            {data.number_of_stops > 0
              ? `${data.number_of_stops} Stop`
              : 'Non-stop'}
          </div>
        </div>
        <div className="box-border flex w-[163px] flex-col items-center justify-center gap-5 text-chocolate mq750:w-[120px] mq450:w-full">
          <div className="relative inline-block min-w-[84px] text-base leading-[18px]">
            {ConvertCapitalFirstLetter(data.arrival_location)},{' '}
            {data.arrival_country_code}
          </div>
          <div className="relative inline-block min-w-[73px] whitespace-nowrap text-13xl font-medium text-blue-2 mq750:text-7xl mq450:text-lgi">
            {data.arrival_time}
          </div>
          <div className="relative inline-block min-w-[114px] text-base">
            {data.departure_at}
          </div>
          <div className="relative inline-block text-center text-sm font-light leading-[18px] text-grey-3">
            {ConvertCapitalFirstLetter(data.arrival_address)}, Terminal{' '}
            {data.arrival_terminal}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start text-17xl">
        <div className="relative inline-block min-w-[123px] whitespace-nowrap font-medium leading-[40px] mq750:text-10xl mq750:leading-[32px] mq450:text-3xl mq450:leading-[24px]">
          ₹{' '}
          {typeof data.price_total === 'string'
            ? (Number(data.price_total) * 90).toFixed(2)
            : (data.price_total * 90).toFixed(2)}
        </div>
      </div>
      <div className="flex flex-col items-start justify-start text-blue">
        <button
          className="button"
          onClick={() =>
            fetchFlightOrderDetail(session, router, dispatch, data.order_id)
          }
        >
          <p className="title ml-2 text-sm font-bold">Details!</p>
          <img
            src="/vuesaxbulkarrowright.svg"
            alt="Handshake"
            className="ml-auto mt-1 h-10 w-10"
          />
          <p className="description absolute text-sm font-bold">
            Order Details
          </p>
        </button>
      </div>
    </div>
  );
}
export default FlightCards;
