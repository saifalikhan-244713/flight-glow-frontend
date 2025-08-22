import type { NextPage } from "next";
import TopHeader from "@/components/top-header";
import BannerSection from "../components/banner-section";
import SavedTravellerDeatails from "../components/SavedTravellerDeatails";
import FooterContents1 from "../components/footer-contents1";

const MyAccountSAVETRAVELLERS: NextPage = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start tracking-[normal] text-left text-base text-white font-kanit">
      <main className="self-stretch bg-white flex flex-col items-start justify-start pt-0 px-0 pb-[60px] box-border max-w-full mq1225:pb-[39px] mq1225:box-border mq750:pb-[25px] mq750:box-border">
        <TopHeader />
        <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[60px] box-border max-w-full">
          <BannerSection propAlignSelf="unset" propFlex="1" />
        </section>
        {/* <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-17xl text-blue-2 font-kanit">
          <div className="w-[1240px] flex flex-col items-start justify-start gap-[60px] max-w-full mq750:gap-[30px_60px]">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
              <button className="cursor-pointer [border:none] pt-[26px] px-5 pb-[25px] bg-[transparent] flex-1 box-border flex flex-row items-start justify-center min-w-[402px] max-w-full border-b-[1px] border-solid border-grey-3 hover:bg-lightslategray-200 mq750:min-w-full">
                <div className="h-[66px] w-[619px] relative box-border hidden max-w-full border-b-[1px] border-solid border-grey-3" />
                <div className="h-[15px] relative text-5xl font-kanit text-grey-3 text-left inline-block z-[1] mq450:text-lgi">{`PROFILE & LOGIN DETAILS`}</div>
              </button>
              <button className="cursor-pointer [border:none] pt-[26px] pb-[25px] pr-5 pl-[21px] bg-[transparent] flex-1 box-border flex flex-row items-start justify-center min-w-[402px] max-w-full z-[1] border-b-[3px] border-solid border-blue mq750:min-w-full">
                <div className="h-[15px] relative text-5xl font-medium font-kanit text-blue text-left inline-block mq450:text-lgi">{`SAVE TRAVELLER(S) & GST DETAILS`}</div>
                <div className="h-[66px] w-[619px] relative box-border hidden max-w-full border-b-[3px] border-solid border-blue" />
              </button>
            </div>
            <div className="self-stretch rounded-3xs bg-aliceblue-100 box-border flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-[40px] max-w-full shrink-0 border-[1px] border-solid border-grey-6 mq750:gap-[20px_40px]">
              <div className="self-stretch rounded-t-3xs rounded-b-none [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca] overflow-hidden flex flex-row flex-wrap items-start justify-start py-[18px] px-10 box-border gap-[1px] max-w-full">
                <div className="flex-1 relative inline-block min-w-[211px] max-w-full mq450:text-lgi">
                  <p className="m-0 font-medium">Save Traveler(s)</p>
                  <p className="m-0 text-5xl font-light text-chocolate">
                    You have 2 Traveler(s)
                  </p>
                </div>
                <button className="cursor-pointer [border:none] py-2.5 px-[44.5px] bg-blue-2 w-[142px] rounded-3xs overflow-hidden shrink-0 flex flex-row items-start justify-start box-border">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="h-[18px] w-[18px] relative hidden"
                      alt=""
                      src="/linearsearch.svg"
                    />
                    <div className="flex-1 relative text-sm leading-[20px] font-semibold font-kanit text-white text-center inline-block min-w-[27px]">
                      Add
                    </div>
                    <div className="h-[19px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                      <img
                        className="w-[18px] h-[18px] relative"
                        alt=""
                        src="/vuesaxlinearadd.svg"
                      />
                    </div>
                  </button>
                </button>
              </div>
              <SavedTravellerDeatails
                jennyShah="Jenny Shah "
                fEMALE="( FEMALE)"
                viewDetail="View Detail"
              />
              <SavedTravellerDeatails
                jennyShah="Jay Shah "
                fEMALE="( MALE)"
                viewDetail="Add Detail"
              />
            </div>
            <div className="self-stretch rounded-3xs bg-aliceblue-100 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border max-w-full shrink-0">
              <div className="self-stretch rounded-t-3xs rounded-b-none [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca] overflow-hidden flex flex-row items-start justify-start py-[18px] px-10 box-border max-w-full">
                <div className="w-[1017px] relative inline-block shrink-0 max-w-full mq450:text-lgi">
                  <p className="m-0 font-medium">GST Details</p>
                  <p className="m-0 text-5xl font-light text-chocolate">
                    Add GST details for flight booking
                  </p>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full text-base text-grey-3">
                <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
                  <div className="flex-1 rounded-3xs bg-aliceblue-100 box-border flex flex-col items-start justify-start min-w-[435px] max-w-full border-b-[1px] border-solid border-grey-6 mq750:min-w-full">
                    <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-between py-2.5 px-[25px] [row-gap:20px] max-w-full gap-[0px] border-b-[1px] border-solid border-grey-6 mq750:flex-wrap">
                      <div className="h-9 w-[200px] relative flex items-center shrink-0">
                        COMPANY NAME
                      </div>
                      <h3 className="m-0 w-[330px] relative text-5xl font-normal font-inherit text-aliceblue-100 flex items-center shrink-0 max-w-full mq450:text-lgi">
                        -
                      </h3>
                    </div>
                  </div>
                  <div className="flex-1 rounded-3xs bg-aliceblue-100 box-border flex flex-col items-start justify-start min-w-[435px] max-w-full border-b-[1px] border-solid border-grey-6 mq750:min-w-full">
                    <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-between py-2.5 px-[25px] [row-gap:20px] max-w-full gap-[0px] border-b-[1px] border-solid border-grey-6 mq750:flex-wrap">
                      <div className="h-9 w-[200px] relative flex items-center shrink-0">
                        GSTIN
                      </div>
                      <h3 className="m-0 w-[330px] relative text-5xl font-normal font-inherit text-aliceblue-100 flex items-center shrink-0 max-w-full mq450:text-lgi">
                        -
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[60px] box-border max-w-full text-left text-17xl text-blue-2 font-kanit mq1225:pb-[39px] mq1225:box-border mq750:pb-[25px] mq750:box-border">
          <div className="w-[1240px] flex flex-col items-start justify-start gap-[60px] max-w-full mq750:gap-[30px]">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full shrink-0 [row-gap:20px] text-5xl text-grey-3">
              <div className="flex-1 box-border flex flex-row items-start justify-center pt-[26px] px-5 pb-[23px] min-w-[402px] max-w-full border-b-[1px] border-solid border-grey-3 mq750:min-w-full">
                <div className="h-[66px] w-[619px] relative box-border hidden max-w-full border-b-[1px] border-solid border-grey-3" />
                <h3 className="m-0 h-[15px] relative text-inherit font-normal font-inherit inline-block z-[1] mq450:text-lgi">{`PROFILE & LOGIN DETAILS`}</h3>
              </div>
              <button className="cursor-pointer [border:none] pt-[26px] pb-[21px] pr-5 pl-[21px] bg-[transparent] flex-1 box-border flex flex-row items-start justify-center min-w-[402px] max-w-full z-[1] border-b-[3px] border-solid border-blue mq750:min-w-full">
                <div className="h-[15px] relative text-5xl font-medium font-kanit text-blue text-left inline-block mq450:text-lgi">{`SAVE TRAVELLER(S) & GST DETAILS`}</div>
                <div className="h-[66px] w-[619px] relative box-border hidden max-w-full border-b-[3px] border-solid border-blue" />
              </button>
            </div>
            <div className="self-stretch rounded-3xs bg-aliceblue-100 box-border flex flex-col items-start justify-start gap-[40px] max-w-full shrink-0 border-[1px] border-solid border-grey-6 mq750:gap-[20px]">
              <div className="self-stretch rounded-3xs bg-aliceblue-100 box-border flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-[40px] max-w-full shrink-0 border-[1px] border-solid border-grey-6 mq750:gap-[20px_40px]">
                <div className="self-stretch rounded-t-3xs rounded-b-none [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca] overflow-hidden flex flex-row flex-wrap items-start justify-start py-[18px] px-10 box-border gap-[1px] max-w-full">
                  <div className="flex-1 relative inline-block min-w-[211px] max-w-full mq450:text-lgi">
                    <p className="m-0 font-medium">Save Traveler(s)</p>
                    <p className="m-0 text-5xl font-light text-chocolate">
                      You have 2 Traveler(s)
                    </p>
                  </div>
                  <button className="cursor-pointer [border:none] py-2.5 px-[44.5px] bg-blue-2 w-[142px] rounded-3xs overflow-hidden shrink-0 flex flex-row items-start justify-start box-border">
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="h-[18px] w-[18px] relative hidden"
                        alt=""
                        src="/linearsearch.svg"
                      />
                      <div className="flex-1 relative text-sm leading-[20px] font-semibold font-kanit text-white text-center inline-block min-w-[27px]">
                        Add
                      </div>
                      <div className="h-[19px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                        <img
                          className="w-[18px] h-[18px] relative"
                          alt=""
                          src="/vuesaxlinearadd.svg"
                        />
                      </div>
                    </button>
                  </button>
                </div>
                {/* <SavedTravellerDeatails
                  fullName="Jenny Shah "
                  gender="( FEMALE)"
                  traveller_id={0}
                  editTraveller="View Detail"
                  phone="+91 9722845575"                  
                /> */}               
              
                {/* <SavedTravellerDeatails
                  fullName="Jay Shah "
                  gender="( MALE)"
                  traveller_id={0}
                  editTraveller="Add Detail"
                  phone="+91 9722845575"
                /> */}
              </div>
              <div className="self-stretch rounded-3xs bg-aliceblue-100 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border max-w-full text-5xl">
                <div className="self-stretch rounded-t-3xs rounded-b-none [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca] overflow-hidden flex flex-row items-start justify-start py-[18px] px-10 box-border max-w-full">
                  <div className="w-[1017px] relative font-medium inline-block shrink-0 max-w-full mq450:text-lgi">
                    Document
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border max-w-full text-base text-grey-3">
                  <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                    <div className="self-stretch box-border flex flex-row items-start justify-start py-2 px-[11px] gap-[57px] max-w-full text-grey-4 border-t-[1px] border-solid border-grey-6 border-b-[1px] mq1225:flex-wrap mq750:gap-[28px]">
                      <div className="flex flex-col items-start justify-start gap-[8px]">
                        <div className="relative">
                          <span>DOCUMENT TYPE :</span>
                          <span className="text-grey-3"> Data Data Data</span>
                        </div>
                        <div className="relative">
                          <span>{`ISSUANCE LOCATION : `}</span>
                          <span className="text-grey-3">Data Data Data</span>
                        </div>
                        <div className="relative">
                          <span>{`ISSUANCE DATE : `}</span>
                          <span className="text-grey-3">Data Data Data</span>
                        </div>
                        <div className="relative">
                          <span>{`ISSUANCE TIME : `}</span>
                          <span className="text-grey-3">Data Data Data</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
                        <div className="flex flex-col items-start justify-start gap-[8px]">
                          <div className="relative">
                            <span>EXPIRE TIME :</span>
                            <span className="text-grey-3"> Data Data Data</span>
                          </div>
                          <div className="relative">
                            <span>{`EXPIRE DATE : `}</span>
                            <span className="text-grey-3">Data Data Data</span>
                          </div>
                          <div className="relative">
                            <span>{`ISSUANCE COUNTRY : `}</span>
                            <span className="text-grey-3">Data Data Data</span>
                          </div>
                        </div>
                      </div>
                      <img
                        className="self-stretch w-[325px] relative max-h-full object-cover min-h-[120px] max-w-full"
                        loading="lazy"
                        alt=""
                        src="/istockphoto113034802612x612-1@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start pt-9 px-0 pb-0">
                        <img
                          className="w-12 h-12 relative"
                          loading="lazy"
                          alt=""
                          src="/vuesaxlinearedit.svg"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start pt-9 px-0 pb-0">
                        <img
                          className="w-24 h-24 relative"
                          loading="lazy"
                          alt=""
                          src="/uploadedDocument.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
                      <div className="flex-1 flex flex-row items-start justify-center min-w-[377px] max-w-full mq750:gap-[20px] mq750:min-w-full">
                        <div className="flex-1 rounded-t-3xs rounded-b-none bg-aliceblue-100 box-border flex flex-col items-center justify-center pt-[43px] px-0 pb-[41px] max-w-full border-b-[1px] border-solid border-grey-6">
                          <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-2.5 px-[25px] box-border [row-gap:20px] max-w-full gap-[0px] mq750:flex-wrap">
                            <div className="h-9 w-[200px] relative flex items-center shrink-0">
                              DOCUMENT TYPE
                            </div>
                            <h3 className="m-0 w-[330px] relative text-5xl font-normal font-inherit text-lightsteelblue-100 flex items-center shrink-0 max-w-full mq450:text-lgi">
                              Enter Document Type
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 rounded-t-3xs rounded-b-none bg-aliceblue-100 box-border flex flex-row items-start justify-start pt-2.5 px-0 pb-2 min-w-[377px] max-w-full text-sm text-blue-2 border-b-[1px] border-solid border-grey-6 mq750:min-w-full">
                        <div className="flex-1 rounded-advanced-forms-drag-n-drop-file-uploads-border-radius bg-aliceblue-100 box-border flex flex-row items-start justify-center py-[37px] px-5 gap-[10px] max-w-full border-[1px] border-dashed border-grey-6 mq450:flex-wrap mq450:justify-center">
                          <div className="w-[50px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                            <img
                              className="self-stretch h-8 relative max-w-full overflow-hidden shrink-0"
                              loading="lazy"
                              alt=""
                              src="/image.svg"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-start">
                            <div className="flex flex-row items-start justify-center gap-[3px]">
                              <div className="relative tracking-[0.01em] leading-[24px] font-light">
                                Drop your files here or
                              </div>
                              <div className="flex flex-row items-start justify-start text-center text-blue">
                                <div className="overflow-hidden flex flex-row items-center justify-start gap-[10px]">
                                  <img
                                    className="h-links-link-icon-height w-links-link-icon-height relative overflow-hidden shrink-0 hidden"
                                    alt=""
                                    src="/chevronleft.svg"
                                  />
                                  <div className="flex flex-col items-start justify-start gap-[2px]">
                                    <div className="relative tracking-[0.01em] leading-[24px] font-medium inline-block min-w-[46px]">
                                      browse
                                    </div>
                                    <div className="w-[33px] h-links-link-border-bottom-height relative bg-advanced-forms-drag-n-drop-file-uploads-dragging-file-label-bg-color hidden" />
                                  </div>
                                  <img
                                    className="h-links-link-icon-height w-links-link-icon-height relative overflow-hidden shrink-0 hidden"
                                    alt=""
                                    src="/chevronright.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="relative tracking-[0.01em] leading-[20px] font-light text-grey-3 text-center">
                              Maximum size: 50MB
                            </div>
                          </div>
                          <div className="h-[87.8px] w-[86px] relative hidden text-xs text-white font-xs-medium">
                            <div className="absolute top-[0px] left-[27px] shadow-[0px_25px_25px_rgba(0,_0,_0,_0.15)] rounded-md bg-white box-border w-8 h-[42px] overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-advanced-forms-drag-n-drop-file-uploads-dragging-file-border-color">
                              <img
                                className="h-4 w-4 relative overflow-hidden shrink-0"
                                alt=""
                                src="/figma.svg"
                              />
                            </div>
                            <div className="absolute top-[46px] left-[0px] shadow-[0px_4px_3px_rgba(0,_0,_0,_0.07),_0px_2px_2px_rgba(0,_0,_0,_0.06)] rounded-advanced-forms-drag-n-drop-file-uploads-dragging-file-border-radius bg-advanced-forms-drag-n-drop-file-uploads-dragging-file-label-bg-color flex flex-row items-start justify-start py-0 px-[5px]">
                              <div className="h-4 flex-1 relative tracking-[0.01em] leading-[16px] font-medium inline-block">
                                preline-ui.fig
                              </div>
                            </div>
                            <img
                              className="absolute top-[59.8px] left-[51.5px] w-5 h-7"
                              alt=""
                              src="/draggingpointer.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
                      <div className="flex-1 rounded-t-none rounded-b-3xs bg-aliceblue-100 box-border flex flex-col items-start justify-start gap-[10px] min-w-[377px] max-w-full border-b-[1px] border-solid border-grey-6 mq750:min-w-full">
                        <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-between pt-2.5 px-[25px] pb-2 [row-gap:20px] max-w-full gap-[0px] border-b-[1px] border-solid border-grey-6 mq750:flex-wrap">
                          <div className="h-9 w-[200px] relative flex items-center shrink-0">
                            ISSUANCE LOCATION
                          </div>
                          <h3 className="m-0 w-[330px] relative text-5xl font-normal font-inherit text-lightsteelblue-100 flex items-center shrink-0 max-w-full mq450:text-lgi">
                            Enter Issuance Location
                          </h3>
                        </div>
                        <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-between pt-2.5 px-[25px] pb-2 [row-gap:20px] max-w-full gap-[0px] border-b-[1px] border-solid border-grey-6 mq750:flex-wrap">
                          <div className="h-9 w-[200px] relative flex items-center shrink-0">
                            ISSUANCE DATE
                          </div>
                          <h3 className="m-0 w-[330px] relative text-5xl font-normal font-inherit text-lightsteelblue-100 flex items-center shrink-0 max-w-full mq450:text-lgi">
                            Enter Issuance Date
                          </h3>
                        </div>
                        <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-between pt-2.5 px-[25px] pb-2 [row-gap:20px] max-w-full gap-[0px] border-b-[1px] border-solid border-grey-6 mq750:flex-wrap">
                          <div className="h-9 w-[200px] relative flex items-center shrink-0">
                            ISSUANCE TIME
                          </div>
                          <h3 className="m-0 w-[330px] relative text-5xl font-normal font-inherit text-lightsteelblue-100 flex items-center shrink-0 max-w-full mq450:text-lgi">
                            Enter Issuance Time
                          </h3>
                        </div>
                      </div>
                      <div className="flex-1 rounded-t-none rounded-b-3xs bg-aliceblue-100 box-border flex flex-col items-start justify-start gap-[10px] min-w-[377px] max-w-full border-b-[1px] border-solid border-grey-6 mq750:min-w-full">
                        <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-between pt-2.5 px-[25px] pb-2 [row-gap:20px] max-w-full gap-[0px] border-b-[1px] border-solid border-grey-6 mq750:flex-wrap">
                          <div className="h-9 w-[200px] relative flex items-center shrink-0">
                            EXPIRE TIME
                          </div>
                          <h3 className="m-0 w-[330px] relative text-5xl font-normal font-inherit text-lightsteelblue-100 flex items-center shrink-0 max-w-full mq450:text-lgi">
                            Enter Expire time
                          </h3>
                        </div>
                        <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-between pt-2.5 px-[25px] pb-2 [row-gap:20px] max-w-full gap-[0px] border-b-[1px] border-solid border-grey-6 mq750:flex-wrap">
                          <p className="m-0 h-9 w-[200px] relative flex items-center shrink-0">
                            EXPIRE DATE
                          </p>
                          <h3 className="m-0 w-[330px] relative text-5xl font-normal font-inherit text-lightsteelblue-100 flex items-center shrink-0 max-w-full mq450:text-lgi">
                            Enter Expire date
                          </h3>
                        </div>
                        <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-between pt-2.5 px-[25px] pb-2 [row-gap:20px] max-w-full gap-[0px] border-b-[1px] border-solid border-grey-6 mq750:flex-wrap">
                          <div className="h-9 w-[200px] relative flex items-center shrink-0">
                            ISSUANCE COUNTRY
                          </div>
                          <h3 className="m-0 w-[330px] relative text-5xl font-normal font-inherit text-lightsteelblue-100 flex items-center shrink-0 max-w-full mq450:text-lgi">
                            Enter Issuance Country
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                  <button className="cursor-pointer [border:none] py-2.5 px-[55px] bg-blue-2 rounded-3xs overflow-hidden flex flex-row items-start justify-start">
                    <div className="flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="h-[18px] w-[18px] relative hidden"
                        alt=""
                        src="/vuesaxlinearsearchnormal3.svg"
                      />
                      <b className="relative text-sm leading-[20px] font-semibold font-kanit text-white text-center inline-block min-w-[31px]">
                        Save
                      </b>
                      <img
                        className="h-[18px] w-[18px] relative hidden"
                        alt=""
                        src="/vuesaxlinearadd.svg"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-aliceblue-100 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border max-w-full shrink-0">
              <div className="self-stretch rounded-t-3xs rounded-b-none [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca] overflow-hidden flex flex-row items-start justify-start py-[18px] px-10 box-border max-w-full">
                <div className="w-[1017px] relative inline-block shrink-0 max-w-full mq450:text-lgi">
                  <p className="m-0 font-medium">GST Details</p>
                  <p className="m-0 text-5xl font-light text-chocolate">
                    Add GST details for flight booking
                  </p>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full text-base text-grey-3">
                <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
                  <div className="flex-1 rounded-3xs bg-aliceblue-100 box-border flex flex-col items-start justify-start min-w-[435px] max-w-full border-b-[1px] border-solid border-grey-6 mq750:min-w-full">
                    <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-between pt-2.5 px-[25px] pb-2 [row-gap:20px] max-w-full gap-[0px] border-b-[1px] border-solid border-grey-6 mq750:flex-wrap">
                      <div className="h-9 w-[200px] relative flex items-center shrink-0">
                        COMPANY NAME
                      </div>
                      <h3 className="m-0 w-[330px] relative text-5xl font-normal font-inherit text-aliceblue-100 flex items-center shrink-0 max-w-full mq450:text-lgi">
                        -
                      </h3>
                    </div>
                  </div>
                  <div className="flex-1 rounded-3xs bg-aliceblue-100 box-border flex flex-col items-start justify-start min-w-[435px] max-w-full border-b-[1px] border-solid border-grey-6 mq750:min-w-full">
                    <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-between pt-2.5 px-[25px] pb-2 [row-gap:20px] max-w-full gap-[0px] border-b-[1px] border-solid border-grey-6 mq750:flex-wrap">
                      <div className="h-9 w-[200px] relative flex items-center shrink-0">
                        GSTIN
                      </div>
                      <h3 className="m-0 w-[330px] relative text-5xl font-normal font-inherit text-aliceblue-100 flex items-center shrink-0 max-w-full mq450:text-lgi">
                        -
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterContents1 />
      <div className="self-stretch bg-orange overflow-hidden flex flex-row items-start justify-center py-[26px] pr-5 pl-[21px]">
        <div className="h-2.5 relative inline-block">
          Copyright@ FlightGlow 2023. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default MyAccountSAVETRAVELLERS;
