import type { NextPage } from 'next';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TopHeader from '@/components/top-header';
import FareDetails, { FareDetailsType } from '@/components/FareComponent';
import ReviewItineraryContinueButton from '@/components/ReviewItineraryContinueButton';
import { RootState } from '@/store/slices/store';
import ReviewItineraryFromTo from '../components/ReviewItineraryFromTo';
import { ConvertCapitalFirstLetter, ConvertSmall } from '@/utils/stringUtils';
import {
  ExtractTimeFromISO,
  FormatDuration,
  FormatDateReturnDateAndDay,
} from '@/utils/dateUtils';
import Amenities from '@/components/amenities';
import TotalPrice from '@/components/TotalPrice';
import ApplyCoupon from '@/components/ApplyCoupon';
import Seatmaps from '@/components/Seatmaps';
import {
  setFlightOffersPricing,
  setLoading,
  setResultRow,
  setReturnFlightOffersPricing,
} from '@/store/slices/searchSlice';
import { useEffect } from 'react';

import SavedTravellers from '@/components/SavedTravellers';
import CreateOrder from '@/components/CreateOrder';
import SearchController from '@/controllers/search.controller';
import Loading from '@/components/Loading';
import PolicyContainer, { PolicyContainerType } from './policy-container';
import SecureYourTrip from '@/components/SecureYourTrip';
import ReturnSeatMap from '@/components/ReturnSeatMap';
import { toast } from 'react-toastify';
import SavedTravellerDeatails from '@/components/SavedTravellerDeatails';

interface Fee {
  amount: string;
  type: string;
}

const ReviewYourItinerary: NextPage = () => {
  const dispatch = useDispatch();

  const {
    selectedFromCity,
    selectedToCity,
    results,
    resultRow,
    resultRowReturn,
    returnDate,
    loading,
    flightOffersPricing,
  } = useSelector((state: RootState) => state.search) as {
    selectedFromCity: string;
    selectedToCity: string;
    results: any[]; // Use any[] or a more specific type if known
    resultRow: any;
    resultRowReturn: any;
    returnDate: any;
    loading: false;
    flightOffersPricing: any;
  };
  // const selectedSeats = useSelector((state: RootState) => state.seatmap);
  const {
    seatMapResult,
    selectedSeats,
    returnSeatMapResult,
    returnSelectedSeats,
  } = useSelector((state: RootState) => state.seatmap) as unknown as {
    seatMapResult: any[]; // Use any[] or a more specific type if known
    selectedSeats: any;
    returnSeatMapResult: any;
    returnSelectedSeats: any;
  };

  const [reviewItineraryArrowUp, setReviewItineraryArrowUp] = useState(true);
  const [amenitiesArrowUp, setAmenitiesArrowUp] = useState(true);
  const [cancellationArrowUp, setCancellationArrowUp] = useState(true);
  const [dateChangePolicyArrowUp, setSateChangePolicyArrowUp] = useState(true);

  const [chooseAddOnsArrow, setChooseAddOnsArrow] = useState(true);
  const [selectedDepartureFare, setSelectedDepartureFare] = useState<any>(null);
  const [selectedArrivalFare, setSelectedArrivalFare] = useState<any>(null);

  const toggleReviewItineraryArrowUp = async () => {
    setReviewItineraryArrowUp((prevState) => !prevState);
  };

  const toggleAmenitiesArrowUp = () => {
    setAmenitiesArrowUp((prevState) => !prevState);
  };

  const handleDepartureFareSelection = (fareDetail: any) => {
    setSelectedDepartureFare(fareDetail);
  };

  const handleArrivalFareSelection = (fareDetail: any) => {
    setSelectedArrivalFare(fareDetail);
  };

  // const getDepartureData = localStorage.getItem('resultRow');
  // const returnData = localStorage.getItem('returnData');

  const toggleChooseAddOnsArrow = async () => {
    //TODO Dont Remove this code

    if (selectedSeats && selectedSeats.length === 0) {
      toast.info('Please select at least one seat');
      return;
    }

    try {
      // Call API
      const response = await SearchController.getOfferFinalPrice(
        resultRow,
        selectedSeats,
      );

      if (response?.data && response.data) {
        dispatch(setFlightOffersPricing(response.data ? response.data[0] : []));
      } else {
        // Handle the case where the response is not as expected
        console.error('Unexpected response structure:', response);
        return [];
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      return [];
    }

    if (returnSeatMapResult?.length > 0) {
      if (returnSelectedSeats && returnSelectedSeats.length === 0) {
        toast.info('Please select return least one seat');
        return;
      }
      try {
        // Call API
        const response = await SearchController.getOfferFinalPrice(
          resultRowReturn,
          returnSelectedSeats,
        );

        if (response?.data && response.data) {
          dispatch(
            setReturnFlightOffersPricing(response.data ? response.data[0] : []),
          );
        } else {
          // Handle the case where the response is not as expected
          console.error('Unexpected response structure:', response);
          return [];
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
        return [];
      }
    }
    setChooseAddOnsArrow((prevState) => !prevState);
  };

  useEffect(() => {
    const storedResultRow = localStorage.getItem('resultRow');

    if (storedResultRow) {
      dispatch(setResultRow(JSON.parse(storedResultRow)));
    }

    if (flightOffersPricing && flightOffersPricing.length > 0) {
      dispatch(setResultRow(flightOffersPricing));
    }
  }, [flightOffersPricing]);

  const toggleCancellationUp = () => {
    setCancellationArrowUp((prevState) => !prevState);
  };
  const toggleDateChangePolicyUp = () => {
    setSateChangePolicyArrowUp((prevState) => !prevState);
  };

  const policyData: PolicyContainerType = {
    title: 'Cancellation refund policy',
    policies: [
      {
        startDate: 'Now',
        endDate: '31 Dec',
        amount: '₹800',
        color: 'green-400',
      },
      {
        startDate: '09:05',
        endDate: '03 Jan',
        amount: '₹693',
        color: 'yellow-300',
      },
      {
        startDate: '06:05',
        endDate: '03 Jan, 09:05',
        amount: '₹0',
        color: 'rose-500',
      },
    ],
    arrowUp: cancellationArrowUp,
    toggleUpDown: toggleCancellationUp,
  };

  const dateChangePolicyData: PolicyContainerType = {
    title: 'Date change policy',
    policies: [
      {
        startDate: 'Now',
        endDate: '31 Dec',
        amount: '₹3,150 + Fare Difference',
        color: 'green-400',
      },
      {
        startDate: '06:05',
        endDate: '03 Jan',
        amount: '₹3,507 + Fare Difference',
        color: 'yellow-300',
      },
      {
        startDate: '06:05',
        endDate: '03 Jan, 09:05',
        amount: 'Non changeable',
        color: 'rose-500',
      },
    ],
    arrowUp: dateChangePolicyArrowUp,
    toggleUpDown: toggleDateChangePolicyUp,
  };

  const itinerary = resultRow.itineraries ? resultRow.itineraries[0] : null;

  const segment = resultRowReturn?.itineraries
    ? resultRowReturn?.itineraries?.[1]?.segments[0]
    : null;

  let segmentTo = null;
  let itineraryTo = null;

  const hasFees = resultRow?.price?.fees?.some(
    (fee: Fee) => parseFloat(fee.amount) > 0,
  );

  return (
    <div className="relative box-border flex w-full flex-col items-start justify-start gap-[40px] overflow-hidden bg-white px-0 pb-10 pt-0 leading-[normal] tracking-[normal] mq750:gap-[20px]">
      <TopHeader />
      <main className="box-border flex max-w-full flex-row items-start justify-center self-stretch px-5 py-0">
        {!itinerary ? (
          <Loading />
        ) : (
          <>
            <section className="flex w-[1240px] max-w-full flex-row items-start justify-start gap-[24px] text-left font-kanit text-5xl text-blue-2">
              <div className="box-border flex max-w-[calc(100%_-_319px)] flex-1 flex-col items-start justify-start gap-8 py-3 pl-0 pr-[11px] mq1050:max-w-full mq450:gap-[26px]">
                <>
                  <div className="flex max-w-full flex-row flex-wrap items-start justify-start gap-[4px] self-stretch">
                    <div className="box-border flex min-w-[573px] max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-1.5 mq750:min-w-full">
                      <h3 className="relative m-0 inline-block h-[15px] self-stretch font-inherit text-inherit font-medium leading-[110.3%] mq450:text-lgi mq450:leading-[21px]">
                        1. Review your itinerary
                      </h3>
                    </div>
                    <img
                      className="relative h-6 w-6 cursor-pointer"
                      alt=""
                      src={
                        reviewItineraryArrowUp
                          ? 'arrowdown-grey.svg'
                          : 'rightArrowdown.png'
                      }
                      onClick={toggleReviewItineraryArrowUp}
                    />
                  </div>
                  {reviewItineraryArrowUp && (
                    <>
                      <div className="box-border flex max-w-full flex-col items-start justify-start gap-[40px] self-stretch px-0 pb-3 pt-0 text-xl mq450:gap-[20px]">
                        <div className="flex max-w-full flex-col items-start justify-start self-stretch">
                          <div className="flex flex-row items-start justify-start self-stretch overflow-hidden rounded-b-none rounded-t-3xs px-10 py-[18px] [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca]">
                            <b className="relative inline-block min-w-[95px] leading-[110.3%] mq450:text-base mq450:leading-[18px]">
                              Departure
                            </b>
                          </div>

                          <div className="box-border flex max-w-full flex-col items-start justify-start gap-5 self-stretch rounded-b-3xs rounded-t-none border-b-[1px] border-l-[1px] border-r-[1px] border-solid border-grey-6 px-[19px] pb-[18px] pt-5">
                            {itinerary?.segments.map(
                              (segment: any, index: any) => (
                                <>
                                  <ReviewItineraryFromTo
                                    airlineLogo={
                                      segment.logo || 'airlineNotAvailalble.png'
                                    }
                                    airlineName={segment.businessName || ''}
                                    airlineCode={`${segment.carrierCode} - ${segment.number}`}
                                    airlineNumber={
                                      resultRow.airlinesFrom.businessName
                                        ? `${ConvertCapitalFirstLetter(resultRow.airlinesFrom.businessName)} - ${segment.aircraft.code || ''}`
                                        : ''
                                    }
                                    departureCity={ConvertCapitalFirstLetter(
                                      segment.departure.name,
                                    )}
                                    departureTime={ExtractTimeFromISO(
                                      segment.departure.at,
                                    )}
                                    departureDate={
                                      segment.departure.at
                                        ? FormatDateReturnDateAndDay(
                                            segment.departure.at,
                                          )
                                        : ''
                                    }
                                    departureAirport={
                                      ConvertCapitalFirstLetter(
                                        segment.departure.address,
                                      ) || ''
                                    }
                                    departureTerminal={
                                      segment.departure.terminal || ''
                                    }
                                    arrivalCity={ConvertCapitalFirstLetter(
                                      segment.arrival.name,
                                    )}
                                    arrivalTime={ExtractTimeFromISO(
                                      segment.arrival.at,
                                    )}
                                    arrivalDate={
                                      segment.arrival.at
                                        ? FormatDateReturnDateAndDay(
                                            segment.arrival.at,
                                          )
                                        : ''
                                    }
                                    arrivalAirport={
                                      ConvertCapitalFirstLetter(
                                        segment.arrival.address,
                                      ) || ''
                                    }
                                    duration={FormatDuration(segment.duration)}
                                    arrivalTerminal={
                                      segment.arrival.terminal || ''
                                    }
                                    flightType={
                                      resultRow.itineraries[0].segments.length >
                                      0
                                        ? resultRow.itineraries[0].segments
                                            .length -
                                          1 +
                                          ' Stop'
                                        : 'Non-stop'
                                    }
                                    includedCheckedBags={
                                      resultRow.travelerPricings[0]
                                        .fareDetailsBySegment[index]
                                        ?.includedCheckedBags.weight
                                        ? resultRow.travelerPricings[0]
                                            .fareDetailsBySegment[index]
                                            .includedCheckedBags.weight +
                                          ' ' +
                                          resultRow.travelerPricings[0]
                                            .fareDetailsBySegment[index]
                                            .includedCheckedBags.weightUnit
                                        : 'quantity ' +
                                          resultRow.travelerPricings[0]
                                            .fareDetailsBySegment[index]
                                            .includedCheckedBags.quantity
                                    }
                                    price={''}
                                  />

                                  {hasFees ? (
                                    <>
                                      <div className="flex flex-row items-start justify-start px-0 pb-1.5 pt-0 text-5xl">
                                        <h3 className="relative m-0 font-inherit text-inherit font-medium leading-[110.3%] mq450:text-lgi mq450:leading-[21px]">
                                          Select your fare
                                        </h3>
                                      </div>
                                      <div className="flex flex-row flex-wrap items-start justify-start gap-[30px] self-stretch px-0 pb-1.5 pt-0">
                                        {resultRow.travelerPricings &&
                                        resultRow.travelerPricings?.[0]
                                          ?.fareDetailsBySegment?.[0]
                                          ?.includedCheckedBags
                                          ? resultRow.travelerPricings[0].fareDetailsBySegment.map(
                                              (fareDetail: any, index: any) => (
                                                <FareDetails
                                                  key={index}
                                                  fareDetails={fareDetail}
                                                  fareType={fareDetail.cabin}
                                                  fareAmount={`Fare Basis: ${fareDetail.fareBasis}`}
                                                  description={
                                                    fareDetail.brandedFare
                                                      ? `Branded Fare: ${fareDetail.brandedFare}`
                                                      : ''
                                                  }
                                                  iconSrc="/heroiconsoutlinecheck.svg"
                                                  onFareSelect={
                                                    handleDepartureFareSelection
                                                  }
                                                  isChecked={
                                                    selectedDepartureFare ===
                                                    fareDetail
                                                  }
                                                />
                                              ),
                                            )
                                          : ''}
                                      </div>

                                      <div className="box-border flex w-[846px] max-w-full flex-row flex-wrap items-start justify-start gap-[57px_52px] py-0 pl-0 pr-2.5 text-base text-grey-3 mq450:gap-[26px]">
                                        <div className="relative inline-block min-w-[98px] flex-1 font-light leading-[18px]">
                                          Cabin/person:{' '}
                                          {resultRow.travelerPricings?.[0]
                                            ?.fareDetailsBySegment?.[0]
                                            ?.includedCheckedBags
                                            ? resultRow.travelerPricings?.[0]
                                                ?.fareDetailsBySegment?.[0]
                                                ?.includedCheckedBags.weight +
                                              ConvertSmall(
                                                resultRow.travelerPricings?.[0]
                                                  ?.fareDetailsBySegment?.[0]
                                                  ?.includedCheckedBags
                                                  .weightUnit,
                                              )
                                            : ''}
                                        </div>
                                      </div>
                                    </>
                                  ) : (
                                    ''
                                  )}

                                  <PolicyContainer
                                    title={policyData.title}
                                    policies={policyData.policies}
                                  />

                                  <PolicyContainer
                                    title={dateChangePolicyData.title}
                                    policies={dateChangePolicyData.policies}
                                  />

                                  <div
                                    className={`flex max-w-[869px] flex-col self-stretch rounded-3xs border border-solid border-zinc-200 bg-white p-5 leading-[110.3%]`}
                                  >
                                    <div className="max-md:flex-wrap max-md:max-w-full flex gap-5 text-xl font-medium text-sky-950">
                                      <div className="flex-auto">Amenities</div>
                                      {/* <img
                                        loading="lazy"
                                        src="/arrowdown-grey.svg"
                                        className="max-md:w-5 aspect-square w-6 shrink-0"
                                      /> */}
                                    </div>
                                    <div className="max-md:flex-wrap mt-6 flex gap-20 text-base text-gray-500 mq750:gap-5 mq450:gap-2">
                                      <div className="flex flex-row flex-wrap items-start justify-start gap-[30px] self-stretch px-0 pb-1.5 pt-0">
                                        {resultRow.travelerPricings?.[0]
                                          ?.fareDetailsBySegment?.[0]
                                          ?.amenities ? (
                                          resultRow.travelerPricings[0].fareDetailsBySegment[0].amenities.map(
                                            (amenity: any, index: any) => (
                                              <div key={index}>
                                                <Amenities
                                                  description={
                                                    amenity.description
                                                  }
                                                  isChargeable={
                                                    amenity.isChargeable ==
                                                    false
                                                      ? 'Free'
                                                      : 'Paid'
                                                  }
                                                  amenityType={
                                                    amenity.amenityType
                                                  }
                                                />
                                              </div>
                                            ),
                                          )
                                        ) : (
                                          <p>No amenities available</p>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </>
                              ),
                            )}

                            {/* {hasFees ? (
                              <>
                                <div className="box-border flex h-1.5 max-w-full flex-row items-start justify-start self-stretch px-0 pb-[5px] pt-0">
                                  <div className="relative box-border max-w-full flex-1 self-stretch border-t-[1px] border-solid border-grey-6" />
                                </div>
                                <div className="flex flex-row items-start justify-start px-0 pb-1.5 pt-0 text-5xl">
                                  <h3 className="relative m-0 font-inherit text-inherit font-medium leading-[110.3%] mq450:text-lgi mq450:leading-[21px]">
                                    Select your fare
                                  </h3>
                                </div>
                                <div className="flex flex-row flex-wrap items-start justify-start gap-[30px] self-stretch px-0 pb-1.5 pt-0">
                                  {hasFees &&
                                    resultRow.price.fees.map(
                                      (fee: any, index: string) => (
                                        <div key={index}>
                                          <FareDetails
                                            fareAmount={fee.amount}
                                            fareType={fee.type}
                                            description=""
                                            iconSrc="/heroiconsoutlinecheck.svg"
                                          />
                                        </div>
                                      ),
                                    )}
                                </div>
                              </>
                            ) : (
                              ''
                            )} */}
                          </div>
                        </div>
                        {returnDate && (
                          <div className="flex max-w-full flex-col items-start justify-start self-stretch">
                            <div className="flex flex-row items-start justify-start self-stretch overflow-hidden rounded-b-none rounded-t-3xs px-10 py-[18px] [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca]">
                              <b className="relative inline-block min-w-[95px] leading-[110.3%] mq450:text-base mq450:leading-[18px]">
                                Return
                              </b>
                            </div>
                            <div className="box-border flex max-w-full flex-col items-start justify-start gap-[14px] self-stretch rounded-b-3xs rounded-t-none border-b-[1px] border-l-[1px] border-r-[1px] border-solid border-grey-6 p-5">
                              <ReviewItineraryFromTo
                                airlineLogo={
                                  resultRowReturn?.airlinesFrom.logo ||
                                  'airlineNotAvailalble.png'
                                }
                                airlineName={
                                  resultRowReturn.airlinesFrom.businessName ||
                                  null
                                }
                                airlineCode={`${segment.carrierCode} - ${segment.number}`}
                                airlineNumber={
                                  resultRowReturn.airlinesFrom.businessName
                                    ? `${ConvertCapitalFirstLetter(resultRow.airlinesFrom.businessName)} - ${segment.aircraft.code || ''}`
                                    : ''
                                }
                                departureCity={ConvertCapitalFirstLetter(
                                  segment?.departure?.name,
                                )}
                                departureTime={ExtractTimeFromISO(
                                  segment?.departure?.at,
                                )}
                                departureDate={
                                  segment.departure.at
                                    ? FormatDateReturnDateAndDay(
                                        segment?.departure?.at,
                                      )
                                    : ''
                                }
                                departureAirport={
                                  ConvertCapitalFirstLetter(
                                    resultRowReturn.airportAddressFrom
                                      .departure_airport_address,
                                  ) || ''
                                }
                                departureTerminal={
                                  segment.departure.terminal || ''
                                }
                                arrivalCity={ConvertCapitalFirstLetter(
                                  segment?.arrival?.name,
                                )}
                                arrivalTime={ExtractTimeFromISO(
                                  segment?.arrival?.at,
                                )}
                                arrivalDate={
                                  segment?.arrival?.at
                                    ? FormatDateReturnDateAndDay(
                                        segment?.arrival?.at,
                                      )
                                    : ''
                                }
                                arrivalAirport={
                                  ConvertCapitalFirstLetter(
                                    resultRowReturn?.airportAddressFrom
                                      ?.arrival_airport_address,
                                  ) || ''
                                }
                                duration={FormatDuration(itinerary.duration)}
                                // flightType={segment.numberOfStops ? `${segment.numberOfStops} Stop` : "Non-stop"}
                                flightType={
                                  resultRowReturn.itineraries[1].segments
                                    .length > 0
                                    ? resultRowReturn.itineraries[1].segments
                                        .length -
                                      1 +
                                      ' Stop'
                                    : 'Non-stop'
                                }
                                arrivalTerminal={
                                  segment.departure.terminal || ''
                                }
                                price={''}
                              />

                              {hasFees ? (
                                <>
                                  <div className="flex flex-row items-start justify-start px-0 pb-1.5 pt-0 text-5xl">
                                    <h3 className="relative m-0 font-inherit text-inherit font-medium leading-[110.3%] mq450:text-lgi mq450:leading-[21px]">
                                      Select your fare
                                    </h3>
                                  </div>
                                  <div className="flex flex-row flex-wrap items-start justify-start gap-[30px] self-stretch px-0 pb-1.5 pt-0">
                                    {resultRow.travelerPricings?.[0]
                                      ?.fareDetailsBySegment?.[0]
                                      ?.includedCheckedBags
                                      ? resultRow.travelerPricings[0].fareDetailsBySegment.map(
                                          (fareDetail: any, index: any) => (
                                            <FareDetails
                                              key={index}
                                              fareType={fareDetail.cabin}
                                              fareAmount={`Fare Basis: ${fareDetail.fareBasis}`}
                                              description={
                                                fareDetail.brandedFare
                                                  ? `Branded Fare: ${fareDetail.brandedFare}`
                                                  : ''
                                              }
                                              iconSrc="/heroiconsoutlinecheck.svg"
                                              onFareSelect={
                                                handleArrivalFareSelection
                                              }
                                              isChecked={
                                                selectedArrivalFare ===
                                                fareDetail
                                              }
                                              fareDetails={fareDetail}
                                            />
                                          ),
                                        )
                                      : ''}
                                  </div>

                                  <div className="box-border flex w-[846px] max-w-full flex-row flex-wrap items-start justify-start gap-[57px_52px] py-0 pl-0 pr-2.5 text-base text-grey-3 mq450:gap-[26px]">
                                    <div className="relative inline-block min-w-[98px] flex-1 font-light leading-[18px]">
                                      Cabin/person:{' '}
                                      {resultRow.travelerPricings?.[0]
                                        ?.fareDetailsBySegment?.[0]
                                        ?.includedCheckedBags
                                        ? resultRow.travelerPricings?.[0]
                                            ?.fareDetailsBySegment?.[0]
                                            ?.includedCheckedBags.weight +
                                          ConvertSmall(
                                            resultRow.travelerPricings?.[0]
                                              ?.fareDetailsBySegment?.[0]
                                              ?.includedCheckedBags.weightUnit,
                                          )
                                        : ''}
                                    </div>
                                  </div>
                                </>
                              ) : (
                                ''
                              )}

                              <PolicyContainer
                                title={policyData.title}
                                policies={policyData.policies}
                              />

                              <PolicyContainer
                                title={dateChangePolicyData.title}
                                policies={dateChangePolicyData.policies}
                              />

                              {/*   
                              <div
                                className={`flex max-w-[869px] flex-col self-stretch rounded-3xs border border-solid border-zinc-200 bg-white p-5 leading-[110.3%]`}
                              >
                                <div className="max-md:flex-wrap max-md:max-w-full flex gap-5 text-xl font-medium text-sky-950">
                                  <div className="flex-auto">Amenities</div>
                                  <img
                                    loading="lazy"
                                    src="/arrowdown-grey.svg"
                                    className="max-md:w-5 aspect-square w-6 shrink-0"
                                  />
                                </div>
                                <div className="max-md:flex-wrap mt-6 flex gap-20 text-base text-gray-500 mq750:gap-5 mq450:gap-2">
                                  <div className="flex flex-row flex-wrap items-start justify-start gap-[30px] self-stretch px-0 pb-1.5 pt-0">
                                    {resultRow.travelerPricings?.[0]
                                      ?.fareDetailsBySegment?.[0]?.amenities ? (
                                      resultRow.travelerPricings[0].fareDetailsBySegment[0].amenities.map(
                                        (amenity: any, index: any) => (
                                          <div key={index}>
                                            <Amenities
                                              description={amenity.description}
                                              isChargeable={
                                                amenity.isChargeable == false
                                                  ? 'Free'
                                                  : 'Paid'
                                              }
                                              amenityType={amenity.amenityType}
                                            />
                                          </div>
                                        ),
                                      )
                                    ) : (
                                      <p>No amenities available</p>
                                    )}
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        )}
                        <SecureYourTrip />
                        <ReviewItineraryContinueButton
                          buttonLabel="Continue"
                          buttonColor="bg-blue-2"
                          buttonWidth="w-[190px]"
                          onClick={toggleReviewItineraryArrowUp}
                        />
                      </div>
                    </>
                  )}
                </>

                <>
                  {/* <FlightCards2 /> */}
                  <div className="flex max-w-full flex-row flex-wrap items-start justify-start gap-[4px] self-stretch">
                    <div className="box-border flex min-w-[573px] max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-1.5 mq750:min-w-full">
                      <h3 className="relative m-0 inline-block h-[15px] self-stretch font-inherit text-inherit font-medium leading-[110.3%] mq450:text-lgi mq450:leading-[21px]">
                        2. Choose add-ons
                      </h3>
                    </div>
                    <img
                      className="relative h-6 w-6 cursor-pointer"
                      alt=""
                      src={
                        chooseAddOnsArrow
                          ? 'arrowdown-grey.svg'
                          : 'rightArrowdown.png'
                      }
                      onClick={toggleChooseAddOnsArrow}
                    />
                  </div>
                  {chooseAddOnsArrow && (
                    <>
                      <div className="flex max-w-full flex-col items-start justify-start self-stretch">
                        <div className="flex flex-row items-start justify-start self-stretch overflow-hidden rounded-b-none rounded-t-3xs px-10 py-[18px] [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca]">
                          <b className="relative inline-block min-w-[95px] text-left font-kanit text-xl leading-[110.3%] text-blue-2 mq450:text-base mq450:leading-[18px]">
                            Departure
                          </b>
                        </div>
                        <div className="box-border flex max-w-full flex-col items-start justify-start gap-[45.5px] self-stretch rounded-b-3xs rounded-t-none border-b-[1px] border-l-[1px] border-r-[1px] border-solid border-grey-6 px-[19px] py-5 mq450:gap-[23px_45.5px]">
                          {itinerary?.segments.map(
                            (segment: any, index: any) => (
                              <>
                                <ReviewItineraryFromTo
                                  airlineLogo={
                                    segment.logo || 'airlineNotAvailalble.png'
                                  }
                                  airlineName={segment.businessName || ''}
                                  airlineCode={`${segment.carrierCode} - ${segment.number}`}
                                  airlineNumber={
                                    resultRow.airlinesFrom.businessName
                                      ? `${ConvertCapitalFirstLetter(resultRow.airlinesFrom.businessName)} - ${segment.aircraft.code || ''}`
                                      : ''
                                  }
                                  departureCity={ConvertCapitalFirstLetter(
                                    segment.departure.name,
                                  )}
                                  departureTime={ExtractTimeFromISO(
                                    segment.departure.at,
                                  )}
                                  departureDate={
                                    segment.departure.at
                                      ? FormatDateReturnDateAndDay(
                                          segment.departure.at,
                                        )
                                      : ''
                                  }
                                  departureAirport={
                                    ConvertCapitalFirstLetter(
                                      segment.departure.address,
                                    ) || ''
                                  }
                                  departureTerminal={
                                    segment.departure.terminal || ''
                                  }
                                  arrivalCity={ConvertCapitalFirstLetter(
                                    segment.arrival.name,
                                  )}
                                  arrivalTime={ExtractTimeFromISO(
                                    segment.arrival.at,
                                  )}
                                  arrivalDate={
                                    segment.arrival.at
                                      ? FormatDateReturnDateAndDay(
                                          segment.arrival.at,
                                        )
                                      : ''
                                  }
                                  arrivalAirport={
                                    ConvertCapitalFirstLetter(
                                      segment.arrival.address,
                                    ) || ''
                                  }
                                  duration={FormatDuration(segment.duration)}
                                  arrivalTerminal={
                                    segment.arrival.terminal || ''
                                  }
                                  flightType={
                                    resultRow.itineraries[0].segments.length > 0
                                      ? resultRow.itineraries[0].segments
                                          .length -
                                        1 +
                                        ' Stop'
                                      : 'Non-stop'
                                  }
                                  includedCheckedBags={
                                    resultRow.travelerPricings[0]
                                      .fareDetailsBySegment[index]
                                      ?.includedCheckedBags.weight
                                      ? resultRow.travelerPricings[0]
                                          .fareDetailsBySegment[index]
                                          .includedCheckedBags.weight +
                                        ' ' +
                                        resultRow.travelerPricings[0]
                                          .fareDetailsBySegment[index]
                                          .includedCheckedBags.weightUnit
                                      : 'quantity ' +
                                        resultRow.travelerPricings[0]
                                          .fareDetailsBySegment[index]
                                          .includedCheckedBags.quantity
                                  }
                                  price={''}
                                />
                              </>
                            ),
                          )}
                          <Seatmaps />
                          {/* {resultRow.travelerPricings?.[0]?.fareDetailsBySegment?.[0]?.amenities ? (
                            <div className={`self-stretch flex flex-col p-5 bg-white rounded-3xs border border-solid border-zinc-200 leading-[110.3%] max-w-[869px] `}>
                              <div className="flex gap-5 text-xl font-medium text-sky-950 max-md:flex-wrap max-md:max-w-full">
                                <div className="flex-auto">Amenities</div>
                                <img
                                  className="h-6 w-6 relative cursor-pointer"
                                  alt=""
                                  src={reviewItineraryArrowUp ? "ararrow_up.svg" : "arrowdown-grey.svg"}
                                  onClick={toggleAmenitiesArrowUp}
                                />
                              </div>
                              {amenitiesArrowUp && (
                                <div className="flex mq450:gap-2 mq750:gap-5 gap-20 mt-6 text-base text-gray-500 max-md:flex-wrap">

                                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-1.5 gap-[30px]">
                                    {resultRow.travelerPricings[0].fareDetailsBySegment[0].amenities.map((amenity: any, index: any) => (
                                      <div key={index}>
                                        <Amenities
                                          description={amenity.description}
                                          isChargeable={(amenity.isChargeable == false) ? "Free" : "Paid"}
                                          amenityType={amenity.amenityType}
                                        />

                                      </div>
                                    ))
                                    }
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : (
                            ""
                          )} */}
                        </div>
                      </div>

                      {returnDate && (
                        <div className="flex max-w-full flex-col items-start justify-start self-stretch">
                          <div className="flex flex-row items-start justify-start self-stretch overflow-hidden rounded-b-none rounded-t-3xs px-10 py-[18px] [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca]">
                            <b className="relative inline-block min-w-[95px] text-left font-kanit text-xl leading-[110.3%] text-blue-2 mq450:text-base mq450:leading-[18px]">
                              Return
                            </b>
                          </div>

                          <div className="box-border flex max-w-full flex-col items-start justify-start gap-[14px] self-stretch rounded-b-3xs rounded-t-none border-b-[1px] border-l-[1px] border-r-[1px] border-solid border-grey-6 p-5">
                            <ReviewItineraryFromTo
                              airlineLogo={
                                resultRowReturn?.airlinesFrom.logo ||
                                'airlineNotAvailalble.png'
                              }
                              airlineName={
                                resultRowReturn.airlinesFrom.businessName ||
                                null
                              }
                              airlineCode={`${segment.carrierCode} - ${segment.number}`}
                              airlineNumber={
                                resultRowReturn.airlinesFrom.businessName
                                  ? `${ConvertCapitalFirstLetter(resultRow.airlinesFrom.businessName)} - ${segment.aircraft.code || ''}`
                                  : ''
                              }
                              departureCity={ConvertCapitalFirstLetter(
                                segment?.departure?.name,
                              )}
                              departureTime={ExtractTimeFromISO(
                                segment?.departure?.at,
                              )}
                              departureDate={
                                segment.departure.at
                                  ? FormatDateReturnDateAndDay(
                                      segment?.departure?.at,
                                    )
                                  : ''
                              }
                              departureAirport={
                                ConvertCapitalFirstLetter(
                                  resultRowReturn.airportAddressFrom
                                    .departure_airport_address,
                                ) || ''
                              }
                              departureTerminal={
                                segment.departure.terminal || ''
                              }
                              arrivalCity={ConvertCapitalFirstLetter(
                                segment?.arrival?.name,
                              )}
                              arrivalTime={ExtractTimeFromISO(
                                segment?.arrival?.at,
                              )}
                              arrivalDate={
                                segment?.arrival?.at
                                  ? FormatDateReturnDateAndDay(
                                      segment?.arrival?.at,
                                    )
                                  : ''
                              }
                              arrivalAirport={
                                ConvertCapitalFirstLetter(
                                  resultRowReturn?.airportAddressFrom
                                    ?.arrival_airport_address,
                                ) || ''
                              }
                              duration={FormatDuration(itinerary.duration)}
                              // flightType={segment.numberOfStops ? `${segment.numberOfStops} Stop` : "Non-stop"}
                              flightType={
                                resultRowReturn.itineraries[1].segments.length >
                                0
                                  ? resultRowReturn.itineraries[1].segments
                                      .length -
                                    1 +
                                    ' Stop'
                                  : 'Non-stop'
                              }
                              arrivalTerminal={segment.departure.terminal || ''}
                              price={''}
                            />
                          </div>

                          <div className="box-border flex max-w-full flex-col items-start justify-start gap-[45.5px] self-stretch rounded-b-3xs rounded-t-none border-b-[1px] border-l-[1px] border-r-[1px] border-solid border-grey-6 px-[19px] py-5 mq450:gap-[23px_45.5px]">
                            <ReturnSeatMap />
                            {/* {resultRow.travelerPricings?.[0]?.fareDetailsBySegment?.[0]?.amenities ? (
                            <div className={`self-stretch flex flex-col p-5 bg-white rounded-3xs border border-solid border-zinc-200 leading-[110.3%] max-w-[869px] `}>
                              <div className="flex gap-5 text-xl font-medium text-sky-950 max-md:flex-wrap max-md:max-w-full">
                                <div className="flex-auto">Amenities</div>
                                <img
                                  className="h-6 w-6 relative cursor-pointer"
                                  alt=""
                                  src={reviewItineraryArrowUp ? "ararrow_up.svg" : "arrowdown-grey.svg"}
                                  onClick={toggleAmenitiesArrowUp}
                                />
                              </div>
                              {amenitiesArrowUp && (
                                <div className="flex mq450:gap-2 mq750:gap-5 gap-20 mt-6 text-base text-gray-500 max-md:flex-wrap">

                                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-1.5 gap-[30px]">
                                    {resultRow.travelerPricings[0].fareDetailsBySegment[0].amenities.map((amenity: any, index: any) => (
                                      <div key={index}>
                                        <Amenities
                                          description={amenity.description}
                                          isChargeable={(amenity.isChargeable == false) ? "Free" : "Paid"}
                                          amenityType={amenity.amenityType}
                                        />

                                      </div>
                                    ))
                                    }
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : (
                            ""
                          )} */}
                          </div>
                        </div>
                      )}
                      <ReviewItineraryContinueButton
                        buttonLabel="Continue"
                        buttonColor="bg-blue-2"
                        buttonWidth="w-[190px]"
                        onClick={toggleChooseAddOnsArrow}
                      />
                    </>
                  )}
                </>

                {/* <AddTravelerDetails /> */}
                <SavedTravellers onClickToggleHandle={() => { /* handle toggle */ }} />
                <CreateOrder />
              </div>

              <div className="flex w-[295px] flex-col items-start justify-start gap-[40px] text-xl text-grey-3 mq1050:hidden mq450:gap-[20px]">
                <TotalPrice />
                <ApplyCoupon />
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default ReviewYourItinerary;
