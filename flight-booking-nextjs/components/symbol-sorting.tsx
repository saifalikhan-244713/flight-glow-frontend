import type { NextPage } from "next";
import DealCard from "./deal-card";

const SymbolSorting: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-17xl text-blue-2 font-kanit">
      <div className="w-[1240px] flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px_40px]">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start max-w-full [row-gap:20px]">
          <h2 className="m-0 h-[23px] flex-1 relative text-inherit font-medium font-inherit inline-block min-w-[192px] max-w-full mq450:text-3xl mq750:text-10xl">
            Featured Deals
          </h2>
          <div className="h-[34px] flex flex-row items-center justify-start gap-[10px] text-xl text-orange">
            <div className="h-[13px] relative inline-block min-w-[72px] mq450:text-base">
              View All
            </div>
            <img
              className="h-[34px] w-[34px] relative min-h-[34px]"
              loading="lazy"
              alt=""
              src="/vuesaxbulkarrowleft.svg"
            />
            <img
              className="h-[34px] w-[34px] relative min-h-[34px]"
              loading="lazy"
              alt=""
              src="/vuesaxbulkarrowright.svg"
            />
          </div>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[20px] max-w-full grid-cols-[repeat(3,_minmax(300px,_1fr))] text-lg mq750:grid-cols-[minmax(300px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(300px,_520px))]">
          <DealCard
            image="/image@2x.png"
            getUpTo25OffOnDomesticFli="Get up to 25% off on Domestic Flights!"
            fGDOM="FGDOM"
            offerValidTillDec312023="Offer valid till Dec 31, 2023"
          />
          <DealCard
            image="/rectangle-4638@2x.png"
            getUpTo25OffOnDomesticFli="Get FLAT 8% OFF* on international flights."
            fGDOM="FGINT"
            offerValidTillDec312023="Offer valid till Jan 11, 2023"
            propWidth="205px"
          />
          <div className="flex flex-row items-start justify-center py-0 px-3.5 box-border max-w-full">
            <div className="flex-1 rounded-3xs bg-white box-border flex flex-col items-center justify-start py-[15px] px-2.5 gap-[23px] max-w-full border-[1px] border-solid border-whitesmoke-400 hover:bg-gainsboro-300 hover:cursor-pointer">
              <img
                className="self-stretch h-[188px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-4637@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full">
                  <h3 className="m-0 self-stretch relative text-9xl tracking-[-0.02em] leading-[28px] capitalize font-medium font-inherit mq450:text-3xl mq450:leading-[22px]">
                    <p className="m-0">Grab up to 15% OFF* on</p>
                    <p className="m-0">international + Domestic</p>
                  </h3>
                  <div className="self-stretch relative leading-[24px] text-grey-3">
                    <span>Use Coupon Code :</span>
                    <span className="text-orange">{` `}</span>
                    <span className="text-blue">FGIAD</span>
                  </div>
                  <div className="w-[214px] h-3 relative leading-[24px] text-orange text-right inline-block">
                    Offer valid till Feb 28, 2023
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-4 px-6 bg-blue-2 self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-center">
                <div className="self-stretch flex flex-row items-center justify-center gap-[10px]">
                  <img
                    className="h-5 w-5 relative hidden"
                    alt=""
                    src="/search_normal.svg"
                  />
                  <div className="w-[75px] relative text-base leading-[24px] font-semibold font-kanit text-white text-center flex items-center justify-center min-w-[75px]">
                    Book Now
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/linearsearch.svg"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SymbolSorting;
