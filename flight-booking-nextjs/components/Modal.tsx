import React from 'react';
import ReactDOM from 'react-dom';
import styles from '@/styles/Modal.module.css';
import { useSelector } from 'react-redux';
import { ConvertCapitalFirstLetter } from '@/utils/stringUtils';
import {
  ExtractTimeFromISO,
  FormatDuration,
  FormatDateReturnDateAndDay,
} from '@/utils/dateUtils';
import { useRouter } from 'next/router';
import FlightDetails from './FlightDetails';
import { RootState } from '@/store/slices/store';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const totalAmount = useSelector(
    (state: RootState) => state.totalAmount.totalAmount,
  );
  const currencyRates = {
    USD: 1.09,
    EUR: 1,
    INR: 95,
  };

  const selectedCurrency = useSelector(
    (state: RootState) => state.currency.selectedCurrency,
  ) as keyof typeof currencyRates;

  const router = useRouter();
  const {
    selectedFromCity,
    selectedToCity,
    departureDate,
    resultRow,
    searchParams,
    returnDate,
  } = useSelector((state: any) => state.search);

  interface Segment {
    logo: string;
    duration: string;
    businessName: string;
    carrierCode: string;
    number: string;
    aircraft: {
      code: string;
    };
    departure: {
      name: string;
      address: string;
      at: string;
      terminal: string;
    };
    arrival: {
      name: string;
      address: string;
      at: string;
      terminal: string;
    };
    numberOfStops: number;
  }

  interface Itinerary {
    segments: Segment[];
    duration: string;
  }

  interface ResultRow {
    itineraries: Itinerary[];
    airlinesFrom: {
      logo: string;
      businessName: string;
    };
    airportAddressFrom: {
      departure_airport_address: string;
      arrival_airport_address: string;
    };
    price: {
      currency: string;
      total: number;
    };
    travelerPricings: {
      fareDetailsBySegment: {
        includedCheckedBags: {
          weight: number;
          weightUnit: string;
          quantity: number;
        };
      }[];
    }[];
  }

  const createBooking = async () => {
    router.push({
      pathname: '/review-itinerary',
    });
  };

  const itinerary = resultRow?.itineraries ? resultRow.itineraries[0] : null;
  let segmentTo: Segment | null = null;
  let itineraryTo: Itinerary | null = null;

  if (returnDate) {
    itineraryTo = resultRow?.itineraries ? resultRow.itineraries[1] : null;
    segmentTo = itineraryTo ? itineraryTo.segments[0] : null;
  }

  const renderSegments = (
    segments: Segment[],
    airlineLogo: string,
    airlineName: string,
    airlineCode: string,
    price: string | number,
  ) => {
    return segments.map((segment, index) => {
      return (
        <React.Fragment key={index}>
          <FlightDetails
            airlineLogo={segment.logo || airlineLogo}
            airlineName={segment.businessName || airlineName}
            airlineCode={`${segment.carrierCode} - ${segment.number}`}
            airlineNumber={
              resultRow.airlinesFrom.businessName
                ? `${ConvertCapitalFirstLetter(resultRow.airlinesFrom.businessName)} - ${segment.aircraft.code || ''}`
                : ''
            }
            departureCity={ConvertCapitalFirstLetter(segment.departure.name)}
            departureTime={ExtractTimeFromISO(segment.departure.at)}
            departureDate={
              segment.departure.at
                ? FormatDateReturnDateAndDay(segment.departure.at)
                : ''
            }
            departureAirport={
              ConvertCapitalFirstLetter(segment.departure.address) || ''
            }
            departureTerminal={segment.departure.terminal || ''}
            arrivalCity={ConvertCapitalFirstLetter(segment.arrival.name)}
            arrivalTime={ExtractTimeFromISO(segment.arrival.at)}
            arrivalDate={
              segment.arrival.at
                ? FormatDateReturnDateAndDay(segment.arrival.at)
                : ''
            }
            arrivalAirport={
              ConvertCapitalFirstLetter(segment.arrival.address) || ''
            }
            duration={FormatDuration(segment.duration)}
            arrivalTerminal={segment.arrival.terminal || ''}
            flightType={''}
            includedCheckedBags={
              resultRow.travelerPricings[0].fareDetailsBySegment[index]
                ?.includedCheckedBags.weight
                ? resultRow.travelerPricings[0].fareDetailsBySegment[index]
                    .includedCheckedBags.weight +
                  ' ' +
                  resultRow.travelerPricings[0].fareDetailsBySegment[index]
                    .includedCheckedBags.weightUnit
                : 'quantity ' +
                  resultRow.travelerPricings[0].fareDetailsBySegment[index]
                    .includedCheckedBags.quantity
            }
            price={price}
          />
        </React.Fragment>
      );
    });
  };

  const modalContent = (
    <div className={styles['modal-overlay']}>
      <div
        className={`${styles['modal-wrapper']} w-full max-w-[95%] font-kanit md:max-w-3xl lg:max-w-7xl`}
      >
        <div className={styles.modal}>
          <button className={`${styles['close-button']}`} onClick={onClose}>
            ×
          </button>

          <div className="flex flex-col gap-10">
            <div className="text-13xl font-medium">Flight Detail</div>
            <div className="flex flex-wrap items-center gap-[43px]">
              {/* Onward Journey */}
              <div
                className={`${
                  returnDate ? 'w-[474px]' : 'mx-auto w-[90%]'
                } text-2xl w-full flex-1 flex-col rounded-[10px] border border-solid border-grey-6 p-5 font-medium`}
              >
                {resultRow.itineraries && resultRow.itineraries[0]
                  ? renderSegments(
                      resultRow.itineraries[0].segments,
                      resultRow.airlinesFrom.logo || 'airlineNotAvailalble.png',
                      resultRow.airlinesFrom.businessName || '',
                      `${resultRow.airlinesFrom.businessName || ''}`,
                      resultRow?.price?.total,
                    )
                  : null}
              </div>

              {/* Return Journey (only if returnDate exists) */}
              {returnDate &&
                resultRow.itineraries &&
                resultRow.itineraries[1] && (
                  <div className="text-2xl w-[474px] flex-1 flex-col rounded-[10px] border border-solid border-grey-6 p-5 font-medium">
                    {renderSegments(
                      resultRow.itineraries[1].segments,
                      resultRow.airlinesFrom.logo || 'airlineNotAvailalble.png',
                      resultRow.airlinesFrom.businessName || '',
                      `${resultRow.airlinesFrom.businessName || ''}`,
                      resultRow?.price?.total,
                    )}
                  </div>
                )}
            </div>

            <div className="flex items-center justify-end gap-5">
              <div className="text-5xl font-medium text-[#0065CA]">
                {/* ₹{' '}
                {typeof resultRow?.price?.total === 'string'
                  ? (Number(resultRow?.price?.total) * 90).toFixed(2)
                  : (resultRow?.price?.total * 90).toFixed(2)} */}
                {selectedCurrency +
                  ' ' +
                  (totalAmount * currencyRates[selectedCurrency]).toFixed(
                    2,
                  )}{' '}
              </div>

              <button
                onClick={createBooking}
                className="cursor-pointer rounded-[10px] bg-blue-2 px-5 py-3 text-sm font-semibold text-white"
              >
                Book Now
              </button>
              {/* <button className="rounded-[10px] bg-blue-2 px-5 py-3 text-sm font-semibold text-white">
                Lock Price
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (typeof document !== 'undefined') {
    const modalRoot = document.getElementById('modal-root');
    if (modalRoot) {
      return ReactDOM.createPortal(modalContent, modalRoot);
    }
  }

  return null;
};

export default Modal;
