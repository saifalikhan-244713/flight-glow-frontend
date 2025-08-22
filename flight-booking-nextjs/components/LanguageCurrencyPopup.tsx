import Popup from "reactjs-popup";
import { NextPage } from "next";
import SelectCountryAndLanguage from "../components/SelectCountryAndLanguage";
import { useState } from "react";

interface LanguageCurrencyPopupProps {
    toggleArrowCurrency: () => void;
}

const LanguageCurrencyPopup: NextPage<LanguageCurrencyPopupProps> = ({ toggleArrowCurrency }) => {
    const [isArrowUpCurrency, setArrowUpCurrency] = useState(false);

    return (

        <Popup
            trigger={
                <button className="cursor-pointer [border:none] py-2.5 px-[21px] bg-[transparent] self-stretch rounded-lg [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#001d3d] flex flex-row items-start justify-start gap-[14px]">
                    <div
                        className="flex flex-col items-start justify-start pt-1 px-0 pb-0"
                        onClick={toggleArrowCurrency}
                    >
                        <div className="h-4 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                            <img
                                className="w-[22px] h-4 relative rounded-sm overflow-hidden shrink-0"
                                alt=""
                                src="/artwork.svg"
                            />
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-start justify-start pt-[0px] px-0 pb-0 mq750:hidden mq450:hidden cursor-pointer"
                        onClick={toggleArrowCurrency}
                    >
                        <div className="h-2.5 relative text-base font-medium font-kanit text-white text-left inline-block min-w-[90px] whitespace-nowrap mq750:hidden">
                            IN | ENR | INR
                        </div>
                    </div>
                    <img
                        className="h-6 w-6 relative cursor-pointer"
                        alt=""
                        src={isArrowUpCurrency ? "arrow-up.svg" : "arrow-down.svg"} // Toggle arrow icon based on state
                        onClick={toggleArrowCurrency} // Toggle arrow state on click
                    />
                </button>
            }
        >
            <SelectCountryAndLanguage />
        </Popup>
    );
};

export default LanguageCurrencyPopup;
