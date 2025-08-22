import type { NextPage } from "next";
interface UpcomingCancelledCompletedProps {
  tab: string;
}
const UpcomingCancelledCompleted: React.FC<UpcomingCancelledCompletedProps> = ({ tab }) => {

  return (
    <>
      {tab === 'UPCOMING' && <div className="w-[1240px] rounded-3xs box-border flex flex-row items-start justify-between py-5 pr-[21px] pl-[19px] gap-[20px] max-w-full text-left text-xl text-blue-2 font-kanit border-[1px] border-solid border-grey-6 mq1050:flex-wrap">
        <div className="w-[76px] flex flex-col items-start justify-start pt-[31px] px-0 pb-0 box-border text-sm">
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
            <div className="h-10 flex flex-row items-start justify-start py-0 px-2 box-border">
              <img
                className="h-10 w-[60px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/indigo.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start pt-0 px-[18px] pb-2.5">
              <div className="h-[9px] relative inline-block min-w-[40px]">
                Indigo
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-xs text-grey-4">
              <div className="flex flex-row items-start justify-start py-0 px-[17px]">
                <div className="h-2 relative font-light inline-block min-w-[42px]">
                  6E-6132
                </div>
              </div>
              <div className="self-stretch rounded-xl bg-white flex flex-row items-start justify-start py-[5px] px-1 whitespace-nowrap border-[1px] border-solid border-grey-4">
                <div className="h-2 relative font-light inline-block min-w-[66px]">
                  Airbus A320
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[221px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border text-chocolate">
          <div className="w-[163px] flex flex-col items-start justify-start gap-[20px]">
            <div className="relative leading-[110.3%] inline-block min-w-[84px] mq450:text-base mq450:leading-[18px]">
              Rajkot, IN
            </div>
            <div className="h-[21px] relative text-13xl font-medium text-blue-2 inline-block min-w-[73px] whitespace-nowrap mq450:text-lgi mq750:text-7xl">
              19:20
            </div>
            <div className="h-2.5 relative text-base inline-block min-w-[114px]">
              Wed, 3 Jan 2024
            </div>
            <div className="self-stretch h-[45px] relative text-sm leading-[18px] font-light text-grey-3 inline-block">
              Rajkot Greenfield International Airport, Hirasar, Terminal
            </div>
          </div>
        </div>
        <div className="w-[125px] flex flex-col items-start justify-start pt-[49px] px-0 pb-0 box-border text-center text-base text-grey-3">
          <div className="flex flex-col items-start justify-start gap-[14px]">
            <div className="flex flex-row items-start justify-start py-0 pr-2.5 pl-[11px]">
              <div className="h-2.5 w-[45px] relative font-light inline-block min-w-[45px]">
                1h 15m
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[18px]">
              <div className="h-[30px] flex flex-row items-start justify-start relative">
                <div className="h-px w-[251px] absolute !m-[0] bottom-[14px] left-[calc(50%_-_125px)] box-border border-t-[1px] border-dashed border-lightskyblue" />
                <img
                  className="h-[30px] w-[30px] relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/flight-2-1.svg"
                />
              </div>
            </div>
            <div className="h-2.5 relative font-light text-left inline-block min-w-[66px]">
              Non-stop
            </div>
          </div>
        </div>
        <div className="w-[183px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[20px] text-chocolate">
          <div className="relative leading-[110.3%] inline-block min-w-[99px] mq450:text-base mq450:leading-[18px]">
            Mumbai, IN
          </div>
          <div className="h-[21px] relative text-13xl font-medium text-blue-2 inline-block min-w-[77px] whitespace-nowrap mq450:text-lgi mq750:text-7xl">
            20:25
          </div>
          <div className="h-2.5 relative text-base inline-block min-w-[114px]">
            Wed, 3 Jan 2024
          </div>
          <div className="self-stretch h-[27px] relative text-sm leading-[18px] font-light text-grey-3 inline-block">
            Chatrapati Shivaji Airport, Mumbai, Terminal 2
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-16 pb-0 pr-[19px] pl-0 text-17xl">
          <div className="relative leading-[40px] font-medium inline-block min-w-[123px] whitespace-nowrap mq450:text-3xl mq450:leading-[24px] mq750:text-10xl mq750:leading-[32px]">
            ₹10,906
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[73px] px-0 pb-0 text-blue">
          <div className="relative [text-decoration:underline] leading-[110.3%] font-medium inline-block min-w-[113px] mq450:text-base mq450:leading-[18px]">
            View Details
          </div>
        </div>
      </div>}
      {tab === 'CANCELLED' && <div>Cancelled Content</div>}
      {tab === 'COMPLETED' && <div>Completed Content</div>}


    </>
  );
};

export default UpcomingCancelledCompleted;
