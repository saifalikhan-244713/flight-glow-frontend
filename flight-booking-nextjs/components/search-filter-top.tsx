import type { NextPage } from 'next';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import SearchController from '@/controllers/search.controller';
import SearchModel from '@/models/search.model';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchResults,
  setSearchParams,
  setFilteredItems,
  setResultRow,
  setDictionaries,
  setLoading,
} from '@/store/slices/searchSlice';
import { RootState } from '@/store/slices/store';
import { fetchCityLocations } from '@/Common/common-function';
import {
  ConvertCapitalFirstLetter,
  ConvertCapitalFirstLetterWithSpace,
} from '@/utils/stringUtils';
import 'react-datepicker/dist/react-datepicker.css';
import { fetchSearchResultsStatic } from '@/utils/search';
import CityCard from '@/components/search/CityCard';
import DatePickerComponent from '@/components/Common/DatepickerComponent';
import { getYesterdayDate } from '@/utils/dateUtils';
import TravelerDropdown from '@/components/TravelerComponent';
import ClassCard from '@/components/search/ClassCard';

const SearchTopFilters: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSelector((state: RootState) => state.search);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const classDropdownRef = useRef<HTMLDivElement>(null);
  const fareTypeDropdownRef = useRef<HTMLDivElement>(null);

  const [departureDate1, setDepartureDate1] = useState<Date | null>(null);
  const [returnDate1, setReturnDate1] = useState<Date | null>(null);
  const {
    resultRow,
    originLocationCode,
    destinationLocationCode,
    selectedFromCity,
    selectedToCity,
    max,
    itemsPerPage,
  } = useSelector((state: RootState) => state.search);

  useEffect(() => {
    setSelectedFromCity(selectedFromCity);
    setSelectedToCity(selectedToCity);
    setDepartureDate(
      searchParams.departureDate instanceof Date
        ? searchParams.departureDate
        : null,
    );
    setDepartureDate1(
      searchParams.departureDate instanceof Date
        ? searchParams.departureDate
        : null,
    );
    setReturnDate1(
      searchParams.returnDate instanceof Date
        ? searchParams.returnDate
        : searchParams.returnDate
          ? new Date(searchParams.returnDate)
          : null,
    );
    setOriginLocationCode(originLocationCode);
    setDestinationLocationCode(destinationLocationCode);
    setReturnDate(
      searchParams.returnDate instanceof Date ? searchParams.returnDate : null,
    );
    setAdults(searchParams.adult);
    setChildren(searchParams.children);
    setInfants(searchParams.infants);
    setTravelClass(searchParams.travelClass);

    setTripType(router.query.tripType as 'ONE WAY' | 'ROUND TRIP');
  }, [selectedFromCity, selectedToCity, searchParams.returnDate, searchParams]);

  const [destinationLocationCode1, setDestinationLocationCode] = useState(
    destinationLocationCode,
  );
  const [originLocationCode1, setOriginLocationCode] =
    useState(originLocationCode);

  const [departureDate, setDepartureDate] = useState<Date | null>(
    searchParams.departureDate instanceof Date
      ? searchParams.departureDate
      : null,
  );
  const [returnDate, setReturnDate] = useState<Date | null>(
    searchParams.returnDate instanceof Date ? searchParams.returnDate : null,
  );
  const [adult, setAdults] = useState(searchParams.adult);
  const [children, setChildren] = useState(searchParams.children);
  const [infants, setInfants] = useState(searchParams.infants);

  const [isDropdownTripVisible, setDropdownTripVisible] = useState(false);
  const [isFareTypeDropDownVisible, setFareTypeDropDownVisible] =
    useState(false);
  const [selectedFromCity1, setSelectedFromCity] = useState(selectedFromCity);

  const [selectedToCity1, setSelectedToCity] = useState(selectedToCity);

  const [tripType, setTripType] = useState<'ONE WAY' | 'ROUND TRIP'>('ONE WAY');
  const [toCityLocations, setToCityLocations] = useState([]);
  const [fromCityLocations, setFromCityLocations] = useState([]);

  const [errorMessage, setErrorMessage] = useState({
    returnDate: '',
  });

  const [isOpenFromDate, setIsOpenFromDate] = useState<boolean>(false);
  const [isOpenToDate, setIsOpenToDate] = useState<boolean>(false);

  const [isDropdownVisibleTraveller, setDropdownVisibleTraveller] =
    useState(false);
  const [isDropdownVisibleClass, setDropdownVisibleClass] = useState(false);
  const [travelClass, setTravelClass] = useState(searchParams.travelClass);

  const increment = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number,
  ) => {
    setter(value + 1);
  };

  const decrement = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number,
  ) => {
    if (value > 0) {
      setter(value - 1);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (
        (dropdownRef.current && !dropdownRef.current.contains(event.target)) ||
        (classDropdownRef.current &&
          !classDropdownRef.current.contains(event.target)) ||
        (fareTypeDropdownRef.current &&
          !fareTypeDropdownRef.current.contains(event.target))
      ) {
        setDropdownTripVisible(false);
        setDropdownVisibleClass(false);
        setFareTypeDropDownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdownTraveller = () => {
    setDropdownVisibleTraveller(!isDropdownVisibleTraveller);
  };
  const toggleDropdownClass = () => {
    setDropdownVisibleClass(!isDropdownVisibleClass);
  };

  const toggleDropdownFareType = () => {
    setFareTypeDropDownVisible(!isFareTypeDropDownVisible);
  };

  const handleFromDateChange = (date: any | null) => {
    setDepartureDate(date);
    setIsOpenFromDate(false);
  };

  const handleToDateChange = (date: any | null) => {
    setReturnDate(date);
    setIsOpenToDate(false);
    setErrorMessage({ ...errorMessage, returnDate: '' });
  };

  //Radio button change event
  const handleTripTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTripType = event.target.value as 'ONE WAY' | 'ROUND TRIP';

    setTripType(selectedTripType);

    if (selectedTripType === 'ONE WAY') {
      setReturnDate(null);
      setReturnDate1(null);
    }

    setDropdownTripVisible(false);
  };

  //Handle from city onChange of input call api from here
  const handleFromCityInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const query = event.target.value;
    setSelectedFromCity(query);
    if (query.length > 1) {
      // Fetch city locations if query is longer than 1 character
      try {
        const response = await fetchCityLocations(query);
        setFromCityLocations(response);
      } catch (error) {
        console.error('Error fetching city locations:', error);
        // Handle error if needed
      }
    } else {
      setFromCityLocations([]);
    }
  };

  const toggleDropdown = () => {
    setDropdownTripVisible(!isDropdownTripVisible);
  };

  const handleFromCitySelection = (cityName: any) => {
    setSelectedFromCity(cityName.cityName);
    setOriginLocationCode(cityName.iataCode);
    setFromCityLocations([]);
  };

  const handleToCitySelection = (cityName: any) => {
    setSelectedToCity(cityName.cityName);
    setDestinationLocationCode(cityName.iataCode);
    setToCityLocations([]);
  };

  //Handle to city onChange of input call api from here
  const handleToCityInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const query = event.target.value;
    setSelectedToCity(query);
    if (query.length > 1) {
      // Fetch city locations if query is longer than 1 character
      try {
        const response = await fetchCityLocations(query);

        setToCityLocations(response);
      } catch (error) {
        console.error('Error fetching city locations:', error);
        // Handle error if needed
      }
    } else {
      setToCityLocations([]);
    }
  };

  // Handle clear date button click
  const handleClearFromDate = () => {
    setDepartureDate(null);
  };

  // Handle clear date button click
  const handleClearToDate = () => {
    setReturnDate(null);
  };
  const handleClassClick = (className: any) => {
    setTravelClass(className);
    setDropdownVisibleClass(false);
  };

  const fetchFlightOffers = async () => {
    dispatch(setLoading(true));
    const searchParams = {
      searchTravelers: adult + children + infants,
      originLocationCode: originLocationCode1
        ? String(originLocationCode1)
        : '',
      destinationLocationCode: destinationLocationCode1
        ? String(destinationLocationCode1)
        : '',
      departureDate: departureDate,
      returnDate: returnDate,
      adult: adult ? parseInt(String(adult), 10) : 1,
      children: children ? parseInt(String(children), 10) : 0,
      infants: infants ? parseInt(String(infants), 10) : 0,
      max: max ? max : 51,
      travelClass: travelClass ? String(travelClass) : '',
      selectedFromCity: selectedFromCity1 ? String(selectedFromCity1) : '',
      selectedToCity: selectedToCity1 ? String(selectedToCity1) : '',
      tripType: tripType ? String(tripType) : '',
      currentPage: 1, // Set to default value or retrieve from router query if available
      itemsPerPage: itemsPerPage ? itemsPerPage : 10,
      totalItems: 0,
      searchResults: [],
      resultRow: [],
      resultRowReturn: [],
      flightOffersPricing: [],
      returnFlightOffersPricing: [],
      loading: true,
      dictionaries: {
        locations: {},
        aircraft: {},
        currencies: {},
        carriers: {},
      },
    };

    // Update URL with search parameters
    const query = {
      originLocationCode: searchParams.originLocationCode,
      destinationLocationCode: searchParams.destinationLocationCode,
      departureDate: departureDate ? departureDate.toISOString() : null,
      returnDate: returnDate ? returnDate.toISOString() : null,
      adult: searchParams.adult,
      children: searchParams.children,
      infants: searchParams.infants,
      max: searchParams.max,
      travelClass: searchParams.travelClass,
      selectedFromCity: searchParams.selectedFromCity,
      selectedToCity: searchParams.selectedToCity,
      tripType: searchParams.tripType,
      currentPage: searchParams.currentPage,
      itemsPerPage: searchParams.itemsPerPage,
    };

    setTripType(query.tripType as 'ONE WAY' | 'ROUND TRIP');

    // Using next/router to update the URL without reloading the page
    router.push(
      {
        pathname: router.pathname,
        query,
      },
      undefined,
      { shallow: true },
    ); // Shallow routing to avoid page reload

    const searchModelData = new SearchModel(searchParams);

    if (tripType === 'ROUND TRIP' && searchParams.returnDate === null) {
      setErrorMessage((prev) => ({
        ...prev,
        returnDate: 'Please select return date',
      }));
      return;
    }

    // Call API
    const response = await SearchController.searchFlightOfferStatic(searchModelData);

    dispatch(setSearchParams(searchParams));

    fetchSearchResultsStatic(searchParams).then((response) => {
      // dispatch(setSearchResults(results));
      dispatch(setDictionaries(response.dictionaries));
      dispatch(setSearchResults(response.data));
      dispatch(setFilteredItems(response.data));
      dispatch(setResultRow(response.data ? response.data[0] : []));
      localStorage.setItem(
        'resultRow',
        JSON.stringify(response.data ? response.data[0] : []),
      );
      dispatch(setLoading(false));
    });
  };
  const closeAllToggle = () => {
    setDropdownVisibleClass(false);
    setFromCityLocations([]);
    // setDropdownVisibleTraveler(false);
    setToCityLocations([]);
  };

  const handleSwapLocation = () => {
    // Swap selectedFromCity and selectedToCity
    const tempSelectedFromCity = selectedToCity1;
    setSelectedToCity(selectedFromCity1);
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
    <>
      <div className="background-secondary z-50 w-full shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)] transition-shadow duration-300 ease-in-out hover:shadow-lg">
        {/* <div className="flex items-center justify-center self-stretch"> */}
        <div className="mx-auto flex h-[100px] max-w-screen-xl flex-wrap items-center gap-[15px] mq1440:h-auto mq1440:py-3 mq1325:px-3 mq750:flex-col mq750:items-start">
          {/* Trip Type */}
          <div className="flex max-h-[60px] w-[140px] flex-col">
            <div className="text-sm text-gray-500">Trip Type</div>
            <div
              className="mt-3 border-b border-solid border-[#DEE2E6] font-kanit text-xl font-normal text-sky-600 hover:cursor-pointer"
              onClick={toggleDropdown}
            >
              {ConvertCapitalFirstLetter(tripType)}
            </div>

            {isDropdownTripVisible && (
              <div
                ref={dropdownRef}
                className="absolute top-[90px] z-50 box-border flex h-[125px] w-[160px] shrink-0 flex-col items-start justify-start gap-2 overflow-hidden rounded-3xs bg-lightblue p-5 text-base text-blue-2 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)]"
              >
                <div className="flex items-center gap-2 hover:cursor-pointer hover:underline">
                  <input
                    type="radio"
                    name="tripType1"
                    value="ONE WAY"
                    checked={tripType === 'ONE WAY'}
                    onChange={handleTripTypeChange}
                    className="form-radio text-blue-600 h-4 w-4"
                  />
                  <span className="font-kanit text-base font-medium text-blue-2">
                    One Way
                  </span>
                </div>
                <div className="flex items-center gap-2 hover:cursor-pointer hover:underline">
                  <input
                    type="radio"
                    name="tripType1"
                    value="ROUND TRIP"
                    checked={tripType === 'ROUND TRIP'}
                    onChange={handleTripTypeChange}
                    className="form-radio text-blue-600 h-4 w-4"
                  />
                  <span className="font-kanit text-base font-medium text-blue-2">
                    Round Trip
                  </span>
                </div>
                <div className="flex items-center gap-2 hover:cursor-pointer hover:underline">
                  <input
                    type="radio"
                    name="tripType1"
                    value="ROUND TRIP"
                    checked={tripType === 'ROUND TRIP'}
                    onChange={handleTripTypeChange}
                    className="form-radio text-blue-600 h-4 w-4"
                  />
                  <span className="font-kanit text-base font-medium text-blue-2">
                    Multi City{' '}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* From and To Cities */}
          <div className="flex max-h-[60px] w-[326px] items-center gap-2">
            <div className="flex max-h-[60px] max-w-[140px] flex-col">
              <div className="text-sm text-gray-500">From</div>
              <input
                className="mt-3 border-b border-solid border-[#DEE2E6] bg-transparent font-kanit text-xl font-normal text-sky-600 focus:outline-none"
                placeholder="Flying From"
                type="text"
                value={ConvertCapitalFirstLetter(selectedFromCity1)}
                onChange={handleFromCityInputChange}
              />

              {fromCityLocations.length > 0 && (
                <div
                  id="fromCityId"
                  className="box-border flex w-full flex-row items-start justify-start text-start font-kanit text-3xs text-blue-2"
                >
                  <div className="absolute z-[1] flex flex-1 flex-col items-start justify-start gap-1 overflow-auto rounded-3xs bg-lightblue px-3 py-2 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)]">
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

            <div
              className="cursor-pointer rounded-full bg-gray-200"
              onClick={handleSwapLocation}
            >
              <img src="swap_blue.png" className="w-6" alt="Swap" />
            </div>

            <div className="flex max-h-[60px] max-w-[140px] flex-col">
              <div className="text-sm text-gray-500">To</div>
              <input
                className="mt-3 border-b border-solid border-[#DEE2E6] bg-transparent font-kanit text-xl font-normal text-sky-600 focus:outline-none"
                placeholder="Flying To"
                type="text"
                value={ConvertCapitalFirstLetter(selectedToCity1)}
                onChange={handleToCityInputChange}
              />

              {toCityLocations.length > 0 && (
                <div
                  id="fromCityId"
                  className="box-border flex w-full flex-row items-start justify-start text-start font-kanit text-3xs text-blue-2"
                >
                  <div className="absolute z-[1] flex flex-1 flex-col items-start justify-start gap-1 overflow-auto rounded-3xs bg-lightblue px-3 py-2 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)]">
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

          {/* Departure and Return Dates */}
          <div className="flex max-h-[60px] w-[220px] items-center">
            <div className="flex w-[110px] flex-col">
              <div className="text-sm text-gray-500">Departure</div>
              {departureDate1 && (
                <DatePickerComponent
                  onDateChange={handleFromDateChange}
                  placeholderProp="Departure"
                  minDate={getYesterdayDate()}
                  name="departureDate"
                  onInputClick={closeAllToggle}
                  defaultDate={departureDate1}
                  inputClass="[border:none] mt-3 font-kanit p-0 text-xl font-normal max-w-44 [outline:none]  text-sky-600 mq450:text-base text-left bg-[transparent] cursor-pointer"
                />
              )}
            </div>
            {(searchParams.tripType === 'ROUND TRIP' && returnDate1) ||
            tripType === 'ROUND TRIP' ? (
              <>
                <div className="pr-6 text-xl text-gray-500">-</div>

                <div className="flex w-[110px] flex-col">
                  <div className="text-sm text-gray-500">Return</div>

                  <DatePickerComponent
                    onDateChange={handleToDateChange}
                    placeholderProp="Return"
                    minDate={departureDate ? departureDate : new Date()}
                    name="returnDate"
                    onInputClick={closeAllToggle}
                    defaultDate={returnDate1}
                    inputClass={`[border:none] mt-3 font-kanit p-0 text-xl font-normal max-w-44 [outline:none]  text-sky-600 mq450:text-base text-left bg-[transparent] cursor-pointer border-b border-solid border-[#DEE2E6]`}
                  />

                  {/* Error message styled below the DatePicker */}
                  {/* {errorMessage.returnDate && (
                    <p className="text-red">{errorMessage.returnDate}</p>
                  )} */}
                </div>
              </>
            ) : null}
          </div>

          {/* Travelers */}
          <div className="flex max-h-[60px] w-[140px] flex-col">
            <div className="text-sm text-gray-500">Traveler(s)</div>
            <div
              className="mt-3 border-b border-solid border-[#DEE2E6] font-kanit text-xl font-normal text-sky-600 hover:cursor-pointer"
              onClick={toggleDropdownTraveller}
            >
              {adult + children + infants} Traveler(s)
            </div>
            {isDropdownVisibleTraveller && (
              <>
                <TravelerDropdown
                  isVisible={isDropdownVisibleTraveller}
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
                {/* <div className="flex-1 absolute rounded-3xs top-28  bg-lightblue shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)] overflow-hidden flex flex-col items-center justify-start py-7 px-0 box-border gap-[24px] max-w-full z-[1] text-center text-xl text-black"></div> */}
              </>
            )}
          </div>

          {/* Class */}
          <div className="flex h-[60px] w-[140px] flex-col">
            <div onClick={toggleDropdownClass}>
              <div className="text-sm text-gray-500 hover:cursor-pointer">
                Class
              </div>
              <div
                className={`mt-3 border-b border-solid border-[#DEE2E6] font-kanit font-normal text-sky-600 hover:cursor-pointer ${
                  travelClass === 'PREMIUM_ECONOMY' ? 'pb-2 text-sm' : 'text-xl'
                }`}
              >
                {ConvertCapitalFirstLetterWithSpace(travelClass) ||
                  'Select Class'}
              </div>
            </div>

            {isDropdownVisibleClass && (
              <div
                ref={classDropdownRef}
                className="absolute top-[75px] z-[1] flex flex-col items-center justify-start overflow-hidden rounded-3xs bg-lightblue p-7 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)]"
              >
                <div className="flex flex-col items-start justify-start gap-[16px]">
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

          {/* fare type */}
          <div className="flex h-[60px] w-[140px] flex-col">
            <div onClick={toggleDropdownFareType}>
              <div className="text-sm text-gray-500 hover:cursor-pointer">
                Fare Type
              </div>
              <div className="mt-3 border-b border-solid border-[#DEE2E6] font-kanit text-xl font-normal text-sky-600 hover:cursor-pointer">
                Published
              </div>

              {/* {isFareTypeDropDownVisible && (
                <div
                  ref={dropdownRef}
                  className="absolute top-[90px] z-50 box-border flex h-[95px] w-[160px] shrink-0 flex-col items-start justify-start gap-2 overflow-hidden rounded-3xs bg-lightblue p-5 text-base text-blue-2 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)]"
                >
                  <div className="flex items-center gap-2 hover:cursor-pointer hover:underline">
                    <input
                      type="radio"
                      name="tripType1"
                      value="Publish"
                      checked={tripType === 'ONE WAY'}
                      onChange={handleTripTypeChange}
                      className="form-radio text-blue-600 h-4 w-4"
                    />
                    <span className="font-kanit text-base font-medium text-blue-2">
                      Publish
                    </span>
                  </div>
                </div>
              )} */}
            </div>
          </div>

          {/* Search Button e */}
          <div
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg bg-sky-600"
            onClick={fetchFlightOffers}
          >
            <img src="search-normal.svg" className="w-6" alt="Search" />
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default SearchTopFilters;
