import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type DailyFlightsType = {
  flightPlaneSvgrepoCom?: string;
  prop?: string;
  dailyFlights?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
};

const DailyFlights: NextPage<DailyFlightsType> = ({
  flightPlaneSvgrepoCom,
  prop,
  dailyFlights,
  propFlex,
}) => {
  const dailyFlightsStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className="flex-[0.4767]  rounded-3xs [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca] overflow-hidden flex flex-col items-start justify-start py-10 px-[20px] box-border min-w-[271px] max-w-[295px] text-center text-17xl font-kanit mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1"
      style={dailyFlightsStyle}
    >
      <div className="self-stretch h-[179px] flex flex-col items-center justify-start gap-[40px]">
        <img
          className="w-20 h-20 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={flightPlaneSvgrepoCom}
        />
        <div className="self-stretch relative leading-[18px] mq450:text-lgi mq450:leading-[14px]">
          <p className="m-0">
            <span className="font-medium text-[34px]">
              <span>{prop}</span>
            </span>
          </p>
          <p className="m-0 text-blue">
            <span>
              <span className="font-medium">&nbsp;</span>
            </span>
          </p>
          <p className="m-0 text-[20px] text-blue">
            <span>
              <span>{dailyFlights}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DailyFlights;
