import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useMemo, type CSSProperties } from 'react';
import Link from 'next/link';
import MyAccountDropdown from './MyAccount/my-account-dropdown';
import { signOut } from 'next-auth/react';
// import { useSession } from 'next-auth/react';
import Popup from 'reactjs-popup';
import SelectCountryAndLanguage from '../components/SelectCountryAndLanguage';
import LanguageCurrencyPopup from '@/components/LanguageCurrencyPopup';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrency } from '@/store/slices/currencySlice';

export type TopHeaderType = {
  /** Style props */
  frameDivAlignSelf?: CSSProperties['alignSelf'];
  frameDivWidth?: CSSProperties['width'];
  frameDivMargin?: CSSProperties['margin'];
  frameDivRight?: CSSProperties['right'];
  frameDivLeft?: CSSProperties['left'];
};

const TopHeader: NextPage<TopHeaderType> = ({
  frameDivAlignSelf,
  frameDivWidth,
  frameDivMargin,
  frameDivRight,
  frameDivLeft,
}) => {
  const topHeaderStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      width: frameDivWidth,
      margin: frameDivMargin,
      right: frameDivRight,
      left: frameDivLeft,
    };
  }, [
    frameDivAlignSelf,
    frameDivWidth,
    frameDivMargin,
    frameDivRight,
    frameDivLeft,
  ]);

  // const { data: session } = useSession();
  const [isArrowUp, setArrowUp] = useState(false);
  const [isArrowUpCurrency, setArrowUpCurrency] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    console.log('called');

    const updateUser = () => {
      const storedUser = localStorage.getItem('username');
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    updateUser(); // Run once on mount

    window.addEventListener('user-logout', updateUser); // Listen for custom event

    return () => {
      window.removeEventListener('user-logout', updateUser); // Cleanup
    };
  }, []);

  const toggleArrow = () => {
    setArrowUp((prevState) => !prevState);
  };

  const toggleArrowCurrency = () => {
    setArrowUpCurrency((prevState) => !prevState);
  };
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(
    (state: any) => state.currency.selectedCurrency,
  ); // Adjust state path if needed

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCurrency(event.target.value));
  };

  return (
    <>
      {/* {console.log('session', session)} */}
      <header
        className={`box-border flex flex-row items-center justify-center self-stretch overflow-hidden bg-blue-2 px-5 pb-3 pt-[18px] ${
          user ? 'gap-[47%]' : 'gap-[70%]'
        } sticky top-[0] z-[99] max-w-full text-left font-kanit text-17xl text-white mq1050:gap-[85%] mq750:gap-[60%] mq450:gap-[20%]`}
        style={topHeaderStyle}
      >
        <div className="flex w-[178px] flex-col items-start justify-start">
          <div className="flex h-6 flex-row items-start justify-end self-stretch">
            <img
              className="relative h-6 w-12 shrink-0 [debug_commit:f6aba90]"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="box-border flex h-[39px] flex-row items-start justify-start px-0 pb-0 pt-0">
            <h2 className="relative m-0 mt-[-15px] shrink-0 font-inherit text-inherit font-semibold [debug_commit:f6aba90]">
              <Link href="/" className="text-inherit no-underline">
                FlightGlow
              </Link>
            </h2>
          </div>
        </div>
        <div className="box-border flex h-[53.5px] max-w-full flex-col items-start justify-start px-0 pb-0 text-base">
          <div className="flex flex-1 flex-row items-start justify-start gap-[30px]">
            <div className="flex flex-col items-start justify-start px-0 pb-0 pt-3 mq450:hidden">
              <div className="relative inline-block h-2.5 min-w-[37px] font-medium hover:text-cyan-500">
                <Link href="/offer" className="text-inherit no-underline">
                  Offer
                </Link>
              </div>
            </div>
            {user ? (
              <>
                <Popup
                  trigger={
                    <div className="flex flex-row items-start justify-start gap-[10px] self-stretch rounded-lg px-[17px] pt-3.5 pb-2.5 [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#001d3d]">
                      <img
                        className="relative h-6 min-h-[24px] w-6 cursor-pointer"
                        alt=""
                        src="/profile_circle.svg"
                        onClick={toggleArrow}
                      />
                      <div
                        className="flex cursor-pointer flex-col items-start justify-start px-0 pb-0 pt-[0px] mq750:hidden mq450:hidden"
                        onClick={toggleArrow}
                      >
                        <div className="relative inline-block h-2.5 min-w-[84px] cursor-pointer whitespace-nowrap font-medium">
                          {user}
                        </div>
                      </div>
                      <img
                        className="relative h-6 min-h-[24px] w-6 cursor-pointer"
                        alt=""
                        src={isArrowUp ? 'arrow-up.svg' : 'arrow-down.svg'} // Toggle arrow icon based on state
                        onClick={toggleArrow} // Toggle arrow state on click
                      />
                    </div>
                  }
                >
                  <MyAccountDropdown />
                </Popup>
                <Popup
                  trigger={
                    <div className="flex flex-row items-start justify-start gap-[10px] self-stretch rounded-lg px-[17px] pt-3.5 pb-2.5 [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#001d3d]">
                      <div
                        className="flex cursor-pointer flex-col items-start justify-start px-0 pb-0 pt-[0px] mq750:hidden mq450:hidden"
                        onClick={toggleArrowCurrency}
                      >
                        <div className="relative inline-block h-2.5 min-w-[84px] cursor-pointer whitespace-nowrap font-medium">
                          INR | EUR | USD{' '}
                        </div>
                      </div>
                      <img
                        className="relative h-6 min-h-[24px] w-6 cursor-pointer"
                        alt=""
                        src={
                          isArrowUpCurrency ? 'arrow-up.svg' : 'arrow-down.svg'
                        }
                        onClick={toggleArrowCurrency}
                      />
                    </div>
                  }
                >
                  <div className="absolute right-[-90px] top-[20px] z-[3] box-border flex h-[120px] w-[105px] shrink-0 flex-col items-center justify-center gap-[10px] overflow-hidden rounded-3xs bg-lightblue p-5 text-center font-kanit text-base text-blue-2 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)]">
                    {['INR', 'EUR', 'USD'].map((currency) => (
                      <label
                        key={currency}
                        className="flex items-center hover:cursor-pointer hover:underline"
                      >
                        <input
                          type="radio"
                          name="currency"
                          className="ml-0 mr-2"
                          value={currency}
                          checked={selectedCurrency === currency}
                          onChange={handleCurrencyChange}
                        />
                        {currency}
                      </label>
                    ))}
                  </div>
                </Popup>
              </>
            ) : (
              // If user is not logged in, display login link
              <div className="relative">
                <div className="hover:bg-blue-100 top-[20px] z-[3] box-border flex h-[50px] w-[120px] shrink-0 flex-col items-center justify-center overflow-hidden rounded-3xs p-3 font-kanit text-base text-blue-2 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#001d3d]">
                  <Link
                    className="text-inherit text-white no-underline hover:text-cyan-500 hover:underline"
                    href="/login"
                  >
                    Login
                  </Link>
                </div>
              </div>
            )}

            {/* <LanguageCurrencyPopup toggleArrowCurrency={toggleArrowCurrency} /> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default TopHeader;
