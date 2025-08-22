import OfferDetails from "@/components/offer-details";

function ApplyCoupon() {
    return (
        <>
            {/* <div className="self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-start py-[18px] px-[19px] gap-[20px] text-sm text-blue-2 border-[1px] border-solid border-grey-6">
                <div className="flex flex-row items-start justify-start py-0 px-3 text-xl">
                    <div className="relative leading-[110.3%] font-medium mq450:text-base mq450:leading-[18px]">
                        Apply coupon or gift card /Coupon code not found.
                        
                    </div>
                </div>
                <div className="self-stretch rounded-3xs overflow-hidden flex flex-row items-start justify-between pt-[23px] pb-[9px] pr-[21px] pl-[19px] gap-[20px] text-base text-grey-3 border-[1px] border-solid border-grey-6">
                    <div className="relative font-extralight inline-block min-w-[122px]">
                        Coupon/Gift Card
                    </div>
                    <div className="h-2.5 relative font-medium text-blue inline-block min-w-[44px]">
                        Apply
                    </div>
                </div>
                <div className="self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-start pt-[18px] px-[19px] pb-[11px] gap-[12px] text-blue border-[1px] border-solid border-grey-6">
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-base">
                        <button className="cursor-pointer [border:none] p-[5px] bg-grey-7 rounded-8xs flex flex-row items-center justify-start gap-[10px] hover:bg-lightgray-100">
                            <img
                                className="h-6 w-6 relative overflow-hidden shrink-0"
                                alt=""
                                src="/icici-1.svg"
                            />
                            <div className="h-2.5 relative text-base font-medium font-kanit text-grey text-left inline-block min-w-[53px]">
                                ICICINB
                            </div>
                        </button>
                        <div className="h-2.5 relative font-medium inline-block min-w-[44px]">
                            Apply
                        </div>
                    </div>
                    <div className="h-[9px] relative font-medium text-blue-2 inline-block min-w-[73px]">
                        Flat 10% off
                    </div>
                    <div className="relative leading-[16px] font-light text-grey-3">
                        <p className="m-0">{`Applicable on ICICI Net Banking `}</p>
                        <p className="m-0 [text-decoration:underline]">Know more</p>
                    </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start relative">
                    <div className="h-[9px] absolute !m-[0] bottom-[57px] left-[20px] font-medium inline-block min-w-[73px]">
                        Flat 10% off
                    </div>
                    <div className="flex-1 rounded-3xs overflow-hidden flex flex-col items-start justify-start pt-[18px] px-[19px] pb-[11px] gap-[33px] z-[1] text-base text-blue border-[1px] border-solid border-grey-6 mq450:gap-[16px]">
                        <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                            <button className="cursor-pointer [border:none] p-[5px] bg-grey-7 rounded-8xs flex flex-row items-center justify-start gap-[10px] hover:bg-lightgray-100">
                                <img
                                    className="h-6 w-6 relative overflow-hidden shrink-0"
                                    alt=""
                                    src="/bankofbaroda.svg"
                                />
                                <div className="h-2.5 relative text-base font-medium font-kanit text-grey text-left inline-block min-w-[52px]">
                                    BOBDC
                                </div>
                            </button>
                            <div className="h-2.5 relative font-medium inline-block min-w-[44px]">
                                Apply
                            </div>
                        </div>
                        <div className="relative text-sm tracking-[-0.04em] leading-[16px] font-light text-grey-3">
                            <p className="m-0">Applicable on Bank of Baroda Debit</p>
                            <p className="m-0 [text-decoration:underline]">Know more</p>
                        </div>
                    </div>
                </div>
                <OfferDetails
                    uPI="/upi.svg"
                    cTUPI="CTUPI"
                    applicableOnUPIPayment="Applicable on UPI payment"
                />
                <div className="self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-start pt-[18px] px-[19px] pb-2.5 gap-[12px] text-blue border-[1px] border-solid border-grey-6">
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-base">
                        <button className="cursor-pointer [border:none] p-[5px] bg-grey-7 rounded-8xs flex flex-row items-center justify-start gap-[10px] hover:bg-lightgray-100">
                            <img
                                className="h-[25px] w-6 relative overflow-hidden shrink-0 object-contain"
                                alt=""
                                src="/yes-bank@2x.png"
                            />
                            <div className="h-2.5 relative text-base font-medium font-kanit text-grey text-left inline-block min-w-[54px]">
                                YESEMI
                            </div>
                        </button>
                        <div className="h-2.5 relative font-medium inline-block min-w-[44px]">
                            Apply
                        </div>
                    </div>
                    <div className="h-[9px] relative font-medium text-blue-2 inline-block min-w-[73px]">
                        Flat 10% off
                    </div>
                    <div className="w-[196px] relative leading-[16px] font-light text-grey-3 inline-block">
                        {`Applicable on Yes Bank Credit `}
                        <span className="[text-decoration:underline]">Know more</span>
                    </div>
                </div>
                <OfferDetails
                    uPI="/hdfc-1.svg"
                    cTUPI="HDFCEMI"
                    applicableOnUPIPayment="Applicable on ICICI Net Banking "
                    propMinWidth="65px"
                />
                <div className="self-stretch h-[132px] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-start pt-5 px-5 pb-[13px] relative gap-[12px_28px] text-base text-grey border-[1px] border-solid border-grey-6">
                    <div className="!m-[0] absolute top-[20px] left-[20px] rounded-8xs bg-grey-7 flex flex-row items-start justify-start p-[5px] gap-[10px]">
                        <img
                            className="h-6 w-6 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/onecard-2.svg"
                        />
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                            <div className="h-2.5 relative font-medium inline-block min-w-[97px]">
                                ONECARDEMI
                            </div>
                        </div>
                    </div>
                    <div className="h-2.5 absolute !m-[0] top-[20px] left-[191px] font-medium text-blue inline-block min-w-[44px]">
                        Apply
                    </div>
                    <div className="h-[9px] absolute !m-[0] top-[66px] left-[20px] text-sm font-medium text-blue-2 inline-block min-w-[73px]">
                        Flat 10% off
                    </div>
                    <div className="absolute !m-[0] top-[87px] left-[20px] text-sm leading-[16px] font-light text-grey-3">
                        <p className="m-0">Applicable on one card credit card</p>
                        <p className="m-0 [text-decoration:underline]">Know more</p>
                    </div>
                </div>
            </div> */}
        </>
    )
}
export default ApplyCoupon;