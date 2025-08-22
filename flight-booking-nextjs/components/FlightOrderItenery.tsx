import type { NextPage } from "next";

interface BaggageDetails {
  checkIn: string;
  cabin: string;
}

interface MealPreferences {
  description: string;
}

interface SeatPreferences {
  seat: string;
}

interface AdditionalBaggage {
  additional: string;
}

interface Passenger {
  name: string;
  ageGroup: string;
  dob: string;
  nationality: string;
  passportNumber: string;
  ticketNumber: string;
  status: string;
}

interface FlightOrderIteneryProps {
  fareType: string;
  baggageDetails: BaggageDetails;
  mealPreferences: MealPreferences;
  seatPreferences: SeatPreferences;
  additionalBaggage: AdditionalBaggage;
  passenger: Passenger;
}

const FlightOrderItenery: NextPage<FlightOrderIteneryProps> = ({
  fareType,
  baggageDetails,
  mealPreferences,
  seatPreferences,
  additionalBaggage,
  passenger
}) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px] box-border max-w-full text-left text-mini text-grey-3 font-kanit">
      <div className="w-[850px] rounded-3xs bg-white box-border flex flex-col items-start justify-start gap-[10px] max-w-full border-[1px] border-solid border-grey-6">
        <div className="self-stretch box-border overflow-hidden flex flex-row flex-wrap items-start justify-start py-2.5 px-[25px] max-w-full [row-gap:20px] border-b-[1px] border-solid border-grey-6">
          <div className="w-[200px] relative flex items-center shrink-0">
            Fare type
          </div>
          <input
            className="w-full [border:none] [outline:none] font-kanit text-mini bg-[transparent] h-[22px] flex-1 relative text-blue-2 text-left flex items-center min-w-[300px] max-w-full p-0"
            value={fareType}
            readOnly
          />
        </div>
        <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-start py-2.5 px-[25px] [row-gap:20px] border-b-[1px] border-solid border-grey-6">
          <div className="flex-1 relative inline-block min-w-[131px] max-w-[200px]">
            Baggage details
          </div>
          <div className="flex-1 relative inline-block min-w-[131px] max-w-[200px] text-blue-2">
            <span>Adult</span>
            <span className="text-grey-3">{` `}</span>
          </div>
          <div className="flex-1 relative inline-block min-w-[131px] max-w-[200px]">
            <span>{`Check - in: `}</span>
            <span className="text-blue-2">{baggageDetails.checkIn}</span>
          </div>
          <div className="flex-1 relative inline-block min-w-[131px] max-w-[200px]">
            <span>{`Cabin: `}</span>
            <span className="text-blue-2">{baggageDetails.cabin}</span>
          </div>
        </div>
        <div className="self-stretch box-border overflow-hidden flex flex-row flex-wrap items-start justify-start py-2.5 px-[25px] max-w-full [row-gap:20px] border-b-[1px] border-solid border-grey-6">
          <div className="w-[200px] relative flex items-center shrink-0">
            Meal preferences
          </div>
          <div className="flex-1 relative text-blue-2 inline-block min-w-[249px] max-w-full">
            {mealPreferences.description}
          </div>
        </div>
        <div className="self-stretch box-border overflow-hidden flex flex-row flex-wrap items-start justify-start py-2.5 px-[25px] max-w-full [row-gap:20px] border-b-[1px] border-solid border-grey-6">
          <div className="w-[200px] relative flex items-center shrink-0">
            Seat preferences
          </div>
          <input
            className="w-full [border:none] [outline:none] font-kanit text-mini bg-[transparent] h-[22px] flex-1 relative text-blue-2 text-left flex items-center min-w-[300px] max-w-full p-0"
            value={seatPreferences.seat}
            readOnly
          />
        </div>
        <div className="self-stretch box-border overflow-hidden flex flex-row flex-wrap items-start justify-start py-2.5 px-[25px] max-w-full [row-gap:20px] border-b-[1px] border-solid border-grey-6">
          <div className="w-[200px] relative flex items-center shrink-0">
            Additional baggage
          </div>
          <input
            className="w-full [border:none] [outline:none] font-kanit text-mini bg-[transparent] h-[22px] flex-1 relative text-blue-2 text-left flex items-center min-w-[300px] max-w-full p-0"
            value={additionalBaggage.additional}
            readOnly
          />
        </div>
        <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-start py-2.5 px-[25px] [row-gap:20px]">
          <div className="h-[88px] w-[200px] relative flex items-center shrink-0">
            Passenger details
          </div>
          <div className="h-[88px] flex-1 relative flex items-center min-w-[195px]">
            <span>
              <p className="m-0 text-blue-2">{passenger.name}</p>
              <p className="m-0">
                <span>Age Group:</span>
                <span className="text-blue-2"> {passenger.ageGroup}</span>
              </p>
              <p className="m-0">{`Date of birth: ${passenger.dob}`}</p>
              <p className="m-0">
                <span>Nationality:</span>
                <span className="text-blue-2"> {passenger.nationality}</span>
              </p>
            </span>
          </div>
          <div className="h-[88px] flex-1 relative flex items-center min-w-[195px]">
            <span>
              <p className="m-0">Passport number: {passenger.passportNumber}</p>
              <p className="m-0">Ticket number: {passenger.ticketNumber}</p>
              <p className="m-0">
                <span>{`Status: `}</span>
                <span className="text-blue-2">{passenger.status}</span>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightOrderItenery;
