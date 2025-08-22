import type { NextPage } from 'next';
import Lime from './l-i-m-e';
import GroupComponent3 from './group-component3';
import ComparisonCollector from './comparison-collector';
import GroupComponent2 from './group-component2';
import GroupComponent1 from './group-component1';
import FrameComponent20 from './frame-component20';
import FrameComponent19 from './frame-component19';
import ReviewItineraryFromTo from '@/components/ReviewItineraryFromTo';
const FlightCards2: NextPage = () => {
  return (
    <div className="box-border flex flex-1 flex-col items-start justify-start gap-[64px] py-3 pl-0 pr-1 text-left font-kanit text-5xl text-blue-2 mq1050:max-w-full mq1050:gap-[32px_64px] mq450:gap-[16px_64px]">
      {/* <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px_40px]"> */}
      <div className="box-border flex max-w-full flex-row flex-wrap items-start justify-start gap-[4px] self-stretch px-0 pb-3 pt-0">
        <div className="box-border flex min-w-[573px] max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-1.5 mq750:min-w-full">
          <h2 className="relative m-0 inline-block h-[15px] self-stretch text-left font-kanit text-5xl font-medium leading-[110.3%] text-blue-2 mq450:text-lgi mq450:leading-[21px]">
            <ol className="m-0 pl-8 font-inherit text-inherit">
              <li>Choose add-ons</li>
            </ol>
          </h2>
        </div>
        <img
          className="relative h-6 w-6"
          alt=""
          src="/vuesaxlineararrowdown-2.svg"
        />
      </div>
      <div className="flex max-w-full flex-col items-start justify-start self-stretch">
        <div className="flex flex-row items-start justify-start self-stretch overflow-hidden rounded-b-none rounded-t-3xs px-10 py-[18px] [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca]">
          <b className="relative inline-block min-w-[95px] text-left font-kanit text-xl leading-[110.3%] text-blue-2 mq450:text-base mq450:leading-[18px]">
            Departure
          </b>
        </div>
        <div className="box-border flex max-w-full flex-col items-start justify-start gap-[45.5px] self-stretch rounded-b-3xs rounded-t-none border-b-[1px] border-l-[1px] border-r-[1px] border-solid border-grey-6 px-[19px] py-5 mq450:gap-[23px_45.5px]">
          <ReviewItineraryFromTo
            airlineLogo=""
            airlineName=""
            airlineCode=""
            airlineNumber=""
            departureCity="Rajkot, IN"
            departureTime="19:20"
            departureDate="Wed, 3 Jan 2024"
            departureAirport="Rajkot Greenfield International Airport, Hirasar, Terminal"
            arrivalCity="Mumbai, IN"
            departureTerminal="1"
            arrivalTerminal="1"
            arrivalTime="20:25"
            arrivalDate="Sat, 6 Jan 2024"
            arrivalAirport="Chatrapati Shivaji Airport, Mumbai, Terminal 2"
            duration="1h 15m"
            flightType="Non-stop"
            price="500"
          />

          <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-8 py-0">
            <div className="relative box-border flex max-w-full flex-1 flex-col items-end justify-start gap-[8px] rounded-3xs border-[1px] border-solid border-grey-6 bg-white px-0 pb-3.5 pt-[15px]">
              <div className="relative z-[0] box-border hidden h-[376px] self-stretch rounded-3xs border-[1px] border-solid border-grey-6 bg-white" />
              <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-5 pb-[7px] pt-0">
                <div className="flex w-[577px] max-w-full flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <input
                      className="relative z-[1] m-0 h-4 w-4 rounded-10xs"
                      type="checkbox"
                    />
                    <div className="flex flex-col items-start justify-start px-0 pb-0 pt-1">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[27px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        Free
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <input
                      className="relative z-[1] m-0 h-4 w-4 rounded-10xs"
                      type="checkbox"
                    />
                    <div className="flex flex-col items-start justify-start px-0 pb-0 pt-1">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[23px] whitespace-nowrap text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        ₹99
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <div className="relative z-[1] h-4 w-4 rounded-10xs bg-lightsteelblue-200" />
                    <div className="flex flex-col items-start justify-start px-0 pb-0 pt-1">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[27px] whitespace-nowrap text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        ₹150
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <div className="relative z-[1] h-4 w-4 rounded-10xs bg-cornflowerblue" />
                    <div className="flex flex-col items-start justify-start px-0 pb-0 pt-1">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[30px] whitespace-nowrap text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        ₹250
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <div className="relative z-[1] h-4 w-4 rounded-10xs bg-palevioletred" />
                    <div className="flex flex-col items-start justify-start px-0 pb-0 pt-1">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[30px] whitespace-nowrap text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        ₹350
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <div className="relative z-[1] h-4 w-4 rounded-10xs bg-gray-100" />
                    <div className="flex flex-col items-start justify-start px-0 pb-0 pt-1">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[84px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        ₹400 - ₹1,500
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border flex h-1.5 max-w-full flex-row items-start justify-start self-stretch px-0 pb-[5px] pt-0">
                <div className="relative z-[1] box-border max-w-full flex-1 self-stretch border-t-[1px] border-solid border-grey-6" />
              </div>
              <div className="flex w-[763px] max-w-full flex-col items-end justify-start gap-[15.5px]">
                <div className="flex max-w-full flex-row items-start justify-start self-stretch">
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
                    <button className="z-[1] flex cursor-pointer flex-row items-start justify-start gap-[4px] overflow-x-auto rounded-8xs bg-whitesmoke-300 py-1 pl-2 pr-[7px] [border:none]">
                      <img
                        className="relative hidden h-4 min-h-[16px] w-4 shrink-0 object-contain"
                        alt=""
                        src="/avatar1@2x.png"
                      />
                      <div className="box-border flex h-3.5 flex-col items-start justify-start px-0 pb-0 pt-0.5">
                        <img
                          className="relative h-3 w-3"
                          alt=""
                          src="/vuesaxbulkarrowup.svg"
                        />
                      </div>
                      <b className="relative inline-block min-w-[23px] text-left font-kanit text-3xs leading-[16px] tracking-[0.4px] text-brown">
                        EXIT
                      </b>
                      <div className="box-border flex h-3.5 flex-col items-start justify-start px-0 pb-0 pt-0.5">
                        <img
                          className="relative h-3 w-3"
                          alt=""
                          src="/vuesaxbulkarrowup.svg"
                        />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="flex max-w-full flex-col items-end justify-start gap-[8px]">
                  <div className="flex max-w-full flex-row items-start justify-start gap-[52px] mq1050:flex-wrap mq750:gap-[52px_26px]">
                    <div className="flex max-w-full flex-row items-start justify-start gap-[14px] mq750:flex-wrap">
                      <div className="flex flex-col items-start justify-start pb-0 pl-0 pr-1.5 pt-2">
                        <div className="relative z-[1] inline-block h-[9px] min-w-[8px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                          F
                        </div>
                      </div>
                      <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                      <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                      <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                      <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                        <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                        <img
                          className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                          alt=""
                          src="/vector-1.svg"
                        />
                      </div>
                      <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                        <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                        <img
                          className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                          alt=""
                          src="/vector-1.svg"
                        />
                      </div>
                      <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                      <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                      <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                      <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[14px] mq450:flex-wrap">
                      <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                      <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                      <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                      <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                      <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                      <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                      <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                      <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[14px] mq1050:flex-wrap">
                    <div className="flex flex-col items-start justify-start pb-0 pl-0 pr-1.5 pt-2">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[8px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        E
                      </div>
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                      <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                      <img
                        className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                      <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                      <img
                        className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[14px] mq1050:flex-wrap">
                    <div className="flex flex-col items-start justify-start pb-0 pl-0 pr-1.5 pt-2">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[9px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        D
                      </div>
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                      <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                      <img
                        className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative h-7 w-6">
                      <div className="absolute left-[0px] top-[4px] z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                      <div className="absolute left-[0px] top-[0px] z-[2] h-6 w-6 rounded-10xs bg-palevioletred" />
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                  </div>
                </div>
                <div className="flex max-w-full flex-col items-start justify-start gap-[8px]">
                  <div className="flex flex-row items-start justify-center gap-[14px] mq1050:flex-wrap">
                    <div className="flex flex-col items-start justify-start pb-0 pl-0 pr-1.5 pt-2">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[9px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        C
                      </div>
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                      <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                      <img
                        className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                      <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                      <img
                        className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                      <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                      <img
                        className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                      <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                      <img
                        className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                      <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                      <img
                        className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                  </div>
                  <div className="flex flex-row items-start justify-center gap-[14px] mq1050:flex-wrap">
                    <div className="flex flex-col items-start justify-start pb-0 pl-0 pr-1.5 pt-2">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[9px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        B
                      </div>
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                      <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                      <img
                        className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                  </div>
                </div>
              </div>
              <div className="box-border flex max-w-full flex-col items-end justify-start gap-[20px] px-0 pb-1.5 pt-0">
                <div className="flex flex-row items-start justify-start gap-[14px] mq1050:flex-wrap">
                  <div className="flex flex-col items-start justify-start pb-0 pl-0 pr-1.5 pt-2">
                    <div className="relative z-[1] inline-block h-[9px] min-w-[10px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                      A
                    </div>
                  </div>
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                    <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                    <img
                      className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                    <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                    <img
                      className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                    <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                    <img
                      className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                </div>
                <div className="box-border flex w-[665px] max-w-full flex-row items-start justify-end px-[5px] py-0">
                  <div className="box-border flex max-w-full flex-1 flex-row items-start justify-between gap-[20px] py-0 pl-0 pr-[11px] mq750:flex-wrap">
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1.5">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[5px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        1
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[8px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        2
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[8px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        3
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[8px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        4
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[8px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        5
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1.5">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[8px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        6
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[7px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        7
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[9px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        8
                      </div>
                    </div>
                    <div className="relative z-[1] inline-block min-w-[8px] text-left font-kanit text-sm font-light leading-[9px] text-grey-3 mq750:h-2 mq750:w-full">
                      9
                    </div>
                    <div className="relative z-[1] inline-block min-w-[14px] text-left font-kanit text-sm font-light leading-[9px] text-grey-3 mq750:h-3.5 mq750:w-full">
                      10
                    </div>
                    <div className="relative z-[1] inline-block min-w-[9px] text-left font-kanit text-sm font-light leading-[9px] text-grey-3 mq750:h-[9px] mq750:w-full">
                      11
                    </div>
                    <div className="relative z-[1] inline-block min-w-[12px] text-left font-kanit text-sm font-light leading-[9px] text-grey-3 mq750:h-3 mq750:w-full">
                      12
                    </div>
                    <div className="relative z-[1] inline-block min-w-[12px] text-left font-kanit text-sm font-light leading-[9px] text-grey-3 mq750:h-3 mq750:w-full">
                      13
                    </div>
                    <div className="relative z-[1] inline-block min-w-[12px] text-left font-kanit text-sm font-light leading-[9px] text-grey-3 mq750:h-3 mq750:w-full">
                      14
                    </div>
                    <div className="relative z-[1] inline-block min-w-[12px] text-left font-kanit text-sm font-light leading-[9px] text-grey-3 mq750:h-3 mq750:w-full">
                      15
                    </div>
                    <div className="relative z-[1] inline-block min-w-[13px] text-left font-kanit text-sm font-light leading-[9px] text-grey-3 mq750:h-[13px] mq750:w-full">
                      16
                    </div>
                    <div className="relative z-[1] inline-block min-w-[12px] text-left font-kanit text-sm font-light leading-[9px] text-grey-3 mq750:h-3 mq750:w-full">
                      17
                    </div>
                    <div className="relative z-[1] inline-block min-w-[13px] text-left font-kanit text-sm font-light leading-[9px] text-grey-3 mq750:h-[13px] mq750:w-full">
                      18
                    </div>
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
              <img
                className="absolute bottom-[164px] left-[-18px] z-[1] !m-[0] h-9 w-9"
                loading="lazy"
                alt=""
                src="/vuesaxbulkarrowleft1.svg"
              />
              <img
                className="absolute bottom-[164px] right-[-18px] z-[2] !m-[0] h-9 w-9"
                loading="lazy"
                alt=""
                src="/vuesaxbulkarrowright1.svg"
              />
            </div>
          </div>
          <div className="flex max-w-full flex-col items-start justify-start gap-[20px] self-stretch">
            <h2 className="relative m-0 inline-block max-w-full text-left font-kanit text-5xl font-medium leading-[110.3%] text-blue-2 mq450:text-lgi mq450:leading-[21px]">
              Add a delicious meal for your flight
            </h2>
            <div className="flex flex-row items-start justify-center gap-[17px] self-stretch mq1050:flex-wrap">
              <GroupComponent3 />
              <ComparisonCollector
                indiaByIndiGoRoti="#IndiaByIndiGo Roti......"
                prop="₹400"
                pxVegSymbol1="/1200pxveg-symbol-1@2x.png"
              />
              <ComparisonCollector
                indiaByIndiGoRoti="6E Eats choice of th"
                prop="₹500"
                pxVegSymbol1="/1200pxveg-symbol-2@2x.png"
              />
              <ComparisonCollector
                indiaByIndiGoRoti="6E Eats choice of th"
                prop="₹400"
                pxVegSymbol1="/1200pxveg-symbol-1@2x.png"
              />
              <GroupComponent2 />
            </div>
            <h2 className="relative m-0 text-left font-kanit text-5xl font-medium leading-[110.3%] text-blue-2 mq450:text-lgi mq450:leading-[21px]">
              Add Extra Luggage
            </h2>
            <div className="flex flex-row flex-wrap items-start justify-center gap-[17px] self-stretch">
              <GroupComponent1 />
              <FrameComponent20
                additional3KG="Additional 3 KG"
                placeholder="₹1,350"
              />
              <FrameComponent20
                additional3KG="Additional 5 KG"
                placeholder="₹2,250"
                propMinWidth="112px"
                propWidth="46px"
              />
              <FrameComponent20
                additional3KG="Additional 10 KG"
                placeholder="₹4,500"
                propMinWidth="120px"
                propWidth="48px"
              />
              <div className="box-border flex w-[104px] flex-col items-start justify-start gap-[17px] rounded-8xs border-[1px] border-solid border-grey-7 bg-white px-3 pb-[13px] pt-3.5">
                <div className="relative box-border hidden h-16 w-[104px] rounded-8xs border-[1px] border-solid border-grey-7 bg-white" />
                <div className="relative z-[1] inline-block h-2.5 min-w-[17px] text-left font-kanit text-base font-medium text-blue">
                  +4
                </div>
                <div className="relative z-[1] inline-block h-2.5 w-[58px] min-w-[58px] text-center font-kanit text-base font-medium text-blue">
                  Options
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-w-full flex-col items-start justify-start self-stretch">
        <div className="flex flex-row items-start justify-start self-stretch overflow-hidden rounded-b-none rounded-t-3xs px-10 py-[18px] [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca]">
          <b className="relative inline-block min-w-[64px] text-left font-kanit text-xl leading-[110.3%] text-blue-2 mq450:text-base mq450:leading-[18px]">
            Return
          </b>
        </div>
        <div className="box-border flex max-w-full flex-col items-start justify-start gap-[45.5px] self-stretch rounded-b-3xs rounded-t-none border-b-[1px] border-l-[1px] border-r-[1px] border-solid border-grey-6 px-[19px] py-5 mq450:gap-[23px_45.5px]">
          <div className="flex max-w-full flex-col items-start justify-start gap-[20px] self-stretch">
            <div className="flex w-[790px] max-w-full flex-row flex-wrap items-start justify-start gap-[68px] mq1050:gap-[34px] mq450:gap-[17px]">
              <Lime
                iconSrc="/indigo.svg"
                buttonText="Indigo"
                flightNumber="6E-6132"
                aircraftType="Airbus A320"
              />

              <div className="flex min-w-[420px] max-w-full flex-1 flex-row items-start justify-start gap-[35px] mq750:min-w-full mq750:flex-wrap mq750:gap-[35px_17px]">
                <div className="box-border flex max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-[13.5px]">
                  <div className="flex max-w-full flex-col items-start justify-start gap-[13.5px] self-stretch">
                    <h3 className="relative m-0 inline-block h-[13px] min-w-[99px] !bg-clip-text text-left font-kanit text-xl font-normal text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] mq450:text-base">
                      Mumbai, IN
                    </h3>
                    <div className="flex max-w-full flex-col items-start justify-start gap-[10.5px] self-stretch">
                      <div className="flex flex-row items-end justify-between gap-[20px] self-stretch mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start gap-[20px]">
                          <div className="relative inline-block h-[21px] min-w-[77px] whitespace-nowrap text-left font-kanit text-13xl font-medium text-blue-2 mq1050:text-7xl mq450:text-lgi">
                            20:25
                          </div>
                          <div className="relative inline-block h-2.5 min-w-[108px] !bg-clip-text text-left font-kanit text-base text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a]">
                            Sat, 6 Jan 2024
                          </div>
                        </div>
                        <div className="box-border flex h-[57.5px] w-[250px] flex-col items-start justify-end px-0 pb-[3.5px] pt-0">
                          <div className="flex flex-1 flex-col items-start justify-start gap-[14px] self-stretch">
                            <div className="flex flex-row items-start justify-center self-stretch px-5 py-0">
                              <div className="relative inline-block h-2.5 w-[45px] min-w-[45px] text-center font-kanit text-base font-light text-grey-3">
                                1h 15m
                              </div>
                            </div>
                            <img
                              className="relative h-[30px] max-w-full shrink-0 self-stretch overflow-hidden"
                              alt=""
                              src="/group-1000002555.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex w-[356px] max-w-full flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                        <div className="box-border flex w-[163px] flex-col items-start justify-start px-0 pb-0 pt-[9.5px]">
                          <div className="relative inline-block h-[27px] self-stretch text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                            Chatrapati Shivaji Airport, Mumbai, Terminal 2
                          </div>
                        </div>
                        <div className="relative inline-block h-2.5 min-w-[66px] text-left font-kanit text-base font-light text-grey-3">
                          Non-stop
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[163px] min-w-[163px] flex-col items-start justify-start gap-[20px] mq750:flex-1">
                  <h3 className="relative m-0 inline-block min-w-[84px] !bg-clip-text text-left font-kanit text-xl font-normal leading-[110.3%] text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] mq450:text-base mq450:leading-[18px]">
                    Rajkot, IN
                  </h3>
                  <div className="relative inline-block h-[21px] min-w-[73px] whitespace-nowrap text-left font-kanit text-13xl font-medium text-blue-2 mq1050:text-7xl mq450:text-lgi">
                    19:20
                  </div>
                  <div className="relative inline-block h-2.5 min-w-[108px] !bg-clip-text text-left font-kanit text-base text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a]">
                    Sat, 6 Jan 2024
                  </div>
                  <div className="relative inline-block h-[45px] self-stretch text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                    Rajkot Greenfield International Airport, Hirasar, Terminal
                  </div>
                </div>
              </div>
            </div>
            <div className="relative box-border h-px self-stretch border-t-[1px] border-solid border-grey-6" />
          </div>
          <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-8 py-0">
            <div className="relative box-border flex max-w-full flex-1 flex-col items-end justify-start gap-[8px] rounded-3xs border-[1px] border-solid border-grey-6 bg-white px-0 pb-3.5 pt-[15px]">
              <div className="relative z-[0] box-border hidden h-[376px] self-stretch rounded-3xs border-[1px] border-solid border-grey-6 bg-white" />
              <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-5 pb-[7px] pt-0">
                <div className="flex w-[577px] max-w-full flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <input
                      className="relative z-[1] m-0 h-4 w-4 rounded-10xs"
                      type="checkbox"
                    />
                    <div className="flex flex-col items-start justify-start px-0 pb-0 pt-1">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[27px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        Free
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <input
                      className="relative z-[1] m-0 h-4 w-4 rounded-10xs"
                      type="checkbox"
                    />
                    <div className="flex flex-col items-start justify-start px-0 pb-0 pt-1">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[23px] whitespace-nowrap text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        ₹99
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <div className="relative z-[1] h-4 w-4 rounded-10xs bg-lightsteelblue-200" />
                    <div className="flex flex-col items-start justify-start px-0 pb-0 pt-1">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[27px] whitespace-nowrap text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        ₹150
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <div className="relative z-[1] h-4 w-4 rounded-10xs bg-cornflowerblue" />
                    <div className="flex flex-col items-start justify-start px-0 pb-0 pt-1">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[30px] whitespace-nowrap text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        ₹250
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <div className="relative z-[1] h-4 w-4 rounded-10xs bg-palevioletred" />
                    <div className="flex flex-col items-start justify-start px-0 pb-0 pt-1">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[30px] whitespace-nowrap text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        ₹350
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <div className="relative z-[1] h-4 w-4 rounded-10xs bg-gray-100" />
                    <div className="flex flex-col items-start justify-start px-0 pb-0 pt-1">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[84px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        ₹400 - ₹1,500
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border flex h-1.5 max-w-full flex-row items-start justify-start self-stretch px-0 pb-[5px] pt-0">
                <div className="relative z-[1] box-border max-w-full flex-1 self-stretch border-t-[1px] border-solid border-grey-6" />
              </div>
              <div className="flex w-[763px] max-w-full flex-col items-end justify-start gap-[15px]">
                <div className="flex max-w-full flex-row items-start justify-start self-stretch">
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
                    <button className="z-[1] flex cursor-pointer flex-row items-start justify-start gap-[4px] overflow-x-auto rounded-8xs bg-whitesmoke-300 py-1 pl-2 pr-[7px] [border:none]">
                      <img
                        className="relative hidden h-4 min-h-[16px] w-4 shrink-0 object-contain"
                        alt=""
                        src="/avatar1@2x.png"
                      />
                      <div className="box-border flex h-3.5 flex-col items-start justify-start px-0 pb-0 pt-0.5">
                        <img
                          className="relative h-3 w-3"
                          alt=""
                          src="/vuesaxbulkarrowup.svg"
                        />
                      </div>
                      <b className="relative inline-block min-w-[23px] text-left font-kanit text-3xs leading-[16px] tracking-[0.4px] text-brown">
                        EXIT
                      </b>
                      <div className="box-border flex h-3.5 flex-col items-start justify-start px-0 pb-0 pt-0.5">
                        <img
                          className="relative h-3 w-3"
                          alt=""
                          src="/vuesaxbulkarrowup.svg"
                        />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="box-border flex max-w-full flex-col items-end justify-start gap-[8px] px-0 pb-[5px] pt-0">
                  <div className="flex flex-row items-start justify-start gap-[14px] mq1050:flex-wrap">
                    <div className="flex flex-col items-start justify-start pb-0 pl-0 pr-1.5 pt-2">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[8px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        F
                      </div>
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                      <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                      <img
                        className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                      <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                      <img
                        className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[14px] mq1050:flex-wrap">
                    <div className="flex flex-col items-start justify-start pb-0 pl-0 pr-1.5 pt-2">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[8px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        E
                      </div>
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                      <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                      <img
                        className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                      <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                      <img
                        className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[14px] mq1050:flex-wrap">
                    <div className="flex flex-col items-start justify-start pb-0 pl-0 pr-1.5 pt-2">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[9px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        D
                      </div>
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                      <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                      <img
                        className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                  </div>
                </div>
                <div className="flex max-w-full flex-col items-start justify-start gap-[8px]">
                  <div className="flex flex-row items-start justify-center gap-[14px] mq1050:flex-wrap">
                    <div className="flex flex-col items-start justify-start pb-0 pl-0 pr-1.5 pt-2">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[9px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        C
                      </div>
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                      <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                      <img
                        className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                      <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                      <img
                        className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                      <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                      <img
                        className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                      <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                      <img
                        className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                      <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                      <img
                        className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                  </div>
                  <div className="flex flex-row items-start justify-center gap-[14px] mq1050:flex-wrap">
                    <div className="flex flex-col items-start justify-start pb-0 pl-0 pr-1.5 pt-2">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[9px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        B
                      </div>
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                      <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                      <img
                        className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                    <div className="relative z-[1] h-6 w-6 rounded-10xs bg-lavender-100" />
                  </div>
                </div>
              </div>
              <div className="box-border flex max-w-full flex-col items-end justify-start gap-[20px] px-0 pb-1.5 pt-0">
                <div className="flex flex-row items-start justify-start gap-[14px] mq1050:flex-wrap">
                  <div className="flex flex-col items-start justify-start pb-0 pl-0 pr-1.5 pt-2">
                    <div className="relative z-[1] inline-block h-[9px] min-w-[10px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                      A
                    </div>
                  </div>
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                    <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                    <img
                      className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                    <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                    <img
                      className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-whitesmoke-200">
                    <div className="absolute left-[0px] top-[0px] hidden h-full w-full rounded-10xs bg-whitesmoke-200" />
                    <img
                      className="absolute bottom-[20.83%] left-[calc(50%_-_7px)] top-[20.83%] z-[1] h-[58.33%] max-h-full w-3.5"
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-palevioletred" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-gray-100" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                  <div className="relative z-[1] h-6 w-6 rounded-10xs bg-cornflowerblue" />
                </div>
                <div className="box-border flex w-[665px] max-w-full flex-row items-start justify-end px-[5px] py-0">
                  <div className="box-border flex max-w-full flex-1 flex-row items-start justify-between gap-[20px] py-0 pl-0 pr-[11px] mq750:flex-wrap">
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1.5">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[5px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        1
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[8px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        2
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[8px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        3
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[8px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        4
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[8px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        5
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1.5">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[8px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        6
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[7px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        7
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1">
                      <div className="relative z-[1] inline-block h-[9px] min-w-[9px] text-left font-kanit text-sm font-light leading-[18px] text-grey-3">
                        8
                      </div>
                    </div>
                    <div className="relative z-[1] inline-block min-w-[8px] text-left font-kanit text-sm font-light leading-[9px] text-grey-3 mq750:h-2 mq750:w-full">
                      9
                    </div>
                    <div className="relative z-[1] inline-block min-w-[14px] text-left font-kanit text-sm font-light leading-[9px] text-grey-3 mq750:h-3.5 mq750:w-full">
                      10
                    </div>
                    <div className="relative z-[1] inline-block min-w-[9px] text-left font-kanit text-sm font-light leading-[9px] text-grey-3 mq750:h-[9px] mq750:w-full">
                      11
                    </div>
                    <div className="relative z-[1] inline-block min-w-[12px] text-left font-kanit text-sm font-light leading-[9px] text-grey-3 mq750:h-3 mq750:w-full">
                      12
                    </div>
                    <div className="relative z-[1] inline-block min-w-[12px] text-left font-kanit text-sm font-light leading-[9px] text-grey-3 mq750:h-3 mq750:w-full">
                      13
                    </div>
                    <div className="relative z-[1] inline-block min-w-[12px] text-left font-kanit text-sm font-light leading-[9px] text-grey-3 mq750:h-3 mq750:w-full">
                      14
                    </div>
                    <div className="relative z-[1] inline-block min-w-[12px] text-left font-kanit text-sm font-light leading-[9px] text-grey-3 mq750:h-3 mq750:w-full">
                      15
                    </div>
                    <div className="relative z-[1] inline-block min-w-[13px] text-left font-kanit text-sm font-light leading-[9px] text-grey-3 mq750:h-[13px] mq750:w-full">
                      16
                    </div>
                    <div className="relative z-[1] inline-block min-w-[12px] text-left font-kanit text-sm font-light leading-[9px] text-grey-3 mq750:h-3 mq750:w-full">
                      17
                    </div>
                    <div className="relative z-[1] inline-block min-w-[13px] text-left font-kanit text-sm font-light leading-[9px] text-grey-3 mq750:h-[13px] mq750:w-full">
                      18
                    </div>
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
              <img
                className="absolute bottom-[164px] left-[-18px] z-[1] !m-[0] h-9 w-9"
                alt=""
                src="/vuesaxbulkarrowleft1.svg"
              />
              <img
                className="absolute bottom-[164px] right-[-18px] z-[2] !m-[0] h-9 w-9"
                alt=""
                src="/vuesaxbulkarrowright1.svg"
              />
            </div>
          </div>
          <div className="flex max-w-full flex-col items-start justify-start gap-[20px] self-stretch">
            <h2 className="relative m-0 inline-block max-w-full text-left font-kanit text-5xl font-medium leading-[110.3%] text-blue-2 mq450:text-lgi mq450:leading-[21px]">
              Add a delicious meal for your flight
            </h2>
            <div className="flex flex-row items-start justify-center gap-[17px] self-stretch mq1050:flex-wrap">
              <GroupComponent3 />
              <ComparisonCollector
                indiaByIndiGoRoti="#IndiaByIndiGo Roti......"
                prop="₹400"
                pxVegSymbol1="/1200pxveg-symbol-1@2x.png"
              />
              <ComparisonCollector
                indiaByIndiGoRoti="6E Eats choice of th"
                prop="₹500"
                pxVegSymbol1="/1200pxveg-symbol-2@2x.png"
              />
              <ComparisonCollector
                indiaByIndiGoRoti="6E Eats choice of th"
                prop="₹400"
                pxVegSymbol1="/1200pxveg-symbol-1@2x.png"
              />
              <GroupComponent2 />
            </div>
            <h2 className="relative m-0 text-left font-kanit text-5xl font-medium leading-[110.3%] text-blue-2 mq450:text-lgi mq450:leading-[21px]">
              Add Extra Luggage
            </h2>
            <div className="flex flex-row flex-wrap items-start justify-center gap-[17px] self-stretch">
              <GroupComponent1 />
              <FrameComponent20
                additional3KG="Additional 3 KG"
                placeholder="₹1,350"
                propMinWidth="112px"
                propWidth="43px"
              />
              <FrameComponent20
                additional3KG="Additional 5 KG"
                placeholder="₹2,250"
                propMinWidth="112px"
                propWidth="46px"
              />
              <FrameComponent20
                additional3KG="Additional 10 KG"
                placeholder="₹4,500"
                propMinWidth="120px"
                propWidth="48px"
              />
              <div className="box-border flex w-[104px] flex-col items-start justify-start gap-[17px] rounded-8xs border-[1px] border-solid border-grey-7 bg-white px-3 pb-[13px] pt-3.5">
                <div className="relative box-border hidden h-16 w-[104px] rounded-8xs border-[1px] border-solid border-grey-7 bg-white" />
                <div className="relative z-[1] inline-block h-2.5 min-w-[17px] text-left font-kanit text-base font-medium text-blue">
                  +4
                </div>
                <div className="relative z-[1] inline-block h-2.5 w-[58px] min-w-[58px] text-center font-kanit text-base font-medium text-blue">
                  Options
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent19
        iconSrc="/indigo.svg"
        buttonText="Indigo"
        flightNumber="6E-6132"
        aircraftType="Airbus A320"
      />
      <div className="flex max-w-full flex-row flex-wrap items-start justify-center gap-[4px] self-stretch">
        <div className="box-border flex min-w-[573px] max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-1.5 mq750:min-w-full">
          <h2 className="relative m-0 inline-block h-[15px] self-stretch text-left font-kanit text-5xl font-medium leading-[110.3%] text-grey-3 mq450:text-lgi mq450:leading-[21px]">
            <ol className="m-0 pl-8 font-inherit text-inherit">
              <li>Add contact details</li>
            </ol>
          </h2>
        </div>
        <img
          className="relative h-6 w-6 object-contain"
          alt=""
          src="/rightArrowdown.png"
        />
      </div>
      {/* </form> */}
      <div className="flex max-w-full flex-row flex-wrap items-start justify-start gap-[4px] self-stretch text-grey-3">
        <div className="box-border flex min-w-[573px] max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-1.5 mq750:min-w-full">
          <h2 className="relative m-0 inline-block h-[15px] self-stretch font-inherit text-inherit font-medium leading-[110.3%] mq450:text-lgi mq450:leading-[21px]">
            <ol className="m-0 pl-8 font-inherit text-inherit">
              <li>Add traveler details</li>
            </ol>
          </h2>
        </div>
        <img
          className="relative h-6 w-6 object-contain"
          alt=""
          src="/rightArrowdown.png"
        />
      </div>
    </div>
  );
};

export default FlightCards2;
