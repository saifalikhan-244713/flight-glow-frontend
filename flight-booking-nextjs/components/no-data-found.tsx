import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/slices/store";
import { setSearchResults } from "@/store/slices/searchSlice";
export type NoDataFoundType = {
  className?: string;
};
import SearchFiltersSidebar from "@/components/search-filter-sidebar";

const NoDataFound: NextPage<NoDataFoundType> = ({ className = "" }) => {
  const dispatch = useDispatch();
  const { searchResults } = useSelector((state: RootState) => state.search);

  const resetFilters = () => {
    dispatch(setSearchResults(searchResults));
  };


  return (
    <>
      <div className="hidden max-w-full" />

      <main className="flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="flex flex-row items-start justify-center gap-[135px] max-w-full mq1050:flex-wrap mq1050:gap-[67px] mq750:gap-[34px] mq450:gap-[17px]">
          {/* */}
          {Array.isArray(searchResults) && searchResults.length > 0 ? (
            <></>
            // <SearchFiltersSidebar />
          ) : (
            <>
              {/* <div className="h-[1586px] w-[235px] bg-white box-border flex flex-col items-start justify-start pt-5 pb-[115px] pr-[10px] pl-0 gap-[40px] text-left text-xl text-blue-2 font-kanit border-r-[1px] border-solid border-grey-7 mq450:gap-[20px_40px] mq450:pb-8 mq450:box-border mq1050:hidden mq1050:pb-[49px] mq1050:box-border mq1225:pb-[75px] mq1225:box-border">
                <div className="w-full h-[1682px] absolute !m-[0] right-[0px] bottom-[-810px] left-[0px] bg-white box-border border-r-[1px] border-solid border-grey-7" />
                <h1 className="m-0 text-blue-2 relative text-21xl font-normal font-kanit !bg-clip-text background-secondary text-left z-[1] mq750:text-13xl mq450:text-5xl">
                  0 Flights Found
                </h1>
                <div className="self-stretch flex-1 rounded-xl bg-white flex flex-col items-start justify-start gap-[80px] z-[1] mq450:gap-[40px]">
                  <div className="self-stretch h-[295px] relative rounded-xl bg-white hidden" />
                  <div className="self-stretch rounded-t-xl rounded-b-none bg-white flex flex-row items-start justify-start pt-[19px] px-5 pb-[17px] whitespace-nowrap z-[2] border-b-[1px] border-solid border-grey-7">
                    <div className="h-[68px] w-[283px] relative rounded-t-xl rounded-b-none bg-white box-border hidden border-b-[1px] border-solid border-grey-7" />
                    <div className="relative text-xl font-medium font-kanit text-blue-2 text-left inline-block min-w-[84px] z-[3]">
                      Filter By :
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[75px] pl-[74px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                      <div className="flex flex-row items-start justify-start py-0 pr-3 pl-[13px]">
                        <div className="relative text-base font-kanit text-grey-3 text-left inline-block min-w-[109px] z-[2]">
                          No Filter Found
                        </div>
                      </div>
                      <button
                        className="cursor-pointer [border:none] py-2.5 px-10 bg-blue-2 rounded-3xs overflow-hidden flex flex-row items-start justify-start z-[2]"
                        onClick={resetFilters}
                      >
                        <div className="flex flex-row items-start justify-start gap-[8px]">
                          <img
                            className="h-[18px] w-[18px] relative hidden"
                            alt=""
                            src="/vuesaxlinearsearchnormal3.svg"
                          />
                          <b className="relative text-sm leading-[20px] font-semibold font-kanit text-white text-center inline-block min-w-[53px]">
                            Go Back
                          </b>
                          <img
                            className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                            alt=""
                            src="/heroiconsoutlinearrowright4.svg"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}
            </>
          )}

          <div className="flex-1 flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border min-w-[411px] max-w-full  mq1050:box-border mq750:min-w-full  mq450:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <h2 className="m-0 w-full relative text-17xl leading-[40px] font-normal font-kanit text-blue-2 text-center inline-block mq750:text-10xl mq750:leading-[32px] mq450:text-3xl mq450:leading-[24px]">
                  Oops!! Nothing found to selected criteria.

                </h2>
              </div>
              <img
                className="self-stretch h-[300px]  relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/flying-around-the-worldcuate-1.svg"
              />
            </div>
          </div>
        </section >
      </main >
    </>
  );
};

export default NoDataFound;
