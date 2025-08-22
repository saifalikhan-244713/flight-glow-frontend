import type { NextPage } from 'next';
import TopHeader from '@/components/top-header';
import FooterComponent from '@/components/footerComponent';
import FrameComponent24 from '@/components/frame-component24';
import FlightOrderItenery from '@/components/FlightOrderItenery';
import ContactDetail from '@/components/contact-detail';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/slices/store';
import { ConvertCapitalFirstLetter } from '@/utils/stringUtils';
import { formatDate } from '@/utils/dateUtils';
import ReviewItineraryFromTo from '@/components/ReviewItineraryFromTo';

const ViewFlightDetailsPayment: NextPage = () => {
  interface Contact {
    addresseeName: {
      firstName: string;
    };
    address: {
      lines: string[];
      postalCode: string;
      countryCode: string;
      cityName: string;
    };
    purpose: string;
    phones: {
      deviceType: string;
      countryCallingCode: string;
      number: string;
    }[];
    companyName: string;
    emailAddress: string;
  }

  interface Traveler {
    id: string;
    name: {
      firstName: string;
      lastName: string;
    };
    contact: {
      purpose: string;
      phones: {
        deviceType: string;
        countryCallingCode: string;
        number: string;
      }[];
      emailAddress: string;
    };
  }

  interface Segment {
    departure: {
      iataCode: string;
      terminal: string;
      at: string;
    };
    arrival: {
      iataCode: string;
      terminal: string;
      at: string;
    };
    carrierCode: string;
    number: string;
    aircraft: {
      code: string;
    };
    operating?: {
      carrierCode: string;
    };
    duration: string;
    bookingStatus: string;
    segmentType: string;
    isFlown: boolean;
    id: string;
    numberOfStops: number;
    co2Emissions: {
      weight: number;
      weightUnit: string;
      cabin: string;
    }[];
  }

  interface Itinerary {
    segments: Segment[];
  }

  interface Price {
    currency: string;
    total: string;
    base: string;
    grandTotal: string;
  }

  interface Tax {
    amount: string;
    code: string;
  }

  interface FareDetailsBySegment {
    segmentId: string;
    cabin: string;
    fareBasis: string;
    class: string;
    includedCheckedBags: {
      quantity: number;
    };
    mealServices?: {
      label: string;
    }[];
  }

  interface TravelerPricing {
    travelerId: string;
    travelerType: string;
    price: {
      currency: string;
      total: string;
      base: string;
      taxes: Tax[];
    };
    fareDetailsBySegment: FareDetailsBySegment[];
  }

  interface FlightOffer {
    type: string;
    id: string;
    source: string;
    nonHomogeneous: boolean;
    lastTicketingDate: string;
    itineraries: Itinerary[];
    price: Price;
    pricingOptions: {
      fareType: string[];
    };
    validatingAirlineCodes: string[];
    travelerPricings: TravelerPricing[];
    airlinesFrom: {
      logo: string;
      businessName: string;
    };
    airportAddressFrom: {
      departure_airport_address: string;
      arrival_airport_address: string;
    };
  }

  interface AssociatedRecord {
    reference: string;
    originSystemCode: string;
    flightOfferId: string;
    creationDate?: string;
  }

  interface Remark {
    subType: string;
    text: string;
    flightOfferIds: string[];
    airlineCode?: string;
  }

  interface TicketingAgreement {
    option: string;
    dateTime: string;
  }

  interface ResultData {
    type: string;
    id: string;
    queuingOfficeId: string;
    associatedRecords: AssociatedRecord[];
    flightOffers: FlightOffer[];
    travelers: Traveler[];
    remarks: {
      general: Remark[];
      airline: Remark[];
    };
    ticketingAgreement: TicketingAgreement;
    automatedProcess: any[];
    contacts: Contact[];
  }

  const { orderDetail } = useSelector(
    (state: RootState) => state.orderDetails,
  ) as {
    orderDetail: ResultData[];
  };

  if (!orderDetail || orderDetail.length === 0) {
    return <div>No flight offers available.</div>;
  }
  // Ensure orderDetail contains at least one item before accessing it
  const contact = orderDetail.length > 0 ? orderDetail[0].contacts[0] : null;

  const name = contact?.addresseeName.firstName ?? 'N/A';
  const phone = `${contact?.phones[0].countryCallingCode ?? ''} ${contact?.phones[0].number ?? ''}`;
  const email = contact?.emailAddress ?? 'N/A';
  const creationDate =
    orderDetail.length > 0
      ? orderDetail[0].associatedRecords[1].creationDate
      : '';

  const itinerary = orderDetail[0].flightOffers[0].itineraries
    ? orderDetail[0].flightOffers[0].itineraries[0]
    : null;
  const segment = itinerary ? itinerary.segments[0] : null;

  // Handle potential null values for segment
  const airlineLogo =
    orderDetail[0].flightOffers[0].airlinesFrom.logo ||
    'airlineNotAvailalble.png';
  const airlineName =
    orderDetail[0].flightOffers[0].airlinesFrom.businessName || '';
  const airlineCode = segment
    ? `${segment.carrierCode} - ${segment.number}`
    : 'N/A';
  const airlineNumber = orderDetail[0].flightOffers[0].airlinesFrom.businessName
    ? `${ConvertCapitalFirstLetter(orderDetail[0].flightOffers[0].airlinesFrom.businessName)} - ${segment?.aircraft.code || ''}`
    : '';
  const departureCity = ConvertCapitalFirstLetter(
    orderDetail[0].flightOffers[0].airportAddressFrom.departure_airport_address
      .split(',')[1]
      .trim(),
  );
  const departureTime = segment
    ? segment.departure.at.split('T')[1].slice(0, 5)
    : '';
  const departureDate = segment ? formatDate(segment.departure.at) : '';
  const departureAirport =
    orderDetail[0].flightOffers[0].airportAddressFrom
      .departure_airport_address || '';
  const terminal = segment?.departure.terminal || '';
  const arrivalCity = ConvertCapitalFirstLetter(
    orderDetail[0].flightOffers[0].airportAddressFrom.arrival_airport_address
      .split(',')[1]
      .trim(),
  );
  const arrivalTime = segment
    ? segment.arrival.at.split('T')[1].slice(0, 5)
    : '';
  const arrivalDate = segment ? formatDate(segment.arrival.at) : '';
  const arrivalAirport =
    orderDetail[0].flightOffers[0].airportAddressFrom.arrival_airport_address ||
    '';
  const duration = segment
    ? segment.duration.replace('PT', '').toLowerCase()
    : '';
  const flightType =
    segment && segment.numberOfStops
      ? `${segment.numberOfStops} Stop`
      : 'Non-stop';

  return (
    <div className="relative flex w-full flex-col items-start justify-start gap-[60px] overflow-hidden bg-white tracking-[normal] mq750:gap-[30px_60px]">
      <TopHeader />
      <FrameComponent24 bookedBy={name} date={formatDate(creationDate)} />
      <section className="box-border flex max-w-full flex-row items-start justify-center self-stretch px-5 py-0 text-left font-kanit text-xl text-blue-2">
        <div className="box-border flex w-[1242px] max-w-full shrink-0 flex-col items-end justify-start gap-[33px] rounded-3xs border-[1px] border-solid border-grey-6 bg-white mq750:gap-[16px_33px]">
          <div className="box-border flex max-w-full flex-row items-start justify-start gap-[10px] overflow-hidden rounded-b-none rounded-t-3xs px-10 py-[18px] [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca] mq1225:flex-wrap">
            <div className="box-border flex max-w-full flex-row items-center justify-start gap-[20px] py-0 pl-0 pr-[514px] mq1050:box-border mq1050:flex-wrap mq1050:pr-[257px] mq450:box-border mq450:pr-5">
              <div className="relative inline-block min-w-[59px] font-medium leading-[110.3%] mq450:text-base mq450:leading-[18px]">
                Rajkot
              </div>
              <img
                className="relative h-[7.4px] w-[78px]"
                alt=""
                src="/arrow-4.svg"
              />
              <div className="relative inline-block h-[13px] mq450:text-base">
                <span className="font-medium">{`Mumbai `}</span>
                <span className="font-light">Wed, 3 Jan</span>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[40px] text-base text-blue mq450:flex-wrap mq450:gap-[40px_20px]">
              <div className="flex h-5 flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative h-5 w-5"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearminuscirlce.svg"
                />
                <div className="relative inline-block min-w-[90px]">
                  Cancellation
                </div>
              </div>
              <div className="flex h-5 flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative h-5 w-5"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlineararrowswaphorizontal.svg"
                />
                <div className="relative inline-block min-w-[99px]">
                  Change Flight
                </div>
              </div>
            </div>
          </div>
          <div className="box-border flex max-w-full flex-row items-start justify-center self-stretch py-0 pl-[22px] pr-5">
            {/* <div className="w-[856px] flex flex-row items-start justify-between gap-[20px] max-w-full mq1050:flex-wrap mq1050:justify-center">
              <div className="w-[76px] flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border text-xs text-grey-4">
                <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
                  <div className="h-10 flex flex-row items-start justify-start py-0 px-2 box-border">
                    <img className="h-10 w-[60px] relative overflow-hidden shrink-0" loading="lazy" alt="" src="/indigo.svg" />
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-[18px] text-sm text-blue-2">
                    <div className="h-[9px] relative inline-block min-w-[40px]">Indigo</div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-[17px]">
                    <div className="h-2 relative font-light inline-block min-w-[42px]">6E-6132</div>
                  </div>
                  <div className="self-stretch rounded-xl flex flex-row items-start justify-start py-[5px] px-1 whitespace-nowrap border-[1px] border-solid border-grey-4">
                    <div className="relative font-light inline-block min-w-[66px]">Airbus A320</div>
                  </div>
                </div>
              </div>
              <div className="w-[163px] flex flex-col items-start justify-start gap-[20px]">
                <div className="relative leading-[110.3%] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[84px] mq450:text-base mq450:leading-[18px]">Rajkot, IN</div>
                <div className="h-[21px] relative text-13xl font-medium inline-block min-w-[73px] whitespace-nowrap mq750:text-7xl mq450:text-lgi">19:20</div>
                <div className=" relative text-base text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[114px]">Wed, 3 Jan 2024</div>
                <div className="self-stretch h-[45px] relative text-sm leading-[18px] font-light text-grey-3 inline-block">Rajkot Greenfield International Airport, Hirasar, Terminal</div>
              </div>
              <div className="h-[118px] w-[250px] flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border text-center text-base text-grey-3">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[14px]">
                  <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                    <div className=" w-[45px] relative font-light inline-block min-w-[45px]">1h 15m</div>
                  </div>
                  <img className="self-stretch h-[30px] relative max-w-full overflow-hidden shrink-0" loading="lazy" alt="" src="/group-1000002555.svg" />
                  <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left">
                    <div className=" relative font-light inline-block min-w-[66px]">Non-stop</div>
                  </div>
                </div>
              </div>
              <div className="w-[163px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                  <div className="relative leading-[110.3%] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[99px] mq450:text-base mq450:leading-[18px]">Mumbai, IN</div>
                  <div className="h-[21px] relative text-13xl font-medium inline-block min-w-[77px] whitespace-nowrap mq750:text-7xl mq450:text-lgi">20:25</div>
                  <div className=" relative text-base text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[114px]">Wed, 3 Jan 2024</div>
                  <div className="self-stretch h-[27px] relative text-sm leading-[18px] font-light text-grey-3 inline-block">Chatrapati Shivaji Airport, Mumbai, Terminal 2</div>
                </div>
              </div>
            </div> */}
            <div className="box-border flex w-full flex-col items-center justify-center gap-[14px] self-stretch">
              <ReviewItineraryFromTo
                airlineLogo={airlineLogo}
                airlineName={airlineName}
                airlineCode={airlineCode}
                airlineNumber={airlineNumber}
                departureCity={departureCity}
                departureTime={departureTime}
                departureDate={departureDate}
                departureAirport={departureAirport}
                departureTerminal={terminal}
                arrivalTerminal={terminal}
                arrivalCity={arrivalCity}
                arrivalTime={arrivalTime}
                arrivalDate={arrivalDate}
                arrivalAirport={arrivalAirport}
                duration={duration}
                flightType={flightType}
                price={''}
              />
            </div>
          </div>
          {/* <FlightOrderItenery
            fareType="Saver"
            baggageDetails={baggageDetails}
            mealPreferences={mealPreferences}
            seatPreferences={seatPreferences}
            additionalBaggage={additionalBaggage}
            passenger={passenger}
          /> */}
          <div className="box-border flex max-w-full flex-row items-start justify-center self-stretch rounded-b-3xs rounded-t-none border-t-[1px] border-solid border-grey-6 px-0 py-2.5 text-right text-lg text-blue">
            <div className="relative box-border hidden h-20 w-[1240px] max-w-full rounded-b-3xs rounded-t-none border-t-[1px] border-solid border-grey-6" />
            <div className="z-[1] box-border flex w-[378.6px] max-w-full shrink-0 flex-row items-start justify-start overflow-hidden rounded-3xs px-[26px] py-4">
              <div className="box-border flex max-w-full flex-1 flex-row items-start justify-center gap-[12px] px-5 py-0">
                <img
                  className="relative hidden h-6 w-6"
                  alt=""
                  src="/vuesaxlinearsearchnormal4.svg"
                />
                <div className="relative flex w-[135px] cursor-pointer items-center font-medium leading-[28px]">
                  Download Ticket
                </div>
                <img
                  className="relative hidden h-6 w-6 shrink-0 overflow-hidden"
                  alt=""
                  src="/heroiconsoutlinearrowright3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactDetail
        propDisplay="block"
        name={name}
        phone={phone}
        email={email}
      />
      <FooterComponent />
    </div>
  );
};

export default ViewFlightDetailsPayment;
