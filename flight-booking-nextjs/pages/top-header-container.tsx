import type { NextPage } from "next";
import TopHeader4 from "../components/top-header4";
import BannerSection1 from "../components/banner-section1";
import DataRow1 from "../components/data-row1";
import DataRow from "../components/data-row";
import FooterContents2 from "../components/footer-contents2";

const TopHeaderContainer: NextPage = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start tracking-[normal] text-left text-base text-white font-kanit">
      <TopHeader4 />
      <BannerSection1 />
      <section className="self-stretch bg-white flex flex-col items-center justify-start py-[60px] px-5 box-border gap-[60px] max-w-full text-left text-5xl text-blue-2 font-kanit mq450:pt-5 mq450:pb-5 mq450:box-border mq750:gap-[30px_60px] mq750:pt-[25px] mq750:pb-[25px] mq750:box-border mq1225:pt-[39px] mq1225:pb-[39px] mq1225:box-border">
        <div className="w-[1240px] rounded-3xs bg-white box-border flex flex-col items-start justify-start max-w-full text-xl border-[1px] border-solid border-grey-6">
          <div className="self-stretch bg-lavender-200 overflow-hidden flex flex-row flex-wrap items-center justify-start py-2.5 px-[25px] box-border gap-[20px] max-w-full">
            <div className="flex-1 relative font-medium inline-block min-w-[46px] max-w-full mq450:text-base">
              OFFER
            </div>
            <div className="h-[30px] w-[134px] relative text-mini text-white text-center flex items-center justify-center shrink-0">
              .
            </div>
            <div className="w-[278px] relative font-medium flex items-center shrink-0 mq450:text-base">
              DEAL CODE
            </div>
            <div className="w-[278px] relative font-medium flex items-center shrink-0 mq450:text-base">
              VALID ON
            </div>
          </div>
          <DataRow1 />
          <DataRow />
        </div>
        <div className="w-[1240px] flex flex-col items-start justify-start max-w-full">
          <div className="relative font-medium mq450:text-lgi">
            What do you get?
          </div>
          <div className="self-stretch relative text-xl leading-[22px] font-light text-grey-3 mq450:text-base mq450:leading-[18px]">
            <ul className="m-0 font-inherit text-inherit pl-[27px]">
              <li>
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[1240px] flex flex-col items-start justify-start max-w-full">
          <div className="relative font-medium mq450:text-lgi">
            How do you get it?
          </div>
          <div className="self-stretch relative text-xl leading-[22px] font-light text-grey-3 mq450:text-base mq450:leading-[18px]">
            <ul className="m-0 font-inherit text-inherit pl-[27px]">
              <li className="mb-0">
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
              <li className="mb-0">
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
              <li className="mb-0">
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
              <li className="mb-0">
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[1240px] flex flex-col items-start justify-start max-w-full">
          <div className="relative font-medium inline-block max-w-full mq450:text-lgi">
            What else do you need to know?
          </div>
          <div className="self-stretch relative text-xl leading-[22px] font-light text-grey-3 mq450:text-base mq450:leading-[18px]">
            <ul className="m-0 font-inherit text-inherit pl-[27px]">
              <li className="mb-0">
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
              <li className="mb-0">
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
              <li className="mb-0">
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
              <li className="mb-0">
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[1240px] flex flex-col items-start justify-start max-w-full">
          <div className="h-9 relative font-medium inline-block max-w-full mq450:text-lgi">
            C<span className="lowercase">ONDITIONS</span>
            {` `}
            <span className="lowercase">IN CASE OF CANCELLATION</span>
          </div>
          <div className="self-stretch relative text-xl leading-[22px] font-light text-grey-3 mq450:text-base mq450:leading-[18px]">
            <ul className="m-0 font-inherit text-inherit pl-[27px]">
              <li className="mb-0">
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
              <li className="mb-0">
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
              <li className="mb-0">
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
              <li className="mb-0">
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[1240px] flex flex-col items-start justify-start max-w-full">
          <div className="relative font-medium mq450:text-lgi">
            {`Flow Glow `}
            <span className="lowercase">TERMS OF THE OFFER</span>
          </div>
          <div className="self-stretch relative text-xl leading-[22px] font-light text-grey-3 mq450:text-base mq450:leading-[18px]">
            <ul className="m-0 font-inherit text-inherit pl-[27px]">
              <li className="mb-0">
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
              <li className="mb-0">
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
              <li className="mb-0">
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
              <li className="mb-0">
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[1240px] flex flex-col items-start justify-start max-w-full">
          <div className="relative font-medium mq450:text-lgi">
            {`HDFC `}
            <span className="lowercase">TERMS OF THE OFFER</span>
          </div>
          <div className="self-stretch relative text-xl leading-[22px] font-light text-grey-3 mq450:text-base mq450:leading-[18px]">
            <ul className="m-0 font-inherit text-inherit pl-[27px]">
              <li className="mb-0">
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
              <li className="mb-0">
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
              <li className="mb-0">
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
              <li className="mb-0">
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur. Gravida gravida enim ac
                massa nulla. Tristique et vel amet pellentesque purus orci nam
                sit fames.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <FooterContents2 />
      <div className="self-stretch bg-orange overflow-hidden flex flex-row items-start justify-center py-[26px] pr-5 pl-[21px]">
        <div className="h-2.5 relative inline-block">
          Copyright@ FlightGlow 2023. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default TopHeaderContainer;
