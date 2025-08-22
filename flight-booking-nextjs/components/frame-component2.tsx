import type { NextPage } from "next";

const FrameComponent2: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-17xl text-blue-2 font-kanit">
      <div className="w-[1240px] flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px_40px]">
        <div className="flex flex-col justify-center">
          <div className="w-full text-4xl font-medium text-sky-950 max-md:max-w-full">
            For You
          </div>
          <div className="flex flex-col mt-10 w-full text-xl max-md:max-w-full">
            <div className="flex gap-0 px-1 tracking-tighter text-center text-amber-500 max-md:flex-wrap">
              <div className="flex flex-col justify-center px-3 py-3 border-b border-amber-500 border-solid max-md:px-5">
                <div className="justify-center">POPULAR FLIGHT ROUTES</div>
              </div>
              <div className="flex flex-col justify-center px-3 py-3 border-b border-amber-500 border-solid max-md:px-5">
                <div className="justify-center px-3.5">TOP FLIGHT ROUTES</div>
              </div>
              <div className="flex flex-col justify-center px-3 py-3 border-b border-amber-500 border-solid max-md:px-5">
                <div className="justify-center">TRENDING FLIGHT ROUTES</div>
              </div>
              <div className="flex flex-col justify-center px-3 py-3 whitespace-nowrap border-b border-solid border-sky-950 text-sky-950 max-md:px-5">
                <div className="justify-center px-16 max-md:px-5">AIRLINES</div>
              </div>
              <div className="flex flex-col justify-center px-3 py-3 border-b border-amber-500 border-solid max-md:px-5">
                <div className="justify-center">POPULAR AIRLINES ROUTES</div>
              </div>
            </div>
            <div className="flex flex-col flex-wrap content-start mt-5 w-full text-gray-500 leading-[110%] max-md:max-w-full">
              <div className="flex gap-28 px-6 max-md:flex-wrap">
                <div className="flex flex-col justify-center py-5">
                  <div className="justify-center">Air India</div>
                </div>
                <div className="flex flex-col justify-center py-5">
                  <div className="justify-center">British Airways</div>
                </div>
                <div className="flex flex-col justify-center py-5">
                  <div className="justify-center">Go First</div>
                </div>
                <div className="flex flex-col justify-center py-5">
                  <div className="justify-center">Qatar Airways</div>
                </div>
                <div className="flex flex-col justify-center py-5 whitespace-nowrap">
                  <div className="justify-center">IndiGo</div>
                </div>
                <div className="flex flex-col justify-center py-5 whitespace-nowrap">
                  <div className="justify-center">SpiceJet</div>
                </div>
              </div>
              <div className="flex gap-32 self-start px-6 mt-0 max-md:flex-wrap py-3">
                <div className="flex flex-col justify-center ">
                  <div className="justify-center">Air India Express</div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="justify-center">Akasa Air</div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="justify-center">Air Asia India</div>
                </div>
                <div className="flex flex-col justify-center  whitespace-nowrap">
                  <div className="justify-center">Vistara</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
