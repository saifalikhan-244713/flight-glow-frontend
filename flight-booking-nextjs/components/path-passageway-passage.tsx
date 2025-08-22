import type { NextPage } from "next";
import DailyFlights from "./daily-flights";

const PathPassagewayPassage: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-17xl text-blue-2 font-kanit">
      <div className="w-[1240px] flex flex-row items-start justify-center gap-[20px] max-w-full mq1050:flex-wrap">
        <DailyFlights
          flightPlaneSvgrepoCom="/flightplanesvgrepocom.svg"
          prop="2000+"
          dailyFlights="Daily Flights"
        />
        <DailyFlights
          flightPlaneSvgrepoCom="/indiamapcountrysvgrepocom.svg"
          prop="80+"
          dailyFlights="Domestic Destinations"
          propFlex="0.8674"
        />
        <DailyFlights
          flightPlaneSvgrepoCom="/world1svgrepocom.svg"
          prop="30+"
          dailyFlights="International destinations"
          propFlex="1"
        />
        <DailyFlights
          flightPlaneSvgrepoCom="/travelsvgrepocom.svg"
          prop="500 Mn+"
          dailyFlights="Happy Passengers"
          propFlex="0.7025"
        />
      </div>
    </section>
  );
};

export default PathPassagewayPassage;
