import { useEffect, useRef, useState } from 'react';
import SearchController from '@/controllers/search.controller';
import { RootState } from '@/store/slices/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSeatMapResults,
  setSelectedSeats,
  setDepartureSeats,
} from '@/store/slices/seatMapSlice';
import { Tooltip } from '@nextui-org/tooltip';
import { toast } from 'react-toastify';
import { ChildCareRounded } from '@mui/icons-material';
interface Seat {
  number: string;
  cabin: string;
  travelerPricing: {
    travelerId: string;
    seatAvailabilityStatus: string;
    price: {
      currency: string;
      total: string;
    };
  }[];
  coordinates: {
    x: number;
    y: number;
  };
  characteristicsCodes: string[];
}
const currencyRates = {
  USD: 1.09,
  EUR: 1,
  INR: 95,
};

function Seatmaps() {
  const resultRow = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();
  const seatContainerRef = useRef<HTMLDivElement>(null);
  const selectedCurrency = useSelector(
    (state: RootState) => state.currency.selectedCurrency,
  ) as keyof typeof currencyRates;
  const { adult, children, infants } = useSelector(
    (state: RootState) => state.search,
  ) as {
    adult: number;
    children: number;
    infants: number;
    resultRow: any;
    flightOffersPricing: any;
  };

  const totalSeatsAllowed = adult + children + infants;

  const scrollLeft = () => {
    if (seatContainerRef.current) {
      seatContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (seatContainerRef.current) {
      seatContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };
  // const seatMapResult = useSelector((state: RootState) => state.seatmap);
  const { seatMapResult, selectedSeats } = useSelector(
    (state: RootState) => state.seatmap,
  ) as unknown as {
    seatMapResult: any[]; // Use any[] or a more specific type if known
    selectedSeats: any;
    returnDate: any;
  };

  const fetchSeatMap = async () => {
    try {
      // Call API
      const response = await SearchController.getSeatMaps(resultRow.resultRow);

      if (response && response.data && response.data) {
        console.log('seat maps frontend', response.data);
        return response.data;
      } else {
        // Handle the case where the response is not as expected
        console.error('Unexpected response structure-seat map:', response);
        return [];
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchSeatMap().then((response) => {
      dispatch(setSeatMapResults(response.data));
    });
  }, []);

  const seats: Seat[] =
    seatMapResult && seatMapResult && seatMapResult[0]?.decks[0]?.seats
      ? seatMapResult[0].decks[0].seats
      : [];

  // const [selectedSeats, setSelectedSeats] = useState<any[]>([]);
  const departureSeats = useSelector(
    (state: RootState) => state.seatmap.departureSeats,
  );

  const handleCheckboxChange = async (seat: Seat) => {
    const isSelected = departureSeats.includes(seat.number);
    const updatedSeats: string[] = isSelected
      ? departureSeats.filter((s: string) => s !== seat.number)
      : [...departureSeats, seat.number];

    if (!isSelected && departureSeats.length >= totalSeatsAllowed) {
      toast.warn(`You can't select more than ${totalSeatsAllowed} seats.`);
      return; // Prevent selecting more seats
    }

    await dispatch(setDepartureSeats(updatedSeats));

    if (departureSeats) {
      console.log('departureseats', departureSeats);
    }
    if (isSelected) {
      toast.warning(`You deselected seat ${seat.number}.`);
    } else {
      toast.success(
        `You selected seat ${seat.number}. | ${selectedCurrency} ${(parseFloat(seat.travelerPricing[0]?.price?.total) * currencyRates[selectedCurrency]).toFixed(2)}`,
      );
    }
  };

  // Function to generate seat map dynamically
  const generateSeatMap = () => {
    if (!seats.length) return null;

    // Extract unique rows and columns
    const rows: Record<string, Record<string, Seat>> = {};
    seats.forEach((seat) => {
      if (seat.number && typeof seat.number === 'string') {
        const matchRow = seat.number.match(/^\d+/);
        const matchCol = seat.number.match(/[A-Z]+/);
        if (matchRow && matchCol) {
          const row = matchRow[0];
          const col = matchCol[0];
          if (!rows[row]) rows[row] = {};
          rows[row][col] = seat;
        }
      }
    });

    // Determine maximum rows and columns
    const maxRows = Object.keys(rows).length;
    const maxCols = Math.max(
      ...Object.values(rows).map((row) => Object.keys(row).length),
    );

    // Generate JSX for each row and column
    const rowsJSX = [];
    for (let i = 1; i <= maxRows; i++) {
      const colsJSX = [];
      for (let j = 1; j <= maxCols; j++) {
        const seat = rows[i]?.[String.fromCharCode(64 + j)];
        if (seat) {
          let seatType = String.fromCharCode(64 + j);
          if (
            String.fromCharCode(64 + j) == 'A' ||
            String.fromCharCode(64 + j) == 'F'
          ) {
            seatType = 'Window Seat';
          } else if (
            String.fromCharCode(64 + j) == 'B' ||
            String.fromCharCode(64 + j) == 'E'
          ) {
            seatType = 'Middle Seat';
          } else seatType = 'Aisle Seat';

          colsJSX.push(
            <div
              key={`${i}-${j}`}
              className="flex flex-col items-start justify-start gap-1 pb-0 pl-0 pr-1.5 pt-2"
            >
              {seat && (
                <>
                  {seat.travelerPricing[0]?.seatAvailabilityStatus ===
                  'AVAILABLE' ? (
                    <>
                      {seat ? (
                        seat.travelerPricing[0]?.price ? (
                          <Tooltip
                            content={`${i}${String.fromCharCode(64 + j) + ' ' + seatType} | ${seat.travelerPricing[0]?.price?.currency} ${seat.travelerPricing[0]?.price?.total}`}
                            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-900 shadow-sm"
                          >
                            <div
                              key={`${i}-${j}`}
                              // onClick={()=>}
                              className={`relative z-[1] h-6 w-6 cursor-pointer rounded-10xs text-lg text-white ${
                                departureSeats.includes(seat.number)
                                  ? 'bg-green-500'
                                  : 'bg-gray-100'
                              }`}
                            >
                              {' '}
                              <input
                                type="checkbox"
                                onChange={() => handleCheckboxChange(seat)}
                                checked={departureSeats.includes(seat.number)}
                                className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
                              />
                            </div>
                          </Tooltip>
                        ) : (
                          <Tooltip
                            content={`${i}${String.fromCharCode(64 + j) + ' ' + seatType} | $ 0`}
                            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-900 shadow-sm"
                          >
                            <div className="relative z-[1] h-6 w-6 cursor-pointer rounded-10xs bg-lavender-100">
                              <input
                                type="checkbox"
                                onChange={() => handleCheckboxChange(seat)}
                                className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
                              />
                            </div>
                          </Tooltip>
                        )
                      ) : null}
                    </>
                  ) : (
                    <Tooltip
                      content="Sorry! This seat is taken."
                      className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-900 shadow-sm"
                    >
                      <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                        <div className="absolute left-[0px] top-[0px] h-full w-full cursor-pointer rounded-10xs bg-whitesmoke-200" />
                        <img
                          className="left-[calc(50% - 10px)] absolute bottom-[20.83%] top-[20.83%] z-[1] ml-1 h-[58.33%] max-h-full w-3.5 cursor-pointer"
                          alt=""
                          src="/vector-1.svg"
                        />
                      </div>
                    </Tooltip>
                  )}
                </>
              )}
            </div>,
          );
        }
      }

      if (colsJSX.length > 0) {
        rowsJSX.push(
          <div
            key={i}
            className="flex flex-col items-start justify-start gap-1 pb-0 pl-0 pr-1.5 pt-2"
          >
            {colsJSX}
            <div className="relative z-[1] inline-block h-[9px] min-w-[10px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
              {i}
            </div>
          </div>,
        );
      }
    }

    return rowsJSX; // Return array of JSX rows
  };

  return (
    <>
      <div className="relative">
        <img
          className="absolute left-[-30px] top-[150px] z-[1] !m-[0] h-9 w-9 cursor-pointer"
          loading="lazy"
          alt="Left Arrow"
          src="/vuesaxbulkarrowleft1.svg"
          onClick={scrollLeft}
        />
        <div
          ref={seatContainerRef}
          className="custom-scrollbar relative box-border flex max-w-[869px] flex-row items-start justify-start self-stretch px-1 py-0"
        >
          <div className="relative box-border flex flex-1 flex-col items-end justify-start gap-[8px] rounded-3xs border-[1px] border-solid border-grey-6 bg-white px-0 pb-3.5 pt-[15px]">
            <div className="relative z-[0] box-border hidden h-[376px] self-stretch rounded-3xs border-[1px] border-solid border-grey-6 bg-white" />
            <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-5 pb-[7px] pt-0">
              <div className="flex w-[377px] max-w-full flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
                <div className="flex flex-row items-start justify-start gap-[10px]">
                  <div className="relative z-[1] h-4 w-4 rounded-10xs bg-whitesmoke-200">
                    <div className="absolute left-[0px] top-[0px] h-full w-full rounded-10xs bg-whitesmoke-200" />
                    <img
                      className="left-[calc(50% - 10px)] absolute bottom-[20.83%] top-[20.83%] z-[1] ml-1 h-[58.33%] max-h-full cursor-pointer"
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                  <div className="relative z-[1] inline-block h-[9px] min-w-[30px] whitespace-nowrap text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                    Not Available
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[10px]">
                  <div className="relative z-[1] h-4 w-4 rounded-10xs bg-lavender-100" />
                  <div className="flex flex-col items-start justify-start px-0 pb-0 pt-0">
                    <div className="relative z-[1] inline-block h-[9px] min-w-[27px] whitespace-nowrap text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                      Free
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-start justify-start gap-[10px]">
                  <div className="relative z-[1] h-4 w-4 rounded-10xs bg-gray-100" />
                  <div className="flex flex-col items-start justify-start px-0 pb-0 pt-0">
                    <div className="relative z-[1] inline-block h-[9px] min-w-[84px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                      {/* ₹400 - ₹1,500 */}
                      Paid
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border flex h-1.5 max-w-full flex-row items-start justify-start self-stretch px-0 pb-[5px] pt-0">
              <div className="relative z-[1] box-border max-w-full flex-1 self-stretch border-t-[1px] border-solid border-grey-6" />
            </div>
            <div className="flex w-[763px] max-w-full flex-col items-end justify-start gap-[15.5px]"></div>
            <div className="box-border flex max-w-full flex-col items-end justify-start gap-[20px] px-0 pb-1.5 pt-0">
              <div className="box-border flex max-w-full flex-col items-end justify-start gap-[20px] self-stretch px-0 pb-1.5 pt-0">
                <div className="flex flex-row items-start justify-start gap-[14px] mq1050:flex-wrap">
                  <div className="flex flex-col items-start justify-start gap-10 pb-0 pl-0 pr-1.5 pt-2">
                    <div className="relative z-[1] inline-block h-[9px] min-w-[10px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                      A
                    </div>
                    <div className="relative z-[1] inline-block h-[9px] min-w-[10px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                      B
                    </div>
                    <div className="relative z-[1] inline-block h-[9px] min-w-[10px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                      C
                    </div>
                    <div className="relative z-[1] inline-block h-[9px] min-w-[10px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                      D
                    </div>
                    <div className="relative z-[1] inline-block h-[9px] min-w-[10px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                      F
                    </div>
                  </div>
                  {generateSeatMap()}{' '}
                  {/* Render dynamically generated seat map */}
                </div>
              </div>
            </div>
            <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-[50px] py-0 mq750:box-border mq750:pl-[25px] mq750:pr-[25px]">
              <div className="flex w-[577px] max-w-full flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                <button className="z-[1] flex cursor-pointer flex-row items-start justify-start gap-[4px] rounded-8xs bg-whitesmoke-300 px-[23.5px] py-1 [border:none] hover:bg-gainsboro-200">
                  <img
                    className="relative hidden h-4 min-h-[16px] w-4 object-contain"
                    alt=""
                    src="/avatar@2x.png"
                  />
                  <b className="relative inline-block min-w-[23px] text-left font-kanit text-3xs leading-[16px] tracking-[0.4px] text-grey-3">
                    EXIT
                  </b>
                </button>
                <div className="z-[1] flex flex-row items-start justify-start gap-[4px] overflow-x-auto rounded-8xs bg-whitesmoke-300 py-1 pl-2 pr-[7px]">
                  <img
                    className="relative hidden h-4 min-h-[16px] w-4 shrink-0 object-contain"
                    alt=""
                    src="/avatar1@2x.png"
                  />
                  <div className="box-border flex h-3.5 flex-col items-start justify-start px-0 pb-0 pt-0.5">
                    <img
                      className="relative h-3 w-3 object-contain"
                      alt=""
                      src="/vuesaxbulkarrowup-2.svg"
                    />
                  </div>
                  <b className="relative inline-block min-w-[23px] text-left font-kanit text-3xs leading-[16px] tracking-[0.4px] text-brown">
                    EXIT
                  </b>
                  <div className="box-border flex h-3.5 flex-col items-start justify-start px-0 pb-0 pt-0.5">
                    <img
                      className="relative h-3 w-3 object-contain"
                      alt=""
                      src="/vuesaxbulkarrowup-2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute bottom-[164px] right-[-18px] top-[150px] z-[2] !m-[0] h-9 w-9 cursor-pointer bg-white"
          loading="lazy"
          alt="Right Arrow"
          src="/vuesaxbulkarrowright1.svg"
          onClick={scrollRight}
        />
      </div>
    </>
  );
}
export default Seatmaps;
