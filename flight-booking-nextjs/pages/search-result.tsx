import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@/components/pagination';
import usePagination from '@/components/usePagination';
import { Carousel } from 'primereact/carousel';
import SearchResultRowSelected from '@/components/search-result-row-selected';
import SearchFiltersTop from '@/components/search-filter-top';
import SearchFiltersSidebar from '@/components/search-filter-sidebar';
import SearchResultRow from '@/components/search-result-row';
import Loading from '@/components/Loading';
import NoDataFound from '@/components/no-data-found';
import TopHeader from '@/components/top-header';
import SortButton from '@/components/SortButton';

import {
  setSearchParams,
  setSearchResults,
  setFilteredItems,
  setResultRow,
  setLoading,
  setDictionaries,
  setResultRowReturn,
} from '@/store/slices/searchSlice';

import { RootState } from '@/store/slices/store';

import { ConvertCapitalFirstLetter } from '@/utils/stringUtils';
import { fetchSearchResultsStatic } from '@/utils/search';
import { FormatDateReturnDateAndDay } from '@/utils/dateUtils';

const SearchResult: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentData, currentPage, totalPages, goToPage } = usePagination();
  const searchParams = useSelector((state: RootState) => state.search);

  const responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const {
    selectedFromCity,
    selectedToCity,
    results,
    resultRow,
    loading,
    itemsPerPage,
    max,
  } = useSelector((state: RootState) => state.search);

  const [selectedSort, setSelectedSort] = useState<string | null>(null);

  useEffect(() => {
    dispatch(setLoading(true));
    if (router.isReady) {
      const {
        originLocationCode,
        destinationLocationCode,
        departureDate,
        returnDate,
        adult,
        children,
        infants,
        travelClass,
        selectedFromCity,
        selectedToCity,
        tripType,
      } = router.query;

      const formattedDepartureDate = departureDate
        ? new Date(
            Array.isArray(departureDate) ? departureDate[0] : departureDate,
          )
        : null;

      const formattedReturnDate = returnDate
        ? new Date(Array.isArray(returnDate) ? returnDate[0] : returnDate)
        : null;

      const searchParams = {
        originLocationCode: originLocationCode
          ? String(originLocationCode)
          : '',
        destinationLocationCode: destinationLocationCode
          ? String(destinationLocationCode)
          : '',
        departureDate: formattedDepartureDate,
        returnDate: formattedReturnDate,
        adult: adult ? parseInt(String(adult), 10) : 1,
        children: children ? parseInt(String(children), 10) : 0,
        infants: infants ? parseInt(String(infants), 10) : 0,
        max: max ? max : 48,
        travelClass: travelClass ? String(travelClass) : '',
        selectedFromCity: selectedFromCity ? String(selectedFromCity) : '',
        selectedToCity: selectedToCity ? String(selectedToCity) : '',
        tripType: tripType ? String(tripType) : '',
        currentPage: 1, 
        itemsPerPage: itemsPerPage ? itemsPerPage : 52,
        totalItems: 0,
        searchResults: [],
        resultRow: [],
        resultRowReturn: [],
        flightOffersPricing: [],
        returnFlightOffersPricing: [],
        dictionaries: {
          locations: {},
          aircraft: {},
          currencies: {},
          carriers: {},
        },
        loading: true,
      };

      dispatch(setSearchParams(searchParams));

      fetchSearchResultsStatic(searchParams).then((response) => {
        dispatch(setDictionaries(response.dictionaries));
        dispatch(setSearchResults(response.data));
        dispatch(setFilteredItems(response.data));
        dispatch(setResultRow(response.data ? response.data[0] : []));
        localStorage.setItem(
          'resultRow',
          JSON.stringify(response.data ? response.data[0] : []),
        );
        dispatch(setResultRowReturn(response.data ? response.data[0] : []));
        dispatch(setLoading(false));
      });
      handleSortCheapest();
    }
  }, [router.isReady, router.query]);

  const handleSortCheapest = () => {
    // Sort the results by price (total)
    const sortedResults = [...results].sort((a, b) => {
      const priceA = parseFloat(a.price.total);
      const priceB = parseFloat(b.price.total);
      return priceA - priceB;
    });

    // Dispatch the sorted results
    dispatch(setSearchResults(sortedResults));
    setSelectedSort('cheapest');
  };

  const handleSortNotStopFirst = () => {
    // Sort the results by number of stops (non-stop flights first)
    const sortedResults = [...results].sort((a, b) => {
      const stopA = parseInt(a.itineraries[0].segments.length);
      const stopB = parseInt(b.itineraries[0].segments.length);
      return stopA - stopB;
    });

    // Dispatch the sorted results
    dispatch(setSearchResults(sortedResults));
    setSelectedSort('nonStopFirst');
  };

  const handleSortEarlyDeparture = () => {
    // Sort the results by early departure time
    const sortedResults = [...results].sort((a, b) => {
      const departureTimeA = new Date(
        a.itineraries[0].segments[0].departure.at,
      ).getTime();
      const departureTimeB = new Date(
        b.itineraries[0].segments[0].departure.at,
      ).getTime();
      return departureTimeA - departureTimeB;
    });

    // Dispatch the sorted results
    dispatch(setSearchResults(sortedResults));
    setSelectedSort('earlyDeparture');
  };

  const handleSortEarlyArrival = () => {
    // Sort the results by early departure time
    const sortedResults = [...results].sort((a, b) => {
      const arrivalTimeA = new Date(
        a.itineraries[0].segments[0].arrival.at,
      ).getTime();
      const arrivalTimeB = new Date(
        b.itineraries[0].segments[0].arrival.at,
      ).getTime();
      return arrivalTimeA - arrivalTimeB;
    });

    // Dispatch the sorted results
    dispatch(setSearchResults(sortedResults));
    setSelectedSort('earlyArrival');
  };

  return (
    <section className="flex max-w-full flex-col items-center justify-center self-stretch text-left font-kanit text-49xl text-white">
      <TopHeader />

      <div className="relative box-border flex w-full flex-col items-center justify-center gap-[38px] overflow-hidden bg-white px-0 pb-[76px] text-left font-kanit text-5xl tracking-[normal] text-blue-2">
        <SearchFiltersTop />

        {/* Sidebar outside the results conditional */}
        {/* <div className='w-[1280px] flex flex-row items-start justify-between'> */}
        <div className="w-screen-xl flex flex-row items-start justify-center">
          <div className="flex w-full flex-row items-start justify-start gap-5">
            {/* Sidebar */}
            <SearchFiltersSidebar />

            {/* Main content */}
            <div className="box-border flex w-[925px] flex-1 flex-col items-start justify-start overflow-x-auto px-0 pb-0 mq1325:max-w-full mq1050:px-16 mq945:w-[700px] mq750:w-[500px]">
              {Array.isArray(results) && results.length > 0 ? (
                <div className="box-border flex max-w-full flex-col items-start justify-start gap-10 self-stretch mq1050:px-6 mq450:gap-6">
                  {/* Title Section */}
                  <div className="text-2xl relative inline-block max-w-full font-medium mq450:text-lg">
                    Flights from {ConvertCapitalFirstLetter(selectedFromCity)}{' '}
                    to {ConvertCapitalFirstLetter(selectedToCity)}{' '}
                    {router.query?.returnDate ? 'and back' : ''}
                  </div>

                  <div className="flex gap-5">
                    <div className="relative inline-block w-[412px] min-w-[412px] rounded-lg bg-grey-7 px-5 py-3 text-5xl font-medium mq450:text-lg">
                      {ConvertCapitalFirstLetter(selectedFromCity)} →{' '}
                      {ConvertCapitalFirstLetter(selectedToCity)}{' '}
                      <span className="font-light text-grey-3">
                        {FormatDateReturnDateAndDay(
                          searchParams?.departureDate,
                        )}
                      </span>
                    </div>
                    {(searchParams?.returnDate || router.query?.returnDate) && (
                      <div className="relative inline-block w-[412px] min-w-[412px] rounded-lg bg-grey-7 px-5 py-3 text-5xl font-medium mq450:text-lg">
                        {ConvertCapitalFirstLetter(selectedToCity)} →{' '}
                        {ConvertCapitalFirstLetter(selectedFromCity)}{' '}
                        <span className="font-light text-grey-3">
                          {FormatDateReturnDateAndDay(searchParams?.returnDate)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* <div>
                    <Carousel
                      value={carouselItems}
                      responsiveOptions={responsiveOptions}
                      numVisible={3}
                      numScroll={1}
                      className="w-full"
                    />
                  </div> */}
                  {/* Sort Buttons */}
                  {/* <div className="flex max-w-full flex-row flex-wrap items-start justify-start gap-2 self-stretch font-kanit text-grey-2 mq1050:gap-4">
                    <SortButton
                      label="CHEAPEST"
                      selected={selectedSort === 'cheapest'}
                      imgSrc="/rs_symbol.svg"
                      imgSrcSelected="/rs_symbol_light.svg"
                      onClick={handleSortCheapest}
                    />
                    <SortButton
                      label="NON STOP FIRST"
                      selected={selectedSort === 'nonStopFirst'}
                      imgSrc="/sort_blue_non_stops.svg"
                      imgSrcSelected="/sort_blue_non_stops_light.svg"
                      onClick={handleSortNotStopFirst}
                    />
                    <SortButton
                      label="EARLY DEPARTURE"
                      selected={selectedSort === 'earlyDeparture'}
                      imgSrc="/sort_blue_flight_takeoff.svg"
                      imgSrcSelected="/sort_blue_flight_takeoff_light.svg"
                      onClick={handleSortEarlyDeparture}
                    />
                    <SortButton
                      label="EARLY ARRIVAL"
                      selected={selectedSort === 'earlyArrival'}
                      imgSrc="/sort_blue_flight_land.svg"
                      imgSrcSelected="/sort_blue_flight_land_light.svg"
                      onClick={handleSortEarlyArrival}
                    />
                  </div> */}

                  {/* Search Result Row */}
                  <SearchResultRow />

                  {/* Pagination Section */}
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    goToPage={goToPage}
                  />

                  {/* Selected Row */}
                  {resultRow ? <SearchResultRowSelected /> : 'Else'}
                </div>
              ) : loading ? (
                <Loading />
              ) : (
                <NoDataFound />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default SearchResult;
