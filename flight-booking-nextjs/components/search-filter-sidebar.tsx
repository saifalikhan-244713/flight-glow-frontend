import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/slices/store';
import { setFilteredItems, setSearchResults } from '@/store/slices/searchSlice';
import { ConvertCapitalFirstLetter } from '@/utils/stringUtils';
import { ArchiveBoxArrowDownIcon } from '@heroicons/react/20/solid';
import StopsCheckbox from '@/components/search/StopsCheckbox';
import DepartureCheckbox from '@/components/search/DepartureCheckbox';

interface Airline {
  iataCode: string;
  businessName: string;
}

const SearchFiltersSidebar: NextPage = () => {
  const searchParams = useSelector((state: RootState) => state.search);

  const dispatch = useDispatch();
  const {
    results,
    itemsPerPage,
    currentPage,
    searchResults,
    selectedFromCity,
    selectedToCity,
    totalItems,
    dictionaries,
  } = useSelector((state: RootState) => state.search);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const [isArrowUp, setArrowUp] = useState(true);
  const [isArrowUpReturn, setArrowUpReturn] = useState(true);
  const totalResults = totalItems;
  const resultsPerPage = searchResults.slice(startIndex, endIndex);

  const [checkedAirlines, setCheckedAirlines] = useState<string[]>([]);
  const [checkedStops, setCheckedStops] = useState<number[]>([]);
  const [checkedDepartureFrom, setCheckedDepartureFrom] = useState<string[]>(
    [],
  );
  const [filteredAirlines, setFilteredAirlines] = useState<Airline[]>([]);

  const [checkedReturnAirlines, setCheckedReturnAirlines] = useState<string[]>(
    [],
  );
  const [checkedReturnStops, setCheckedReturnStops] = useState<number[]>([]);
  const [checkedReturnDepartureFrom, setCheckedReturnDepartureFrom] = useState<
    string[]
  >([]);
  const [filteredReturnAirlines, setFilteredReturnAirlines] = useState<
    Airline[]
  >([]);

  useEffect(() => {
    setFilteredAirlines(getUniqueAirlineNames(searchResults));
    setFilteredReturnAirlines(getUniqueReturnAirlineNames(searchResults));
  }, [results, searchResults]);

  function getUniqueAirlineNames(resultFill: any): Airline[] {
    const uniqueAirlineNames: Airline[] = [];
    const uniqueAirlinesSet = new Set<string>();
    resultFill.forEach((data: any) => {
      const { iataCode, businessName } = data.airlinesFrom;
      if (!uniqueAirlinesSet.has(iataCode)) {
        uniqueAirlineNames.push({ iataCode, businessName });
        uniqueAirlinesSet.add(iataCode);
      }
    });
    return uniqueAirlineNames;

    // if (dictionaries?.carriers) {
    //   Object.keys(dictionaries.carriers).forEach((iataCode) => {
    //     uniqueAirlineNames.push({ iataCode, businessName: dictionaries.carriers[iataCode] });
    //   });
    // }
    // return uniqueAirlineNames;
  }

  function getUniqueReturnAirlineNames(resultFill: any): Airline[] {
    const uniqueAirlineNames: Airline[] = [];
    const uniqueAirlinesSet = new Set<string>();
    searchResults.forEach((data: any) => {
      const { iataCode, businessName } = data.airlinesTo;
      if (!uniqueAirlinesSet.has(iataCode)) {
        uniqueAirlineNames.push({ iataCode, businessName });
        uniqueAirlinesSet.add(iataCode);
      }
    });
    return uniqueAirlineNames;
  }

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkedAirlines = Array.from(
      document.querySelectorAll('input[name="airlinesFromInput[]"]:checked'),
    ).map((checkbox) => (checkbox as HTMLInputElement).value);
    setCheckedAirlines(checkedAirlines); // Update checked airlines state
  };

  const handleReturnFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkedReturnAirlines = Array.from(
      document.querySelectorAll(
        'input[name="airlinesReturnFromInput[]"]:checked',
      ),
    ).map((checkbox) => (checkbox as HTMLInputElement).value);
    setCheckedReturnAirlines(checkedReturnAirlines); // Update checked airlines state
  };

  const handleStopsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setCheckedStops((prev) =>
      prev.includes(value)
        ? prev.filter((stop) => stop !== value)
        : [...prev, value],
    );
  };

  const handleStopsReturnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setCheckedReturnStops((prev) =>
      prev.includes(value)
        ? prev.filter((stop) => stop !== value)
        : [...prev, value],
    );
  };

  const handlecDepartureFromChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const departureFrom = Array.from(
      document.querySelectorAll('input[name="departure_time[]"]:checked'),
    ).map((checkbox) => (checkbox as HTMLInputElement).value);
    setCheckedDepartureFrom(departureFrom);
  };

  const handleReturnDepartureFromChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const departureFrom = Array.from(
      document.querySelectorAll('input[name="departure_time[]"]:checked'),
    ).map((checkbox) => (checkbox as HTMLInputElement).value);
    setCheckedReturnDepartureFrom(departureFrom);
  };

  const isWithinTimeRange = (time: string, range: string): boolean => {
    const hour = parseInt(time.split(':')[0], 10);
    const [start, end] = range.split(' - ').map((r) => parseInt(r, 10));
    return hour >= start && hour < end;
  };

  const applyFilters = () => {
    dispatch(setSearchResults(searchResults));

    let filteredResults = searchResults;

    if (checkedStops.length > 0) {
      // filteredResults = filteredResults.filter((result: any) =>
      //   checkedStops.includes(result.itineraries[0].segments[0].numberOfStops)
      // );
      filteredResults = filteredResults.filter((result: any) => {
        const numberOfSegments = result.itineraries[0].segments.length;

        // Check if number of stops matches the selected filters
        return checkedStops.includes(numberOfSegments - 1); // segments - 1 gives the number of connections
      });
    }

    if (checkedDepartureFrom.length > 0) {
      filteredResults = filteredResults.filter((result: any) => {
        const departureTime = result.itineraries[0].segments[0].departure.at
          .split('T')[1]
          .split(':00')[0]; // Extracts HH:MM from the ISO string
        return checkedDepartureFrom.some((range) =>
          isWithinTimeRange(departureTime, range),
        );
      });
    }

    // if (checkedReturnStops.length > 0) {
    //   filteredResults = filteredResults.filter((result: any) =>
    //     checkedReturnStops.includes(
    //       result.itineraries[0].segments[1]?.numberOfStops
    //     )
    //   );
    // }

    // Filter based on number of stops for return flights

    if (checkedReturnStops.length > 0) {
      filteredResults = filteredResults.filter((result: any) => {
        const numberOfSegments = result.itineraries[1].segments.length;

        // Check if number of stops matches the selected filters
        return checkedReturnStops.includes(numberOfSegments - 1); // segments - 1 gives the number of connections
      });
    }

    if (checkedReturnDepartureFrom.length > 0) {
      filteredResults = filteredResults.filter((result: any) => {
        const departureTime = result.itineraries[1].segments[0].departure.at
          .split('T')[1]
          .split(':00')[0]; // Extracts HH:MM from the ISO string

        return checkedReturnDepartureFrom.some((range) =>
          isWithinTimeRange(departureTime, range),
        );
      });
    }

    if (checkedAirlines.length > 0) {
      filteredResults = filteredResults.filter((result: any) =>
        checkedAirlines.includes(result.airlinesFrom.iataCode),
      );
    }

    if (checkedReturnAirlines.length > 0) {
      filteredResults = filteredResults.filter((result: any) =>
        checkedReturnAirlines.includes(result.airlinesTo.iataCode),
      );
    }

    dispatch(setSearchResults(filteredResults));

    if (
      checkedStops.length == 0 &&
      checkedDepartureFrom.length == 0 &&
      checkedAirlines.length == 0 &&
      checkedReturnStops.length == 0 &&
      checkedReturnDepartureFrom.length == 0 &&
      checkedReturnAirlines.length == 0
    ) {
      resetFilters();
    }
  };

  const resetFilters = () => {
    dispatch(setSearchResults(searchResults));
    console.log(searchResults);
    // Clear the checked airlines state
    setCheckedAirlines([]);
    setCheckedStops([]);
    setCheckedDepartureFrom([]);

    setCheckedReturnStops([]);
    setCheckedReturnAirlines([]);
    setCheckedReturnDepartureFrom([]);
    setFilteredAirlines([]);

    // Update the filtered airlines list based on the original results
    setFilteredAirlines(getUniqueAirlineNames(results));

    // Restore the original results
  };

  const toggleArrow = () => {
    setArrowUp((prevState) => !prevState);
  };
  const toggleArrowReturn = () => {
    setArrowUpReturn((prevState) => !prevState);
  };
  const returnDate = searchParams ? searchParams.returnDate : [];

  return (
    <div className="no-scrollbar box-border flex w-[295px] max-w-xs flex-col gap-5 overflow-y-auto border-r border-solid border-lightgray-100 bg-white pb-20 pr-[15px] text-left font-kanit text-xl text-blue-2 md:max-w-sm lg:relative lg:max-w-md mq1225:hidden">
      <div className="flex items-center justify-between">
        <span className="text-xl font-medium">
          {resultsPerPage.length} of {totalResults}{' '}
          <span className="font-extralight">flights</span>
        </span>
        {/* <span className="font-extralight"> flights</span> */}
        <div
          className="relative cursor-pointer !bg-clip-text text-sm [-webkit-text-fill-color:transparent] [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [text-decoration:underline] mq1325:text-base"
          onClick={resetFilters}
        >
          Reset Filter
        </div>
      </div>
      <div className="flex h-full flex-col items-start gap-5 text-grey-3">
        <div className="flex w-full flex-col items-start justify-between gap-5">
          <div className="flex flex-row items-start justify-between self-stretch text-blue-2">
            {/* <div className="w-[147px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border"> */}
            {/* <div className="self-stretch flex flex-col items-start justify-start gap-[25px]"> */}
            <div className="relative z-[0] inline-block text-xl font-medium mq1325:text-base">
              Onward Journey
            </div>
            {/* </div> */}
            {/* </div> */}

            <img
              className="relative h-6 min-h-[24px] w-6 cursor-pointer"
              alt=""
              src={isArrowUp ? 'ararrow_up.svg' : 'arrowdown-grey.svg'} // Toggle arrow icon based on state
              onClick={toggleArrow} // Toggle arrow state on click
            />
          </div>
          {isArrowUp ? (
            <>
              <div>
                <div className="relative z-[0] inline-block h-[25px] !bg-clip-text pb-[10px] text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] mq1325:pt-5 mq1325:text-base">
                  Stops
                </div>
                <div className="flex flex-col items-start justify-start gap-3 self-stretch text-base">
                  <StopsCheckbox
                    label="Non - Stops"
                    value={0}
                    checked={checkedStops.includes(0)}
                    onChange={handleStopsChange}
                  />
                  <StopsCheckbox
                    label="1 Stop"
                    value={1}
                    checked={checkedStops.includes(1)}
                    onChange={handleStopsChange}
                  />
                  <StopsCheckbox
                    label="2 Stop"
                    value={2}
                    checked={checkedStops.includes(2)}
                    onChange={handleStopsChange}
                  />
                </div>
              </div>

              <div>
                <div className="relative z-[0] inline-block h-[25px] !bg-clip-text pb-[10px] text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] mq1325:text-base">
                  Departure from {ConvertCapitalFirstLetter(selectedFromCity)}
                </div>
                <div className="flex flex-col items-start justify-start gap-3 self-stretch text-base">
                  <DepartureCheckbox
                    label="00 - 06"
                    value="00 - 06"
                    checked={checkedDepartureFrom.includes('00 - 06')}
                    onChange={handlecDepartureFromChange}
                  />
                  <DepartureCheckbox
                    label="06 - 12"
                    value="06 - 12"
                    checked={checkedDepartureFrom.includes('06 - 12')}
                    onChange={handlecDepartureFromChange}
                  />
                  <DepartureCheckbox
                    label="12 - 18"
                    value="12 - 18"
                    checked={checkedDepartureFrom.includes('12 - 18')}
                    onChange={handlecDepartureFromChange}
                  />
                  <DepartureCheckbox
                    label="18 - 24"
                    value="18 - 24"
                    checked={checkedDepartureFrom.includes('18 - 24')}
                    onChange={handlecDepartureFromChange}
                  />
                </div>
              </div>
              <div>
                <div className="relative z-[0] inline-block h-[25px] !bg-clip-text pb-[10px] text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] mq1325:text-base">
                  Airlines From
                </div>
                <div className="flex flex-col items-start justify-start gap-3 self-stretch text-base">
                  {filteredAirlines.map((airline) => (
                    <div
                      key={airline.iataCode}
                      className="flex flex-row items-start justify-start gap-4 self-stretch"
                    >
                      <input
                        type="checkbox"
                        name="airlinesFromInput[]"
                        value={airline.iataCode}
                        checked={checkedAirlines.includes(airline.iataCode)}
                        onChange={handleFilterChange}
                        className="relative z-[0] h-5 w-5"
                      />
                      <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[3px]">
                        <div className="relative z-[0] inline-block h-2.5">
                          {ConvertCapitalFirstLetter(airline.businessName)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            ''
          )}
        </div>
        {returnDate ? (
          <div className="flex w-full flex-col items-start justify-between">
            <div className="flex w-full flex-col items-start justify-between gap-5">
              <div className="flex flex-row items-start justify-between self-stretch text-blue-2">
                {/* <div className="box-border flex w-[147px] flex-col items-start justify-start px-0 pb-0 pt-1.5">
                  <div className="flex flex-col items-start justify-start gap-[25px] self-stretch"> */}
                <div className="relative z-[0] inline-block text-xl font-medium mq1325:text-base">
                  Return Journey
                </div>
                {/* </div>
                </div> */}

                <img
                  className="relative h-6 min-h-[24px] w-6 cursor-pointer"
                  alt=""
                  src={
                    isArrowUpReturn ? 'ararrow_up.svg' : 'arrowdown-grey.svg'
                  } // Toggle arrow icon based on state
                  onClick={toggleArrowReturn} // Toggle arrow state on click
                />
              </div>
              {isArrowUpReturn ? (
                <>
                  <div>
                    <div className="relative z-[0] inline-block h-[25px] !bg-clip-text pb-[10px] text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] mq1325:pt-5 mq1325:text-base">
                      Stops
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[10px] self-stretch text-base">
                      <StopsCheckbox
                        label="Non - Stops"
                        value={0}
                        checked={checkedReturnStops.includes(0)}
                        onChange={handleStopsReturnChange}
                      />
                      <StopsCheckbox
                        label="1 Stop"
                        value={1}
                        checked={checkedReturnStops.includes(1)}
                        onChange={handleStopsReturnChange}
                      />
                      <StopsCheckbox
                        label="2 Stop"
                        value={2}
                        checked={checkedReturnStops.includes(2)}
                        onChange={handleStopsReturnChange}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative z-[0] inline-block h-[25px] !bg-clip-text pb-[10px] text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] mq1325:text-base">
                      Departure from {ConvertCapitalFirstLetter(selectedToCity)}
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[10px] self-stretch text-base">
                      <DepartureCheckbox
                        label="00 - 06"
                        value="00 - 06"
                        checked={checkedReturnDepartureFrom.includes('00 - 06')}
                        onChange={handleReturnDepartureFromChange}
                      />
                      <DepartureCheckbox
                        label="06 - 12"
                        value="06 - 12"
                        checked={checkedReturnDepartureFrom.includes('06 - 12')}
                        onChange={handleReturnDepartureFromChange}
                      />
                      <DepartureCheckbox
                        label="12 - 18"
                        value="12 - 18"
                        checked={checkedReturnDepartureFrom.includes('12 - 18')}
                        onChange={handleReturnDepartureFromChange}
                      />
                      <DepartureCheckbox
                        label="18 - 24"
                        value="18 - 24"
                        checked={checkedReturnDepartureFrom.includes('18 - 24')}
                        onChange={handleReturnDepartureFromChange}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative z-[0] inline-block h-[25px] !bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] mq1325:text-base">
                      Airlines From
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[10px] self-stretch text-base">
                      {filteredReturnAirlines.map((airline) => (
                        <div
                          key={airline.iataCode}
                          className="flex flex-row items-start justify-start gap-[10px] self-stretch"
                        >
                          <input
                            type="checkbox"
                            name="airlinesReturnFromInput[]"
                            value={airline.iataCode}
                            checked={checkedReturnAirlines.includes(
                              airline.iataCode,
                            )}
                            onChange={handleReturnFilterChange}
                            className="relative z-[0] h-5 w-5"
                          />
                          <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[3px]">
                            <div className="relative z-[0] inline-block h-2.5">
                              {ConvertCapitalFirstLetter(airline.businessName)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                ''
              )}
            </div>
          </div>
        ) : (
          ''
        )}
        {(isArrowUp != false || isArrowUpReturn != false) && (
          <button
            onClick={applyFilters}
            className="mt-4 cursor-pointer rounded-md bg-blue-2 px-4 py-2 text-white"
          >
            Apply Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchFiltersSidebar;
