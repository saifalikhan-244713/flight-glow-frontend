function SecureYourTrip() {
    return (
        <>
            <div className="self-stretch rounded-3xs bg-white box-border overflow-hidden flex flex-col items-start justify-start py-[38px] px-[19px] gap-[20px] max-w-full text-5xl border-[1px] border-solid border-grey-6">
                <h3 className="m-0 relative text-inherit leading-[110.3%] font-medium font-inherit mq450:text-lgi mq450:leading-[21px]">
                    Secure your trip
                </h3>
                <div className="self-stretch rounded-3xs bg-white box-border overflow-hidden flex flex-col items-start justify-start py-[18px] px-[19px] gap-[20px] max-w-full text-sm border-[1px] border-solid border-grey-6">
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full text-xl mq750:flex-wrap">
                        <div className="relative leading-[110.3%] font-medium inline-block max-w-full mq450:text-base mq450:leading-[18px]">
                            Protect your trip with travel insurance
                        </div>
                        <div className="w-[154px] flex flex-row items-center justify-start gap-[20px]">
                            <div className="relative leading-[110.3%] font-medium inline-block min-w-[42px] whitespace-nowrap mq450:text-base mq450:leading-[18px]">
                                ₹229
                            </div>
                            <button className="cursor-pointer py-2 px-[31px] bg-[transparent] flex-1 rounded-3xs overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-blue">
                                <div className="w-7 flex flex-row items-center justify-center gap-[8px]">
                                    <img
                                        className="h-[18px] w-[18px] relative hidden"
                                        alt=""
                                        src="/vuesaxlinearsearchnormal3.svg"
                                    />
                                    <div className="relative text-sm leading-[20px] font-semibold font-kanit text-blue text-center inline-block min-w-[27px]">
                                        Add
                                    </div>
                                    <img
                                        className="h-[18px] w-[18px] relative hidden"
                                        alt=""
                                        src="/vuesaxlinearadd.svg"
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[57px] text-center text-grey-3 mq1050:flex-wrap mq450:gap-[28px]">
                        <div className="relative leading-[20px] font-light">
                            ₹750* on 90 mins delay
                        </div>
                        <div className="relative leading-[20px] font-light">
                            ₹3,000* on missed connections
                        </div>
                        <div className="relative leading-[20px] font-light">
                            ₹1 lakh* medical emergency
                        </div>
                        <div className="relative leading-[20px] font-light">
                            ₹7500* on baggage loss
                        </div>
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
                        <div className="w-[60px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                            <img
                                className="self-stretch h-[30px] relative max-w-full overflow-hidden shrink-0 object-cover"
                                loading="lazy"
                                alt=""
                                src="/digit-1@2x.png"
                            />
                        </div>
                        <div className="flex-1 relative leading-[20px] font-light inline-block min-w-[487px] max-w-full mq750:min-w-full">
                            Insurance is only for Indian residents between the age
                            group of 1-70 years. By adding insurance, you agree to Go
                            Digit General Insurance Limited.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SecureYourTrip;