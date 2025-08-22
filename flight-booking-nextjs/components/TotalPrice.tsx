import { useSelector } from 'react-redux';
import { RootState } from '@/store/slices/store';

interface Fee {
  amount: string;
  type: string;
}

interface Price {
  currency: string;
  total: string;
  base?: number; // Make base fare optional if it's not always available
  fees: Fee[];
}

interface FareDetailsBySegment {
  includedCheckedBags: {
    weight: number;
    weightUnit: string;
  };
}

const currencyRates = {
  USD: 1.09,
  EUR: 1,
  INR: 95,
};

interface TravelerPricing {
  fareDetailsBySegment: FareDetailsBySegment[];
}

interface ResultRow {
  price: Price;
  travelerPricings: TravelerPricing[];
}

function TotalPrice() {
  const { adult, children, infants, resultRow, flightOffersPricing } =
    useSelector((state: RootState) => state.search) as {
      adult: number;
      children: number;
      infants: number;
      resultRow: any; // Use any[] or a more specific type if known
      flightOffersPricing: any;
    };

    
  if (!resultRow || !resultRow.price) {
    return null; // or handle loading state appropriately
  }

  // Assuming resultRow is an array and you want to access the first element
  const firstResultRow = resultRow as ResultRow;

  // Check if price exists on firstResultRow before accessing its properties
  const totalFeesAmount = firstResultRow.price?.fees?.reduce(
    (total: number, fee: Fee) => {
      return total + parseFloat(fee.amount);
    },
    0,
  );

  // Ensure totalFeesAmount is properly calculated and formatted
  const totalFees = totalFeesAmount ? totalFeesAmount : '0.00';
  const totalAmount = useSelector(
    (state: RootState) => state.totalAmount.totalAmount,
  );

  const selectedCurrency = useSelector(
    (state: RootState) => state.currency.selectedCurrency,
  ) as keyof typeof currencyRates;

  return (
    <>
      <div className="flex flex-col items-start justify-start gap-[19.5px] self-stretch overflow-hidden rounded-3xs border-[1px] border-solid border-grey-6 px-0 py-[18px]">
        <div className="flex flex-row items-start justify-start self-stretch px-5 py-0">
          <div className="flex flex-1 flex-row items-start justify-between gap-[20px]">
            <div className="flex flex-col items-start justify-start px-0 pb-0 pt-0.5">
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="relative inline-block min-w-[93px] font-light leading-[110.3%] mq450:text-base mq450:leading-[18px]">
                  Total price
                </div>
                <div className="relative inline-block min-w-[41px] text-sm font-light leading-[110.3%]">
                  {adult} Adult
                  <br />
                  {children ? children + ' Children' : ''}
                  <br />
                  {infants ? infants + ' Infants' : ''}
                </div>
              </div>
            </div>
            <div className="relative inline-block min-w-[63px] text-5xl font-medium leading-[110.3%] text-blue-2 mq450:text-lgi mq450:leading-[21px]">
              {selectedCurrency +
                ' ' +
                (totalAmount * currencyRates[selectedCurrency]).toFixed(2)}{' '}
            </div>
          </div>
        </div>
        <div className="relative box-border h-px self-stretch border-t-[1px] border-solid border-grey-6" />
        <div className="flex flex-row items-start justify-start self-stretch px-5 py-0 text-sm">
          <div className="flex flex-1 flex-col items-start justify-start gap-[10px]">
            <div className="flex flex-row items-start justify-between gap-[20px] self-stretch">
              <div className="relative inline-block min-w-[127px] font-light leading-[110.3%]">
                Base fare ({adult + children + infants} traveller)
              </div>
              <div className="relative inline-block min-w-[43px] whitespace-nowrap leading-[110.3%]">
                {selectedCurrency + ' '}{' '}
                {firstResultRow.price.base
                  ? (
                      firstResultRow.price.base *
                      currencyRates[selectedCurrency]
                    ).toFixed(2)
                  : '0.00'}
              </div>
            </div>
            <div className="flex flex-row items-start justify-between gap-[20px] self-stretch">
              <div className="relative inline-block min-w-[91px] font-light leading-[110.3%]">
                Taxes and fees
              </div>
              <div className="relative inline-block min-w-[41px] whitespace-nowrap leading-[110.3%]">
                {selectedCurrency + ''} {totalFees}
              </div>
            </div>
            {/* <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                            <div className="relative leading-[110.3%] font-light inline-block min-w-[102px]">
                                Convenience fee
                            </div>
                            <div className="relative leading-[110.3%] inline-block min-w-[30px] whitespace-nowrap">
                                ₹499
                            </div>
                        </div> */}
            {/* <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                            <div className="flex flex-row items-end justify-start gap-[10px]">
                                <div className="relative leading-[110.3%] font-light inline-block min-w-[51px]">
                                    Add ons
                                </div>
                                <img
                                    className="h-4 w-4 relative min-h-[16px]"
                                    alt=""
                                    src="/vuesaxlineararrowdown-6.svg"
                                />
                            </div>
                            <div className="relative leading-[110.3%] inline-block min-w-[27px]">
                                Free
                            </div>
                        </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default TotalPrice;
