import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import TopHeader from './top-header';
import { fetchCityLocations } from '@/Common/common-function';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/router';
import {
  ConvertCapitalFirstLetterWithSpace,
  ConvertCapitalFirstLetter,
} from '@/utils/stringUtils';
import CityCard from '@/components/search/CityCard';
import DatePickerField from '@/components/search/DatePickerField';
import DatePickerComponent from '@/components/Common/DatepickerComponent';
import ClassCard from '@/components/search/ClassCard';
import { getYesterdayDate } from '@/utils/dateUtils';
import TravelerDropdown from '@/components/TravelerComponent';

const ShapeContainer: NextPage = () => {
  const router = useRouter();

  const [isDisabled, setIsDisabled] = useState(false);

  const [loading, setLoading] = useState(false);

  const [tripType, setTripType] = useState<'ONE WAY' | 'ROUND TRIP'>('ONE WAY');

  const [selectedFromCity, setSelectedFromCity] = useState('');
  const [selectedToCity, setSelectedToCity] = useState('');

  const [originLocationCode, setOriginLocationCode] = useState('');
  const [destinationLocationCode, setDestinationLocationCode] = useState('');

  const [fromCityLocations, setFromCityLocations] = useState([]);
  const [toCityLocations, setToCityLocations] = useState([]);

  const [departureDate, setDepartureDate] = useState<Date | null>(new Date());
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [isOpenFromDate, setIsOpenFromDate] = useState<boolean>(false);
  const [isOpenToDate, setIsOpenToDate] = useState<boolean>(false);
  const [adult, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [isDropdownVisibleTraveler, setDropdownVisibleTraveler] =
    useState(false);
  const [isDropdownVisibleClass, setDropdownVisibleClass] = useState(false);

  const [travelClass, setTravelClass] = useState('');
  const [liveLoading, setLiveLoading] = useState(false);
  const [staticLoading, setStaticLoading] = useState(false);

  const handleFromDateChange = (date: Date | null) => {
    setFromCityLocations([]);
    setDepartureDate(date);
    setIsOpenFromDate(false);
  };

  const handleToDateChange = (date: Date | null) => {
    setErrorReturnDate('');
    setReturnDate(date);
    setIsOpenToDate(false);
  };

  const handleFromCitySelection = (cityName: any) => {
    if (cityName.cityName == selectedToCity) {
      setErrorClassFrom('FromLocation');
    } else {
      setErrorClassFrom('');
      setSelectedFromCity(cityName.cityName);
      setOriginLocationCode(cityName.iataCode);
      setFromCityLocations([]);
    }
  };

  const handleToCitySelection = (cityName: any) => {
    if (cityName.cityName == selectedFromCity) {
      setErrorClassTo('ToLocation');
    } else {
      setErrorClassTo('');
      setSelectedToCity(cityName.cityName);
      setDestinationLocationCode(cityName.iataCode);
      setToCityLocations([]);
    }
  };

  //Handle from city onChange of input call api from here
  const handleFromCityInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDropdownVisibleClass(false);
    // setFromCityLocations([]);
    setDropdownVisibleTraveler(false);
    setToCityLocations([]);

    const query = event.target.value;
    setSelectedFromCity(query);
    if (query.length > 1) {
      // Fetch city locations if query is longer than 1 character
      try {
        const response = await fetchCityLocations(query);
        setFromCityLocations(response);
      } catch (error) {
        throw error; // Handle error if needed
      }
    } else {
      setFromCityLocations([]);
    }
  };

  //Handle to city onChange of input call api from here
  const handleToCityInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDropdownVisibleClass(false);
    setFromCityLocations([]);
    setDropdownVisibleTraveler(false);

    const query = event.target.value;
    setSelectedToCity(query);
    if (query.length > 1) {
      // Fetch city locations if query is longer than 1 character
      try {
        const response = await fetchCityLocations(query);
        setToCityLocations(response);
      } catch (error) {
        throw error;
        // Handle error if needed
      }
    } else {
      setToCityLocations([]);
    }
  };

  //Radio button change event
  const handleTripTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTripType(event.target.value as 'ONE WAY' | 'ROUND TRIP');
  };

  // Handle clear date button click
  const handleClearFromDate = () => {
    setDepartureDate(null);
  };

  // Handle clear date button click
  const handleClearToDate = () => {
    setReturnDate(null);
  };

  const increment = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number,
  ) => {
    if (value < 10) {
      setter(value + 1);
    }
  };

  const decrement = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number,
    minValue: number,
  ) => {
    if (value > minValue) {
      setter(value - 1);
    }
  };

  // const handleClickOutside = (event: any) => {
  //   setDropdownVisibleClass(false);
  //   // setFromCityLocations([]);
  //   setDropdownVisibleTraveler(false);
  //   // setToCityLocations([]);
  // };
  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  const toggleDropdownTraveller = () => {
    setDropdownVisibleTraveler(!isDropdownVisibleTraveler);

    setDropdownVisibleClass(false);
    setFromCityLocations([]);
    setToCityLocations([]);
  };
  const toggleDropdownClass = () => {
    setDropdownVisibleClass(!isDropdownVisibleClass);

    setDropdownVisibleTraveler(false);
    setFromCityLocations([]);
    setToCityLocations([]);
  };

  const handleClassClick = (className: any) => {
    setErrorTravelClass('');
    setTravelClass(className);
    setDropdownVisibleClass(false);
  };

  const closeAllToggle = () => {
    setDropdownVisibleClass(false);
    setFromCityLocations([]);
    setDropdownVisibleTraveler(false);
    setToCityLocations([]);
  };
  const [errorClassFrom, setErrorClassFrom] = useState<string>('');
  const [errorClassTo, setErrorClassTo] = useState<string>('');
  const [errorClassDeparture, setErrorClassDeparture] = useState<string>('');
  const [errorReturnDate, setErrorReturnDate] = useState<string>('');
  const [errorTravelClass, setErrorTravelClass] = useState<string>('');
  // const [returnDateError, setReturnDateError] = useState<string | null>(null);

  const fetchFlightOffersStatic = async () => {
    let hasError = false;

    if (!returnDate && tripType === 'ROUND TRIP') {
      setErrorReturnDate('ReturnDate');
      hasError = true;
    } else {
      setErrorReturnDate('');
    }

    if (!originLocationCode) {
      setErrorClassFrom('FromLocation');
      hasError = true;
    } else {
      setErrorClassFrom('');
    }

    if (!travelClass) {
      setErrorTravelClass('travelClass');
      hasError = true;
    } else {
      setErrorTravelClass('');
    }

    if (!destinationLocationCode) {
      setErrorClassTo('ToLocation');
      hasError = true;
    } else {
      setErrorClassTo('');
    }

    if (!departureDate) {
      setErrorClassDeparture('DepartureDate');
      hasError = true;
    } else {
      setErrorClassDeparture('');
    }

    // Check for return date error only for ROUND TRIP
    // if (tripType === 'ROUND TRIP' && !returnDate) {
    //   setReturnDateError('Return date is required!');
    //   hasError = true;
    // } else {
    //   setReturnDateError(null);
    // }

    if (!hasError) {
      const query = {
        originLocationCode,
        destinationLocationCode,
        departureDate: departureDate ? departureDate.toISOString() : null,
        returnDate: returnDate ? returnDate.toISOString() : null,
        adult: adult ? adult : null,
        children: children ? children : null,
        infants: infants ? infants : null,
        travelClass,
        selectedFromCity,
        selectedToCity,
        tripType,
      };

      setStaticLoading(true);
      router.push({
        pathname: '/search-result',
        query,
      });
    } else {
      setLoading(false);
    }
  };
  const fetchFlightOffersLive = async () => {
    let hasError = false;

    if (!returnDate && tripType === 'ROUND TRIP') {
      setErrorReturnDate('ReturnDate');
      hasError = true;
    } else {
      setErrorReturnDate('');
    }

    if (!originLocationCode) {
      setErrorClassFrom('FromLocation');
      hasError = true;
    } else {
      setErrorClassFrom('');
    }

    if (!travelClass) {
      setErrorTravelClass('travelClass');
      hasError = true;
    } else {
      setErrorTravelClass('');
    }

    if (!destinationLocationCode) {
      setErrorClassTo('ToLocation');
      hasError = true;
    } else {
      setErrorClassTo('');
    }

    if (!departureDate) {
      setErrorClassDeparture('DepartureDate');
      hasError = true;
    } else {
      setErrorClassDeparture('');
    }

    // Check for return date error only for ROUND TRIP
    // if (tripType === 'ROUND TRIP' && !returnDate) {
    //   setReturnDateError('Return date is required!');
    //   hasError = true;
    // } else {
    //   setReturnDateError(null);
    // }

    if (!hasError) {
      const query = {
        originLocationCode,
        destinationLocationCode,
        departureDate: departureDate ? departureDate.toISOString() : null,
        returnDate: returnDate ? returnDate.toISOString() : null,
        adult: adult ? adult : null,
        children: children ? children : null,
        infants: infants ? infants : null,
        travelClass,
        selectedFromCity,
        selectedToCity,
        tripType,
      };
      setLiveLoading(true);
      router.push({
        pathname: '/search-result-live',
        query,
      });
    } else {
      setLoading(false);
    }
  };

  const handleSwapLocation = () => {
    // Swap selectedFromCity and selectedToCity
    const tempSelectedFromCity = selectedToCity;
    setSelectedToCity(selectedFromCity);
    setSelectedFromCity(tempSelectedFromCity);

    // Swap originLocationCode and destinationLocationCode
    const tempOriginLocationCode = destinationLocationCode;
    setDestinationLocationCode(originLocationCode);
    setOriginLocationCode(tempOriginLocationCode);

    // Swap fromCityLocations and toCityLocations
    const tempFromCityLocations = toCityLocations;
    setToCityLocations(fromCityLocations);
    setFromCityLocations(tempFromCityLocations);

    // You might not need to trigger re-render explicitly as setting state will re-render the component
  };

  return (
    <section className="flex max-w-full flex-col items-center justify-center self-stretch text-left font-kanit text-49xl text-white">
      {/*  */}
      <TopHeader />

      <div className="relative flex max-w-full flex-row items-center justify-center self-stretch">
        <div className="flex w-[1240px] max-w-full flex-col items-center justify-center gap-[40px] mq750:gap-[20px_40px]">
          <img
            className="absolute bottom-[-0.4px] left-[0px] right-[0px] !m-[0] h-full w-full max-w-full overflow-hidden object-cover"
            alt=""
            src="/banner--background@2x.png"
          />
          <div className="z-[1] box-border flex max-w-full flex-1 flex-row items-center justify-center gap-[43px] py-[85px] mq1225:flex-wrap mq750:box-border mq750:gap-[43px_21px] mq750:px-[50px] mq750:py-[55px] mq450:box-border mq450:pl-5 mq450:pr-5">
            <div className="flex min-w-[389px] max-w-full flex-1 flex-col items-center justify-start mq1225:flex-1 mq750:min-w-full">
              <h1 className="relative m-0 inline-block h-[180px] self-stretch font-inherit text-inherit font-medium leading-[68px] mq750:text-35xl mq750:leading-[54px] mq450:text-22xl mq450:leading-[41px]">
                <p className="m-0">{`Book your next Adventure `}</p>
                <p className="m-0">With Flight Glow</p>
              </h1>
            </div>

            <div className="m-0 box-border flex min-w-[389px] max-w-full flex-[0.9331] flex-col items-center justify-start gap-[20px] rounded-xl bg-white p-5 mq1225:flex-1 mq750:min-w-full">
              <div className="flex flex-row items-start justify-start gap-[57px] self-stretch mq750:flex-wrap mq750:gap-[57px_28px]">
                <div className="flex min-w-[111px] flex-1 flex-row items-start justify-start">
                  <label className="flex flex-1 flex-row items-center gap-[16px] rounded-basic-forms-checkbox-border-radius">
                    <input
                      id="oneCheckHome"
                      type="radio"
                      name="tripType1"
                      value="ONE WAY"
                      checked={tripType === 'ONE WAY'}
                      onChange={handleTripTypeChange}
                      className="form-radio text-blue-600 h-4 w-4 transition duration-150 ease-in-out"
                    />
                    <span className="font-kanit text-base font-medium text-blue-2">
                      ONE WAY
                    </span>
                  </label>
                </div>

                <div className="flex min-w-[111px] flex-1 flex-row items-start justify-start">
                  <label className="flex flex-1 flex-row items-center gap-[16px] rounded-basic-forms-checkbox-border-radius">
                    <input
                      id="roundCheckHome"
                      type="radio"
                      name="tripType2"
                      value="ROUND TRIP"
                      checked={tripType === 'ROUND TRIP'}
                      onChange={handleTripTypeChange}
                      className="form-radio text-blue-600 h-4 w-4 transition duration-150 ease-in-out"
                    />
                    <span className="font-kanit text-base font-medium text-blue-2">
                      ROUND TRIP
                    </span>
                  </label>
                </div>
                <div
                  id="multiCheckHome"
                  className="flex min-w-[111px] flex-1 flex-row items-start justify-start"
                >
                  <label className="flex flex-1 flex-row items-center gap-[16px] rounded-basic-forms-checkbox-border-radius">
                    <input
                      type="radio"
                      name="tripType1"
                      value="MULTI CITY"
                      // checked={tripType === 'ROUND TRIP'}
                      onChange={handleTripTypeChange}
                      className="form-radio text-blue-600 h-4 w-4 transition duration-150 ease-in-out"
                    />
                    <span className="font-kanit text-base font-medium text-blue-2">
                      MULTI CITY{' '}
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex flex-row items-center justify-center self-stretch text-center font-components-chip text-xs text-grey-grey-700 [row-gap:20px] mq750:flex-wrap">
                {/*   START FLYING FROM */}
                <div className="relative flex min-w-[166px] flex-1 flex-row items-start justify-start">
                  <div
                    className={`box-border flex h-[60px] flex-1 flex-col items-start justify-start rounded-3xs border-[1px] border-solid px-[7px] py-[3px] ${
                      errorClassFrom === 'FromLocation'
                        ? 'border-red'
                        : 'border-grey-7'
                    }`}
                  >
                    <div className="flex flex-1 flex-row items-center justify-start gap-[8px] self-stretch overflow-hidden px-0 py-[15px]">
                      <img
                        className="relative h-6 min-h-[24px] w-6 shrink-0 cursor-pointer overflow-hidden"
                        alt=""
                        src="/sort_blue_flight_takeoff.svg"
                      />
                      <input
                        id="fromInputHome"
                        className="relative flex h-6 w-[calc(100%_-_24px)] min-w-[124px] flex-1 items-center bg-[transparent] p-0 text-left font-kanit text-base font-light text-grey-75 [border:none] [outline:none]"
                        placeholder="Flying From"
                        type="text"
                        value={ConvertCapitalFirstLetter(selectedFromCity)}
                        onChange={handleFromCityInputChange} // Ensure onChange is bound to the handler
                      />
                    </div>
                    {fromCityLocations.length > 0 && (
                      <div
                        id="fromCityId"
                        className="absolute bottom-0 mr-0 box-border items-start justify-start pt-5 text-start font-kanit text-3xs text-blue-2"
                      >
                        <div className="absolute z-[1] w-[235px] flex-1 overflow-hidden rounded-3xs bg-lightblue py-2 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)]">
                          {fromCityLocations.map((city: any) => (
                            <CityCard
                              key={city.id}
                              city={city}
                              onSelect={handleFromCitySelection}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/*   END FLYING FROM FLYING */}
                <img
                  className="relative h-12 w-12 cursor-pointer"
                  loading="lazy"
                  alt=""
                  src="/swap.svg"
                  onClick={handleSwapLocation}
                />
                {/*   START FLYING TO */}
                <div
                  className={`box-border flex h-[60px] flex-1 flex-col items-center justify-center rounded-3xs border-[1px] border-solid px-[7px] py-[3px] ${
                    errorClassTo === 'ToLocation'
                      ? 'border-red'
                      : 'border-grey-7'
                  }`}
                >
                  <div className="relative box-border flex h-[54px] shrink-0 flex-row items-center justify-center gap-[8px] self-stretch px-0 py-[15px]">
                    <img
                      className="relative h-6 min-h-[24px] w-6 shrink-0 overflow-hidden"
                      alt=""
                      src="/sort_blue_flight_land.svg"
                    />
                    <input
                      id="toInputHome"
                      className="relative flex h-6 w-[calc(100%_-_24px)] min-w-[124px] flex-1 items-center bg-[transparent] p-0 text-left font-kanit text-base font-light text-grey-75 [border:none] [outline:none]"
                      placeholder="Flying To"
                      type="text"
                      value={ConvertCapitalFirstLetter(selectedToCity)}
                      onChange={handleToCityInputChange}
                    />

                    {toCityLocations.length > 0 && (
                      <div
                        id="toCityId"
                        className="absolute bottom-0 left-0 mr-0 box-border w-full items-start justify-start pt-5 text-start font-kanit text-3xs text-blue-2"
                      >
                        <div className="absolute z-[1] mt-1 w-[235px] flex-1 rounded-3xs bg-lightblue py-2 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)]">
                          {toCityLocations.map((city: any) => (
                            <CityCard
                              key={city.id}
                              city={city}
                              onSelect={handleToCitySelection}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/*   END FLYING TO */}
              </div>

              {/* </div> */}
              {/*   START Departure - Return Date Picker*/}
              <div
                id="calendarHome"
                className="flex flex-row items-center justify-between gap-10 self-stretch text-center font-components-chip text-xs text-grey-grey-700 mq750:flex-wrap mq750:gap-[48px_24px]"
              >
                <div
                  id="toCalendarHome"
                  className={`w-${tripType === 'ROUND TRIP' ? '[50%]' : 'full'} rounded-md border border-solid border-grey-7`}
                >
                  <DatePickerComponent
                    onDateChange={handleFromDateChange}
                    placeholderProp="Departure"
                    minDate={getYesterdayDate()}
                    name="departureDate"
                    onInputClick={closeAllToggle}
                    defaultDate={departureDate}
                  />
                </div>
                {tripType === 'ROUND TRIP' && (
                  <div
                    className={`relative w-[50%] border border-solid ${
                      errorReturnDate === 'ReturnDate'
                        ? 'border-red'
                        : 'border-grey-7'
                    } rounded-md`}
                  >
                    <DatePickerComponent
                      // inputClass='border-0'
                      onDateChange={handleToDateChange}
                      placeholderProp="Return"
                      minDate={departureDate ? departureDate : new Date()}
                      name="returnDate"
                      onInputClick={closeAllToggle}
                      defaultDate={returnDate}
                    />

                    {/* {returnDateError && (
                      <p className="absolute left-[65px] top-[40px] mt-1 text-xs text-red">
                        {returnDateError}
                      </p>
                    )} */}
                  </div>
                )}
              </div>
              {/*   END Departure - Return Date Picker*/}

              {/*   START Traveler and Class */}
              <div className="flex flex-row items-center justify-start gap-11 self-stretch text-center font-components-chip text-xs text-grey-grey-700 mq750:flex-wrap mq750:gap-[48px_24px]">
                <div className="flex min-w-[166px] flex-1 flex-row items-start justify-start">
                  <div className="relative box-border flex h-[60px] flex-1 flex-col items-start justify-start rounded-3xs border-[1px] border-solid border-grey-7 px-[7px] py-[3px]">
                    <div
                      id="noPassengerHome"
                      className="flex flex-1 flex-row items-center justify-start gap-[8px] self-stretch px-0 py-[15px]"
                    >
                      <img
                        className="relative h-6 min-h-[24px] w-6 cursor-pointer"
                        alt=""
                        src="/vuesaxlinearprofile2user.svg"
                      />
                      <input
                        className="relative flex h-6 w-[calc(100%_-_24px)] min-w-[124px] flex-1 cursor-pointer items-center bg-[transparent] p-0 text-left font-kanit text-base font-light text-grey-75 [border:none] [outline:none]"
                        placeholder={
                          adult + children + infants + ' Traveller(s)'
                        }
                        type="text"
                        onClick={toggleDropdownTraveller}
                      />

                      <img
                        className="relative h-6 min-h-[24px] w-6 cursor-pointer"
                        alt=""
                        src={
                          isDropdownVisibleTraveler
                            ? '/arrowup-grey.svg'
                            : '/arrowdown-grey.svg'
                        }
                        onClick={toggleDropdownTraveller}
                      />
                    </div>
                    {isDropdownVisibleTraveler && (
                      <TravelerDropdown
                        isVisible={isDropdownVisibleTraveler}
                        adult={adult}
                        children={children}
                        infants={infants}
                        setAdults={setAdults}
                        setChildren={setChildren}
                        setInfants={setInfants}
                        increment={increment}
                        decrement={decrement}
                        toggleDropdownTraveller={toggleDropdownTraveller}
                      />
                    )}
                  </div>
                </div>

                <div
                  className={`relative box-border flex min-w-[166px] flex-[0.9373] flex-col items-start justify-start rounded-3xs border-[1px] border-solid ${errorTravelClass ? 'border-red' : 'border-grey-7'} px-[7px] py-[3px] mq450:flex-1`}
                >
                  <div
                    onClick={toggleDropdownClass}
                    className="box-border flex h-[54px] shrink-0 cursor-pointer flex-row items-center justify-start gap-[8px] self-stretch border px-0 py-[15px]"
                  >
                    <img
                      className="h-6 min-h-[24px] w-6"
                      alt=""
                      src="/vuesaxlinearlayer.svg"
                    />
                    <input
                      className="relative flex h-6 w-[calc(100%_-_24px)] min-w-[124px] flex-1 cursor-pointer items-center bg-[transparent] p-0 text-left font-kanit text-base font-light text-grey-75 [border:none] [outline:none]"
                      placeholder="Class"
                      type="text"
                      value={ConvertCapitalFirstLetterWithSpace(travelClass)}
                    />
                    <img
                      className="h-6 min-h-[24px] w-6"
                      alt=""
                      src={
                        isDropdownVisibleClass
                          ? '/arrowup-grey.svg'
                          : '/arrowdown-grey.svg'
                      }
                    />
                  </div>
                  {isDropdownVisibleClass && (
                    <div
                      className={` ${errorTravelClass ? 'border-red' : 'border-grey-7'} absolute top-[62px] z-[1] flex flex-col items-center justify-center rounded-3xs bg-lightblue p-9 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)]`}
                    >
                      <div
                        id="classDropHome"
                        className={`${errorTravelClass ? 'border-red' : 'border-grey-7'} flex flex-col items-start justify-start gap-[16px]`}
                      >
                        <ClassCard
                          className="PREMIUM_ECONOMY"
                          label="Premium Economy"
                          onClick={handleClassClick}
                        />
                        <ClassCard
                          className="ECONOMY"
                          label="Economy"
                          onClick={handleClassClick}
                        />
                        <ClassCard
                          className="BUSINESS"
                          label="Business Class"
                          onClick={handleClassClick}
                        />
                        <ClassCard
                          className="FIRST"
                          label="First Class"
                          onClick={handleClassClick}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/*   END Traveler and Class */}

              {/* <ButtonGroup /> */}
              {/* static */}
              <div className="flex w-full flex-row justify-between gap-[20px]">
                <div className="common-button-hover flex w-full flex-1 flex-col items-start justify-center self-stretch overflow-hidden rounded-3xs bg-blue-2 px-[] py-4">
                  <button
                    onClick={fetchFlightOffersStatic}
                    disabled={isDisabled}
                    className="flex h-7 cursor-pointer flex-row items-center justify-center gap-[12px] self-stretch bg-[transparent] p-0 [border:none]"
                  >
                    <img
                      className="relative h-6 w-6"
                      alt=""
                      src={staticLoading ? 'load.gif' : '/search_normal.svg'}
                    />
                    <div
                      id="searchButtonHomeStatic"
                      className="relative flex w-28 min-w-[56px] items-center justify-center text-center font-kanit text-lg font-medium leading-[28px] text-white"
                    >
                      Search static
                    </div>
                  </button>
                </div>
                <div className="common-button-hover flex w-full flex-1 flex-col items-start justify-center self-stretch overflow-hidden rounded-3xs bg-blue-2 py-4">
                  <button
                    onClick={fetchFlightOffersLive}
                    disabled={isDisabled}
                    className="flex h-7 w-full cursor-pointer flex-row items-center justify-center gap-[12px] self-stretch bg-[transparent] p-0 [border:none]"
                  >
                    <img
                      className="relative h-6 w-6"
                      alt=""
                      src={liveLoading ? 'load.gif' : '/search_normal.svg'}
                    />
                    <div
                      id="searchButtonHomeLive"
                      className="relative flex w-28 min-w-[56px] items-center justify-center text-center font-kanit text-lg font-medium leading-[28px] text-white"
                    >
                      Search live
                    </div>
                  </button>
                </div>
              </div>

              {/* <Button /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShapeContainer;
