import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { ExtractTimeFromISO, FormatDuration } from '@/utils/dateUtils';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/slices/store';
import { useRouter } from 'next/router';
import Modal from '@/components/Modal';
import {
  setReturnSelectedSeats,
  setSelectedSeats,
} from '@/store/slices/seatMapSlice';

// Define types for resultRow and resultRowReturn
interface Segment {
  departure: { at: string };
  arrival: { at: string };
  numberOfStops: number;
}

interface Itinerary {
  segments: Segment[];
  duration: string;
}

interface Price {
  currency: string;
  total: string;
}

interface ResultRow {
  itineraries: Itinerary[];
  price: Price;
}

const SearchResultRowSelected: NextPage = () => {
  const router = useRouter(); // Initialize useRouter
  const dispatch = useDispatch();
  const searchParams = useSelector((state: RootState) => state.search);
  const [showModal, setShowModal] = useState(false);
  // const { resultRow, resultRowReturn }: { resultRow: ResultRow | null, resultRowReturn: ResultRow | null } = useSelector(
  //   (state: RootState) => state.search
  // );

  const currencyRates = {
    USD: 1.09,
    EUR: 1,
    INR: 95,
  };

  const selectedCurrency = useSelector(
    (state: RootState) => state.currency.selectedCurrency,
  ) as keyof typeof currencyRates;

  const totalAmount = useSelector(
    (state: RootState) => state.totalAmount.totalAmount,
  );

  const { resultRow, resultRowReturn } = useSelector(
    (state: RootState) => state.search,
  ) as {
    resultRow: any;
    resultRowReturn: any;
  };

  // useEffect(() => {
  //   if (showModal) {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }
  // }, [showModal]);

  if (!resultRow) {
    return <div>No result selected</div>;
  }

  const returnDate = searchParams ? searchParams.returnDate : null;
  const itinerary = resultRow.itineraries ? resultRow.itineraries[0] : null;
  const segment = itinerary ? itinerary.segments[0] : null;
  let segmentTo: Segment | null = null;
  let itineraryTo: Itinerary | null = null;

  if (!itinerary || !segment) {
    return <div>Invalid result selected</div>;
  }

  if (returnDate) {
    const resultRowReturn1 = resultRowReturn ? resultRowReturn : resultRow;
    console.log(resultRowReturn1);
    itineraryTo = resultRowReturn1.itineraries
      ? resultRowReturn1.itineraries[1]
      : null;
    segmentTo = itineraryTo ? itineraryTo.segments[0] : null;

    if (!itineraryTo || !segmentTo) {
      return <div>Invalid result selected</div>;
    }
  }

  const createBooking = async () => {
    dispatch(setReturnSelectedSeats([]));
    dispatch(setSelectedSeats([]));
    router.push({
      pathname: '/review-itinerary',
    });
  };

  const renderFlightInfo = (
    segment: Segment,
    itinerary: Itinerary,
    price: Price,
  ) => (
    <div className="flex flex-col items-start justify-start gap-[33px] text-5xl text-white md:flex-row md:gap-[16px]">
      <div className="flex min-w-[121px] flex-1 items-center justify-start gap-3">
        <div className="flex-1 pb-0 pt-[11px]">
          <div className="inline-block h-[15px] min-w-[54px] text-lg">
            {ExtractTimeFromISO(segment.departure.at)}
          </div>
        </div>
        <div className="flex flex-auto flex-col items-start justify-start gap-1 text-start text-sm text-dodgerblue-100">
          <div className="relative h-[21px] self-stretch">
            <div className="absolute top-[0px] inline-block min-w-[45px] font-light">
              {FormatDuration(itinerary.duration)}
            </div>
            <div className="absolute left-[0px] top-6 z-[1] box-border h-px w-[57px] border-t-[1px] border-solid border-gray-200" />
          </div>
          <div className="flex flex-row items-start justify-start py-0 pl-1 pr-[3px] text-left text-xs text-grey-5">
            <div className="relative inline-block h-2 min-w-[49px] font-light">
              {resultRow.itineraries[0].segments.length > 0
                ? resultRow.itineraries[0].segments.length - 1 + ' Stop'
                : 'Non-stop'}
            </div>
          </div>
        </div>
        <div className="flex flex-auto flex-col items-start justify-start px-0 pb-0 pt-[11px]">
          <div className="inline-block h-[15px] min-w-[57px] text-lg">
            {ExtractTimeFromISO(segment.arrival.at)}
          </div>
        </div>
        <div className="flex flex-initial flex-col items-start justify-start px-0 pb-0 pt-[11px]">
          <div className="inline-block h-[15px] min-w-[68px] whitespace-nowrap text-sm font-semibold">
            {selectedCurrency}{' '}
            {typeof price.total === 'number'
              ? (price.total * currencyRates[selectedCurrency])?.toFixed(2)
              : (
                  Number(price.total) * currencyRates[selectedCurrency]
                )?.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex min-h-[224px] w-full max-w-[925px] flex-col rounded-[10px] bg-blue-2 lg:flex-row">
        {/* Left Section: Departure and Return Details */}
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex flex-col items-center justify-between gap-6 px-[24px] py-[47px] lg:flex-row lg:gap-0">
            {/* Departure Section */}
            <div
              className={`w-full lg:w-${
                returnDate && segmentTo && itineraryTo ? '[287px]' : 'full'
              } flex shrink-0 flex-col items-start justify-start gap-5`}
            >
              <div className="text-xl font-semibold text-[#FF8E0A]">
                Departure
              </div>
              {renderFlightInfo(segment, itinerary, resultRow.price)}
            </div>

            {/* Divider */}
            {returnDate && segmentTo && itineraryTo && (
              <div className="mx-4 hidden h-full w-px bg-grey-4 lg:block" />
            )}

            {/* Return Section */}
            {returnDate && segmentTo && itineraryTo && (
              <div className="flex w-full flex-col gap-5 lg:w-[287px]">
                <div className="text-xl font-semibold text-[#FF8E0A]">
                  Return
                </div>
                {renderFlightInfo(
                  segmentTo,
                  itineraryTo,
                  resultRowReturn ? resultRowReturn.price : resultRow.price,
                )}
              </div>
            )}
          </div>

          {/* Flight Details Button */}
          <button
            onClick={() => setShowModal(true)}
            className="cursor-pointer rounded-bl-[10px] bg-black px-[24px] py-[25px] text-left text-base font-light text-white hover:underline"
          >
            Flight Details
          </button>
        </div>

        {/* Right Section: Price and Actions */}
        <div className="flex max-w-full flex-col items-center justify-center rounded-r-[10px] bg-blue px-[24px] py-[33px] text-white lg:max-w-[245px] lg:px-[44px]">
          <div className="text-[32px] font-medium">
            {/* {resultRow.price.currency} ₹{' '} */}
            {/* {(resultRow.price.total * 90)?.toFixed(2)} */}

            {selectedCurrency +
              ' ' +
              (totalAmount * currencyRates[selectedCurrency]).toFixed(2)}
          </div>
          <div className="mt-3 text-center text-sm">
            Get ₹300 off with CTDOM
          </div>

          <div className="mt-5 flex w-full flex-col gap-4">
            <button
              id="booknow-button"
              onClick={createBooking.bind(null)}
              className="w-full cursor-pointer rounded-[10px] bg-blue-2 px-5 py-3 text-sm font-semibold text-white"
            >
              Book Now
            </button>
            <button
              id="lockprice-button"
              className="w-full rounded-[10px] bg-blue-2 px-5 py-3 text-sm font-semibold text-white"
            >
              Lock Price
            </button>
          </div>
        </div>

        {/* Modal */}
        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </div>
    </>
  );
};

export default SearchResultRowSelected;
