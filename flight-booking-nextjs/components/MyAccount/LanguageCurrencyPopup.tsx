import { useState } from 'react';

const LanguageCurrencyPopup = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  interface LanguageCurrencyPopupProps {}

  const handleCurrencyChange = (currency: string) => {
    setSelectedCurrency(currency);
  };

  return (
    <div className="absolute right-[-90px] top-[20px] z-[3] box-border flex h-[200px] w-[185px] shrink-0 flex-col items-start justify-start gap-[22px] overflow-hidden rounded-3xs bg-lightblue p-5 text-base text-blue-2 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)]">
      {['USD', 'EUR', 'INR'].map((currency) => (
        <div
          key={currency}
          className="flex flex-1 flex-row items-center gap-[14px] font-kanit"
        >
          <input
            type="checkbox"
            checked={selectedCurrency === currency}
            onChange={() => handleCurrencyChange(currency)}
            className="cursor-pointer"
          />
          <label
            className="relative inline-block h-2.5 min-w-[70px] hover:cursor-pointer hover:underline"
            onClick={() => handleCurrencyChange(currency)}
          >
            {currency}
          </label>
        </div>
      ))}
    </div>
  );
};

export default LanguageCurrencyPopup;
