import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/slices/store';
import usePagination from '@/components/usePagination';
import { useRouter } from 'next/router';
import {
  setSearchResults,
  setResultRow,
  setResultRowReturn,
} from '@/store/slices/searchSlice';
import { ConvertCapitalFirstLetter } from '@/utils/stringUtils';
import { ExtractTimeFromISO, FormatDuration } from '@/utils/dateUtils';
import {
  setReturnSelectedSeats,
  setSelectedSeats,
} from '@/store/slices/seatMapSlice';
import { setTotalAmount } from '@/store/slices/totalAmountSlice';

const SearchResultRow: NextPage = () => {
  const router = useRouter(); // Initialize useRouter
  const {
    selectedFromCity,
    selectedToCity,
    results,
    resultRow,
    resultRowReturn,
  } = useSelector((state: RootState) => state.search) as {
    selectedFromCity: string;
    selectedToCity: string;
    results: any[];
    resultRow: any;
    resultRowReturn: any;
  };

  const currencyRates = {
    USD: 1.09,
    EUR: 1,
    INR: 95,
  };
  const dispatch = useDispatch();

  const selectedCurrency = useSelector(
    (state: RootState) => state.currency.selectedCurrency,
  ) as keyof typeof currencyRates;

  const handleRadioChange = (selectedId: string) => {
    const selectedData = results.find(
      (resultData) => resultData.id === selectedId,
    );

    if (selectedData) {
      dispatch(setResultRow(selectedData));
      localStorage.setItem('resultRow', JSON.stringify(selectedData));

      console.log('selecteddata-departure', selectedData);
      console.log('departure price', selectedData.price.total);

      // Ensure price values are numbers
      const departurePrice = Number(selectedData.price.total);
      const returnPrice = Number(resultRowReturn?.price?.total || 0);

      // Calculate the total and update Redux
      const newTotal = departurePrice + returnPrice;
      dispatch(setTotalAmount(newTotal));
    }
  };

  const handleRadioReturnChange = (selectedId: string) => {
    const selectedData = results.find(
      (resultData) => resultData.id === selectedId,
    );

    if (selectedData) {
      dispatch(setResultRowReturn(selectedData));
      localStorage.setItem('returnData', JSON.stringify(selectedData));

      console.log('selectedreturndata-departure', selectedData);
      console.log('return price', selectedData.price.total);

      // Ensure price values are numbers
      const returnPrice = Number(selectedData.price.total);
      const departurePrice = Number(resultRow?.price?.total || 0);

      // Calculate the total and update Redux
      const newTotal = departurePrice + returnPrice;
      dispatch(setTotalAmount(newTotal));
    }
  };

  interface ResultData {
    id: string;
    itineraries: any[]; // Replace 'any' with the actual type if known
    airlinesFrom: {
      logo: string;
      businessName: string;
    };
    airlinesTo: {
      logo: string;
      businessName: string;
    };
    price: {
      currency: string;
      total: number;
    };
  }
  const createBooking = async (selectedId: string) => {
    handleRadioChange(selectedId);
    dispatch(setReturnSelectedSeats([]));
    dispatch(setSelectedSeats([]));
    router.push({
      pathname: '/review-itinerary',
    });
  };
  const { currentData } = usePagination() as { currentData: any };
  return (
    <>
      {Array.isArray(results) && results.length > 0 ? (
        <div className="flex max-w-full flex-col items-start justify-start gap-[28px] self-stretch text-grey-2">
          {currentData.map((resultData: ResultData) =>
            resultData.itineraries.length == 1 ? (
              <>
                <div
                  key={resultData.id}
                  className="flex max-w-full flex-row flex-wrap items-start justify-between gap-[21px] self-stretch"
                >
                  <div className="flex w-full max-w-full flex-col items-start justify-start gap-[28px] self-stretch">
                    <div
                      className={`flex flex-row items-center justify-around gap-7 self-stretch rounded-3xs border-[0.7px] border-solid border-grey-6 bg-white py-[10px] text-left font-kanit text-5xl text-blue-2`}
                    >
                      <div className="flex shrink-0 flex-col items-start justify-start gap-[6px]">
                        <div className="flex flex-row items-start justify-between gap-[20px] self-stretch">
                          {/* <img
                            className="relative h-10 w-[60px] shrink-0 overflow-hidden"
                            alt=""
                            src={resultData.airlinesFrom.logo}
                          /> */}
                        </div>
                        {/* <div className="flex flex-row items-start justify-start py-0  text-sm"> */}
                        <div className="relative inline-block h-4 min-w-[40px] font-kanit text-sm">
                          {resultData.airlinesFrom.businessName}
                        </div>
                        {/* </div> */}
                        <div className="flex flex-row items-start justify-start px-[9px] py-0 text-xs text-grey-4">
                          <div className="relative inline-block min-w-[42px] font-light">
                            {resultData.itineraries[0].segments[0].carrierCode
                              ? resultData.itineraries[0].segments[0]
                                  .carrierCode
                              : ''}{' '}
                            -
                            {resultData.itineraries[0].segments[0].number
                              ? resultData.itineraries[0].segments[0].number
                              : ''}
                          </div>
                        </div>
                      </div>

                      {/* <div className="flex flex-col items-start justify-start px-0 pb-0"> */}
                      <div className="relative inline-block min-w-[59px] whitespace-nowrap font-light">
                        {ExtractTimeFromISO(
                          resultData.itineraries[0].segments[0].departure.at,
                        )}
                      </div>
                      {/* </div> */}

                      <div className="box-border flex w-[164px] shrink-0 flex-col items-start justify-start px-0 pb-0 pt-[18px] text-center text-sm text-grey-3">
                        <div className="flex flex-col items-center justify-center gap-[9.5px] self-stretch">
                          {/* <div className="flex flex-row items-start justify-start py-0 px-[62px]"> */}
                          <div className="relative inline-block min-w-[65px] text-base font-light">
                            {FormatDuration(resultData.itineraries[0].duration)}
                          </div>
                          {/* </div> */}
                          <div className="relative box-border h-px self-stretch border-t-[1px] border-solid border-grey-5" />
                          {/* <div className="flex flex-row items-start justify-start py-0 px-20 text-left text-xs text-grey-4"> */}
                          {/* <Tooltip content={`Test | Hello`} className="px-3 py-2 text-sm font-bold  text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm"> */}
                          <div className="relative inline-block min-w-[65px] text-xs font-light text-grey-4">
                            {resultData.itineraries[0].segments.length > 0
                              ? resultData.itineraries[0].segments.length -
                                1 +
                                ' Stop'
                              : 'Non-stop'}
                          </div>
                          {/* </Tooltip> */}
                          {/* </div> */}
                        </div>
                      </div>
                      {/* <div className="flex flex-col items-start justify-start pt-[29px] pb-0 pr-[7px] pl-0"> */}
                      <div className="relative inline-block min-w-[58px] whitespace-nowrap font-kanit font-light">
                        {ExtractTimeFromISO(
                          resultData.itineraries[0].segments[0].arrival.at,
                        )}
                      </div>
                      {/* </div> */}
                      {/* <div className="flex flex-col items-start justify-start pt-[29px] pb-0 pr-[7px] pl-0"> */}
                      <div className="relative inline-block min-w-[70px] whitespace-nowrap font-kanit font-medium">
                        {selectedCurrency +
                          ' ' +
                          (
                            resultData.price.total *
                            currencyRates[selectedCurrency]
                          ).toFixed(2)}
                      </div>
                      {/* </div> */}
                      {/* <div className="flex flex-col items-start justify-start pt-[17px] pb-0 pr-[7px] pl-0"> */}
                      <button
                        onClick={() => createBooking(resultData.id)}
                        className="cursor-pointer overflow-hidden rounded-3xs bg-blue-2 px-[34px] py-2.5 font-kanit text-sm text-white [border:none]"
                      >
                        {/* <div className="flex flex-row items-start justify-start gap-[8px]">
                            <div className="relative text-sm leading-[20px] font-semibold font-kanit text-white text-center inline-block min-w-[65px]"> */}
                        Book Now
                        {/* </div>
                          </div> */}
                      </button>
                      {/* </div> */}
                      <div className="text-basic-forms-checkbox-check-icon-soft-active-color text-base">
                        <input
                          type="radio"
                          name="flightDetails[]"
                          className="relative z-[0] h-5 w-5"
                          checked={resultRow?.id === resultData.id}
                          onChange={() => handleRadioChange(resultData.id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div
                key={resultData.id}
                className="flex min-w-[452px] flex-col flex-wrap items-start justify-start gap-[21px] self-stretch text-left font-kanit text-5xl text-blue-2 lg:flex-row"
              >
                {/* First Box (Side 1) */}
                <div className="z-[0] box-border flex min-h-[93px] w-[452px] max-w-full flex-1 flex-row items-center justify-between gap-[32px] rounded-3xs border-[1px] border-solid border-grey-6 bg-white">
                  {/* <div className="flex max-w-[60px] items-center gap-[32px]"> */}
                  <div className="flex h-[73px] min-w-[60px] shrink-0 flex-col items-start justify-between">
                    {/* <div className="flex flex-row items-center justify-center gap-[20px]"> */}
                    {/* <div className="flex flex-col items-start justify-between self-stretch"> */}
                    <div className="flex w-full items-center justify-center">
                      <img
                        className="relative z-[1] h-[40px] w-[60px] shrink-0 overflow-hidden pl-1"
                        alt=""
                        src={resultData.airlinesFrom.logo}
                      />
                    </div>
                    <div className="flex flex-col pl-[9px]">
                      {/* <div className="flex flex-row items-start justify-start px-[9px] py-0 text-sm"> */}
                      <div className="border-box relative z-[1] inline-block text-[13px] font-normal">
                        {ConvertCapitalFirstLetter(
                          resultData.airlinesFrom.businessName,
                        )}
                      </div>
                      {/* </div> */}
                      {/* <div className="flex flex-row items-start justify-start px-[9px] py-0 text-xs text-grey-4"> */}
                      <div className="relative z-[1] inline-block min-w-[42px] text-xs font-light">
                        {resultData.itineraries[0].segments[0].carrierCode} -{' '}
                        {resultData.itineraries[0].segments[0].number}
                      </div>
                      {/* </div> */}
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                  </div>

                  <div className="flex w-[187px] items-center justify-between">
                    {/* <div className="flex flex-col items-start justify-start px-0 pb-0"> */}
                    <div className="text-2xl relative z-[1] inline-block min-w-[56px] whitespace-nowrap font-light">
                      {ExtractTimeFromISO(
                        resultData.itineraries[0].segments[0].departure.at,
                      )}
                    </div>
                    {/* </div> */}
                    {/* Right Side of the Second Box */}
                    {/* <div className="box-border w-[155px] shrink-0 px-0 pb-0 text-center text-sm text-grey-3"> */}
                    {/* <div className="flex flex-row items-center justify-between gap-[10px]"> */}
                    <div className="flex max-w-[56px] flex-1 flex-col items-center justify-between gap-[10px]">
                      {/* <div className="self-stretch flex flex-col items-end justify-start gap-[9px]"> */}
                      {/* <div className="flex flex-row items-start justify-end py-0 pr-2 pl-[9px]"> */}
                      <div className="relative z-[1] inline-block h-[9px] w-14 pb-2 text-sm font-light text-grey">
                        {FormatDuration(resultData.itineraries[0].duration)}
                      </div>
                      {/* </div> */}
                      <div className="relative z-[1] box-border h-px self-stretch border-t-[1px] border-solid border-grey-5" />
                      {/* </div> */}
                      {/* <div className="py-0 pr-[3px] pl-1 text-left text-xs text-grey-4"> */}
                      <div className="relative z-[1] inline-block min-w-[55px] text-xs font-light">
                        {resultData.itineraries[0].segments.length > 0
                          ? resultData.itineraries[0].segments.length -
                            1 +
                            ' Stop'
                          : 'Non-stop'}
                      </div>
                      {/* </div> */}
                    </div>
                    {/* <div className="flex flex-col items-start justify-start px-0 pb-0 text-left text-5xl text-blue-2"> */}
                    <div className="text-2xl relative z-[1] inline-block min-w-[56px] whitespace-nowrap font-light">
                      {ExtractTimeFromISO(
                        resultData.itineraries[0].segments[0].arrival.at,
                      )}
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                    {/* </div> */}
                  </div>

                  {/* Price and Radio Button */}
                  <div className="w-[70px]">
                    <div className="px-2 py-0 text-xs text-red">
                      {/* <div className="h-[9px] relative inline-block min-w-[62px] z-[1]"> */}
                      2 seat left
                      {/* </div> */}
                    </div>
                    <div className="z-[1] inline-block whitespace-nowrap text-lg font-medium">
                      {/* {resultData.price.currency + ' ' + resultData.price.total} */}
                      {/* ₹{' '}
                      {typeof resultData.price.total === 'number'
                        ? (resultData.price.total * 90)?.toFixed(2)
                        : (Number(resultData.price.total) * 90)?.toFixed(2)} */}
                      {selectedCurrency +
                        ' ' +
                        (
                          resultData.price.total *
                          currencyRates[selectedCurrency]
                        ).toFixed(2)}
                    </div>
                  </div>

                  {/* checkbox */}
                  <div className="text-basic-forms-checkbox-check-icon-soft-active-color">
                    <input
                      id="from-checkbox"
                      type="radio"
                      name="flightDetails[]"
                      className="relative z-[0] h-5 w-5"
                      checked={resultRow?.id === resultData.id}
                      onChange={() => handleRadioChange(resultData.id)}
                    />
                  </div>
                  {/* </div> */}
                </div>

                {/* Second Box (Side 2) */}
                <div className="z-[0] box-border flex min-h-[93px] w-[452px] max-w-full flex-1 flex-row items-center justify-between gap-[32px] rounded-3xs border-[1px] border-solid border-grey-6 bg-white">
                  {/* <div className="flex max-w-[60px] items-center gap-[32px]"> */}
                  <div className="flex h-[73px] min-w-[60px] shrink-0 flex-col items-start justify-between">
                    {/* <div className="flex flex-row items-center justify-center gap-[20px]"> */}
                    {/* <div className="flex flex-col items-start justify-between self-stretch"> */}
                    <div className="flex w-full items-center justify-center">
                      <img
                        className="relative z-[1] h-[40px] w-[60px] shrink-0 overflow-hidden pl-1"
                        alt=""
                        src={resultData.airlinesTo.logo}
                      />
                    </div>
                    <div className="flex flex-col pl-[9px]">
                      {/* <div className="flex flex-row items-start justify-start px-[9px] py-0 text-sm"> */}
                      <div className="border-box relative z-[1] inline-block text-[13px] font-normal">
                        {resultData.airlinesTo.businessName
                          ? ConvertCapitalFirstLetter(
                              resultData.airlinesTo.businessName,
                            )
                          : ''}
                      </div>
                      {/* </div> */}
                      {/* <div className="flex flex-row items-start justify-start px-[9px] py-0 text-xs text-grey-4"> */}
                      <div className="relative z-[1] inline-block min-w-[42px] text-xs font-light">
                        {resultData.itineraries[1].segments[0].carrierCode} -{' '}
                        {resultData.itineraries[1].segments[0].number}
                      </div>
                      {/* </div> */}
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                  </div>

                  <div className="flex w-[187px] items-center justify-between">
                    {/* <div className="flex flex-col items-start justify-start px-0 pb-0"> */}
                    <div className="text-2xl relative z-[1] inline-block min-w-[56px] whitespace-nowrap font-light">
                      {ExtractTimeFromISO(
                        resultData.itineraries[1].segments[0].departure.at,
                      )}
                    </div>
                    {/* </div> */}

                    {/* Right Side of the Second Box */}
                    {/* <div className="box-border w-[155px] shrink-0 px-0 pb-0 text-center text-sm text-grey-3"> */}
                    {/* <div className="flex flex-row items-center justify-between gap-[10px]"> */}
                    <div className="flex max-w-[56px] flex-1 flex-col items-center justify-between gap-[10px]">
                      {/* <div className="self-stretch flex flex-col items-end justify-start gap-[9px]"> */}
                      {/* <div className="flex flex-row items-start justify-end py-0 pr-2 pl-[9px]"> */}
                      <div className="relative z-[1] inline-block h-[9px] w-14 pb-2 text-sm font-light text-grey">
                        {FormatDuration(resultData.itineraries[1].duration)}
                      </div>
                      {/* </div> */}
                      <div className="relative z-[1] box-border h-px self-stretch border-t-[1px] border-solid border-grey-5" />
                      {/* </div> */}
                      {/* <div className="py-0 pr-[3px] pl-1 text-left text-xs text-grey-4"> */}
                      <div className="relative z-[1] inline-block min-w-[55px] text-xs font-light">
                        {resultData.itineraries[1].segments.length > 0
                          ? resultData.itineraries[1].segments.length -
                            1 +
                            ' Stop'
                          : 'Non-stop'}
                      </div>
                      {/* </div> */}
                    </div>
                    {/* <div className="flex flex-col items-start justify-start px-0 pb-0 text-left text-5xl text-blue-2"> */}
                    <div className="text-2xl relative z-[1] inline-block min-w-[56px] whitespace-nowrap font-light">
                      {ExtractTimeFromISO(
                        resultData.itineraries[1].segments[0].arrival.at,
                      )}
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                    {/* </div> */}
                  </div>

                  {/* Price and Radio Button */}
                  <div className="w-[70px]">
                    <div className="px-2 py-0 text-xs text-red">
                      {/* <div className="h-[9px] relative inline-block min-w-[62px] z-[1]"> */}
                      2 seat left
                      {/* </div> */}
                    </div>
                    <div className="z-[1] inline-block whitespace-nowrap text-lg font-medium">
                      {/* {resultData.price.currency + ' ' + resultData.price.total} */}
                      {/* ₹{' '}
                      {typeof resultData.price.total === 'number'
                        ? (resultData.price.total * 90).toFixed(2)
                        : (Number(resultData.price.total) * 90).toFixed(2)} */}
                      {selectedCurrency +
                        ' ' +
                        (
                          resultData.price.total *
                          currencyRates[selectedCurrency]
                        ).toFixed(2)}
                    </div>
                  </div>

                  {/* checkbox */}
                  <div className="text-basic-forms-checkbox-check-icon-soft-active-color">
                    <input
                      id="to-checkbox"
                      type="radio"
                      name="flightDetailsReturn[]"
                      className="relative z-[0] h-5 w-5"
                      checked={resultRowReturn?.id === resultData.id}
                      onChange={() => handleRadioReturnChange(resultData.id)}
                    />
                  </div>
                  {/* </div> */}
                </div>
              </div>
            ),
          )}
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default SearchResultRow;
