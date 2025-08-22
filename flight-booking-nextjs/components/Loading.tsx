import Image from 'next/image';


function Loading({ text = "Hold on, we’re fetching flights for you" }) {
    return (
        <>
            <section className="w-full flex flex-row items-start justify-center gap-[135px] max-w-full mq1050:flex-wrap mq1050:gap-[67px] mq750:gap-[34px] mq450:gap-[17px]">
                <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border min-w-[411px] max-w-full  mq1050:box-border mq750:min-w-full  mq450:box-border">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                        <div className="self-stretch flex flex-col items-start justify-center py-0 px-5">
                            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                                <h4 className="m-0 w-full relative leading-[40px] font-normal font-kanit text-blue-2 text-center inline-block mq750:text-10xl mq750:leading-[32px] mq450:text-3xl mq450:leading-[24px]">
                                    {text}
                                </h4>
                                <br />
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                                <Image src="/fly.gif" width={150} height={150} alt="Loading" unoptimized={true} />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}
export default Loading;