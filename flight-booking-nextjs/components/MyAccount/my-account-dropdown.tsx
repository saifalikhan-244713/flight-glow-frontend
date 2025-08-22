import React from 'react';
// import { signOut } from 'next-auth/react';
import Link from 'next/link';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

function signOut() {
  console.log('Signing out...');
  console.log('1', localStorage.getItem('username'));
  localStorage.removeItem('username');
  localStorage.removeItem('token');
  console.log('2', localStorage.getItem('username'));
  window.dispatchEvent(new Event('user-logout')); // Trigger event
}

const MyAccountDropdown: React.FC = () => {
  return (
    <>
      <div className="absolute right-[-90px] top-[20px] z-[3] box-border flex h-[200px] w-[185px] shrink-0 flex-col items-start justify-start gap-[22px] overflow-hidden rounded-3xs bg-lightblue p-5 text-base text-blue-2 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.15)]">
        <div className="flex flex-1 flex-row items-start justify-start gap-[14px]">
          <PermIdentityOutlinedIcon className="h-5 w-5" />
          <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[0px]">
            <div className="font relative inline-block h-2.5 min-w-[84px] font-kanit hover:cursor-pointer hover:underline">
              <Link
                className="text-inherit no-underline"
                href="my-account-profile"
              >
                {' '}
                My Account{' '}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-row items-start justify-start gap-[14px]">
          <ShoppingBagOutlinedIcon className="relative h-3.5 w-3.5" />
          <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[0px]">
            <div className="relative inline-block h-2.5 min-w-[60px] font-kanit hover:cursor-pointer hover:underline">
              <Link className="text-inherit no-underline" href="my-trips">
                {' '}
                My Trips
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-row items-start justify-start gap-[14px] font-kanit">
          <WalletOutlinedIcon className="h-3.5 w-3.5" />
          <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[0px]">
            <div className="relative inline-block h-2.5 min-w-[70px] hover:cursor-pointer hover:underline">
              My Wallet
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-row items-start justify-start gap-[14px] font-kanit">
          <LogoutOutlinedIcon className="h-4 w-4" />
          <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[1px]">
            <div
              className="relative inline-block h-2.5 min-w-[70px] hover:cursor-pointer hover:underline"
              onClick={() => signOut()}
            >
              Logout
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccountDropdown;
