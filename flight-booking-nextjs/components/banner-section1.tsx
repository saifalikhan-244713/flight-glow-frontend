import type { NextPage } from "next";

const BannerSection1: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start bg-[url('/frame2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-17xl text-blue-2 font-kanit">
      <img
        className="h-[276px] w-[1440px] relative object-cover hidden min-h-[276px] max-w-full"
        alt=""
        src="/frame2x.png"
      />
      <div className="flex-1 flex flex-row items-center justify-center py-[81.5px] px-0 box-border max-w-full z-[1] mq750:gap-[43px_21px]">
        <div className="w-[1240px] flex flex-col items-center justify-start py-0 px-5 box-border max-w-full">
          <div className="flex flex-col items-center justify-start gap-[40px] max-w-full mq750:gap-[20px_40px]">
            <h2 className="m-0 h-[23px] relative text-inherit font-medium font-inherit inline-block mq450:text-3xl mq750:text-10xl">
              Get up to 25% off on Domestic Flights!
            </h2>
            <div className="flex flex-col items-center justify-start gap-[20px] max-w-full text-5xl text-chocolate">
              <div className="h-[15px] relative font-medium inline-block mq450:text-lgi">
                Offer valid till Dec 31, 2023
              </div>
              <div className="h-[15px] relative font-medium inline-block mq450:text-lgi">{`Valid on HDFC Bank EasyEMI Credit & Debit Cards`}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection1;
