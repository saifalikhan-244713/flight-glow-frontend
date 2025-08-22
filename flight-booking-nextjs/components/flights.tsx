import type { NextPage } from "next";
import OnwardOptions from "./onward-options";

export type FlightsType = {
  className?: string;
};

const Flights: NextPage<FlightsType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[295px] bg-white box-border flex flex-col items-start justify-start pt-5 pb-[115px] pr-[19px] pl-0 gap-[40px] text-left text-xl text-blue-2 font-kanit border-r-[1px] border-solid border-grey-7 mq450:gap-[20px] mq450:pb-8 mq450:box-border mq1050:hidden mq1050:pb-[49px] mq1050:box-border mq1225:pb-[75px] mq1225:box-border ${className}`}
    >
      <div className="w-[295px] h-[1586px] relative bg-white box-border hidden border-r-[1px] border-solid border-grey-7" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[21.5px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="relative inline-block min-w-[115px] z-[1] mq450:text-base">
            <span className="font-medium">{`6 of 31 `}</span>
            <span className="font-extralight">flights</span>
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-sm text-orange">
            <div className="relative [text-decoration:underline] inline-block min-w-[54px] z-[1]">
              Show All
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <OnwardOptions onwardJourney="Onward Journey" />
          <div className="flex flex-row items-start justify-start py-0 px-[18px] text-base text-grey-3">
            <div className="flex flex-col items-start justify-start gap-[10px]">
              <div className="flex flex-row items-start justify-start gap-[18px]">
                <img
                  className="h-5 w-5 relative z-[1]"
                  alt=""
                  src="/vuesaxlinearticksquare.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="h-2.5 relative inline-block min-w-[85px] z-[1]">
                    Non - Stops
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[18px]">
                <img
                  className="h-5 w-5 relative z-[1]"
                  alt=""
                  src="/vuesaxlinearticksquare.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="h-2.5 relative inline-block min-w-[42px] z-[1]">
                    1 Stop
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[18px]">
                <img
                  className="h-5 w-5 relative z-[1]"
                  alt=""
                  src="/vuesaxlinearticksquare.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="h-2.5 relative inline-block min-w-[45px] z-[1]">
                    2 Stop
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[3px] text-grey-3">
          <div className="relative text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1] mq450:text-base">
            Departure from Rajkot
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[18px] text-base">
            <div className="flex flex-col items-start justify-start gap-[10px]">
              <div className="flex flex-row items-start justify-start gap-[18px]">
                <img
                  className="h-5 w-5 relative z-[1]"
                  alt=""
                  src="/vuesaxlinearticksquare.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="h-2.5 relative inline-block min-w-[56px] z-[1]">
                    00 - 06
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[18px]">
                <img
                  className="h-5 w-5 relative z-[1]"
                  alt=""
                  src="/vuesaxlinearticksquare.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="h-2.5 relative inline-block min-w-[48px] z-[1]">
                    06 - 12
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[18px]">
                <input className="m-0 h-5 w-5 relative z-[1]" type="checkbox" />
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="h-2.5 relative inline-block min-w-[43px] z-[1]">
                    12 - 18
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[18px]">
                <img
                  className="h-5 w-5 relative z-[1]"
                  alt=""
                  src="/vuesaxlinearticksquare.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="h-2.5 relative inline-block min-w-[51px] z-[1]">
                    18 - 00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[3px] text-base text-grey-3">
        <OnwardOptions onwardJourney="Return Journey" propWidth="139px" />
        <div className="flex flex-row items-start justify-start pt-0 px-[18px] pb-[7px]">
          <div className="flex flex-row items-start justify-start gap-[18px]">
            <img
              className="h-5 w-5 relative z-[1]"
              alt=""
              src="/vuesaxlinearticksquare.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <div className="h-2.5 relative inline-block min-w-[85px] z-[1]">
                Non - Stops
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-0 px-[18px] pb-[7px]">
          <div className="flex flex-row items-start justify-start gap-[18px]">
            <img
              className="h-5 w-5 relative z-[1]"
              alt=""
              src="/vuesaxlinearticksquare.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <div className="h-2.5 relative inline-block min-w-[42px] z-[1]">
                1 Stop
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-0 px-[18px] pb-[17px]">
          <div className="flex flex-row items-start justify-start gap-[18px]">
            <img
              className="h-5 w-5 relative z-[1]"
              alt=""
              src="/vuesaxlinearticksquare.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <div className="h-2.5 relative inline-block min-w-[45px] z-[1]">
                2 Stop
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[3px] text-xl">
          <div className="relative text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3)),_#ff8e0a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1] mq450:text-base">
            Departure from Rajkot
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[18px] text-base">
            <div className="flex flex-col items-start justify-start gap-[10px]">
              <div className="flex flex-row items-start justify-start gap-[18px]">
                <img
                  className="h-5 w-5 relative z-[1]"
                  alt=""
                  src="/vuesaxlinearticksquare.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="h-2.5 relative inline-block min-w-[56px] z-[1]">
                    00 - 06
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[18px]">
                <img
                  className="h-5 w-5 relative z-[1]"
                  alt=""
                  src="/vuesaxlinearticksquare.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="h-2.5 relative inline-block min-w-[48px] z-[1]">
                    06 - 12
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[18px]">
                <img
                  className="h-5 w-5 relative z-[1]"
                  alt=""
                  src="/vuesaxlinearticksquare.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="h-2.5 relative inline-block min-w-[43px] z-[1]">
                    12 - 18
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[18px]">
                <img
                  className="h-5 w-5 relative z-[1]"
                  alt=""
                  src="/vuesaxlinearticksquare.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="h-2.5 relative inline-block min-w-[51px] z-[1]">
                    18 - 00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
            <div className="h-[13px] relative font-medium inline-block min-w-[70px] z-[1] mq450:text-base">
              Airlines
            </div>
          </div>
          <img
            className="h-6 w-6 relative z-[1]"
            alt=""
            src="/vuesaxlineararrowup1.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[18px] text-base text-grey-3">
          <div className="flex flex-col items-start justify-start gap-[10px]">
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <input className="m-0 h-5 w-5 relative z-[1]" type="checkbox" />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="h-2.5 relative inline-block min-w-[60px] z-[1]">
                  Air India
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <img
                className="h-5 w-5 relative z-[1]"
                alt=""
                src="/vuesaxlinearticksquare.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="h-2.5 relative inline-block min-w-[119px] z-[1]">
                  Air India Express
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <img
                className="h-5 w-5 relative z-[1]"
                alt=""
                src="/vuesaxlinearticksquare.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="h-2.5 relative inline-block min-w-[89px] z-[1]">
                  AIX Connect
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <img
                className="h-5 w-5 relative z-[1]"
                alt=""
                src="/vuesaxlinearticksquare.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="h-2.5 relative inline-block min-w-[68px] z-[1]">
                  Akasa Air
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <img
                className="h-5 w-5 relative z-[1]"
                alt=""
                src="/vuesaxlinearticksquare.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="h-2.5 relative inline-block min-w-[55px] z-[1]">
                  Go First
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <img
                className="h-5 w-5 relative z-[1]"
                alt=""
                src="/vuesaxlinearticksquare.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="h-2.5 relative inline-block min-w-[47px] z-[1]">
                  IndiGo
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <input className="m-0 h-5 w-5 relative z-[1]" type="checkbox" />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="h-2.5 relative inline-block min-w-[60px] z-[1]">
                  SpiceJet
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[10px]">
              <div className="flex flex-row items-start justify-start gap-[18px]">
                <input className="m-0 h-5 w-5 relative z-[1]" type="checkbox" />
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="h-2.5 relative inline-block min-w-[51px] z-[1]">
                    Vistara
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[18px]">
                <img
                  className="h-5 w-5 relative z-[1]"
                  alt=""
                  src="/vuesaxlinearticksquare.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="h-2.5 relative inline-block min-w-[54px] z-[1]">
                    Star Air
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <img
                className="h-5 w-5 relative z-[1]"
                alt=""
                src="/vuesaxlinearticksquare.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="h-2.5 relative inline-block min-w-[45px] z-[1]">
                  FlyBig
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <input className="m-0 h-5 w-5 relative z-[1]" type="checkbox" />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="h-2.5 relative inline-block min-w-[89px] z-[1]">
                  IndiaOne Air
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <img
                className="h-5 w-5 relative z-[1]"
                alt=""
                src="/vuesaxlinearticksquare.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="h-2.5 relative inline-block min-w-[86px] z-[1]">
                  SpiceXpress
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
            <div className="h-[13px] relative font-medium inline-block min-w-[75px] z-[1] mq450:text-base">
              Air Craft
            </div>
          </div>
          <img
            className="h-6 w-6 relative z-[1]"
            alt=""
            src="/vuesaxlineararrowup1.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[18px] text-base text-grey-3">
          <div className="flex flex-col items-start justify-start gap-[10px]">
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <input className="m-0 h-5 w-5 relative z-[1]" type="checkbox" />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="h-2.5 relative inline-block min-w-[73px] z-[1]">
                  ATR 42/72
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <input className="m-0 h-5 w-5 relative z-[1]" type="checkbox" />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="h-2.5 relative inline-block min-w-[89px] z-[1]">
                  Airbus A320
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <img
                className="h-5 w-5 relative z-[1]"
                alt=""
                src="/vuesaxlinearticksquare.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="h-2.5 relative inline-block min-w-[122px] z-[1]">
                  Airbus A320-100
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <img
                className="h-5 w-5 relative z-[1]"
                alt=""
                src="/vuesaxlinearticksquare.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="h-2.5 relative inline-block min-w-[118px] z-[1]">
                  Airbus A320-212
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <input className="m-0 h-5 w-5 relative z-[1]" type="checkbox" />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="h-2.5 relative inline-block min-w-[83px] z-[1]">
                  Airbus A321
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <img
                className="h-5 w-5 relative z-[1]"
                alt=""
                src="/vuesaxlinearticksquare.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="h-2.5 relative inline-block z-[1]">
                  Boeing 777-200LR
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <img
                className="h-5 w-5 relative z-[1]"
                alt=""
                src="/vuesaxlinearticksquare.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="h-2.5 relative inline-block z-[1]">
                  Boeing 777-300ER
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;
