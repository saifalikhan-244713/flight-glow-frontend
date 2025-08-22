import type { NextPage } from 'next';

export type LIMEType = {
  iconSrc: string;
  buttonText: string;
  flightNumber: string;
  aircraftType: string;
};

const Lime: NextPage<LIMEType> = ({
  iconSrc,
  buttonText,
  flightNumber,
  aircraftType,
}) => {
  return (
    <div className="flex flex-col items-center text-xs font-light text-gray-400">
      <div className="flex flex-row items-center justify-between gap-[18px]">
        <div className="w-[60px]">
          <img
            loading="lazy"
            src={iconSrc}
            className="aspect-[2.08] w-[60px]"
          />
          <div className="text-sm text-sky-950">{buttonText}</div>
        </div>

        <div className="w-[76px]">
          <div className="text-center text-xs font-light">{flightNumber}</div>
          <div className="flex h-[30px] w-[90px] items-center rounded-3xl  justify-center border border-solid border-gray-400 bg-white text-xs font-light">
            {aircraftType}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lime;
